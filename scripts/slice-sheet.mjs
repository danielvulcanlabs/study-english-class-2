#!/usr/bin/env node
/**
 * Re-slice images/gen/sheet.png → item/skin/decor/badge/boost PNGs
 * with full cell (no inset) + transparent padding so stickers aren't clipped.
 *
 * Run: node scripts/slice-sheet.mjs
 */
import sharp from "sharp";
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const ROOT = path.join(__dirname, "..");
const GEN = path.join(ROOT, "images/gen");
const SRC = path.join(GEN, "sheet.png");
const OUT_DIM = 256;
const PAD_FRAC = 0.14; // transparent margin so sticker tips aren't flush to the frame

const SHEET_CELLS = [
  ["item-apple", "item-acorn", "item-mushroom", "item-strawberry", "item-puzzle", "item-gem"],
  ["skin-classic", "skin-wizard", "skin-astronaut", "skin-royal", "item-ribbon", "item-blossom"],
  ["skin-ninja", "skin-rainbow", "decor-rainbow", "decor-castle", "decor-balloons", "decor-pine"],
  ["badge-medal", "badge-gem", "badge-heart", "boost-hint", "boost-skip", "boost-x2"],
];

function median(vals) {
  const s = [...vals].sort((a, b) => a - b);
  return s[Math.floor(s.length / 2)] ?? 0;
}

function sampleBg(data, w, h) {
  const pts = [
    [3, 3], [w - 4, 3], [3, h - 4], [w - 4, h - 4],
    [Math.floor(w / 2), 3], [3, Math.floor(h / 2)],
  ];
  const rs = [], gs = [], bs = [];
  for (const [x, y] of pts) {
    const i = (y * w + x) * 4;
    rs.push(data[i]); gs.push(data[i + 1]); bs.push(data[i + 2]);
  }
  return [median(rs), median(gs), median(bs)];
}

function distBg(r, g, b, bg) {
  return Math.abs(r - bg[0]) + Math.abs(g - bg[1]) + Math.abs(b - bg[2]);
}

function isWhiteStroke(r, g, b, bg) {
  const min = Math.min(r, g, b);
  const max = Math.max(r, g, b);
  const sat = max ? (max - min) / max : 0;
  return min >= 225 && sat <= 0.14 && distBg(r, g, b, bg) >= 40;
}

function floodClear(data, w, h, bg, tol = 55) {
  const seen = new Uint8Array(w * h);
  const q = [];
  const push = (x, y) => {
    if (x < 0 || y < 0 || x >= w || y >= h) return;
    const p = y * w + x;
    if (seen[p]) return;
    const i = p * 4;
    const r = data[i], g = data[i + 1], b = data[i + 2];
    if (isWhiteStroke(r, g, b, bg)) return;
    const max = Math.max(r, g, b), min = Math.min(r, g, b);
    const sat = max ? (max - min) / max : 0;
    if (sat >= 0.2 && distBg(r, g, b, bg) >= 40) return;
    if (distBg(r, g, b, bg) > tol) return;
    seen[p] = 1;
    data[i + 3] = 0;
    q.push(x, y);
  };
  for (let x = 0; x < w; x++) { push(x, 0); push(x, h - 1); }
  for (let y = 0; y < h; y++) { push(0, y); push(w - 1, y); }
  for (let qi = 0; qi < q.length; qi += 2) {
    const x = q[qi], y = q[qi + 1];
    push(x + 1, y); push(x - 1, y); push(x, y + 1); push(x, y - 1);
  }
}

function bounds(data, w, h, thresh = 12) {
  let minX = w, minY = h, maxX = 0, maxY = 0;
  for (let y = 0; y < h; y++) {
    for (let x = 0; x < w; x++) {
      if (data[(y * w + x) * 4 + 3] > thresh) {
        if (x < minX) minX = x;
        if (y < minY) minY = y;
        if (x > maxX) maxX = x;
        if (y > maxY) maxY = y;
      }
    }
  }
  if (maxX < minX) return null;
  return { minX, minY, maxX, maxY };
}

async function processCell(buf) {
  const { data, info } = await sharp(buf).ensureAlpha().raw().toBuffer({ resolveWithObject: true });
  const bg = sampleBg(data, info.width, info.height);
  floodClear(data, info.width, info.height, bg, 58);

  const b = bounds(data, info.width, info.height);
  let pipeline = sharp(data, { raw: { width: info.width, height: info.height, channels: 4 } });
  if (b) {
    // Keep a little of the original cell around the sticker (don't clip white stroke)
    const pad = 2;
    const L = Math.max(0, b.minX - pad);
    const T = Math.max(0, b.minY - pad);
    const W = Math.min(info.width - L, b.maxX - b.minX + 1 + pad * 2);
    const H = Math.min(info.height - T, b.maxY - b.minY + 1 + pad * 2);
    pipeline = pipeline.extract({ left: L, top: T, width: W, height: H });
  }

  const trimmed = await pipeline.png({ palette: false }).toBuffer();
  const meta = await sharp(trimmed).metadata();

  // Fit sticker into square with transparent margin so tips aren't flush to edges
  const inner = Math.round(OUT_DIM * (1 - PAD_FRAC * 2));
  const sticker = await sharp(trimmed)
    .resize(inner, inner, { fit: "inside", kernel: sharp.kernel.lanczos3 })
    .png({ palette: false })
    .toBuffer();
  const sm = await sharp(sticker).metadata();
  const left = Math.floor((OUT_DIM - sm.width) / 2);
  const top = Math.floor((OUT_DIM - sm.height) / 2);

  return sharp({
    create: { width: OUT_DIM, height: OUT_DIM, channels: 4, background: { r: 0, g: 0, b: 0, alpha: 0 } },
  })
    .composite([{ input: sticker, left, top }])
    .png({ compressionLevel: 6, effort: 8, palette: false })
    .toBuffer();
}

if (!fs.existsSync(SRC)) {
  console.error("Missing", SRC);
  process.exit(1);
}

const meta = await sharp(SRC).metadata();
const cols = SHEET_CELLS[0].length;
const rows = SHEET_CELLS.length;
const cellW = meta.width / cols;
const cellH = meta.height / rows;
console.log(`▸ Slice ${path.basename(SRC)} ${meta.width}×${meta.height} cell≈${Math.round(cellW)}×${Math.round(cellH)} (PAD=0)`);

for (let row = 0; row < rows; row++) {
  for (let col = 0; col < cols; col++) {
    const name = SHEET_CELLS[row][col];
    // Full cell — no inset (inset was cutting tall hats / mushroom tops)
    const left = Math.round(col * cellW);
    const top = Math.round(row * cellH);
    const width = Math.round((col + 1) * cellW) - left;
    const height = Math.round((row + 1) * cellH) - top;
    const cropped = await sharp(SRC).extract({ left, top, width, height }).png().toBuffer();
    const out = await processCell(cropped);
    await sharp(out).toFile(path.join(GEN, `${name}.png`));
    console.log("  ✓", name);
  }
}

console.log("\nDone.");
