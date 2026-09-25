// Builds the three.js city from an area: night sky and London skyline,
// buildings, streets with kerbs, lamps and markings, the old copper line
// and the glowing fibre that replaces it.
import * as THREE from 'three';
import { mergeGeometries } from 'three/addons/utils/BufferGeometryUtils.js';
import { buildProps } from './props.js';

// Cartoon London palette: midnight blue, grape, fandango and folly for the
// mood; midnight oil, glacier grey and patina for the streets; icy turquoise
// for fibre and lit windows.
export const PALETTE = {
  midnight: 0x271e70, grape: 0x5527aa, fandango: 0xab196f, folly: 0xfc1057, aqua: 0x2bfdaf,
  ink: 0x0b0c10, oil: 0x1f2833, glacier: 0xc5c6c7, ice: 0x66fcf1, patina: 0x45a29e,
};

export const COLOURS = {
  sky: 0x271e70,
  ground: 0x1a2250,
  pavement: 0x59618f,
  road: 0x1c2440,
  kerb: 0xa8b0d8,
  copper: 0xc8703c,
  fibre: 0x66fcf1,
  pink: 0xe8408f,
  yellow: 0xf6c521,
  orange: 0xf28a24,
  blue: 0x2f72e6,
  lamp: 0xffc978,
};

const WIDTH = { trunk: 12, primary: 11, secondary: 10, tertiary: 9, unclassified: 7.5, residential: 7.5, road: 7.5, living_street: 6, pedestrian: 6, service: 5 };
export const roadWidth = (kind) => WIDTH[kind] || 7;
// the moon, high in the south west: sky glow, sprite and the key light
const SUN_DIR = new THREE.Vector3(-0.55, 0.62, 0.56).normalize();
const hasKerb = (kind) => kind !== 'pedestrian' && kind !== 'service' && kind !== 'living_street';

// banded cartoon shading: three flat light levels
let toonRamp = null;
function ramp() {
  if (toonRamp) return toonRamp;
  toonRamp = new THREE.DataTexture(new Uint8Array([130, 130, 130, 255, 195, 195, 195, 255, 255, 255, 255, 255]), 3, 1, THREE.RGBAFormat);
  toonRamp.minFilter = toonRamp.magFilter = THREE.NearestFilter;
  toonRamp.needsUpdate = true;
  return toonRamp;
}
export function toon(params = {}) {
  const p = { ...params };
  delete p.roughness; delete p.metalness; delete p.flatShading; delete p.envMapIntensity;
  return new THREE.MeshToonMaterial({ gradientMap: ramp(), ...p });
}

// ink outline: the back faces pushed out along their normals
export function inkOutline(mesh, width = 0.16) {
  const mat = new THREE.MeshBasicMaterial({ color: PALETTE.ink, side: THREE.BackSide });
  mat.onBeforeCompile = (sh) => {
    sh.vertexShader = sh.vertexShader.replace('#include <begin_vertex>', `#include <begin_vertex>
      transformed += normalize(normal) * ${width.toFixed(3)};`);
  };
  const o = new THREE.Mesh(mesh.geometry, mat);
  o.matrixAutoUpdate = false;
  o.matrix.copy(mesh.matrix);
  return o;
}

