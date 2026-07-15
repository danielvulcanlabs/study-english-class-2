#!/usr/bin/env node
/** Slice images/gen/sheet-3 (PNG, 6×2) → transparent hat-*.png + pet-*.png */
import sharp from "sharp";
import path from "path";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const ROOT = path.join(__dirname, "..");
const SRC = path.join(ROOT, "images/gen/sheet-3");
const OUT = path.join(ROOT, "images/gen");

// Row 0 left→right (sheet order matches shop tier names)
const HATS = ["party", "flower", "sunglasses", "cowboy", "propeller", "tophat"];
// Row 1 left→right
const PETS = ["butterfly", "bird", "cat", "puppy", "bee", "dragon"];

const meta = await sharp(SRC).metadata();
const W = meta.width, H = meta.height;
const COLS = 6, ROWS = 2;
const cellW = W / COLS, cellH = H / ROWS;

// sheet-3: clean stickers, no title/label bands — tight inner crop only
const CROP = { padX: 0.07, padTop: 0.07, padBot: 0.07 };

function isBgPixel(r, g, b) {
  if (r > 244 && g > 244 && b > 244) return false;
  const max = Math.max(r, g, b), min = Math.min(r, g, b);
  const sat = max ? (max - min) / max : 0;
  const lum = (r + g + b) / 3;
  // blue-grey flat sheet background
  if (sat < 0.22 && lum >= 95 && lum <= 252) return true;
  if (lum < 72 && sat < 0.5) return true;
  return false;
}

function floodClearBg(data, w, h) {
  const seen = new Uint8Array(w * h);
  const q = [];
  const push = (x, y) => {
    if (x < 0 || y < 0 || x >= w || y >= h) return;
    const p = y * w + x;
    if (seen[p]) return;
    const i = p * 4;
    if (!isBgPixel(data[i], data[i + 1], data[i + 2])) return;
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
  // stray dark specks only
  for (let i = 0; i < data.length; i += 4) {
    const lum = (data[i] + data[i + 1] + data[i + 2]) / 3;
    if (lum < 55 && data[i + 3] > 0) data[i + 3] = 0;
  }
}

function opaqueBounds(data, w, h, thresh = 20) {
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

function defringe(data, w, h) {
  for (let i = 0; i < data.length; i += 4) {
    const a = data[i + 3];
    if (a === 0 || a === 255) continue;
    const r = data[i], g = data[i + 1], b = data[i + 2];
    const lum = (r + g + b) / 3;
    // semi-transparent background bleed → remove
    if (a < 40 || (lum > 175 && a < 200)) { data[i + 3] = 0; continue; }
    // harden sticker edge
    if (a > 200) {
      const f = 255 / a;
      data[i] = Math.min(255, Math.round(r * f));
      data[i + 1] = Math.min(255, Math.round(g * f));
      data[i + 2] = Math.min(255, Math.round(b * f));
      data[i + 3] = 255;
    }
  }
}

async function processCrop(buf) {
  const { data, info } = await sharp(buf).ensureAlpha().raw().toBuffer({ resolveWithObject: true });
  floodClearBg(data, info.width, info.height);
  defringe(data, info.width, info.height);
  const b = opaqueBounds(data, info.width, info.height);
  let pipeline = sharp(data, { raw: { width: info.width, height: info.height, channels: 4 } });
  if (b) {
    const pad = 4;
    const left = Math.max(0, b.minX - pad);
    const top = Math.max(0, b.minY - pad);
    const width = Math.min(info.width - left, b.maxX - b.minX + 1 + pad * 2);
    const height = Math.min(info.height - top, b.maxY - b.minY + 1 + pad * 2);
    pipeline = pipeline.extract({ left, top, width, height });
  }
  return pipeline.png().toBuffer();
}

async function cropCell(col, row, name, prefix) {
  const left = Math.round(col * cellW + cellW * CROP.padX);
  const top = Math.round(row * cellH + cellH * CROP.padTop);
  const width = Math.round(cellW * (1 - CROP.padX * 2));
  const height = Math.round(cellH * (1 - CROP.padTop - CROP.padBot));
  const dest = path.join(OUT, `${prefix}-${name}.png`);
  const cropped = await sharp(SRC).extract({ left, top, width, height }).png().toBuffer();
  const transparent = await processCrop(cropped);
  const trimmed = sharp(transparent);
  const tmeta = await trimmed.metadata();
  const maxDim = 512;
  const scale = maxDim / Math.max(tmeta.width, tmeta.height);
  const outW = Math.max(1, Math.round(tmeta.width * scale));
  const outH = Math.max(1, Math.round(tmeta.height * scale));
  await trimmed
    .resize(outW, outH, { kernel: sharp.kernel.lanczos3 })
    .sharpen({ sigma: 0.6, m1: 0.5, m2: 0.25, x1: 2, y2: 10, y3: 20 })
    .png({ compressionLevel: 6, effort: 10 })
    .toFile(dest);
  const check = await sharp(dest).stats();
  const alpha = check.channels[3];
  const transpPct = ((alpha.max - alpha.mean) / (alpha.max || 1) * 100).toFixed(0);
  console.log("✓", path.basename(dest), `(~${transpPct}% transparent area)`);
}

console.log(`Slicing ${path.basename(SRC)} (${W}×${H})…`);
for (let c = 0; c < HATS.length; c++) await cropCell(c, 0, HATS[c], "hat");
for (let c = 0; c < PETS.length; c++) await cropCell(c, 1, PETS[c], "pet");
console.log("Done — 12 transparent icons from sheet-3");
