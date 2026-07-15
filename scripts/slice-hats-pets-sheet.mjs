#!/usr/bin/env node
/**
 * Simple 6×4 grid crop of hats-pets-sheet.png → hats-pets/*.png
 * No overflow, no chroma-key — each cell is one sticker on its blue pad.
 *
 * Run: node scripts/slice-hats-pets-sheet.mjs && npm run build:hats-pets
 */
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";
import sharp from "sharp";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const ROOT = path.join(__dirname, "..");
const GEN = path.join(ROOT, "images/gen");
const SRC = path.join(GEN, "hats-pets-sheet.png");
const OUT = path.join(GEN, "hats-pets");

const COLS = 6;
const ROWS = 4;
/** Tiny gutter only — avoid neighbor edges without eating stickers. */
const INSET = 0.02;

const NAMES = [
  "01_wizard_hat", "02_rainbow_bow", "03_blue_flower_crown", "04_rainbow_sunglasses",
  "05_fedora_hat", "06_astronaut_helmet_star", "07_straw_hat_ribbon", "08_planet_beanie",
  "09_royal_crown", "10_bear_ears_headband", "11_rainbow_flower_crown", "12_astronaut_helmet_asteroid",
  "13_rainbow_butterfly", "14_orange_cat", "15_puppy_dog", "16_galaxy_cat",
  "17_purple_dragon", "18_rainbow_bee", "19_rainbow_bumblebee", "20_rainbow_bunny",
  "21_galaxy_panda", "22_rainbow_fox", "23_rainbow_unicorn", "24_galaxy_jellyfish",
];

if (!fs.existsSync(SRC)) {
  console.error("Missing", SRC);
  process.exit(1);
}

fs.mkdirSync(OUT, { recursive: true });
const meta = await sharp(SRC).metadata();
const cellW = meta.width / COLS;
const cellH = meta.height / ROWS;
console.log(`=== slice hats-pets-sheet (${meta.width}×${meta.height}) → ${COLS}×${ROWS}, inset ${INSET} ===`);

for (let i = 0; i < NAMES.length; i++) {
  const col = i % COLS;
  const row = Math.floor(i / COLS);
  const left = Math.round(col * cellW + cellW * INSET);
  const top = Math.round(row * cellH + cellH * INSET);
  const width = Math.round(cellW * (1 - INSET * 2));
  const height = Math.round(cellH * (1 - INSET * 2));

  await sharp(SRC)
    .extract({ left, top, width, height })
    .png()
    .toFile(path.join(OUT, `${NAMES[i]}.png`));
  console.log("  ✓", NAMES[i]);
}

console.log("\nDone. Next: npm run build:hats-pets");
