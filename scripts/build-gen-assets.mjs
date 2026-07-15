#!/usr/bin/env node
/**
 * Build all images/gen assets from source sheets + hats-pets folder.
 *
 * 1. Slice pets-hats.png (4×6) → images/gen/hats-pets/*.png
 * 2. Process hats-pets/*.png → hat-*.png + pet-*.png (transparent, 512px)
 * 3. Slice sheet.png (4×6) → item-*, skin-*, decor-*, badge-*, boost-*
 *
 * Run: node scripts/build-gen-assets.mjs
 */
import sharp from "sharp";
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const ROOT = path.join(__dirname, "..");
const GEN = path.join(ROOT, "images/gen");
const HATS_PETS_DIR = path.join(GEN, "hats-pets");

const MAX_DIM = 512;
const PAD = 0.06;

// pets-hats.png — 3 rows × 4 cols (12 shop icons)
const PETS_HATS_3x4 = [
  "pet-butterfly", "pet-bird", "pet-cat", "pet-puppy",
  "pet-dragon", "pet-bee", "hat-party", "hat-cowboy",
  "hat-flower", "hat-propeller", "hat-sunglasses", "hat-tophat",
];

// Optional: larger 4×6 sheet → hats-pets/ (24 numbered icons)
const HATS_PETS_NAMES = [
  "01_wizard_hat", "02_rainbow_bow", "03_blue_flower_crown", "04_rainbow_sunglasses",
  "05_fedora_hat", "06_astronaut_helmet_star", "07_straw_hat_ribbon", "08_planet_beanie",
  "09_royal_crown", "10_bear_ears_headband", "11_rainbow_flower_crown", "12_astronaut_helmet_asteroid",
  "13_rainbow_butterfly", "14_orange_cat", "15_puppy_dog", "16_galaxy_cat",
  "17_purple_dragon", "18_rainbow_bee", "19_rainbow_bumblebee", "20_rainbow_bunny",
  "21_galaxy_panda", "22_rainbow_fox", "23_rainbow_unicorn", "24_galaxy_jellyfish",
];

// hats-pets file → game filename (when using custom 4×6 folder)
const HAT_GAME = {
  "02_rainbow_bow": "hat-party",
  "11_rainbow_flower_crown": "hat-flower",
  "04_rainbow_sunglasses": "hat-sunglasses",
  "05_fedora_hat": "hat-cowboy",
  "08_planet_beanie": "hat-propeller",
  "09_royal_crown": "hat-tophat",
};
const PET_GAME = {
  "13_rainbow_butterfly": "pet-butterfly",
  "20_rainbow_bunny": "pet-bird", // shop id stays bird (Chirpy → Cotton)
  "14_orange_cat": "pet-cat",
  "15_puppy_dog": "pet-puppy",
  "18_rainbow_bee": "pet-bee",
  "17_purple_dragon": "pet-dragon",
};

// sheet.png — 4 rows × 6 cols
const SHEET_CELLS = [
  ["item-apple", "item-acorn", "item-mushroom", "item-strawberry", "item-puzzle", "item-gem"],
  ["skin-classic", "skin-wizard", "skin-astronaut", "skin-royal", "item-ribbon", "item-blossom"],
  ["skin-ninja", "skin-rainbow", "decor-rainbow", "decor-castle", "decor-balloons", "decor-pine"],
  ["badge-medal", "badge-gem", "badge-heart", "boost-hint", "boost-skip", "boost-x2"],
];

function isBgPixel(r, g, b, mode = "auto") {
  if (r > 246 && g > 246 && b > 246) return false;
  const max = Math.max(r, g, b), min = Math.min(r, g, b);
  const sat = max ? (max - min) / max : 0;
  const lum = (r + g + b) / 3;
  if (mode === "black" || mode === "auto") {
    if (lum < 52 && sat < 0.55) return true;
  }
  if (mode === "sheet" || mode === "auto") {
    if (sat < 0.24 && lum >= 90 && lum <= 252) return true;
  }
  if (lum < 48 && sat < 0.5) return true;
  return false;
}

