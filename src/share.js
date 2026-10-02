// Share card: draws a premium 1080x1350 PNG summary of a finished run and
// hands it to the OS share sheet (or a plain download as a fallback).

const W = 1080;
const H = 1350;

const COL = {
  bg: '#07100f',
  bgGlow: '#0e2422',
  offWhite: '#eaf6f5',
  card: '#f3f3f1',
  teal: '#1ecbc4',
  copper: '#c8703c',
  blue: '#2f72e6',
  pink: '#e8408f',
  yellow: '#f6c521',
  orange: '#f28a24',
  dim: 'rgba(234,246,245,0.55)',
  faint: 'rgba(234,246,245,0.28)',
};

function fmtScore(n) {
  return Math.round(n || 0).toLocaleString('en-GB');
}

async function loadFonts() {
  const specs = [
    '400 32px Outfit',
    '600 32px Outfit',
    '800 32px Outfit',
    '900 32px Outfit',
    '600 32px Caveat',
    '700 32px Caveat',
  ];
  try {
    await Promise.all(specs.map((s) => document.fonts.load(s)));
    await document.fonts.ready;
  } catch {
    // fonts API unavailable or a family failed to load; canvas falls back
    // to the generic families given in each font string below.
  }
}

function loadImage(src) {
  return new Promise((resolve) => {
    const img = new Image();
    img.onload = () => resolve(img);
    img.onerror = () => resolve(null);
    img.src = src;
  });
}

function roundRectPath(ctx, x, y, w, h, r) {
  const rr = Math.min(r, w / 2, h / 2);
  ctx.beginPath();
  ctx.moveTo(x + rr, y);
  ctx.arcTo(x + w, y, x + w, y + h, rr);
  ctx.arcTo(x + w, y + h, x, y + h, rr);
  ctx.arcTo(x, y + h, x, y, rr);
  ctx.arcTo(x, y, x + w, y, rr);
  ctx.closePath();
}

function drawBackground(ctx) {
  ctx.fillStyle = COL.bg;
  ctx.fillRect(0, 0, W, H);
  const g = ctx.createRadialGradient(W / 2, H * 0.36, 40, W / 2, H * 0.36, H * 0.75);
  g.addColorStop(0, COL.bgGlow);
  g.addColorStop(1, COL.bg);
  ctx.fillStyle = g;
  ctx.fillRect(0, 0, W, H);
  // faint vignette
  const v = ctx.createRadialGradient(W / 2, H / 2, H * 0.4, W / 2, H / 2, H * 0.75);
  v.addColorStop(0, 'rgba(0,0,0,0)');
  v.addColorStop(1, 'rgba(0,0,0,0.35)');
  ctx.fillStyle = v;
  ctx.fillRect(0, 0, W, H);
}

function drawWordmark(ctx, cx, y) {
  ctx.textBaseline = 'alphabetic';
  ctx.textAlign = 'left';
  const the = 'The';
  const alt = 'Altnets';
  ctx.font = "900 54px 'Outfit', system-ui, sans-serif";
  const wThe = ctx.measureText(the).width;
  const wAlt = ctx.measureText(alt).width;
  const totalW = wThe + wAlt;
  let x = cx - totalW / 2;
  ctx.fillStyle = COL.offWhite;
  ctx.fillText(the, x, y);
  x += wThe;
  ctx.fillStyle = COL.teal;
  ctx.fillText(alt, x, y);

  ctx.font = "600 24px 'Outfit', system-ui, sans-serif";
  ctx.textAlign = 'center';
  ctx.fillStyle = COL.dim;
  ctx.save();
  const label = 'ESCAPE THE COPPERS';
  ctx.font = "700 24px 'Outfit', system-ui, sans-serif";
  // manual letter spacing
  const spacing = 6;
  let widths = 0;
  for (const ch of label) widths += ctx.measureText(ch).width + spacing;
  widths -= spacing;
  let lx = cx - widths / 2;
  const ly = y + 46;
  for (const ch of label) {
    ctx.textAlign = 'left';
    ctx.fillText(ch, lx, ly);
    lx += ctx.measureText(ch).width + spacing;
  }
  ctx.restore();
}

// Fit the graph's streets into a circle of radius R centred at (cx, cy) on
// the canvas. Returns a transform fn mapping world {x,z} -> canvas {x,y}.
function buildMapTransform(area, graph, cx, cy, R) {
  const pad = 0.92; // keep a margin inside the circle
  const worldR = (area.radius || 200) * 1.1;
  const scale = (R * pad) / worldR;
  return (x, z) => ({ x: cx + x * scale, y: cy + z * scale });
}

