// Builds the three.js city from an area: roads, pavements, buildings,
// the old copper line and the fibre that replaces it.
import * as THREE from 'three';
import { mergeGeometries } from 'three/addons/utils/BufferGeometryUtils.js';

export const COLOURS = {
  sky: 0x07100f,
  ground: 0x17242a,
  pavement: 0x4d6266,
  road: 0x33464b,
  wall: 0x152426,
  roof: 0x0f1a1c,
  copper: 0xc8703c,
  fibre: 0x1ecbc4,
  pink: 0xe8408f,
  yellow: 0xf6c521,
  orange: 0xf28a24,
  blue: 0x2f72e6,
};

const WIDTH = { trunk: 12, primary: 11, secondary: 10, tertiary: 9, unclassified: 7.5, residential: 7.5, road: 7.5, living_street: 6, pedestrian: 6, service: 5 };
export const roadWidth = (kind) => WIDTH[kind] || 7;

function ribbon(pts, width, y) {
  const n = pts.length;
  const pos = [];
  const idx = [];
  for (let i = 0; i < n; i++) {
    const p = pts[Math.max(0, i - 1)], q = pts[Math.min(n - 1, i + 1)];
    let dx = q[0] - p[0], dz = q[1] - p[1];
    const L = Math.hypot(dx, dz) || 1;
    dx /= L; dz /= L;
    const nx = -dz * width / 2, nz = dx * width / 2;
    pos.push(pts[i][0] + nx, y, pts[i][1] + nz, pts[i][0] - nx, y, pts[i][1] - nz);
    if (i) {
      const a = (i - 1) * 2;
      idx.push(a, a + 1, a + 2, a + 1, a + 3, a + 2);
    }
  }
  const g = new THREE.BufferGeometry();
  g.setAttribute('position', new THREE.Float32BufferAttribute(pos, 3));
  g.setIndex(idx);
  g.computeVertexNormals();
  return g;
}

function disc(x, z, r, y) {
  const g = new THREE.CircleGeometry(r, 16);
  g.rotateX(-Math.PI / 2);
  g.translate(x, y, z);
  return g.index ? g : g;
}

function upNormals(g) {
  const n = g.attributes.position.count;
  const arr = new Float32Array(n * 3);
  for (let i = 0; i < n; i++) arr[i * 3 + 1] = 1;
  g.setAttribute('normal', new THREE.BufferAttribute(arr, 3));
  g.deleteAttribute('uv');
  return g;
}

