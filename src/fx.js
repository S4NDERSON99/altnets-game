// Visual juice: spark particles and copper speech bubbles.
import * as THREE from 'three';

const MAX = 600;

export class Sparks {
  constructor(scene) {
    this.pos = new Float32Array(MAX * 3);
    this.col = new Float32Array(MAX * 3);
    this.vel = new Float32Array(MAX * 3);
    this.life = new Float32Array(MAX);
    this.max = new Float32Array(MAX);
    this.base = new Float32Array(MAX * 3);
    this.next = 0;
    const geo = new THREE.BufferGeometry();
    geo.setAttribute('position', new THREE.BufferAttribute(this.pos, 3));
    geo.setAttribute('color', new THREE.BufferAttribute(this.col, 3));
    const dot = document.createElement('canvas');
    dot.width = dot.height = 64;
    const x = dot.getContext('2d');
    const grd = x.createRadialGradient(32, 32, 0, 32, 32, 32);
    grd.addColorStop(0, 'rgba(255,255,255,1)');
    grd.addColorStop(0.35, 'rgba(255,255,255,0.8)');
    grd.addColorStop(1, 'rgba(255,255,255,0)');
    x.fillStyle = grd;
    x.fillRect(0, 0, 64, 64);
    this.points = new THREE.Points(geo, new THREE.PointsMaterial({
      map: new THREE.CanvasTexture(dot),
      size: 0.7, vertexColors: true, transparent: true, depthWrite: false, blending: THREE.AdditiveBlending, fog: false,
    }));
    this.points.frustumCulled = false;
    scene.add(this.points);
    this.pos.fill(-9999);
  }

  // colours: array of THREE.Color; up: vertical kick; spread: horizontal speed
  burst(x, y, z, n, colours, { up = 6, spread = 5, life = 0.9, gravity = true } = {}) {
    for (let i = 0; i < n; i++) {
      const k = this.next;
      this.next = (this.next + 1) % MAX;
      const a = Math.random() * Math.PI * 2, s = Math.random() * spread;
      this.pos.set([x, y, z], k * 3);
      this.vel.set([Math.cos(a) * s, up * (0.4 + Math.random() * 0.8), Math.sin(a) * s], k * 3);
      const c = colours[Math.floor(Math.random() * colours.length)];
      this.base.set([c.r, c.g, c.b], k * 3);
      this.life[k] = this.max[k] = life * (0.6 + Math.random() * 0.6);
      this.gravity = gravity;
    }
  }

  update(dt) {
    for (let k = 0; k < MAX; k++) {
      if (this.life[k] <= 0) continue;
      this.life[k] -= dt;
      const i = k * 3;
      if (this.life[k] <= 0) { this.pos[i + 1] = -9999; continue; }
      this.vel[i + 1] -= 14 * dt;
      this.pos[i] += this.vel[i] * dt;
      this.pos[i + 1] = Math.max(0.15, this.pos[i + 1] + this.vel[i + 1] * dt);
      this.pos[i + 2] += this.vel[i + 2] * dt;
      const f = this.life[k] / this.max[k];
      this.col[i] = this.base[i] * f;
      this.col[i + 1] = this.base[i + 1] * f;
      this.col[i + 2] = this.base[i + 2] * f;
    }
    this.points.geometry.attributes.position.needsUpdate = true;
    this.points.geometry.attributes.color.needsUpdate = true;
  }
}

export const TAUNTS = [
  { text: 'Oi! Stop right there!', voice: 'oi' },
  { text: "'Ello 'ello 'ello!", voice: 'ello' },
  { text: 'Back to copper, sunshine!', voice: 'sunshine' },
  { text: 'Dial-up was good enough for me!', voice: 'dialup' },
  { text: 'Stop! In the name of the landline!', voice: 'landline' },
  { text: 'Buffering…', voice: 'buffering' },
];
export const SCARED = [
  { text: 'Leg it, lads!', voice: 'legit' },
  { text: 'Not the switch-off!', voice: 'switchoff' },
];

export function makeBubble() {
  const W = 1024, H = 180;
  const c = document.createElement('canvas');
  c.width = W; c.height = H;
  const tex = new THREE.CanvasTexture(c);
  tex.colorSpace = THREE.SRGBColorSpace;
  const sprite = new THREE.Sprite(new THREE.SpriteMaterial({ map: tex, color: 0xcfcfcf, transparent: true, depthTest: false, fog: false }));
  sprite.scale.set(9.5, 9.5 * (H / W), 1);
  sprite.center.set(0.5, 0);
  sprite.position.y = 4.5;
  sprite.visible = false;
  sprite.renderOrder = 10;
  return {
    sprite,
    say(text) {
      const x = c.getContext('2d');
      x.clearRect(0, 0, W, H);
      let fs = 72;
      do { x.font = `900 ${fs}px Outfit, system-ui, sans-serif`; fs -= 4; } while (x.measureText(text).width > W - 120 && fs > 36);
      const w = Math.min(W - 16, x.measureText(text).width + 80);
      const l = (W - w) / 2;
      x.fillStyle = '#f4f3ef';
      x.beginPath();
      x.roundRect(l, 8, w, 126, 46);
      x.moveTo(W / 2 - 22, 132); x.lineTo(W / 2, 172); x.lineTo(W / 2 + 22, 132);
      x.fill();
      x.fillStyle = '#0f1414';
      x.textAlign = 'center'; x.textBaseline = 'middle';
      x.fillText(text, W / 2, 72);
      tex.needsUpdate = true;
      sprite.visible = true;
    },
    hide() { sprite.visible = false; },
  };
}