function drawStreetMap(ctx, area, graph, cx, cy, R) {
  ctx.save();
  ctx.beginPath();
  ctx.arc(cx, cy, R, 0, Math.PI * 2);
  ctx.clip();

  // inner disc backdrop, slightly lighter than the page bg
  const disc = ctx.createRadialGradient(cx, cy, 0, cx, cy, R);
  disc.addColorStop(0, 'rgba(30,203,196,0.07)');
  disc.addColorStop(1, 'rgba(7,16,15,0.0)');
  ctx.fillStyle = disc;
  ctx.fillRect(cx - R, cy - R, R * 2, R * 2);

  const toXY = buildMapTransform(area, graph, cx, cy, R);
  const rainbow = [COL.pink, COL.yellow, COL.orange, COL.blue];

  // pass 1: unlaid streets, thin dim copper
  ctx.lineCap = 'round';
  ctx.lineJoin = 'round';
  ctx.shadowBlur = 0;
  ctx.strokeStyle = COL.copper;
  ctx.globalAlpha = 0.5;
  ctx.lineWidth = Math.max(1.4, R * 0.008);
  graph.edges.forEach((e, ei) => {
    const laidArr = graph.laid[ei];
    for (let c = 0; c < e.cells; c++) {
      if (laidArr && laidArr[c]) continue;
      const p0 = graph.pointAt(e, c * e.cellLen);
      const p1 = graph.pointAt(e, Math.min(e.len, (c + 1) * e.cellLen));
      const s = toXY(p0.x, p0.z);
      const t = toXY(p1.x, p1.z);
      ctx.beginPath();
      ctx.moveTo(s.x, s.y);
      ctx.lineTo(t.x, t.y);
      ctx.stroke();
    }
  });
  ctx.globalAlpha = 1;

  // pass 2: laid streets, thick glowing teal (shimmer accents if cleared)
  const cleared = graph.coverage >= 0.999;
  ctx.lineWidth = Math.max(3, R * 0.02);
  let cellIdx = 0;
  graph.edges.forEach((e, ei) => {
    const laidArr = graph.laid[ei];
    if (!laidArr) return;
    for (let c = 0; c < e.cells; c++) {
      if (!laidArr[c]) { cellIdx++; continue; }
      const p0 = graph.pointAt(e, c * e.cellLen);
      const p1 = graph.pointAt(e, Math.min(e.len, (c + 1) * e.cellLen));
      const s = toXY(p0.x, p0.z);
      const t = toXY(p1.x, p1.z);
      const stroke = cleared ? rainbow[cellIdx % rainbow.length] : COL.teal;
      ctx.shadowColor = stroke;
      ctx.shadowBlur = R * 0.045;
      ctx.strokeStyle = stroke;
      ctx.beginPath();
      ctx.moveTo(s.x, s.y);
      ctx.lineTo(t.x, t.y);
      ctx.stroke();
      cellIdx++;
    }
  });
  ctx.shadowBlur = 0;

  // police station marker
  const station = area.station;
  if (station) {
    const p = toXY(station.x, station.z);
    if (Math.hypot(p.x - cx, p.y - cy) <= R) {
      const s = Math.max(10, R * 0.045);
      ctx.fillStyle = COL.blue;
      ctx.shadowColor = COL.blue;
      ctx.shadowBlur = s;
      ctx.fillRect(p.x - s / 2, p.y - s / 2, s, s);
      ctx.shadowBlur = 0;
    }
  }

  ctx.restore();

  // ring outline
  ctx.beginPath();
  ctx.arc(cx, cy, R, 0, Math.PI * 2);
  ctx.strokeStyle = 'rgba(234,246,245,0.18)';
  ctx.lineWidth = 2;
  ctx.stroke();
}

function drawAreaLabel(ctx, area, cy) {
  ctx.textAlign = 'center';
  ctx.fillStyle = COL.offWhite;
  ctx.font = "800 32px 'Outfit', system-ui, sans-serif";
  ctx.fillText(area.label || '', W / 2, cy);
  ctx.font = "500 24px 'Outfit', system-ui, sans-serif";
  ctx.fillStyle = COL.dim;
  ctx.fillText(area.postcode || '', W / 2, cy + 34);
}

function drawStat(ctx, pct, cleared, y) {
  ctx.textAlign = 'center';
  ctx.fillStyle = COL.teal;
  ctx.shadowColor = 'rgba(30,203,196,0.55)';
  ctx.shadowBlur = 30;
  ctx.font = "900 150px 'Outfit', system-ui, sans-serif";
  ctx.fillText(`${pct}%`, W / 2, y);
  ctx.shadowBlur = 0;

  ctx.fillStyle = COL.offWhite;
  ctx.font = "600 34px 'Outfit', system-ui, sans-serif";
  const line = cleared ? 'Every street connected' : 'of my streets on full fibre';
  ctx.fillText(line, W / 2, y + 50);
}

