/** Shared transparent icon processing + uniform shop canvas sizing. */
import sharp from "sharp";

export const CANVAS = 256;

export const FILL = {
  pet: 0.78, hat: 0.78, skin: 0.88, item: 0.84, decor: 0.84, badge: 0.84, boost: 0.84,
};

function median(vals) {
  const s = [...vals].sort((a, b) => a - b);
  return s[Math.floor(s.length / 2)] ?? 0;
}

function sampleBg(data, w, h) {
  const pts = [
    [4, 4], [w - 5, 4], [4, h - 5], [w - 5, h - 5],
    [Math.floor(w / 2), 4], [4, Math.floor(h / 2)],
    [w - 5, Math.floor(h / 2)], [Math.floor(w / 2), h - 5],
    [12, 12], [w - 13, 12], [12, h - 13], [w - 13, h - 13],
  ];
  const rs = [], gs = [], bs = [];
  for (const [x, y] of pts) {
    const i = (y * w + x) * 4;
    if (data[i + 3] < 20) continue; // skip already-transparent corners
    rs.push(data[i]); gs.push(data[i + 1]); bs.push(data[i + 2]);
  }
  if (!rs.length) return null; // fully keyed already
  return [median(rs), median(gs), median(bs)];
}

function nearBg(r, g, b, bg, tol = 42) {
  // Never eat die-cut white stroke (opens tunnels into the sticker).
  if (Math.min(r, g, b) >= 220) return false;
  const dist = Math.abs(r - bg[0]) + Math.abs(g - bg[1]) + Math.abs(b - bg[2]);
  // Tight match to sampled sheet blue only — pastel rings stay (they're farther).
  return dist <= tol;
}