function windowTextures() {
  const size = 256, cols = 8, rows = 8;
  const base = document.createElement('canvas');
  base.width = base.height = size;
  const glow = document.createElement('canvas');
  glow.width = glow.height = size;
  const b = base.getContext('2d'), e = glow.getContext('2d');
  b.fillStyle = '#31474b';
  b.fillRect(0, 0, size, size);
  e.fillStyle = '#000';
  e.fillRect(0, 0, size, size);
  const cw = size / cols, ch = size / rows;
  const lit = ['#f6d67a', '#ffe3a3', '#9fe9e4', '#f5b25c'];
  for (let y = 0; y < rows; y++) for (let x = 0; x < cols; x++) {
    const wx = x * cw + cw * 0.3, wy = y * ch + ch * 0.28, ww = cw * 0.4, wh = ch * 0.42;
    b.fillStyle = '#1c2a2d';
    b.fillRect(wx, wy, ww, wh);
    if (Math.random() < 0.28) {
      const c = lit[Math.floor(Math.random() * lit.length)];
      b.fillStyle = c; b.fillRect(wx, wy, ww, wh);
      e.fillStyle = c; e.globalAlpha = 0.55 + Math.random() * 0.45; e.fillRect(wx, wy, ww, wh); e.globalAlpha = 1;
    }
  }
  const make = (c) => {
    const t = new THREE.CanvasTexture(c);
    t.wrapS = t.wrapT = THREE.RepeatWrapping;
    t.repeat.set(1 / 30, 1 / 28);
    t.colorSpace = THREE.SRGBColorSpace;
    t.anisotropy = 4;
    return t;
  };
  return { map: make(base), emissiveMap: make(glow) };
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

function buildings(list) {
  const caps = [], sides = [];
  for (const b of list) {
    if (b.p.length < 3) continue;
    const shape = new THREE.Shape(b.p.map(([x, z]) => new THREE.Vector2(x, -z)));
    const g = new THREE.ExtrudeGeometry(shape, { depth: b.h, bevelEnabled: false });
    g.rotateX(-Math.PI / 2);
    const [c, s] = splitGroups(g);
    if (c) caps.push(c);
    if (s) sides.push(s);
    g.dispose();
  }
  const group = new THREE.Group();
  if (sides.length) {
    const tex = windowTextures();
    const wallMat = new THREE.MeshLambertMaterial({ color: 0xffffff, map: tex.map, emissive: 0xffffff, emissiveMap: tex.emissiveMap, emissiveIntensity: 0.55 });
    group.add(new THREE.Mesh(mergeGeometries(sides), wallMat));
    group.add(new THREE.Mesh(mergeGeometries(caps), new THREE.MeshLambertMaterial({ color: 0x1a2a2d })));
  }
  return group;
}

// Instanced boxes along every street, one per fibre cell.
function cellInstances(graph, geom, mat, visible) {
  const mesh = new THREE.InstancedMesh(geom, mat, graph.totalCells);
  const m = new THREE.Matrix4(), q = new THREE.Quaternion(), s = new THREE.Vector3(), p = new THREE.Vector3();
  const up = new THREE.Vector3(0, 1, 0);
  const offsets = [];
  let k = 0;
  for (const e of graph.edges) {
    offsets.push(k);
    for (let c = 0; c < e.cells; c++) {
      const a = graph.pointAt(e, c * e.cellLen), b = graph.pointAt(e, (c + 1) * e.cellLen);
      const len = Math.hypot(b.x - a.x, b.z - a.z) + 0.3;
      q.setFromAxisAngle(up, Math.atan2(b.x - a.x, b.z - a.z));
      p.set((a.x + b.x) / 2, 0, (a.z + b.z) / 2);
      s.set(1, 1, visible ? len : 0.0001);
      m.compose(p, q, s);
      mesh.setMatrixAt(k, m);
      mesh.userData[k] = len;
      k++;
    }
  }
  mesh.instanceMatrix.needsUpdate = true;
  mesh.frustumCulled = false;
  return { mesh, offsets };
}

export function buildWorld(area, graph) {
  const scene = new THREE.Scene();
  scene.background = new THREE.Color(0x0c1a1c);
  scene.fog = new THREE.FogExp2(0x0c1a1c, 0.0055);

  scene.add(new THREE.HemisphereLight(0x8fb8c6, 0x1a2624, 2.2));
  scene.add(new THREE.AmbientLight(0x6f8f96, 0.9));
  const moon = new THREE.DirectionalLight(0xb9dbe6, 1.6);
  moon.position.set(-120, 200, 80);
  scene.add(moon);

  const R = area.radius;
  const ground = new THREE.Mesh(new THREE.CircleGeometry(R * 4, 48), new THREE.MeshLambertMaterial({ color: COLOURS.ground }));
  ground.rotation.x = -Math.PI / 2;
  scene.add(ground);

  // pavements under roads, then the road surface
  const pave = [], road = [];
  for (const e of graph.edges) {
    const w = roadWidth(e.kind);
    pave.push(ribbon(e.pts, w + 3.2, 0.02));
    road.push(ribbon(e.pts, w, 0.04));
  }
  graph.nodes.forEach((n) => {
    const w = Math.max(...n.out.map((o) => roadWidth(graph.edges[o.edge].kind)));
    pave.push(disc(n.x, n.z, (w + 3.2) / 2, 0.021));
    road.push(disc(n.x, n.z, w / 2, 0.041));
  });
  scene.add(new THREE.Mesh(mergeGeometries(pave.map(upNormals)), new THREE.MeshLambertMaterial({ color: COLOURS.pavement })));
  scene.add(new THREE.Mesh(mergeGeometries(road.map(upNormals)), new THREE.MeshLambertMaterial({ color: COLOURS.road })));

  scene.add(buildings(area.buildings || []));

  // the old copper network, dashed down the middle of every street
  const copperGeom = new THREE.BoxGeometry(0.22, 0.06, 1);
  copperGeom.scale(1, 1, 0.55);
  copperGeom.translate(0, 0.08, 0);
  const copper = cellInstances(graph, copperGeom, new THREE.MeshBasicMaterial({ color: COLOURS.copper, transparent: true, opacity: 0.75 }), true);
  scene.add(copper.mesh);

  // fibre: hidden until laid
  const fibreGeom = new THREE.BoxGeometry(0.55, 0.12, 1);
  fibreGeom.translate(0, 0.12, 0);
  const fibreMat = new THREE.MeshBasicMaterial({ color: new THREE.Color(COLOURS.fibre).multiplyScalar(1.25) });
  const fibre = cellInstances(graph, fibreGeom, fibreMat, false);
  scene.add(fibre.mesh);

  const m = new THREE.Matrix4(), p = new THREE.Vector3(), q = new THREE.Quaternion(), s = new THREE.Vector3();
  const setCell = (inst, edge, cell, len) => {
    const k = inst.offsets[edge] + cell;
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
    layCell(edge, cell) {
      const k = fibre.offsets[edge] + cell;
      setCell(fibre, edge, cell, fibre.mesh.userData[k]);
      setCell(copper, edge, cell, 0.0001);
    },
    resetFibre() {
      graph.edges.forEach((e) => {
        for (let c = 0; c < e.cells; c++) {
          const k = fibre.offsets[e.i] + c;
          setCell(fibre, e.i, c, 0.0001);
          setCell(copper, e.i, c, copper.mesh.userData[k]);
        }
      });
    },
  };
}