function rng(seed) {
  return () => {
    seed = (seed + 0x6d2b79f5) | 0;
    let t = Math.imul(seed ^ (seed >>> 15), 1 | seed);
    t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t;
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
}

// ---------------------------------------------------------------- geometry helpers

// polyline sampled along an edge between two distances (from node a)
function sample(graph, e, d0, d1, step = 3) {
  const pts = [];
  if (d1 - d0 < 0.5) return pts;
  const n = Math.max(1, Math.ceil((d1 - d0) / step));
  for (let i = 0; i <= n; i++) {
    const p = graph.pointAt(e, d0 + ((d1 - d0) * i) / n);
    pts.push([p.x, p.z]);
  }
  return pts;
}

// flat strip along a polyline, shifted sideways by offset
function ribbon(pts, width, y, offset = 0) {
  const n = pts.length;
  const pos = [];
  const idx = [];
  for (let i = 0; i < n; i++) {
    const p = pts[Math.max(0, i - 1)], q = pts[Math.min(n - 1, i + 1)];
    let dx = q[0] - p[0], dz = q[1] - p[1];
    const L = Math.hypot(dx, dz) || 1;
    dx /= L; dz /= L;
    const nx = -dz, nz = dx;
    const cx = pts[i][0] + nx * offset, cz = pts[i][1] + nz * offset;
    pos.push(cx + nx * width / 2, y, cz + nz * width / 2, cx - nx * width / 2, y, cz - nz * width / 2);
    if (i) {
      const a = (i - 1) * 2;
      idx.push(a, a + 1, a + 2, a + 1, a + 3, a + 2);
    }
  }
  const g = new THREE.BufferGeometry();
  g.setAttribute('position', new THREE.Float32BufferAttribute(pos, 3));
  g.setIndex(idx);
  return upNormals(g);
}

function disc(x, z, r, y) {
  const g = new THREE.CircleGeometry(r, 20);
  g.rotateX(-Math.PI / 2);
  g.translate(x, y, z);
  return upNormals(g);
}

function upNormals(g) {
  const n = g.attributes.position.count;
  const arr = new Float32Array(n * 3);
  for (let i = 0; i < n; i++) arr[i * 3 + 1] = 1;
  g.setAttribute('normal', new THREE.BufferAttribute(arr, 3));
  g.deleteAttribute('uv');
  return g;
}

function radialTexture(inner = 'rgba(255,255,255,1)', outer = 'rgba(255,255,255,0)') {
  const c = document.createElement('canvas');
  c.width = c.height = 128;
  const x = c.getContext('2d');
  const g = x.createRadialGradient(64, 64, 0, 64, 64, 64);
  g.addColorStop(0, inner);
  g.addColorStop(1, outer);
  x.fillStyle = g;
  x.fillRect(0, 0, 128, 128);
  return new THREE.CanvasTexture(c);
}

function stripTexture() {
  // soft glow across the width of a strip, for light spill under the fibre
  const c = document.createElement('canvas');
  c.width = 64; c.height = 4;
  const x = c.getContext('2d');
  const g = x.createLinearGradient(0, 0, 64, 0);
  g.addColorStop(0, 'rgba(255,255,255,0)');
  g.addColorStop(0.5, 'rgba(255,255,255,1)');
  g.addColorStop(1, 'rgba(255,255,255,0)');
  x.fillStyle = g;
  x.fillRect(0, 0, 64, 4);
  return new THREE.CanvasTexture(c);
}

// ---------------------------------------------------------------- sky and skyline

function sky(scene, R) {
  const mat = new THREE.ShaderMaterial({
    side: THREE.BackSide,
    depthWrite: false,
    uniforms: {
      top: { value: new THREE.Color(0x060b2e) }, mid: { value: new THREE.Color(0x1c2f78) }, low: { value: new THREE.Color(0xc79ae0) },
      sun: { value: SUN_DIR.clone() }, glow: { value: new THREE.Color(0x5a6fd0) },
    },
    vertexShader: 'varying vec3 vP; void main(){ vP = normalize(position); gl_Position = projectionMatrix * modelViewMatrix * vec4(position,1.0); }',
    fragmentShader: `uniform vec3 top; uniform vec3 mid; uniform vec3 low; uniform vec3 sun; uniform vec3 glow; varying vec3 vP;
      void main(){
        float h = vP.y;
        vec3 c = h > 0.12 ? mix(mid, top, smoothstep(0.12, 0.75, h)) : mix(low, mid, smoothstep(-0.04, 0.12, h));
        float s = max(dot(normalize(vP), sun), 0.0);
        c += glow * pow(s, 12.0) * 0.45;
        c += vec3(0.95, 0.55, 0.85) * pow(max(0.0, 1.0 - abs(h - 0.02) * 9.0), 3.0) * 0.35; // pink band on the horizon
        gl_FragColor = vec4(c, 1.0);
      }`,
  });
  const dome = new THREE.Mesh(new THREE.SphereGeometry(2200, 32, 16), mat);
  dome.renderOrder = -10;
  scene.add(dome);

  const r = rng(7);
  const n = 500;
  const pos = new Float32Array(n * 3);
  for (let i = 0; i < n; i++) {
    const a = r() * Math.PI * 2, e = 0.75 + r() * 0.8;
    pos.set([Math.cos(a) * Math.cos(e) * 2000, Math.sin(e) * 2000, Math.sin(a) * Math.cos(e) * 2000], i * 3);
  }
  const g = new THREE.BufferGeometry();
  g.setAttribute('position', new THREE.BufferAttribute(pos, 3));
  scene.add(new THREE.Points(g, new THREE.PointsMaterial({ color: 0xe8ecff, size: 1.4, sizeAttenuation: false, fog: false, transparent: true, opacity: 0.45 })));


  // a crescent moon and four-point sparkle stars
  const moonTex = (() => {
    const c = document.createElement('canvas'); c.width = c.height = 256;
    const x = c.getContext('2d');
    const g = x.createRadialGradient(118, 118, 20, 128, 128, 120);
    g.addColorStop(0, '#f4f2ff'); g.addColorStop(1, '#b9c6ff');
    x.fillStyle = g; x.beginPath(); x.arc(128, 128, 110, 0, Math.PI * 2); x.fill();
    x.globalCompositeOperation = 'destination-out';
    x.beginPath(); x.arc(172, 96, 104, 0, Math.PI * 2); x.fill();
    return new THREE.CanvasTexture(c);
  })();
  moonTex.colorSpace = THREE.SRGBColorSpace;
  const moon = new THREE.Sprite(new THREE.SpriteMaterial({ map: moonTex, fog: false, depthWrite: false }));
  moon.scale.setScalar(260);
  moon.position.copy(SUN_DIR).multiplyScalar(1900);
  scene.add(moon);
  const starTex = (() => {
    const c = document.createElement('canvas'); c.width = c.height = 64;
    const x = c.getContext('2d');
    x.fillStyle = '#ffffff';
    x.beginPath();
    for (let i = 0; i < 8; i++) { const a = (i / 8) * Math.PI * 2, rr = i % 2 ? 6 : 32; x.lineTo(32 + Math.cos(a) * rr, 32 + Math.sin(a) * rr); }
    x.fill();
    return new THREE.CanvasTexture(c);
  })();
  const sparkles = [];
  for (let i = 0; i < 26; i++) {
    const a = r() * Math.PI * 2, e = 0.35 + r() * 0.9;
    const s = new THREE.Sprite(new THREE.SpriteMaterial({ map: starTex, color: r() < 0.5 ? 0xffffff : 0xb9c6ff, fog: false, depthWrite: false, transparent: true }));
    s.position.set(Math.cos(a) * Math.cos(e) * 1950, Math.sin(e) * 1950, Math.sin(a) * Math.cos(e) * 1950);
    s.scale.setScalar(18 + r() * 34);
    s.userData.phase = r() * 6;
    scene.add(s);
    sparkles.push(s);
  }
  skyline(scene, Math.max(900, R * 3.2));
  return sparkles;
}

// Distant London: a ring of towers with a few famous shapes picked out.
function skyline(scene, D) {
  const r = rng(42);
  const parts = [];
  const lights = [];
  const place = (g, a, dist) => {
    g.translate(Math.cos(a) * dist, 0, Math.sin(a) * dist);
    parts.push(g);
  };
  for (let i = 0; i < 150; i++) {
    const a = (i / 150) * Math.PI * 2 + r() * 0.03;
    const dist = D * (0.95 + r() * 0.3);
    const w = 18 + r() * 45, h = 14 + Math.pow(r(), 2.2) * 90, d = 18 + r() * 30;
    const g = new THREE.BoxGeometry(w, h, d);
    g.translate(0, h / 2, 0);
    g.rotateY(-a);
    place(g, a, dist);
    for (let k = 0; k < 6; k++) {
      if (r() < 0.5) continue;
      const lx = (r() - 0.5) * w * 0.8, ly = r() * h * 0.9;
      const px = Math.cos(a) * (dist - d / 2 - 0.5) - Math.sin(a) * lx;
      const pz = Math.sin(a) * (dist - d / 2 - 0.5) + Math.cos(a) * lx;
      lights.push(px, ly, pz);
    }
  }
  const lm = (g, a, dist = D * 1.05) => place(g, a, dist);
  // the Shard
  const shard = new THREE.ConeGeometry(26, 300, 4);
  shard.translate(0, 150, 0);
  lm(shard, 0.6, D * 1.1);
  // St Paul's
  const drum = new THREE.CylinderGeometry(26, 28, 40, 20);
  drum.translate(0, 45, 0);
  const dome = new THREE.SphereGeometry(27, 20, 12, 0, Math.PI * 2, 0, Math.PI / 2);
  dome.translate(0, 65, 0);
  const lantern = new THREE.CylinderGeometry(3, 5, 26, 8);
  lantern.translate(0, 100, 0);
  const nave = new THREE.BoxGeometry(110, 40, 40);
  nave.translate(0, 20, 0);
  [drum, dome, lantern, nave].forEach((g) => lm(g, 2.2));
  // the Gherkin
  const gpts = [];
  for (let i = 0; i <= 16; i++) { const t = i / 16; gpts.push(new THREE.Vector2(Math.max(0.5, Math.sin(Math.PI * (0.18 + t * 0.82)) * 28), t * 180)); }
  lm(new THREE.LatheGeometry(gpts, 16), 1.2, D * 1.02);
  // BT Tower
  const bt = new THREE.CylinderGeometry(7, 9, 175, 12);
  bt.translate(0, 87, 0);
  const pod = new THREE.CylinderGeometry(12, 12, 22, 12);
  pod.translate(0, 150, 0);
  lm(bt, 4.1); lm(pod, 4.1);
  // Big Ben
  const ben = new THREE.BoxGeometry(14, 90, 14);
  ben.translate(0, 45, 0);
  const spire = new THREE.ConeGeometry(10, 26, 4);
  spire.translate(0, 103, 0);
  lm(ben, 5.3); lm(spire, 5.3);

  // faceted low-poly look: every triangle gets its own shade, lighter lavender
  // low down and deeper blue up top, like the reference artwork
  const merged = mergeGeometries(parts.map((g) => (g.index ? g.toNonIndexed() : g)).map((g) => { g.deleteAttribute('uv'); g.deleteAttribute('normal'); return g; }));
  const pos = merged.attributes.position;
  const col = new Float32Array(pos.count * 3);
  const lowC = new THREE.Color(0x8a78d8), highC = new THREE.Color(0x2c4aa8), tmp = new THREE.Color();
  for (let i = 0; i < pos.count; i += 3) {
    const y = (pos.getY(i) + pos.getY(i + 1) + pos.getY(i + 2)) / 3;
    tmp.copy(lowC).lerp(highC, Math.min(1, y / 140)).multiplyScalar(0.75 + r() * 0.4);
    for (let k = 0; k < 3; k++) col.set([tmp.r, tmp.g, tmp.b], (i + k) * 3);
  }
  merged.setAttribute('color', new THREE.BufferAttribute(col, 3));
  const mat = new THREE.MeshBasicMaterial({ vertexColors: true, fog: false });
  scene.add(new THREE.Mesh(merged, mat));
  const lg = new THREE.BufferGeometry();
  lg.setAttribute('position', new THREE.Float32BufferAttribute(lights, 3));
  scene.add(new THREE.Points(lg, new THREE.PointsMaterial({ color: PALETTE.ice, size: 1.8, sizeAttenuation: false, fog: false, transparent: true, opacity: 0.85 })));
  // aircraft light on the Shard
  const tip = new THREE.Mesh(new THREE.SphereGeometry(3, 8, 6), new THREE.MeshBasicMaterial({ color: 0xff3030, fog: false }));
  tip.position.set(Math.cos(0.6) * D * 1.1, 300, Math.sin(0.6) * D * 1.1);
  scene.add(tip);
  return tip;
}

// ---------------------------------------------------------------- buildings

// Facade styles, each a repeating 8 x 8 bay texture plus a glow map for lit
// windows. The white base takes the per-building tint from vertex colours.
function windowTextures(style) {
  const size = 512, cols = 8, rows = 8;
  const base = document.createElement('canvas');
  base.width = base.height = size;
  const glow = document.createElement('canvas');
  glow.width = glow.height = size;
  const b = base.getContext('2d'), e = glow.getContext('2d');
  b.fillStyle = '#ffffff';
  b.fillRect(0, 0, size, size);
  e.fillStyle = '#000';
  e.fillRect(0, 0, size, size);
  const cw = size / cols, ch = size / rows;
  const lit = ['#66fcf1', '#ffd98c', '#ff9fbf', '#2bfdaf', '#ffe7b0'];
  const r = rng({ brick: 3, render: 5, stone: 7, glass: 9 }[style] || 3);
  const glass = '#1f2833';
  const light = (wx, wy, ww, wh, chance) => {
    if (r() >= chance) return false;
    const c = lit[Math.floor(r() * lit.length)];
    b.fillStyle = c; b.fillRect(wx, wy, ww, wh);
    e.fillStyle = c; e.globalAlpha = 0.5 + r() * 0.5; e.fillRect(wx, wy, ww, wh); e.globalAlpha = 1;
    if (r() < 0.35) { b.fillStyle = 'rgba(40,40,40,0.45)'; b.fillRect(wx, wy, ww, wh * 0.4); e.fillStyle = '#000'; e.fillRect(wx, wy, ww, wh * 0.4); }
    return true;
  };
  for (let y = 0; y < rows; y++) {
    if (style === 'brick') { b.fillStyle = 'rgba(0,0,0,0.08)'; for (let k = 0; k < ch; k += 6) b.fillRect(0, y * ch + k, size, 1); }
    if (style === 'stone') { b.fillStyle = 'rgba(0,0,0,0.1)'; b.fillRect(0, y * ch + ch - 4, size, 3); }
    if (style === 'render') { b.fillStyle = 'rgba(255,255,255,0.6)'; b.fillRect(0, y * ch + ch - 8, size, 6); b.fillStyle = 'rgba(0,0,0,0.12)'; b.fillRect(0, y * ch + ch - 2, size, 2); }
    for (let x = 0; x < cols; x++) {
      const x0 = x * cw, y0 = y * ch;
      if (style === 'glass') {
        // curtain wall: full-height glazing between thin mullions
        const wx = x0 + 3, wy = y0 + 4, ww = cw - 6, wh = ch - 10;
        b.fillStyle = '#2a3a55'; b.fillRect(wx, wy, ww, wh);
        b.fillStyle = 'rgba(255,255,255,0.18)'; b.fillRect(wx, wy, ww * 0.35, wh);
        light(wx, wy, ww, wh, 0.42);
        b.fillStyle = '#c9d2d4'; b.fillRect(x0, y0, 3, ch); b.fillRect(x0, y0 + ch - 6, cw, 6);
        continue;
      }
      const tall = style === 'render' ? 0.66 : style === 'stone' ? 0.6 : 0.6;
      const wide = style === 'stone' ? 0.54 : style === 'render' ? 0.42 : 0.4;
      const wx = x0 + cw * (1 - wide) / 2, wy = y0 + ch * 0.16, ww = cw * wide, wh = ch * tall;
      // lintel and sill
      b.fillStyle = style === 'brick' ? '#efe8da' : 'rgba(0,0,0,0.14)';
      b.fillRect(wx - 3, wy - 6, ww + 6, 5);
      b.fillRect(wx - 4, wy + wh, ww + 8, 4);
      b.fillStyle = glass; b.fillRect(wx, wy, ww, wh);
      light(wx, wy, ww, wh, 0.3);
      // frames and glazing bars: white sash for brick and stucco, dark for stone
      b.fillStyle = style === 'stone' ? '#3c4144' : '#f4f1ea';
      b.fillRect(wx, wy, ww, 3); b.fillRect(wx, wy + wh - 3, ww, 3); b.fillRect(wx, wy, 3, wh); b.fillRect(wx + ww - 3, wy, 3, wh);
      b.fillRect(wx, wy + wh * 0.5 - 1.5, ww, 3);
      b.fillRect(wx + ww * 0.5 - 1, wy, 2, wh);
      if (style === 'render') { b.fillStyle = '#1b1d20'; b.fillRect(wx - 5, wy + wh * 0.72, ww + 10, 3); for (let k = 0; k < 6; k++) b.fillRect(wx - 4 + k * (ww + 8) / 5, wy + wh * 0.72, 2, wh * 0.28); }
    }
  }
  const make = (c) => {
    const t = new THREE.CanvasTexture(c);
    t.wrapS = t.wrapT = THREE.RepeatWrapping;
    t.repeat.set(style === 'glass' ? 1 / 19.2 : 1 / 22.4, 1 / 25.6); // bays and 3.2m floors
    t.colorSpace = THREE.SRGBColorSpace;
    t.anisotropy = 8;
    return t;
  };
  return { map: make(base), emissiveMap: make(glow) };
}

// A 48m strip of London shopfronts for the ground floor of every building:
// painted fascia boards with names, big lit windows, doors and pilasters.
const SHOPS = [
  ['Caff', '#45a29e'], ['News', '#271e70'], ['Launderette', '#ab196f'], ['Chippy', '#1f2833'],
  ['Barber', '#0b0c10'], ['Florist', '#5527aa'], ['Deli', '#fc1057'], ['Bakery', '#ab196f'],
  ['Books', '#271e70'], ['Hardware', '#45a29e'], ['Cafe Bar', '#5527aa'], ['Offy', '#1f2833'],
];
function shopTextures() {
  const W = 2048, H = 192, n = 6, sw = W / n;
  const base = document.createElement('canvas');
  base.width = W; base.height = H;
  const glow = document.createElement('canvas');
  glow.width = W; glow.height = H;
  const b = base.getContext('2d'), e = glow.getContext('2d');
  e.fillStyle = '#000'; e.fillRect(0, 0, W, H);
  const r = rng(21);
  const order = SHOPS.slice().sort(() => r() - 0.5).slice(0, n); // six different shops per strip
  for (let i = 0; i < n; i++) {
    const x0 = i * sw;
    const [name, col] = order[i];
    // stone pilasters and stallriser
    b.fillStyle = '#c5c6c7'; b.fillRect(x0, 0, sw, H);
    // fascia board
    b.fillStyle = col; b.fillRect(x0 + 10, 14, sw - 20, 40);
    b.fillStyle = '#f4ecd8'; b.font = '800 30px Outfit, system-ui, sans-serif'; b.textAlign = 'center'; b.textBaseline = 'middle';
    b.fillText(name.toUpperCase(), x0 + sw / 2, 35);
    e.fillStyle = 'rgba(255,236,200,0.35)'; e.font = b.font; e.textAlign = 'center'; e.textBaseline = 'middle';
    e.fillText(name.toUpperCase(), x0 + sw / 2, 35);
    // window and door
    const lit = r() < 0.8;
    const wx = x0 + 22, ww = sw * 0.62, wy = 64, wh = H - 64 - 26;
    b.fillStyle = lit ? '#ffd9a0' : '#39464c'; b.fillRect(wx, wy, ww, wh);
    b.fillStyle = 'rgba(40,30,20,0.35)'; for (let k = 1; k < 3; k++) b.fillRect(wx + (ww * k) / 3 - 2, wy, 4, wh);
    if (lit) { e.fillStyle = '#ffcf8a'; e.globalAlpha = 0.75 + r() * 0.25; e.fillRect(wx, wy, ww, wh); e.globalAlpha = 1; }
    const dx = wx + ww + 14, dw = sw - (dx - x0) - 22;
    b.fillStyle = col; b.fillRect(dx, wy - 4, dw, H - wy - 12);
    b.fillStyle = lit ? '#ffe2b0' : '#2a3236'; b.fillRect(dx + 8, wy + 6, dw - 16, (H - wy) * 0.42);
    if (lit) { e.fillStyle = 'rgba(255,215,150,0.8)'; e.fillRect(dx + 8, wy + 6, dw - 16, (H - wy) * 0.42); }
    // awning stripe on some
    if (r() < 0.45) {
      for (let s = 0; s < 10; s++) { b.fillStyle = s % 2 ? '#f4ecd8' : col; b.fillRect(wx + (ww / 10) * s, wy, ww / 10, 12); }
      e.fillStyle = '#000'; e.fillRect(wx, wy, ww, 12);
    }
  }
  const make = (c) => {
    const t = new THREE.CanvasTexture(c);
    t.wrapS = THREE.RepeatWrapping;
    t.colorSpace = THREE.SRGBColorSpace;
    t.anisotropy = 8;
    return t;
  };
  return { map: make(base), glow: make(glow) };
}

const SHOP_H = 4.4; // ground floor height in metres

let shopTex = null;
function withShopfronts(mat) {
  const shop = shopTex || (shopTex = shopTextures());
  mat.onBeforeCompile = (sh) => {
    sh.uniforms.shopMap = { value: shop.map };
    sh.uniforms.shopGlow = { value: shop.glow };
    sh.vertexShader = sh.vertexShader
      .replace('#include <common>', '#include <common>\nvarying float vWY;\nvarying float vFlip;')
      .replace('#include <begin_vertex>', `#include <begin_vertex>
        vWY = transformed.y;
        // shop names must read left to right from the street on every wall
        vFlip = abs(objectNormal.z) > abs(objectNormal.x) ? (objectNormal.z < 0.0 ? -1.0 : 1.0) : (objectNormal.x < 0.0 ? -1.0 : 1.0);`);
    sh.fragmentShader = sh.fragmentShader
      .replace('#include <common>', `#include <common>\nvarying float vWY;\nvarying float vFlip;\nuniform sampler2D shopMap;\nuniform sampler2D shopGlow;\nconst float SHOP_H = ${SHOP_H.toFixed(1)};`)
      .replace('#include <color_fragment>', `#include <color_fragment>
        vec2 su = vec2(vMapUv.x * 22.4 / 48.0 * sign(vFlip), clamp(vWY / SHOP_H, 0.0, 1.0));
        if (vWY < SHOP_H) diffuseColor.rgb = texture2D(shopMap, su).rgb * 0.95;`)
      .replace('#include <emissivemap_fragment>', `#include <emissivemap_fragment>
        if (vWY < SHOP_H) totalEmissiveRadiance = texture2D(shopGlow, su).rgb * 0.9;`);
  };
  return mat;
}

function splitGroups(geom) {
  // ExtrudeGeometry is non indexed: group 0 = caps, group 1 = sides
  const parts = [];
  for (const grp of geom.groups) {
    const g = new THREE.BufferGeometry();
    for (const name of ['position', 'normal', 'uv']) {
      const a = geom.attributes[name];
      g.setAttribute(name, new THREE.BufferAttribute(a.array.slice(grp.start * a.itemSize, (grp.start + grp.count) * a.itemSize), a.itemSize));
    }
    parts[grp.materialIndex] = g;
  }
  return parts;
}

const FACADES = {
  brick: [0x7a4a9e, 0x8c3f86, 0x6a3f8e, 0xab196f],
  stone: [0x4a5ec0, 0x3f55b0, 0x5527aa],
  render: [0xa89be6, 0x9aa8e8, 0xc5c6e7],
  glass: [0x45a29e, 0x2f7f96, 0x3a6fa8],
};

function paint(g, colour, h, ao) {
  const n = g.attributes.position.count;
  const col = new Float32Array(n * 3);
  const pos = g.attributes.position.array;
  for (let i = 0; i < n; i++) {
    const k = ao ? 0.42 + 0.58 * Math.pow(Math.min(1, Math.max(0, pos[i * 3 + 1] / Math.max(1, h))), 0.55) : 1;
    col[i * 3] = colour.r * k; col[i * 3 + 1] = colour.g * k; col[i * 3 + 2] = colour.b * k;
  }
  g.setAttribute('color', new THREE.BufferAttribute(col, 3));
  return g;
}

function buildings(list, opts) {
  const caps = [], plant = [];
  const sidesBy = { brick: [], render: [], stone: [], glass: [] };
  const reds = [];
  const r = rng(11);
  list.forEach((b, i) => {
    if (b.p.length < 3) return;
    const shape = new THREE.Shape(b.p.map(([x, z]) => new THREE.Vector2(x, -z)));
    const g = new THREE.ExtrudeGeometry(shape, { depth: b.h, bevelEnabled: false });
    g.rotateX(-Math.PI / 2);
    const kind = b.h > 42 ? 'glass' : r() < 0.5 ? 'brick' : r() < 0.6 ? 'stone' : 'render';
    const pal = FACADES[kind];
    const wall = new THREE.Color(pal[Math.floor(r() * pal.length)]).convertSRGBToLinear();
    const roof = new THREE.Color(r() < 0.4 ? PALETTE.midnight : PALETTE.oil).lerp(new THREE.Color(PALETTE.grape), r() * 0.45).convertSRGBToLinear();
    const [c, s] = splitGroups(g);
    if (c) caps.push(paint(c, roof, b.h, false));
    if (s) sidesBy[kind].push(paint(s, wall, b.h, true));
    g.dispose();

    // rooftop plant on bigger blocks, a red warning light on towers
    let cx = 0, cz = 0, area = 0;
    for (let k = 0; k < b.p.length; k++) {
      const [x1, z1] = b.p[k], [x2, z2] = b.p[(k + 1) % b.p.length];
      const f = x1 * z2 - x2 * z1;
      area += f; cx += (x1 + x2) * f; cz += (z1 + z2) * f;
    }
    area /= 2;
    if (Math.abs(area) > 1) { cx /= 6 * area; cz /= 6 * area; } else { cx = b.p[0][0]; cz = b.p[0][1]; }
    if (Math.abs(area) > 300) {
      const n = 1 + Math.floor(r() * 3);
      for (let k = 0; k < n; k++) {
        const w = 2 + r() * 3.5, d = 2 + r() * 3.5, hh = 1.2 + r() * 2;
        const box = new THREE.BoxGeometry(w, hh, d);
        box.translate(cx + (r() - 0.5) * 6, b.h + hh / 2, cz + (r() - 0.5) * 6);
        plant.push(paint(box.toNonIndexed(), new THREE.Color(0x3a3f6a).convertSRGBToLinear(), 1, false));
      }
    }
    if (b.h > 45) reds.push([cx, b.h + 1.2, cz]);
  });
  const group = new THREE.Group();
  let red = null;
  if (caps.length) {
    // one wall mesh per facade style
    let walls = null;
    for (const [kind, list] of Object.entries(sidesBy)) {
      if (!list.length) continue;
      const tex = windowTextures(kind);
      const wallMat = withShopfronts(toon({ vertexColors: true, map: tex.map, emissive: 0xffffff, emissiveMap: tex.emissiveMap, emissiveIntensity: kind === 'glass' ? 0.75 : 0.6 }));
      const m = new THREE.Mesh(mergeGeometries(list), wallMat);
      m.castShadow = m.receiveShadow = opts.shadows;
      group.add(m);
      if (!opts.lowEnd) group.add(inkOutline(m, 0.25));
      walls = walls || m;
    }
    const roofs = new THREE.Mesh(mergeGeometries(caps), toon({ vertexColors: true }));
    roofs.castShadow = roofs.receiveShadow = opts.shadows;
    group.add(roofs);
    if (!opts.lowEnd) group.add(inkOutline(roofs, 0.25));
    if (plant.length) {
      const p = new THREE.Mesh(mergeGeometries(plant.map((g) => { g.deleteAttribute('uv'); return g; })), toon({ vertexColors: true }));
      p.castShadow = opts.shadows;
      group.add(p);
    }
  }
  if (reds.length) {
    red = new THREE.InstancedMesh(new THREE.SphereGeometry(0.45, 8, 6), new THREE.MeshBasicMaterial({ color: 0xff2a2a }), reds.length);
    const m = new THREE.Matrix4();
    reds.forEach((p, i) => { m.makeTranslation(p[0], p[1], p[2]); red.setMatrixAt(i, m); });
    group.add(red);
  }
  return { group, red };
}

// ---------------------------------------------------------------- streets

function streets(scene, graph, opts) {
  const pave = [], road = [], kerb = [], yellow = [];
  for (const e of graph.edges) {
    const w = roadWidth(e.kind);
    pave.push(ribbon(e.pts, w + 5, 0.02));
    road.push(ribbon(e.pts, w, 0.045));
    const trim = w / 2 + 2;
    const pts = sample(graph, e, trim, e.len - trim);
    if (pts.length > 1 && hasKerb(e.kind)) {
      for (const s of [-1, 1]) {
        kerb.push(ribbon(pts, 0.32, 0.06, s * (w / 2)));
        yellow.push(ribbon(pts, 0.1, 0.062, s * (w / 2 - 0.35)));
        yellow.push(ribbon(pts, 0.1, 0.062, s * (w / 2 - 0.58)));
      }
    }
  }
  graph.nodes.forEach((n) => {
    const w = Math.max(...n.out.map((o) => roadWidth(graph.edges[o.edge].kind)));
    pave.push(disc(n.x, n.z, (w + 5) / 2, 0.021));
    road.push(disc(n.x, n.z, w / 2 + 0.6, 0.046));
  });
  const mesh = (list, mat, receive = true) => {
    const m = new THREE.Mesh(mergeGeometries(list), mat);
    m.receiveShadow = receive && opts.shadows;
    scene.add(m);
    return m;
  };
  mesh(pave, toon({ color: COLOURS.pavement }));
  mesh(road, toon({ color: COLOURS.road }));
  if (kerb.length) mesh(kerb, toon({ color: COLOURS.kerb }));
  if (yellow.length) mesh(yellow, new THREE.MeshBasicMaterial({ color: 0xf2c14e }), false);

  // zebra crossings just outside busy junctions
  const zebra = [];
  graph.nodes.forEach((n) => {
    if (n.out.length < 3) return;
    for (const o of n.out) {
      const e = graph.edges[o.edge];
      const w = roadWidth(e.kind);
      if (e.len < 30 || w < 7 || !hasKerb(e.kind)) continue;
      const d = o.dir === 1 ? w / 2 + 3.5 : e.len - w / 2 - 3.5;
      zebra.push({ p: graph.pointAt(e, d), w });
    }
  });
  if (zebra.length) {
    const stripes = zebra.reduce((s, z) => s + Math.floor(z.w / 1.0), 0);
    const inst = new THREE.InstancedMesh(new THREE.BoxGeometry(0.55, 0.02, 2.6), toon({ color: 0xe8ecea, emissive: 0x2a2f2e }), stripes);
    const m = new THREE.Matrix4(), q = new THREE.Quaternion(), up = new THREE.Vector3(0, 1, 0);
    let k = 0;
    for (const z of zebra) {
      const n = Math.floor(z.w / 1.0);
      const fx = Math.sin(z.p.h), fz = -Math.cos(z.p.h);
      const rx = -fz, rz = fx;
      q.setFromAxisAngle(up, Math.atan2(fx, fz));
      for (let i = 0; i < n; i++) {
        const off = (i - (n - 1) / 2) * 1.0;
        m.compose(new THREE.Vector3(z.p.x + rx * off, 0.065, z.p.z + rz * off), q, new THREE.Vector3(1, 1, 1));
        inst.setMatrixAt(k++, m);
      }
    }
    inst.receiveShadow = opts.shadows;
    scene.add(inst);
  }

  // street lamps with warm pools of light on the road
  const lamps = [];
  for (const e of graph.edges) {
    const w = roadWidth(e.kind);
    let side = e.i % 2 ? 1 : -1;
    for (let d = 10; d < e.len - 6; d += 26) {
      const p = graph.pointAt(e, d);
      const nx = Math.cos(p.h), nz = Math.sin(p.h);
      lamps.push({ x: p.x + nx * side * (w / 2 + 1.4), z: p.z + nz * side * (w / 2 + 1.4), ax: -nx * side, az: -nz * side });
      side = -side;
    }
  }
  if (lamps.length) {
    const post = new THREE.CylinderGeometry(0.08, 0.13, 6.2, 8);
    post.translate(0, 3.1, 0);
    const arm = new THREE.BoxGeometry(0.1, 0.1, 1.3);
    arm.translate(0, 6.1, 0.6);
    const posts = new THREE.InstancedMesh(mergeGeometries([post.toNonIndexed(), arm.toNonIndexed()].map((g) => { g.deleteAttribute('uv'); return g; })), toon({ color: 0x1b2326 }), lamps.length);
    const heads = new THREE.InstancedMesh(new THREE.BoxGeometry(0.42, 0.18, 0.7), new THREE.MeshBasicMaterial({ color: new THREE.Color(COLOURS.lamp).multiplyScalar(1.6) }), lamps.length);
    const pools = new THREE.InstancedMesh(
      (() => { const g = new THREE.PlaneGeometry(11, 11); g.rotateX(-Math.PI / 2); return g; })(),
      new THREE.MeshBasicMaterial({ map: radialTexture('rgba(255,200,140,0.3)', 'rgba(255,200,140,0)'), transparent: true, depthWrite: false, blending: THREE.AdditiveBlending }),
      lamps.length,
    );
    const m = new THREE.Matrix4(), q = new THREE.Quaternion(), up = new THREE.Vector3(0, 1, 0), one = new THREE.Vector3(1, 1, 1);
    lamps.forEach((l, i) => {
      q.setFromAxisAngle(up, Math.atan2(l.ax, l.az));
      m.compose(new THREE.Vector3(l.x, 0, l.z), q, one);
      posts.setMatrixAt(i, m);
      m.compose(new THREE.Vector3(l.x + l.ax * 1.2, 6.05, l.z + l.az * 1.2), q, one);
      heads.setMatrixAt(i, m);
      m.compose(new THREE.Vector3(l.x + l.ax * 2.2, 0.07, l.z + l.az * 2.2), q, one);
      pools.setMatrixAt(i, m);
    });
    posts.castShadow = opts.shadows;
    pools.renderOrder = 2;
    scene.add(posts, heads, pools);
  }
}

// ---------------------------------------------------------------- copper and fibre

// Instanced pieces along every street, one per fibre cell.
function cellInstances(graph, geom, mat, visible) {
  const mesh = new THREE.InstancedMesh(geom, mat, graph.totalCells);
  const m = new THREE.Matrix4(), q = new THREE.Quaternion(), s = new THREE.Vector3(), p = new THREE.Vector3();
  const up = new THREE.Vector3(0, 1, 0);
  const offsets = [];
  const lens = [];
  let k = 0;
  for (const e of graph.edges) {
    offsets.push(k);
    for (let c = 0; c < e.cells; c++) {
      const a = graph.pointAt(e, c * e.cellLen), b = graph.pointAt(e, (c + 1) * e.cellLen);
      const len = Math.hypot(b.x - a.x, b.z - a.z) + 0.35;
      q.setFromAxisAngle(up, Math.atan2(b.x - a.x, b.z - a.z));
      p.set((a.x + b.x) / 2, 0, (a.z + b.z) / 2);
      s.set(1, 1, visible ? len : 0.0001);
      m.compose(p, q, s);
      mesh.setMatrixAt(k, m);
      lens.push(len);
      k++;
    }
  }
  mesh.instanceMatrix.needsUpdate = true;
  mesh.frustumCulled = false;
  return { mesh, offsets, lens };
}

function pulseShader(mat, time) {
  mat.onBeforeCompile = (sh) => {
    sh.uniforms.uTime = time;
    sh.vertexShader = sh.vertexShader
      .replace('#include <common>', '#include <common>\nvarying vec3 vW;')
      .replace('#include <project_vertex>', '#include <project_vertex>\nvW = (modelMatrix * instanceMatrix * vec4(transformed, 1.0)).xyz;');
    sh.fragmentShader = sh.fragmentShader
      .replace('#include <common>', '#include <common>\nvarying vec3 vW;\nuniform float uTime;')
      .replace('#include <color_fragment>', `#include <color_fragment>
        float pulse = pow(0.5 + 0.5 * sin((vW.x + vW.z) * 0.32 - uTime * 7.0), 10.0);
        diffuseColor.rgb *= 0.8 + pulse * 1.6;`);
  };
}

export function buildWorld(area, graph, opts = {}) {
  const scene = new THREE.Scene();
  scene.background = new THREE.Color(0x1c2f78);
  scene.fog = new THREE.Fog(0x2d3a86, 150, 950); // blue night haze that only builds up in the distance
  const time = { value: 0 };

  scene.add(new THREE.HemisphereLight(0xaab8ff, 0x2a2060, 2.4));
  scene.add(new THREE.AmbientLight(0x5a6ac0, 0.8));
  const moon = new THREE.DirectionalLight(0xc4ceff, 3.2); // cool moonlight
  moon.position.copy(SUN_DIR).multiplyScalar(160);
  scene.add(moon, moon.target);
  if (opts.shadows) {
    moon.castShadow = true;
    moon.shadow.mapSize.set(2048, 2048);
    const c = moon.shadow.camera;
    c.left = c.bottom = -90; c.right = c.top = 90; c.near = 1; c.far = 500;
    moon.shadow.bias = -0.0004;
    moon.shadow.normalBias = 0.4;
  }

  const R = area.radius;
  const sparkles = sky(scene, R);
  const ground = new THREE.Mesh(new THREE.CircleGeometry(3000, 64), toon({ color: COLOURS.ground }));
  ground.rotation.x = -Math.PI / 2;
  ground.receiveShadow = !!opts.shadows;
  scene.add(ground);

  streets(scene, graph, opts);
  const bld = buildings(area.buildings || [], opts);
  scene.add(bld.group);
  const props = buildProps(graph, area, opts);
  scene.add(props.group);

  // the old copper network, dashed down the middle of every street
  const copperGeom = new THREE.BoxGeometry(0.2, 0.05, 0.55);
  copperGeom.translate(0, 0.08, 0);
  const copper = cellInstances(graph, copperGeom, new THREE.MeshBasicMaterial({ color: COLOURS.copper, transparent: true, opacity: 0.8 }), true);
  scene.add(copper.mesh);

  // fibre: a glowing cable with light pulses running along it, plus a soft spill on the road
  const fibreGeom = new THREE.CylinderGeometry(0.19, 0.19, 1, 10, 1, true);
  fibreGeom.rotateX(Math.PI / 2);
  fibreGeom.translate(0, 0.24, 0);
  const fibreMat = new THREE.MeshBasicMaterial({ color: new THREE.Color(COLOURS.fibre).multiplyScalar(1.2) });
  pulseShader(fibreMat, time);
  const fibre = cellInstances(graph, fibreGeom, fibreMat, false);
  scene.add(fibre.mesh);
  const glowGeom = new THREE.PlaneGeometry(2.4, 1);
  glowGeom.rotateX(-Math.PI / 2);
  glowGeom.translate(0, 0.075, 0);
  const glowMat = new THREE.MeshBasicMaterial({ map: stripTexture(), color: COLOURS.fibre, transparent: true, opacity: 0.55, depthWrite: false, blending: THREE.AdditiveBlending });
  const glow = cellInstances(graph, glowGeom, glowMat, false);
  glow.mesh.renderOrder = 3;
  scene.add(glow.mesh);

  const m = new THREE.Matrix4(), p = new THREE.Vector3(), q = new THREE.Quaternion(), s = new THREE.Vector3();
  const setCell = (inst, k, len) => {
    inst.mesh.getMatrixAt(k, m);
    m.decompose(p, q, s);
    s.z = len;
    m.compose(p, q, s);
    inst.mesh.setMatrixAt(k, m);
    inst.mesh.instanceMatrix.needsUpdate = true;
  };

  return {
    scene,
    fibreMat,
    glowMat,
    update(t, focus) {
      time.value = t;
      for (const s of sparkles) s.material.opacity = 0.55 + 0.45 * Math.sin(t * 1.6 + s.userData.phase);
      if (bld.red) bld.red.visible = Math.floor(t * 1.2) % 2 === 0;
      if (opts.shadows && focus) {
        moon.target.position.set(focus.x, 0, focus.z);
        moon.position.set(focus.x + SUN_DIR.x * 160, SUN_DIR.y * 160, focus.z + SUN_DIR.z * 160);
      }
    },
    layCell(edge, cell) {
      const k = fibre.offsets[edge] + cell;
      setCell(fibre, k, fibre.lens[k]);
      setCell(glow, k, glow.lens[k]);
      setCell(copper, k, 0.0001);
    },
    resetFibre() {
      for (let k = 0; k < graph.totalCells; k++) {
        setCell(fibre, k, 0.0001);
        setCell(glow, k, 0.0001);
        setCell(copper, k, copper.lens[k]);
      }
    },
  };
}