function floodClearBg(data, w, h, mode = "auto") {
  const seen = new Uint8Array(w * h);
  const q = [];
  const push = (x, y) => {
    if (x < 0 || y < 0 || x >= w || y >= h) return;
    const p = y * w + x;
    if (seen[p]) return;
    const i = p * 4;
    if (!isBgPixel(data[i], data[i + 1], data[i + 2], mode)) return;
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
  for (let i = 0; i < data.length; i += 4) {
    const lum = (data[i] + data[i + 1] + data[i + 2]) / 3;
    if (lum < 42 && data[i + 3] > 0) data[i + 3] = 0;
  }
}

function defringe(data) {
  for (let i = 0; i < data.length; i += 4) {
    const a = data[i + 3];
    if (a === 0 || a === 255) continue;
    const lum = (data[i] + data[i + 1] + data[i + 2]) / 3;
    if (a < 35 || (lum > 170 && a < 190)) { data[i + 3] = 0; continue; }
    if (a > 190) {
      const f = 255 / a;
      data[i] = Math.min(255, Math.round(data[i] * f));
      data[i + 1] = Math.min(255, Math.round(data[i + 1] * f));
      data[i + 2] = Math.min(255, Math.round(data[i + 2] * f));
      data[i + 3] = 255;
    }
  }
}

function opaqueBounds(data, w, h, thresh = 18) {
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

async function processTransparent(buf, bgMode = "auto") {
  const { data, info } = await sharp(buf).ensureAlpha().raw().toBuffer({ resolveWithObject: true });
  floodClearBg(data, info.width, info.height, bgMode);
  defringe(data);
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

async function saveMax(buf, dest) {
  const trimmed = sharp(buf);
  const meta = await trimmed.metadata();
  const scale = MAX_DIM / Math.max(meta.width, meta.height);
  const outW = Math.max(1, Math.round(meta.width * scale));
  const outH = Math.max(1, Math.round(meta.height * scale));
  await trimmed
    .resize(outW, outH, { kernel: sharp.kernel.lanczos3 })
    .sharpen({ sigma: 0.5, m1: 0.5, m2: 0.2, x1: 2, y2: 10, y3: 20 })
    .png({ compressionLevel: 6, effort: 10 })
    .toFile(dest);
  const m = await sharp(dest).metadata();
  console.log("  ✓", path.basename(dest), `→ ${m.width}×${m.height}`);
}

async function sliceGrid(srcPath, cols, rows, names, outDir, bgMode = "sheet") {
  if (!fs.existsSync(srcPath)) {
    console.warn("⚠ skip slice — missing", path.basename(srcPath));
    return;
  }
  const meta = await sharp(srcPath).metadata();
  const cellW = meta.width / cols, cellH = meta.height / rows;
  fs.mkdirSync(outDir, { recursive: true });
  console.log(`\n▸ Slice ${path.basename(srcPath)} (${meta.width}×${meta.height}) → ${outDir}`);
  for (let i = 0; i < names.length; i++) {
    const col = i % cols, row = Math.floor(i / cols);
    const left = Math.round(col * cellW + cellW * PAD);
    const top = Math.round(row * cellH + cellH * PAD);
    const width = Math.round(cellW * (1 - PAD * 2));
    const height = Math.round(cellH * (1 - PAD * 2));
    const cropped = await sharp(srcPath).extract({ left, top, width, height }).png().toBuffer();
    const transparent = await processTransparent(cropped, bgMode);
    const dest = path.join(outDir, `${names[i]}.png`);
    await saveMax(transparent, dest);
  }
}

async function buildFromHatsPetsFolder() {
  console.log("\n▸ Build shop pets/hats from hats-pets/ (optional 4×6 folder)");
  if (!fs.existsSync(HATS_PETS_DIR)) return;
  const files = fs.readdirSync(HATS_PETS_DIR).filter(f => /^\d{2}_/.test(f));
  if (!files.length) {
    console.log("  · no numbered files — skip");
    return;
  }
  const all = Object.entries({ ...HAT_GAME, ...PET_GAME });
  for (const [srcName, outName] of all) {
    const src = path.join(HATS_PETS_DIR, `${srcName}.png`);
    if (!fs.existsSync(src)) {
      console.warn("  ⚠ missing", srcName + ".png");
      continue;
    }
    const raw = await fs.promises.readFile(src);
    const transparent = await processTransparent(raw, "black");
    await saveMax(transparent, path.join(GEN, `${outName}.png`));
  }
}

async function buildFromPetsHatsSheet() {
  const src = path.join(GEN, "pets-hats.png");
  if (!fs.existsSync(src)) {
    console.warn("⚠ pets-hats.png missing");
    return;
  }
  console.log("\n▸ Build 12 shop icons from pets-hats.png (3×4)");
  const meta = await sharp(src).metadata();
  const cols = 4, rows = 3;
  const cellW = meta.width / cols, cellH = meta.height / rows;
  for (let i = 0; i < PETS_HATS_3x4.length; i++) {
    const col = i % cols, row = Math.floor(i / cols);
    const name = PETS_HATS_3x4[i];
    const left = Math.round(col * cellW + cellW * PAD);
    const top = Math.round(row * cellH + cellH * PAD);
    const width = Math.round(cellW * (1 - PAD * 2));
    const height = Math.round(cellH * (1 - PAD * 2));
    const cropped = await sharp(src).extract({ left, top, width, height }).png().toBuffer();
    const transparent = await processTransparent(cropped, "sheet");
    await saveMax(transparent, path.join(GEN, `${name}.png`));
    // also save copy into hats-pets for reference
    await saveMax(transparent, path.join(HATS_PETS_DIR, `${name}.png`));
  }
}

async function buildFromSheet() {
  console.log("\n▸ sheet.png → run scripts/slice-sheet.mjs");
  const { spawnSync } = await import("child_process");
  const r = spawnSync(process.execPath, [path.join(__dirname, "slice-sheet.mjs")], { stdio: "inherit" });
  if (r.status !== 0) process.exit(r.status || 1);
}

// --- main ---
console.log("=== build-gen-assets ===");
fs.mkdirSync(HATS_PETS_DIR, { recursive: true });

// Prefer the 4×6 sticker sheet (gentle white-border-preserving slice)
const bigSheet = path.join(GEN, "hats-pets-sheet.png");
if (fs.existsSync(bigSheet)) {
  console.log("\n▸ hats-pets-sheet.png → run scripts/slice-hats-pets-sheet.mjs (gentle)");
  const { spawnSync } = await import("child_process");
  const r = spawnSync(process.execPath, [path.join(__dirname, "slice-hats-pets-sheet.mjs")], {
    stdio: "inherit",
  });
  if (r.status !== 0) process.exit(r.status || 1);
} else {
  await buildFromPetsHatsSheet();
}

await buildFromSheet();

console.log("\nDone. Refresh index.html (Cmd+Shift+R) → Shop / Bag.");
