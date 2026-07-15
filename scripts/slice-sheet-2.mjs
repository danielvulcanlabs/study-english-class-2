#!/usr/bin/env node
/** Slice sheet-2.jpeg → transparent hat-*.png + pet-*.png */
import sharp from "sharp";
import path from "path";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const ROOT = path.join(__dirname, "..");
const SRC = path.join(ROOT, "images/gen/sheet-2.jpeg");
const OUT = path.join(ROOT, "images/gen");

const HATS = ["party", "flower", "sunglasses", "cowboy", "propeller", "tophat"];
const PETS = ["butterfly", "bird", "cat", "puppy", "bee", "dragon"];

const meta = await sharp(SRC).metadata();
const W = meta.width, H = meta.height;
const COLS = 6, ROWS = 2;
const cellW = W / COLS, cellH = H / ROWS;

const CROP = {
  // Hats: skip title + bottom label
  0: { padX: 0.10, padTop: 0.24, padBot: 0.20 },
  // Pets: skip title (top) + name (bottom), keep full sticker
  1: { padX: 0.13, padTop: 0.20, padBot: 0.26 },
};

function isBgPixel(r, g, b) {
  if (r > 246 && g > 246 && b > 246) return false;
  const max = Math.max(r, g, b), min = Math.min(r, g, b);
  const sat = max ? (max - min) / max : 0;
  const lum = (r + g + b) / 3;
  if (lum < 78 && sat < 0.45) return true;
  if (sat < 0.26 && lum >= 105 && lum <= 248) return true;
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
  for (let i = 0; i < data.length; i += 4) {
    const lum = (data[i] + data[i + 1] + data[i + 2]) / 3;
    if (lum < 70 && data[i + 3] > 0) data[i + 3] = 0;
  }
  const topBand = Math.floor(h * 0.10);
  const botBand = Math.floor(h * 0.78);
  for (let y = 0; y < h; y++) {
    const inTop = y < topBand;
    const inBot = y >= botBand;
    if (!inTop && !inBot) continue;
    for (let x = 0; x < w; x++) {
      const i = (y * w + x) * 4;
      if (data[i + 3] < 20) continue;
      const lum = (data[i] + data[i + 1] + data[i + 2]) / 3;
      if (inTop && lum < 150) data[i + 3] = 0;
      if (inBot && lum < 175) data[i + 3] = 0;
    }
  }
}

function opaqueBounds(data, w, h, thresh = 24) {
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

async function processCrop(buf) {
  const { data, info } = await sharp(buf).ensureAlpha().raw().toBuffer({ resolveWithObject: true });
  floodClearBg(data, info.width, info.height);
  const b = opaqueBounds(data, info.width, info.height);
  let pipeline = sharp(data, { raw: { width: info.width, height: info.height, channels: 4 } });
  if (b) {
    const pad = 3;
    const left = Math.max(0, b.minX - pad);
    const top = Math.max(0, b.minY - pad);
    const width = Math.min(info.width - left, b.maxX - b.minX + 1 + pad * 2);
    const height = Math.min(info.height - top, b.maxY - b.minY + 1 + pad * 2);
    pipeline = pipeline.extract({ left, top, width, height });
  }
  return pipeline.png().toBuffer();
}

async function cropCell(col, row, name, prefix) {
  const c = CROP[row];
  const left = Math.round(col * cellW + cellW * c.padX);
  const top = Math.round(row * cellH + cellH * c.padTop);
  const width = Math.round(cellW * (1 - c.padX * 2));
  const height = Math.round(cellH * (1 - c.padTop - c.padBot));
  const dest = path.join(OUT, `${prefix}-${name}.png`);
  const cropped = await sharp(SRC).extract({ left, top, width, height }).png().toBuffer();
  const transparent = await processCrop(cropped);
  await sharp(transparent)
    .resize(256, 256, { fit: "contain", background: { r: 0, g: 0, b: 0, alpha: 0 } })
    .png()
    .toFile(dest);
  console.log("✓", path.basename(dest));
}

for (let c = 0; c < HATS.length; c++) await cropCell(c, 0, HATS[c], "hat");
for (let c = 0; c < PETS.length; c++) await cropCell(c, 1, PETS[c], "pet");
console.log("Done — 12 transparent icons from sheet-2.jpeg");
