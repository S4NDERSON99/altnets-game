// London street furniture: phone and pillar boxes, plane trees, bollards,
// street name plates with the real street names, black cabs, a bus, benches
// and bins. Each prop type is one instanced mesh, so the whole kit costs a
// handful of draw calls. Everything sits on pavements or at the kerb, clear
// of the centre line the runner and coppers use.
import * as THREE from 'three';
import { mergeGeometries } from 'three/addons/utils/BufferGeometryUtils.js';
import { roadWidth, toon, inkOutline, PALETTE } from './world.js';

const S = 1.3; // cartoon scale to match the 4m mascot
const RED = 0xfc1057, BLACK = 0x0b0c10, GOLD = 0xc9a24a;

function rng(seed) {
  return () => {
    seed = (seed + 0x6d2b79f5) | 0;
    let t = Math.imul(seed ^ (seed >>> 15), 1 | seed);
    t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t;
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
}

// ---------------------------------------------------------------- geometry kit

// part(geometry, colour, x, y, z, rotY) -> coloured, positioned piece
function part(geo, colour, x = 0, y = 0, z = 0, ry = 0) {
  let g = geo.index ? geo.toNonIndexed() : geo;
  g.deleteAttribute('uv');
  g.computeVertexNormals(); // flat facets for the low-poly look
  if (ry) g.rotateY(ry);
  g.translate(x, y, z);
  const c = new THREE.Color(colour);
  const n = g.attributes.position.count;
  const col = new Float32Array(n * 3);
  for (let i = 0; i < n; i++) { col[i * 3] = c.r; col[i * 3 + 1] = c.g; col[i * 3 + 2] = c.b; }
  g.setAttribute('color', new THREE.BufferAttribute(col, 3));
  return g;
}
const box = (w, h, d) => new THREE.BoxGeometry(w * S, h * S, d * S);
const cyl = (rt, rb, h, seg = 14) => new THREE.CylinderGeometry(rt * S, rb * S, h * S, seg);
const at = (v) => v * S;

function kit(parts) {
  return mergeGeometries(parts);
}

const phoneBox = () => kit([
  part(box(1.1, 0.18, 1.1), RED, 0, at(0.09)),
  part(box(1.0, 2.3, 1.0), RED, 0, at(1.33)),
  part(box(1.1, 0.26, 1.1), RED, 0, at(2.6)),
  part(cyl(0.5, 0.58, 0.28, 4), RED, 0, at(2.87), 0, Math.PI / 4),
  part(box(0.24, 0.16, 0.24), RED, 0, at(3.08)),
]);
const phoneGlow = () => kit([
  ...[0, 1, 2, 3].map((k) => part(box(0.78, 1.55, 0.04), 0xffe2a6, Math.sin((k * Math.PI) / 2) * at(0.51), at(1.35), Math.cos((k * Math.PI) / 2) * at(0.51), (k * Math.PI) / 2)),
  ...[0, 1, 2, 3].map((k) => part(box(0.8, 0.13, 0.04), 0xffffff, Math.sin((k * Math.PI) / 2) * at(0.56), at(2.6), Math.cos((k * Math.PI) / 2) * at(0.56), (k * Math.PI) / 2)),
]);
const pillarBox = () => kit([
  part(cyl(0.36, 0.38, 0.16), BLACK, 0, at(0.08)),
  part(cyl(0.34, 0.34, 1.25), RED, 0, at(0.78)),
  part(cyl(0.4, 0.38, 0.12), RED, 0, at(1.44)),
  part(new THREE.SphereGeometry(at(0.36), 14, 8, 0, Math.PI * 2, 0, Math.PI / 2), RED, 0, at(1.5)),
  part(box(0.36, 0.05, 0.05), BLACK, 0, at(1.2), at(-0.34)),
]);
const bollard = () => kit([
  part(cyl(0.12, 0.14, 0.95, 10), BLACK, 0, at(0.48)),
  part(cyl(0.13, 0.13, 0.08, 10), GOLD, 0, at(0.82)),
  part(new THREE.SphereGeometry(at(0.12), 10, 6, 0, Math.PI * 2, 0, Math.PI / 2), BLACK, 0, at(0.95)),
]);
const trunk = () => kit([
  part(cyl(0.16, 0.24, 3.2, 8), 0x6a5a8a, 0, at(1.6)),
  part(cyl(0.1, 0.14, 1.2, 6), 0x5a4a7a, at(0.3), at(3.2), 0, 0),
]);
const canopy = () => kit([
  part(new THREE.IcosahedronGeometry(at(1.7), 1), 0xffffff, 0, at(4.6)),
  part(new THREE.IcosahedronGeometry(at(1.3), 1), 0xffffff, at(1.1), at(4.1), at(0.4)),
  part(new THREE.IcosahedronGeometry(at(1.25), 1), 0xffffff, at(-1.0), at(4.3), at(-0.3)),
  part(new THREE.IcosahedronGeometry(at(1.1), 1), 0xffffff, at(0.2), at(5.6), at(-0.2)),
]);
const bench = () => kit([
  part(box(1.8, 0.08, 0.5), 0x7a5234, 0, at(0.5)),
  part(box(1.8, 0.4, 0.07), 0x7a5234, 0, at(0.78), at(0.24)),
  part(box(0.08, 0.5, 0.5), BLACK, at(-0.8), at(0.25)),
  part(box(0.08, 0.5, 0.5), BLACK, at(0.8), at(0.25)),
]);
const bin = () => kit([
  part(cyl(0.3, 0.26, 0.9, 12), BLACK, 0, at(0.45)),
  part(cyl(0.32, 0.32, 0.06, 12), GOLD, 0, at(0.88)),
]);
const cab = () => kit([
  part(box(1.8, 0.62, 4.2), BLACK, 0, at(0.62)),
  part(box(1.62, 0.62, 2.3), BLACK, 0, at(1.22), at(0.25)),
  part(box(1.64, 0.42, 2.2), 0x2c3a44, 0, at(1.24), at(0.25)),
  part(box(1.85, 0.12, 4.25), 0x2a2d31, 0, at(0.32)),
  ...[[-0.8, -1.3], [0.8, -1.3], [-0.8, 1.35], [0.8, 1.35]].map(([x, z]) => {
    const w = cyl(0.36, 0.36, 0.26, 12);
    w.rotateZ(Math.PI / 2);
    return part(w, 0x0c0d0e, at(x), at(0.36), at(z));
  }),
]);
const cabGlow = () => kit([
  part(box(0.5, 0.16, 0.2), 0xffc93a, 0, at(1.62), at(-0.35)),
  part(box(1.62, 0.12, 0.05), 0xfff2c8, 0, at(0.72), at(-2.12)),
]);
const bus = () => kit([
  part(box(2.5, 4.1, 10.5), RED, 0, at(2.45)),
  part(box(2.52, 0.9, 10.3), 0x2b3238, 0, at(1.75)),
  part(box(2.52, 0.9, 10.3), 0x2b3238, 0, at(3.55)),
  part(box(2.55, 0.25, 10.6), 0xf4ecd8, 0, at(2.62)),
  part(box(2.4, 0.12, 10.4), 0x2a2d31, 0, at(0.45)),
  ...[[-1.1, -3.6], [1.1, -3.6], [-1.1, 3.4], [1.1, 3.4]].map(([x, z]) => {
    const w = cyl(0.5, 0.5, 0.3, 14);
    w.rotateZ(Math.PI / 2);
    return part(w, 0x0c0d0e, at(x), at(0.5), at(z));
  }),
]);
const busGlow = () => kit([
  part(box(2.54, 0.78, 10.2), 0xffd9a0, 0, at(1.75)),
  part(box(2.54, 0.78, 10.2), 0xffd9a0, 0, at(3.55)),
]);
const busStop = () => kit([
  part(cyl(0.05, 0.05, 2.9, 8), 0x2a2d31, 0, at(1.45)),
  part(box(0.06, 2.2, 3.2), 0x2a2d31, at(-0.7), at(1.1)),
  part(box(1.5, 0.08, 3.3), 0x2a2d31, 0, at(2.25)),
  part(box(0.04, 1.9, 3.0), 0xa9c6cc, at(-0.66), at(1.15)),
]);

function mesh(geo, mat, count) {
  const m = new THREE.InstancedMesh(geo, mat, Math.max(1, count));
  m.count = 0;
  return m;
}

// ---------------------------------------------------------------- canvas plates

function plateTexture(name, district) {
  const c = document.createElement('canvas');
  c.width = 512; c.height = 160;
  const x = c.getContext('2d');
  x.fillStyle = '#1a1a1a';
  x.beginPath(); x.roundRect(0, 0, 512, 160, 26); x.fill();
  x.fillStyle = '#fbfaf5';
  x.beginPath(); x.roundRect(8, 8, 496, 144, 20); x.fill();
  x.strokeStyle = '#1a1a1a'; x.lineWidth = 4;
  x.beginPath(); x.roundRect(18, 18, 476, 124, 14); x.stroke();
  x.fillStyle = '#111';
  x.textAlign = 'center'; x.textBaseline = 'middle';
  let size = 64;
  const label = name.toUpperCase();
  do { x.font = `800 ${size}px Outfit, system-ui, sans-serif`; size -= 4; } while (x.measureText(label).width > 440 && size > 26);
  x.fillText(label, 256, district ? 70 : 82);
  if (district) {
    x.fillStyle = '#c8232c';
    x.font = '800 30px Outfit, system-ui, sans-serif';
    x.fillText(district, 256, 118);
  }
  const t = new THREE.CanvasTexture(c);
  t.colorSpace = THREE.SRGBColorSpace;
  t.anisotropy = 4;
  return t;
}

function destinationTexture() {
  const c = document.createElement('canvas');
  c.width = 512; c.height = 96;
  const x = c.getContext('2d');
  x.fillStyle = '#111'; x.fillRect(0, 0, 512, 96);
  x.fillStyle = '#ffb81c'; x.font = '800 44px Outfit, system-ui, sans-serif'; x.textAlign = 'center'; x.textBaseline = 'middle';
  x.fillText('BRIGHTER TOMORROW', 256, 50);
  const t = new THREE.CanvasTexture(c);
  t.colorSpace = THREE.SRGBColorSpace;
  return t;
}

// ---------------------------------------------------------------- placement

function buildingIndex(buildings) {
  const cell = 25, grid = new Map();
  buildings.forEach((b) => {
    let x0 = Infinity, x1 = -Infinity, z0 = Infinity, z1 = -Infinity;
    for (const [x, z] of b.p) { x0 = Math.min(x0, x); x1 = Math.max(x1, x); z0 = Math.min(z0, z); z1 = Math.max(z1, z); }
    for (let i = Math.floor(x0 / cell); i <= Math.floor(x1 / cell); i++) {
      for (let j = Math.floor(z0 / cell); j <= Math.floor(z1 / cell); j++) {
        const k = `${i},${j}`;
        (grid.get(k) || grid.set(k, []).get(k)).push(b.p);
      }
    }
  });
  return (x, z, pad = 0.8) => {
    for (const p of grid.get(`${Math.floor(x / cell)},${Math.floor(z / cell)}`) || []) {
      let inside = false;
      for (let i = 0, j = p.length - 1; i < p.length; j = i++) {
        const [xi, zi] = p[i], [xj, zj] = p[j];
        if ((zi > z) !== (zj > z) && x < ((xj - xi) * (z - zi)) / (zj - zi) + xi) inside = !inside;
      }
      if (inside) return true;
      if (pad) {
        for (let i = 0, j = p.length - 1; i < p.length; j = i++) {
          const [ax, az] = p[j], [bx, bz] = p[i];
          const vx = bx - ax, vz = bz - az, L2 = vx * vx + vz * vz || 1;
          const t = Math.max(0, Math.min(1, ((x - ax) * vx + (z - az) * vz) / L2));
          if (Math.hypot(ax + vx * t - x, az + vz * t - z) < pad) return true;
        }
      }
    }
    return false;
  };
}

export function buildProps(graph, area, opts = {}) {
  const group = new THREE.Group();
  const low = !!opts.lowEnd;
  const R = rng(1234 + graph.edges.length);
  const inBuilding = buildingIndex(area.buildings || []);
  const taken = []; // [x, z, radius]
  const free = (x, z, r) => !taken.some(([tx, tz, tr]) => Math.hypot(tx - x, tz - z) < tr + r);
  const take = (x, z, r) => taken.push([x, z, r]);

  // keep clear of the street lamps world.js places
  for (const e of graph.edges) {
    const w = roadWidth(e.kind);
    let side = e.i % 2 ? 1 : -1;
    for (let d = 10; d < e.len - 6; d += 26) {
      const p = graph.pointAt(e, d);
      take(p.x + Math.cos(p.h) * side * (w / 2 + 1.4), p.z + Math.sin(p.h) * side * (w / 2 + 1.4), 2.2);
      side = -side;
    }
  }
  const nearJunction = (x, z, r) => graph.nodes.some((n) => n.out.length > 2 && Math.hypot(n.x - x, n.z - z) < r);

  // a spot on edge e, d metres from node a, `off` metres to one side
  const spot = (e, d, side, off) => {
    const p = graph.pointAt(e, d);
    const nx = Math.cos(p.h) * side, nz = Math.sin(p.h) * side;
    return { x: p.x + nx * off, z: p.z + nz * off, h: p.h, nx, nz };
  };
  const yawFacing = (fx, fz) => Math.atan2(-fx, -fz);

  let counts_park = 0;
  const lists = { phone: [], pillar: [], bollard: [], tree: [], bench: [], bin: [], cab: [], bus: [], stop: [] };
  const push = (k, x, z, yaw, s = 1, colour) => lists[k].push({ x, z, yaw, s, colour });

  const big = (k) => ['trunk', 'primary', 'secondary', 'tertiary'].includes(k);
  const leafy = (k) => ['residential', 'tertiary', 'unclassified', 'living_street', 'pedestrian', 'road'].includes(k);

  // junction furniture: bollards on the corners, a phone or pillar box nearby
  graph.nodes.forEach((n, ni) => {
    if (n.out.length < 3) return;
    for (const o of n.out) {
      const e = graph.edges[o.edge];
      const w = roadWidth(e.kind);
      if (e.len < w + 6) continue;
      const d = o.dir === 1 ? w / 2 + 2.5 : e.len - w / 2 - 2.5;
      for (const side of [-1, 1]) {
        for (const k of big(e.kind) ? [0, 1] : [0]) {
          const s = spot(e, d + (o.dir === 1 ? k * 1.4 : -k * 1.4), side, w / 2 + 0.55);
          if (lists.bollard.length < 220 && !inBuilding(s.x, s.z, 0.3) && free(s.x, s.z, 0.4)) { push('bollard', s.x, s.z, 0); take(s.x, s.z, 0.5); }
        }
      }
    }
    const o = n.out[ni % n.out.length];
    const e = graph.edges[o.edge];
    const w = roadWidth(e.kind);
    if (e.len < w + 16) return;
    const d = o.dir === 1 ? w / 2 + 7 + R() * 3 : e.len - w / 2 - 7 - R() * 3;
    const side = R() < 0.5 ? -1 : 1;
    const s = spot(e, d, side, w / 2 + 1.5);
    if (inBuilding(s.x, s.z) || !free(s.x, s.z, 1.2)) return;
    const kind = R() < 0.6 && lists.phone.length < 8 ? 'phone' : lists.pillar.length < 10 ? 'pillar' : null;
    if (!kind) return;
    push(kind, s.x, s.z, yawFacing(-s.nx, -s.nz));
    take(s.x, s.z, 1.4);
  });

  // along streets: trees, benches, bins, parked cabs
  for (const e of graph.edges) {
    const w = roadWidth(e.kind);
    const r = rng(e.i * 7919 + 17);
    if (leafy(e.kind) && e.len > 30) {
      for (let d = 12 + r() * 8; d < e.len - 12; d += low ? 40 : 20 + r() * 10) {
        for (const side of [-1, 1]) {
          if (r() < 0.25) continue;
          const s = spot(e, d, side, w / 2 + 1.9);
          if (nearJunction(s.x, s.z, w / 2 + 6) || inBuilding(s.x, s.z, 1.4) || !free(s.x, s.z, 1.8)) continue;
          if (lists.tree.length >= (low ? 60 : 140)) break;
          const tint = new THREE.Color().setHSL(0.47 + r() * 0.06, 0.5 + r() * 0.15, 0.22 + r() * 0.1);
          push('tree', s.x, s.z, r() * Math.PI * 2, 0.85 + r() * 0.35, tint);
          take(s.x, s.z, 2.2);
        }
      }
    }
    if (e.len > 40 && r() < 0.5) {
      const d = 15 + r() * (e.len - 30);
      const side = r() < 0.5 ? -1 : 1;
      const s = spot(e, d, side, w / 2 + 1.8);
      if (!nearJunction(s.x, s.z, w / 2 + 6) && !inBuilding(s.x, s.z, 1) && free(s.x, s.z, 1.4)) {
        if (lists.bench.length < 30 && r() < 0.5) { push('bench', s.x, s.z, yawFacing(-s.nx, -s.nz) + Math.PI); take(s.x, s.z, 1.6); }
        else if (lists.bin.length < 30) { push('bin', s.x, s.z, 0); take(s.x, s.z, 0.8); }
      }
    }
    if (big(e.kind) && e.len > 45 && w >= 8) {
      for (let d = 18 + r() * 10; d < e.len - 18; d += 34 + r() * 20) {
        if (r() < 0.55 || lists.cab.length >= (low ? 6 : 14)) continue;
        const side = r() < 0.5 ? -1 : 1;
        const s = spot(e, d, side, w / 2 - at(0.95));
        if (nearJunction(s.x, s.z, w / 2 + 8) || !free(s.x, s.z, 3.2)) continue;
        push('cab', s.x, s.z, yawFacing(Math.sin(s.h) * (side > 0 ? 1 : -1), -Math.cos(s.h) * (side > 0 ? 1 : -1)));
        take(s.x, s.z, 3.4);
      }
    }
  }

  // open ground (squares, gardens, gaps between blocks): plant it like a park
  const R2 = (area.radius || 200) * 1.05;
  const pr = rng(9001 + graph.edges.length);
  let park = 0;
  for (let x = -R2; x <= R2; x += 11) {
    for (let z = -R2; z <= R2; z += 11) {
      if (Math.hypot(x, z) > R2 || park >= (low ? 40 : 110)) continue;
      const jx = x + (pr() - 0.5) * 6, jz = z + (pr() - 0.5) * 6;
      const near = graph.nearestOnEdges(jx, jz);
      if (!near) continue;
      const w = roadWidth(graph.edges[near.edge].kind);
      if (near.dist < w / 2 + 4.5 || inBuilding(jx, jz, 2.5) || !free(jx, jz, 3)) continue;
      if (pr() < 0.45) continue;
      const tint = new THREE.Color().setHSL(0.47 + pr() * 0.07, 0.5 + pr() * 0.15, 0.2 + pr() * 0.11);
      push('tree', jx, jz, pr() * Math.PI * 2, 0.9 + pr() * 0.5, tint);
      take(jx, jz, 3);
      park++;
      if (pr() < 0.12 && lists.bench.length < 40) {
        const bx = jx + 2.6, bz = jz;
        if (!inBuilding(bx, bz, 1) && free(bx, bz, 1.2)) { push('bench', bx, bz, pr() * Math.PI * 2); take(bx, bz, 1.4); }
      }
    }
  }
  counts_park = park;

  // one bus at a stop on the widest main road
  const wide = graph.edges.filter((e) => roadWidth(e.kind) >= 10 && e.len > 40).sort((a, b) => b.len - a.len)[0];
  if (wide) {
    const w = roadWidth(wide.kind);
    const d = wide.len / 2;
    const s = spot(wide, d, 1, w / 2 - at(1.35));
    if (free(s.x, s.z, 7)) {
      push('bus', s.x, s.z, yawFacing(Math.sin(s.h), -Math.cos(s.h)));
      take(s.x, s.z, 8);
      const st = spot(wide, d + 4, 1, w / 2 + 1.6);
      if (!inBuilding(st.x, st.z, 0.6)) push('stop', st.x, st.z, yawFacing(-st.nx, -st.nz));
    }
  }

  // ---------------------------------------------------------------- build meshes
  const solid = toon({ vertexColors: true, roughness: 0.62, metalness: 0.05 });
  const glowMat = new THREE.MeshBasicMaterial({ vertexColors: true });
  const leafMat = toon({ color: 0xffffff, roughness: 0.85, flatShading: true });
  const m4 = new THREE.Matrix4(), q = new THREE.Quaternion(), up = new THREE.Vector3(0, 1, 0);
  const fill = (inst, list, colours = false) => {
    list.forEach((it, i) => {
      q.setFromAxisAngle(up, it.yaw);
      m4.compose(new THREE.Vector3(it.x, 0, it.z), q, new THREE.Vector3(it.s, it.s, it.s));
      inst.setMatrixAt(i, m4);
      if (colours && it.colour) inst.setColorAt(i, it.colour);
    });
    inst.count = list.length;
    inst.instanceMatrix.needsUpdate = true;
    if (inst.instanceColor) inst.instanceColor.needsUpdate = true;
    return inst;
  };
  const add = (geoFn, mat, list, { shadow = false, colours = false } = {}) => {
    if (!list.length) return null;
    const inst = fill(mesh(geoFn(), mat, list.length), list, colours);
    inst.castShadow = shadow && !!opts.shadows && !low;
    inst.receiveShadow = !!opts.shadows;
    group.add(inst);
    return inst;
  };
  add(phoneBox, solid, lists.phone, { shadow: true });
  add(phoneGlow, glowMat, lists.phone);
  add(pillarBox, solid, lists.pillar, { shadow: true });
  add(bollard, solid, lists.bollard);
  add(trunk, solid, lists.tree, { shadow: true });
  add(canopy, leafMat, lists.tree, { shadow: true, colours: true });
  add(bench, solid, lists.bench);
  add(bin, solid, lists.bin);
  add(cab, solid, lists.cab, { shadow: true });
  add(cabGlow, glowMat, lists.cab);
  add(bus, solid, lists.bus, { shadow: true });
  add(busGlow, glowMat, lists.bus);
  add(busStop, solid, lists.stop);
  for (const b of lists.bus) {
    const board = new THREE.Mesh(new THREE.PlaneGeometry(at(2.1), at(0.4)), new THREE.MeshBasicMaterial({ map: destinationTexture() }));
    const fx = -Math.sin(b.yaw), fz = -Math.cos(b.yaw);
    board.position.set(b.x + fx * at(5.27), at(4.15), b.z + fz * at(5.27));
    board.rotation.y = b.yaw + Math.PI;
    group.add(board);
  }

  // street name plates: the real names, on posts at the start of each street
  const district = (area.postcode || '').split(' ')[0];
  const done = new Set();
  const plateGeo = new THREE.PlaneGeometry(at(1.6), at(0.5));
  const postGeo = new THREE.CylinderGeometry(at(0.04), at(0.04), at(2.3), 6);
  const posts = [];
  for (const e of graph.edges) {
    if (!e.name || e.len < 25 || done.size >= 40) continue;
    for (const end of [1, -1]) {
      const key = `${e.name}|${end}`;
      if (done.has(key) || done.size >= 40) continue;
      const w = roadWidth(e.kind);
      const d = end === 1 ? Math.min(e.len - 5, w / 2 + 5) : Math.max(5, e.len - w / 2 - 5);
      const side = end === 1 ? 1 : -1;
      const s = spot(e, d, side, w / 2 + 2.2);
      if (inBuilding(s.x, s.z, 0.4) || !free(s.x, s.z, 0.9)) continue;
      // face the runner arriving from this end, turned a little towards the road
      const fx = Math.sin(s.h) * -end, fz = -Math.cos(s.h) * -end;
      const yaw = yawFacing(fx, fz) - 0.5 * side * end;
      const tex = plateTexture(e.name, district);
      // back-to-back faces so the name reads the right way round from both directions
      const plateMat = toon({ map: tex, emissive: 0xffffff, emissiveMap: tex, emissiveIntensity: 0.28, roughness: 0.5 });
      for (const flip of [0, Math.PI]) {
        const plate = new THREE.Mesh(plateGeo, plateMat);
        plate.position.set(s.x, at(2.35), s.z);
        plate.rotation.y = yaw + Math.PI + flip;
        group.add(plate);
      }
      for (const k of [-1, 1]) posts.push({ x: s.x + Math.cos(yaw) * k * at(0.7), z: s.z - Math.sin(yaw) * k * at(0.7) });
      take(s.x, s.z, 1);
      done.add(key);
    }
  }
  if (posts.length) {
    const inst = new THREE.InstancedMesh(postGeo, toon({ color: 0x1b1d20, roughness: 0.6 }), posts.length);
    posts.forEach((p, i) => { m4.makeTranslation(p.x, at(1.15), p.z); inst.setMatrixAt(i, m4); });
    group.add(inst);
  }

  const counts = Object.fromEntries(Object.entries(lists).map(([k, v]) => [k, v.length]));
  counts.plates = done.size;
  counts.park = counts_park;
  return { group, counts, update() {} };
}
