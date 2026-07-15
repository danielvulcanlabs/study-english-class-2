#!/usr/bin/env node
/**
 * Fit hats-pets/*.png → shop icons with TRANSPARENT background.
 *
 *   node scripts/slice-hats-pets-sheet.mjs && npm run build:hats-pets
 */
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";
import { CANVAS, clearSheetBgOnly, saveShopIcon } from "./lib/icon-process.mjs";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const ROOT = path.join(__dirname, "..");
const GEN = path.join(ROOT, "images/gen");
const SRC_DIR = path.join(GEN, "hats-pets");
const SHEET = path.join(GEN, "hats-pets-sheet.png");

const SHOP_MAP = {
  "02_rainbow_bow": "hat-party",
  "11_rainbow_flower_crown": "hat-flower",
  "04_rainbow_sunglasses": "hat-sunglasses",
  "05_fedora_hat": "hat-cowboy",
  "08_planet_beanie": "hat-propeller",
  "09_royal_crown": "hat-tophat",
  "13_rainbow_butterfly": "pet-butterfly",
  "20_rainbow_bunny": "pet-bird",
  "14_orange_cat": "pet-cat",
  "15_puppy_dog": "pet-puppy",
  "18_rainbow_bee": "pet-bee",
  "17_purple_dragon": "pet-dragon",
};

console.log("=== build-hats-pets (transparent bg) ===");

if (fs.existsSync(SHEET)) {
  console.log("▸ Refreshing hats-pets/ from sheet…");
  const { spawnSync } = await import("child_process");
  const r = spawnSync(process.execPath, [path.join(__dirname, "slice-hats-pets-sheet.mjs")], {
    stdio: "inherit",
  });
  if (r.status !== 0) process.exit(r.status || 1);
}

if (!fs.existsSync(SRC_DIR)) {
  console.error("Missing", SRC_DIR);
  process.exit(1);
}

let ok = 0;
for (const [srcName, outName] of Object.entries(SHOP_MAP)) {
  const src = path.join(SRC_DIR, `${srcName}.png`);
  if (!fs.existsSync(src)) {
    console.warn("  ⚠ missing", srcName + ".png");
    continue;
  }
  const raw = await fs.promises.readFile(src);
  const transparent = await clearSheetBgOnly(raw, 52);
  await saveShopIcon(transparent, path.join(GEN, `${outName}.png`), outName);
  console.log("  ✓", srcName, "→", outName + ".png", `(${CANVAS}×${CANVAS} transparent)`);
  ok++;
}

console.log(`\nDone — ${ok}/${Object.keys(SHOP_MAP).length}. Hard-refresh (Cmd+Shift+R).`);