// The share card's mascot photo sits bottom right, so centred text below the
// stat must stay clear of it. A caught-by line always drops to its own row
// rather than risk running wide under the card.
function drawSecondary(ctx, score, caughtBy, y) {
  ctx.textAlign = 'center';
  ctx.fillStyle = COL.dim;
  ctx.font = "500 28px 'Outfit', system-ui, sans-serif";
  const scoreLine = `Score ${fmtScore(score)}`;
  if (!caughtBy) {
    ctx.fillText(scoreLine, W / 2, y);
  } else {
    ctx.fillText(scoreLine, W / 2, y);
    ctx.fillText(`Nicked by ${caughtBy}`, W / 2, y + 38);
  }
}

function drawFooter(ctx, heroImg) {
  const cardW = 260;
  const cardH = 400;
  const cardX = W - cardW - 56;
  const cardY = H - cardH - 40;
  const rot = -0.06;

  ctx.save();
  ctx.translate(cardX + cardW / 2, cardY + cardH / 2);
  ctx.rotate(rot);
  ctx.translate(-cardW / 2, -cardH / 2);

  ctx.shadowColor = 'rgba(0,0,0,0.45)';
  ctx.shadowBlur = 30;
  ctx.shadowOffsetY = 14;
  ctx.fillStyle = COL.card;
  roundRectPath(ctx, 0, 0, cardW, cardH, 18);
  ctx.fill();
  ctx.shadowBlur = 0;
  ctx.shadowOffsetY = 0;

  if (heroImg) {
    const pad = 14;
    const iw = cardW - pad * 2;
    const ih = cardH - pad * 2;
    const scale = Math.max(iw / heroImg.width, ih / heroImg.height);
    const dw = heroImg.width * scale;
    const dh = heroImg.height * scale;
    ctx.save();
    roundRectPath(ctx, pad, pad, iw, ih, 12);
    ctx.clip();
    ctx.drawImage(heroImg, pad + (iw - dw) / 2, pad + (ih - dh) / 2, dw, dh);
    ctx.restore();
  }
  ctx.restore();

  // CTA block, left-aligned, sits beside the hero card
  const textX = 56;
  ctx.textAlign = 'left';
  ctx.fillStyle = COL.offWhite;
  ctx.font = "800 40px 'Outfit', system-ui, sans-serif";
  wrapText(ctx, 'Can you connect your street?', textX, H - 168, 560, 46);

  ctx.font = "600 40px 'Caveat', cursive";
  ctx.fillStyle = COL.teal;
  ctx.fillText('Different fibre. Brighter places.', textX, H - 96);

  ctx.font = "700 30px 'Outfit', system-ui, sans-serif";
  ctx.fillStyle = COL.dim;
  ctx.fillText('thealtnets.com', textX, H - 56);
}

function wrapText(ctx, text, x, y, maxW, lh) {
  const words = text.split(' ');
  let line = '';
  let cy = y;
  for (const w of words) {
    const test = line ? `${line} ${w}` : w;
    if (ctx.measureText(test).width > maxW && line) {
      ctx.fillText(line, x, cy);
      line = w;
      cy += lh;
    } else {
      line = test;
    }
  }
  if (line) ctx.fillText(line, x, cy);
}

export async function makeShareCard({ area, graph, score, pct, caughtBy, cleared, round }) {
  await loadFonts();
  const heroImg = await loadImage(import.meta.env.BASE_URL + 'sprites/altnet-hero.jpg');

  const canvas = document.createElement('canvas');
  canvas.width = W;
  canvas.height = H;
  const ctx = canvas.getContext('2d');

  drawBackground(ctx);
  drawWordmark(ctx, W / 2, 100);

  const mapCx = W / 2;
  const mapCy = 400;
  const mapR = 260;
  drawStreetMap(ctx, area, graph, mapCx, mapCy, mapR);
  drawAreaLabel(ctx, area, mapCy + mapR + 50);

  drawStat(ctx, pct, !!cleared, 900);
  drawSecondary(ctx, score, caughtBy, 1006);

  drawFooter(ctx, heroImg);

  return new Promise((resolve) => {
    canvas.toBlob((blob) => resolve(blob), 'image/png');
  });
}

export async function shareCard(blob, { text, url } = {}) {
  if (!blob) return 'cancelled';

  if (navigator.share && navigator.canShare) {
    const file = new File([blob], 'escape-the-coppers.png', { type: 'image/png' });
    if (navigator.canShare({ files: [file] })) {
      try {
        await navigator.share({ files: [file], text, url });
        return 'shared';
      } catch (err) {
        if (err && err.name === 'AbortError') return 'cancelled';
        // fall through to download on any other share failure
      }
    }
  }

  const objectUrl = URL.createObjectURL(blob);
  const a = document.createElement('a');
  const postcode = (text && text.match(/[A-Z0-9]{2,4}\s?[A-Z0-9]{3}/i)?.[0]) || '';
  const slug = postcode ? postcode.replace(/\s+/g, '').toUpperCase() : 'card';
  a.href = objectUrl;
  a.download = `altnets-${slug}.png`;
  document.body.appendChild(a);
  a.click();
  a.remove();
  URL.revokeObjectURL(objectUrl);
  return 'downloaded';
}
