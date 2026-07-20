// Generator ikon PWA — rysuje czysty biały koszyk na zielonym tle.
// Bez zależności zewnętrznych (tylko wbudowane zlib). Uruchom: node make-icons.mjs
import { deflateSync } from "node:zlib";
import { writeFileSync } from "node:fs";

const GREEN = [22, 163, 74];   // #16a34a
const WHITE = [255, 255, 255];

function crc32(buf) {
  let c = ~0;
  for (let i = 0; i < buf.length; i++) {
    c ^= buf[i];
    for (let k = 0; k < 8; k++) c = (c >>> 1) ^ (0xEDB88320 & -(c & 1));
  }
  return (~c) >>> 0;
}
function chunk(type, data) {
  const len = Buffer.alloc(4); len.writeUInt32BE(data.length, 0);
  const td = Buffer.concat([Buffer.from(type, "ascii"), data]);
  const crc = Buffer.alloc(4); crc.writeUInt32BE(crc32(td), 0);
  return Buffer.concat([len, td, crc]);
}
function encodePNG(w, h, rgba) {
  const sig = Buffer.from([0x89, 0x50, 0x4E, 0x47, 0x0D, 0x0A, 0x1A, 0x0A]);
  const ihdr = Buffer.alloc(13);
  ihdr.writeUInt32BE(w, 0); ihdr.writeUInt32BE(h, 4);
  ihdr[8] = 8; ihdr[9] = 6; // 8-bit, RGBA
  const raw = Buffer.alloc((w * 4 + 1) * h);
  for (let y = 0; y < h; y++) {
    raw[y * (w * 4 + 1)] = 0; // filtr 0
    rgba.copy(raw, y * (w * 4 + 1) + 1, y * w * 4, (y + 1) * w * 4);
  }
  const idat = deflateSync(raw, { level: 9 });
  return Buffer.concat([sig, chunk("IHDR", ihdr), chunk("IDAT", idat), chunk("IEND", Buffer.alloc(0))]);
}

function makeCanvas(size) {
  const buf = Buffer.alloc(size * size * 4);
  return {
    size, buf,
    set(x, y, [r, g, b], a = 255) {
      x = Math.round(x); y = Math.round(y);
      if (x < 0 || y < 0 || x >= size || y >= size) return;
      const i = (y * size + x) * 4;
      const ia = a / 255, na = 1 - ia;
      buf[i] = r * ia + buf[i] * na;
      buf[i + 1] = g * ia + buf[i + 1] * na;
      buf[i + 2] = b * ia + buf[i + 2] * na;
      buf[i + 3] = Math.max(buf[i + 3], a);
    },
  };
}
// wygładzony okrąg/koło z antyaliasingiem po promieniu
function aa(dist, edge) { return Math.max(0, Math.min(1, (edge - dist) + 0.5)); }

function fillBg(cv, color, rounded) {
  const s = cv.size, r = rounded ? s * 0.22 : 0;
  for (let y = 0; y < s; y++) for (let x = 0; x < s; x++) {
    let a = 255;
    if (r > 0) {
      // zaokrąglone rogi
      const cx = Math.min(Math.max(x, r), s - r), cy = Math.min(Math.max(y, r), s - r);
      const d = Math.hypot(x - cx, y - cy);
      a = Math.round(255 * aa(d, r));
    }
    if (a > 0) cv.set(x, y, color, a);
  }
}
function disc(cv, cx, cy, rad, color) {
  const s = cv.size;
  for (let y = Math.floor(cy - rad - 1); y <= cy + rad + 1; y++)
    for (let x = Math.floor(cx - rad - 1); x <= cx + rad + 1; x++) {
      const a = Math.round(255 * aa(Math.hypot(x - cx, y - cy), rad));
      if (a > 0) cv.set(x, y, color, a);
    }
}
function ring(cv, cx, cy, rad, th, color, y0, y1) {
  const s = cv.size;
  for (let y = Math.floor(cy - rad - th); y <= cy + rad + th; y++)
    for (let x = Math.floor(cx - rad - th); x <= cx + rad + th; x++) {
      if (y < y0 || y > y1) continue;
      const d = Math.abs(Math.hypot(x - cx, y - cy) - rad);
      const a = Math.round(255 * aa(d, th / 2));
      if (a > 0) cv.set(x, y, color, a);
    }
}
// gruba linia od (x0,y0) do (x1,y1)
function line(cv, x0, y0, x1, y1, th, color) {
  const len = Math.hypot(x1 - x0, y1 - y0), steps = Math.ceil(len);
  for (let i = 0; i <= steps; i++) disc(cv, x0 + (x1 - x0) * i / steps, y0 + (y1 - y0) * i / steps, th / 2, color);
}

function drawCart(cv) {
  const s = cv.size, u = s / 100; // jednostka = 1% rozmiaru
  const th = 6 * u;
  // uchwyt + linia do kosza
  line(cv, 16 * u, 24 * u, 28 * u, 24 * u, th, WHITE);       // uchwyt
  line(cv, 28 * u, 24 * u, 34 * u, 40 * u, th, WHITE);       // skos do kosza
  // górna krawędź kosza
  line(cv, 34 * u, 40 * u, 82 * u, 40 * u, th, WHITE);
  // boki kosza (lekko zbieżne)
  line(cv, 36 * u, 40 * u, 44 * u, 66 * u, th, WHITE);
  line(cv, 80 * u, 40 * u, 72 * u, 66 * u, th, WHITE);
  // dno kosza
  line(cv, 44 * u, 66 * u, 72 * u, 66 * u, th, WHITE);
  // dwie przegrody w koszu
  line(cv, 50 * u, 44 * u, 53 * u, 62 * u, th * 0.7, WHITE);
  line(cv, 62 * u, 44 * u, 61 * u, 62 * u, th * 0.7, WHITE);
  // kółka
  disc(cv, 48 * u, 78 * u, 6 * u, WHITE);
  disc(cv, 68 * u, 78 * u, 6 * u, WHITE);
}

function build(size, { rounded = true, scale = 1 } = {}) {
  const cv = makeCanvas(size);
  fillBg(cv, GREEN, rounded);
  // dla maskable rysujemy koszyk trochę mniejszy (strefa bezpieczna)
  if (scale !== 1) {
    const inner = makeCanvas(size);
    drawCart(inner);
    const off = (1 - scale) / 2 * size;
    for (let y = 0; y < size; y++) for (let x = 0; x < size; x++) {
      const sx = (x - off) / scale, sy = (y - off) / scale;
      const i = (Math.round(sy) * size + Math.round(sx)) * 4;
      if (sx >= 0 && sy >= 0 && sx < size && sy < size && inner.buf[i + 3] > 0)
        cv.set(x, y, [inner.buf[i], inner.buf[i + 1], inner.buf[i + 2]], inner.buf[i + 3]);
    }
  } else {
    drawCart(cv);
  }
  return encodePNG(size, size, cv.buf);
}

writeFileSync(new URL("./icon-192.png", import.meta.url), build(192, { rounded: true }));
writeFileSync(new URL("./icon-512.png", import.meta.url), build(512, { rounded: true }));
writeFileSync(new URL("./icon-maskable.png", import.meta.url), build(512, { rounded: false, scale: 0.72 }));
console.log("Ikony zapisane: icon-192.png, icon-512.png, icon-maskable.png");