/** Only flood from edges — never punch holes inside dark fur / outlines. */
function floodClearBg(data, w, h, bg, tol = 42) {
  const seen = new Uint8Array(w * h);
  const q = [];
  const push = (x, y) => {
    if (x < 0 || y < 0 || x >= w || y >= h) return;
    const p = y * w + x;
    if (seen[p]) return;
    const i = p * 4;
    if (!nearBg(data[i], data[i + 1], data[i + 2], bg, tol)) return;
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

/** Sheet leftovers only — light gray / near-bg. Never treat dark subject pixels as fringe. */
function isSheetFringe(r, g, b, bg) {
  const lum = (r + g + b) / 3;
  const max = Math.max(r, g, b), min = Math.min(r, g, b);
  const sat = max ? (max - min) / max : 0;
  if (lum < 90) return false;                 // keep black/dark fur & outlines
  if (nearBg(r, g, b, bg, 28)) return true;   // residual blue sheet
  return sat < 0.14 && lum > 140 && lum < 230; // bland gray halo
}

function stripSheetFringe(data, w, h, bg, passes = 4) {
  const alpha = new Uint8Array(w * h);
  for (let p = 0; p < w * h; p++) alpha[p] = data[p * 4 + 3];

  for (let pass = 0; pass < passes; pass++) {
    let changed = 0;
    for (let y = 0; y < h; y++) {
      for (let x = 0; x < w; x++) {
        const p = y * w + x;
        if (!alpha[p]) continue;
        let touches = x === 0 || y === 0 || x === w - 1 || y === h - 1;
        if (!touches) {
          for (const [nx, ny] of [[x - 1, y], [x + 1, y], [x, y - 1], [x, y + 1]]) {
            if (!alpha[ny * w + nx]) { touches = true; break; }
          }
        }
        if (!touches) continue;
        const i = p * 4;
        if (isSheetFringe(data[i], data[i + 1], data[i + 2], bg)) {
          data[i + 3] = 0;
          alpha[p] = 0;
          changed++;
        }
      }
    }
    if (!changed) break;
  }
}

/** Drop neighbor bleed: keep the subject(s) centered in the cell. */
function keepMainSubject(data, w, h, minFrac = 0.1) {
  const alpha = new Uint8Array(w * h);
  for (let p = 0; p < w * h; p++) alpha[p] = data[p * 4 + 3] > 20 ? 1 : 0;
  const seen = new Uint8Array(w * h);
  const comps = [];

  for (let y = 0; y < h; y++) {
    for (let x = 0; x < w; x++) {
      const start = y * w + x;
      if (!alpha[start] || seen[start]) continue;
      const q = [x, y];
      const pixels = [];
      let minX = x, maxX = x, minY = y, maxY = y;
      seen[start] = 1;
      for (let qi = 0; qi < q.length; qi += 2) {
        const cx = q[qi], cy = q[qi + 1];
        pixels.push(cx, cy);
        if (cx < minX) minX = cx;
        if (cx > maxX) maxX = cx;
        if (cy < minY) minY = cy;
        if (cy > maxY) maxY = cy;
        for (const [nx, ny] of [[cx + 1, cy], [cx - 1, cy], [cx, cy + 1], [cx, cy - 1]]) {
          if (nx < 0 || ny < 0 || nx >= w || ny >= h) continue;
          const p = ny * w + nx;
          if (!alpha[p] || seen[p]) continue;
          seen[p] = 1;
          q.push(nx, ny);
        }
      }
      const cx = (minX + maxX) / 2;
      const cy = (minY + maxY) / 2;
      const dist = Math.hypot(cx - w / 2, cy - h / 2);
      comps.push({ pixels, size: pixels.length / 2, minX, maxX, minY, maxY, cx, cy, dist });
    }
  }
  if (!comps.length) return;

  // Prefer large + centered (avoids grabbing neighbor when overflow overlaps).
  comps.sort((a, b) => (b.size * 0.65 - b.dist) - (a.size * 0.65 - a.dist));
  const main = comps[0];
  const thresh = Math.max(40, main.size * minFrac);
  const span = Math.max(main.maxX - main.minX, main.maxY - main.minY, 1);

  const keep = new Set([0]);
  for (let i = 1; i < comps.length; i++) {
    const c = comps[i];
    if (c.size < thresh) continue;
    const distToMain = Math.hypot(c.cx - main.cx, c.cy - main.cy);
    if (distToMain < span * 0.55) keep.add(i);
  }

  for (let i = 0; i < comps.length; i++) {
    if (keep.has(i)) continue;
    const pix = comps[i].pixels;
    for (let j = 0; j < pix.length; j += 2) {
      const p = (pix[j + 1] * w + pix[j]) * 4;
      data[p + 3] = 0;
    }
  }
}

function defringe(data) {
  for (let i = 0; i < data.length; i += 4) {
    const a = data[i + 3];
    if (a === 0 || a === 255) continue;
    if (a < 40) { data[i + 3] = 0; continue; }
    const f = 255 / a;
    data[i] = Math.min(255, Math.round(data[i] * f));
    data[i + 1] = Math.min(255, Math.round(data[i + 1] * f));
    data[i + 2] = Math.min(255, Math.round(data[i + 2] * f));
    data[i + 3] = 255;
  }
}

function opaqueBounds(data, w, h, thresh = 14) {
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

export function fillForName(name) {
  if (name === "skin-rainbow") return 0.78;
  if (name.startsWith("pet-")) return FILL.pet;
  if (name.startsWith("hat-")) return FILL.hat;
  if (name.startsWith("skin-")) return FILL.skin;
  if (name.startsWith("item-")) return FILL.item;
  if (name.startsWith("decor-")) return FILL.decor;
  if (name.startsWith("badge-")) return FILL.badge;
  if (name.startsWith("boost-")) return FILL.boost;
  return 0.86;
}

export async function processBuffer(buf, bgTol = 48) {
  const { data, info } = await sharp(buf).ensureAlpha().raw().toBuffer({ resolveWithObject: true });
  const bg = sampleBg(data, info.width, info.height);
  if (bg) {
    // Refuse "black as background" — that eats pet fur / outlines.
    const bgLum = (bg[0] + bg[1] + bg[2]) / 3;
    if (bgLum >= 70) floodClearBg(data, info.width, info.height, bg, bgTol);
  }
  keepMainSubject(data, info.width, info.height);
  if (bg && (bg[0] + bg[1] + bg[2]) / 3 >= 70) {
    stripSheetFringe(data, info.width, info.height, bg);
  }
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

/** Safer key for simple cell crops: clear blue sheet only — keep white stroke & pastel rings. */
export async function clearSheetBgOnly(buf, bgTol = 46) {
  const { data, info } = await sharp(buf).ensureAlpha().raw().toBuffer({ resolveWithObject: true });
  const bg = sampleBg(data, info.width, info.height);
  if (bg && (bg[0] + bg[1] + bg[2]) / 3 >= 70) {
    floodClearBg(data, info.width, info.height, bg, bgTol);
  }
  // Drop tiny leftover sparkles (sheet texture) — never large fragments
  const seen = new Uint8Array(info.width * info.height);
  const aAt = (p) => data[p * 4 + 3];
  for (let y = 0; y < info.height; y++) {
    for (let x = 0; x < info.width; x++) {
      const start = y * info.width + x;
      if (seen[start] || aAt(start) < 20) continue;
      const stack = [start];
      const comp = [];
      seen[start] = 1;
      while (stack.length) {
        const p = stack.pop();
        comp.push(p);
        const cx = p % info.width, cy = (p / info.width) | 0;
        for (const [nx, ny] of [[cx - 1, cy], [cx + 1, cy], [cx, cy - 1], [cx, cy + 1]]) {
          if (nx < 0 || ny < 0 || nx >= info.width || ny >= info.height) continue;
          const np = ny * info.width + nx;
          if (seen[np] || aAt(np) < 20) continue;
          seen[np] = 1;
          stack.push(np);
        }
      }
      if (comp.length <= 36) for (const p of comp) data[p * 4 + 3] = 0;
    }
  }

  const b = opaqueBounds(data, info.width, info.height);
  let pipeline = sharp(data, { raw: { width: info.width, height: info.height, channels: 4 } });
  if (b) {
    const pad = 6;
    const left = Math.max(0, b.minX - pad);
    const top = Math.max(0, b.minY - pad);
    const width = Math.min(info.width - left, b.maxX - b.minX + 1 + pad * 2);
    const height = Math.min(info.height - top, b.maxY - b.minY + 1 + pad * 2);
    pipeline = pipeline.extract({ left, top, width, height });
  }
  return pipeline.png({ palette: false }).toBuffer();
}

export async function normalizeSquare(buf, name) {
  const fill = fillForName(name);
  const meta = await sharp(buf).metadata();
  const scale = (CANVAS * fill) / Math.max(meta.width, meta.height);
  const w = Math.max(1, Math.round(meta.width * scale));
  const h = Math.max(1, Math.round(meta.height * scale));
  const left = Math.round((CANVAS - w) / 2);
  const top = Math.round((CANVAS - h) / 2);
  return sharp(buf)
    .resize(w, h, { kernel: sharp.kernel.lanczos3 })
    .extend({
      top, bottom: CANVAS - h - top,
      left, right: CANVAS - w - left,
      background: { r: 0, g: 0, b: 0, alpha: 0 },
    })
    .sharpen({ sigma: 0.6, m1: 0.5, m2: 0.25, x1: 2, y2: 10, y3: 20 })
    .png({ compressionLevel: 6, effort: 10 })
    .toBuffer();
}

export async function saveShopIcon(buf, dest, name) {
  const squared = await normalizeSquare(buf, name);
  await sharp(squared).toFile(dest);
}
