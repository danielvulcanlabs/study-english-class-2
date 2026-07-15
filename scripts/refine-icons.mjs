#!/usr/bin/env node
/** Build sheet.png items/skins (transparent, uniform sizing). Pets/hats → build:hats-pets. */
import sharp from "sharp";
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";
import { CANVAS, processBuffer, saveShopIcon } from "./lib/icon-process.mjs";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const ROOT = path.join(__dirname, "..");
const GEN = path.join(ROOT, "images/gen");

const PAD = 0.09;
const PAD_OVERRIDE = { "skin-rainbow": 0 };

const SHEET_CELLS = [
  ["item-apple", "item-acorn", "item-mushroom", "item-strawberry", "item-puzzle", "item-gem"],
  ["skin-classic", "skin-wizard", "skin-astronaut", "skin-royal", "item-ribbon", "item-blossom"],
  ["skin-ninja", "skin-rainbow", "decor-rainbow", "decor-castle", "decor-balloons", "decor-pine"],
  ["badge-medal", "badge-gem", "badge-heart", "boost-hint", "boost-skip", "boost-x2"],
];

const STANDALONE = ["item-honey"];

async function sliceGrid(srcPath, cols, rows, names, bgTol = 55) {
  const meta = await sharp(srcPath).metadata();
  const cellW = meta.width / cols, cellH = meta.height / rows;
  console.log(`\n▸ ${path.basename(srcPath)} (${meta.width}×${meta.height}, ${cols}×${rows})`);
  for (let i = 0; i < names.length; i++) {
    const col = i % cols, row = Math.floor(i / cols);
    const pad = PAD_OVERRIDE[names[i]] ?? PAD;
    const left = Math.round(col * cellW + cellW * pad);
    const top = Math.round(row * cellH + cellH * pad);
    const width = Math.round(cellW * (1 - pad * 2));
    const height = Math.round(cellH * (1 - pad * 2));
    const cropped = await sharp(srcPath).extract({ left, top, width, height }).png().toBuffer();
    const refined = await processBuffer(cropped, bgTol);
    await saveShopIcon(refined, path.join(GEN, `${names[i]}.png`), names[i]);
    console.log("  ✓", names[i] + ".png", `→ ${CANVAS}×${CANVAS}`);
  }
}

async function refineStandalone(name) {
  const src = path.join(GEN, `${name}.png`);
  if (!fs.existsSync(src)) return;
  console.log(`\n▸ refine ${name}.png`);
  const raw = await fs.promises.readFile(src);
  const refined = await processBuffer(raw, 50);
  await saveShopIcon(refined, src, name);
  console.log("  ✓", name + ".png", `→ ${CANVAS}×${CANVAS}`);
}

console.log("=== refine-icons (sheet items/skins — pets/hats use build:hats-pets) ===");
const sheet = path.join(GEN, "sheet.png");
if (fs.existsSync(sheet)) {
  await sliceGrid(sheet, SHEET_CELLS[0].length, SHEET_CELLS.length, SHEET_CELLS.flat(), 55);
} else console.warn("⚠ missing sheet.png");

for (const name of STANDALONE) await refineStandalone(name);

console.log("\nDone — Cmd+Shift+R → Shop");
