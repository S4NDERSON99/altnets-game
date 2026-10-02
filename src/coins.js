// Altnets coins: rows of spinning coins down the lanes of every street.
// One instanced mesh for the lot, so hundreds of coins cost one draw call.
import * as THREE from 'three';

export const COIN_Y = 1.15;
const SPACING = 2.4;
const ROW_GAP = 34; // metres between rows on a long street

function faceTexture() {
  const c = document.createElement('canvas');
  c.width = c.height = 256;
  const x = c.getContext('2d');
  const g = x.createRadialGradient(100, 90, 20, 128, 128, 130);
  g.addColorStop(0, '#fff3a8');
  g.addColorStop(0.55, '#ffc928');
  g.addColorStop(1, '#e08a00');
  x.fillStyle = g;
  x.beginPath(); x.arc(128, 128, 128, 0, Math.PI * 2); x.fill();
  x.lineWidth = 14;
  x.strokeStyle = '#c87400';
  x.beginPath(); x.arc(128, 128, 100, 0, Math.PI * 2); x.stroke();
  // the Altnets teal "A"
  x.fillStyle = '#0b8f8a';
  x.font = '900 150px system-ui, -apple-system, "Segoe UI", sans-serif';
  x.textAlign = 'center';
  x.textBaseline = 'middle';
  x.fillText('A', 128, 140);
  x.fillStyle = '#2bfdaf';
  x.fillText('A', 124, 134);
  const t = new THREE.CanvasTexture(c);
  t.colorSpace = THREE.SRGBColorSpace;
  t.anisotropy = 4;
  return t;
}

export class Coins {
  constructor(scene) {
    this.scene = scene;
    this.list = [];
    this.mesh = null;
    const geo = new THREE.CylinderGeometry(0.62, 0.62, 0.16, 28);
    geo.rotateX(Math.PI / 2); // face the runner
    this.geo = geo;
    const face = faceTexture();
    this.mats = [
      new THREE.MeshToonMaterial({ color: 0xffb81c, emissive: 0x7a4a00 }), // rim
      new THREE.MeshToonMaterial({ map: face, emissive: 0x5a3a00, emissiveMap: face }),
      new THREE.MeshToonMaterial({ map: face, emissive: 0x5a3a00, emissiveMap: face }),
    ];
    this.m = new THREE.Matrix4();
    this.q = new THREE.Quaternion();
    this.v = new THREE.Vector3();
    this.s = new THREE.Vector3();
    this.up = new THREE.Vector3(0, 1, 0);
  }

  // rows of coins on every street; laneW(edge) gives the lane spacing there
  layout(g, laneW, avoid = []) {
    this.list = [];
    for (const e of g.edges) {
      if (e.len < 22) continue;
      const lw = laneW(e);
      for (let d0 = 9 + Math.random() * 8; d0 < e.len - 14; d0 += ROW_GAP + Math.random() * 14) {
        const n = 5 + Math.floor(Math.random() * 5);
        let lane = Math.floor(Math.random() * 3) - 1;
        // some rows hop lanes halfway, so you have to follow them
        const hop = Math.random() < 0.3 ? (lane === 0 ? (Math.random() < 0.5 ? -1 : 1) : 0) : null;
        for (let i = 0; i < n; i++) {
          const d = d0 + i * SPACING;
          if (d > e.len - 8) break;
          if (hop !== null && i === Math.floor(n / 2)) lane = hop;
          const p = g.pointAt(e, d);
          const x = p.x + Math.cos(p.h) * lane * lw, z = p.z + Math.sin(p.h) * lane * lw;
          if (avoid.some((a) => Math.hypot(a.x - x, a.z - z) < a.r)) continue;
          this.list.push({ x, z, got: false, pop: 0 });
        }
      }
    }
    if (this.mesh) { this.scene.remove(this.mesh); this.mesh.dispose(); }
    this.mesh = new THREE.InstancedMesh(this.geo, this.mats, Math.max(1, this.list.length));
    this.mesh.frustumCulled = false;
    this.scene.add(this.mesh);
    this.total = this.list.length;
    this.update(0, 0);
  }

  reset() {
    for (const c of this.list) { c.got = false; c.pop = 0; }
  }

  // returns how many coins the runner picked up this frame
  collect(x, z) {
    let n = 0;
    for (const c of this.list) {
      if (c.got) continue;
      const dx = c.x - x, dz = c.z - z;
      if (dx * dx + dz * dz < 1.5 * 1.5) { c.got = true; c.pop = 0.25; n++; }
    }
    return n;
  }

  update(dt, t) {
    if (!this.mesh) return;
    const { m, q, v, s, up } = this;
    this.q.setFromAxisAngle(up, t * 3.2);
    for (let i = 0; i < this.list.length; i++) {
      const c = this.list[i];
      let k = 1, y = COIN_Y + Math.sin(t * 3 + i * 0.7) * 0.12;
      if (c.got) {
        // a quick hop up and shrink, then gone
        c.pop = Math.max(0, c.pop - dt);
        k = c.pop / 0.25;
        y += (1 - k) * 2.2;
      }
      v.set(c.x, y, c.z);
      s.setScalar(k);
      m.compose(v, q, s);
      this.mesh.setMatrixAt(i, m);
    }
    this.mesh.instanceMatrix.needsUpdate = true;
  }
}
