// Characters and props: the Altnet runner, the coppers, power-ups, hurdles
// and the blue lamp outside the police station.
import * as THREE from 'three';
import { COLOURS } from './world.js';

const loader = new THREE.TextureLoader();

export function makeRunner() {
  const tex = loader.load('/sprites/altnet-back.png');
  tex.colorSpace = THREE.SRGBColorSpace;
  const mat = new THREE.SpriteMaterial({ map: tex, transparent: true, fog: false });
  const sprite = new THREE.Sprite(mat);
  const H = 4.2;
  sprite.scale.set(H * (168 / 327), H, 1);
  sprite.center.set(0.5, 0);
  const group = new THREE.Group();
  group.add(sprite);
  const shadow = new THREE.Mesh(new THREE.CircleGeometry(0.9, 20), new THREE.MeshBasicMaterial({ color: 0x000000, transparent: true, opacity: 0.45, depthWrite: false }));
  shadow.rotation.x = -Math.PI / 2;
  shadow.position.y = 0.15;
  group.add(shadow);
  const light = new THREE.PointLight(COLOURS.fibre, 10, 14, 1.8);
  light.position.y = 3;
  group.add(light);
  return { group, sprite, shadow, mat, height: H };
}

function mat(color, extra = {}) {
  return new THREE.MeshStandardMaterial({ color, roughness: 0.45, metalness: 0.1, ...extra });
}

// A copper: a coiled copper-cable body under a custodian helmet, blue lamp on top.
export function makeCopper(tint) {
  const g = new THREE.Group();
  const bodyMat = mat(tint, { metalness: 0.75, roughness: 0.32, emissive: new THREE.Color(tint).multiplyScalar(0.12) });
  const coilMat = mat(0x7a3a17, { metalness: 0.8, roughness: 0.3 });
  const navy = mat(0x18214a, { roughness: 0.55 });
  const silver = mat(0xd5dde0, { metalness: 0.9, roughness: 0.2 });
  const white = mat(0xffffff, { roughness: 0.3 });
  const black = mat(0x050607);

  const body = new THREE.Mesh(new THREE.CylinderGeometry(0.85, 1.0, 1.9, 20), bodyMat);
  body.position.y = 0.95;
  g.add(body);
  for (let i = 0; i < 4; i++) {
    const ring = new THREE.Mesh(new THREE.TorusGeometry(0.93 - i * 0.03, 0.09, 8, 24), coilMat);
    ring.rotation.x = Math.PI / 2;
    ring.position.y = 0.35 + i * 0.42;
    g.add(ring);
  }
  const head = new THREE.Mesh(new THREE.SphereGeometry(0.82, 20, 14), bodyMat);
  head.position.y = 2.05;
  g.add(head);
  const helmet = new THREE.Mesh(new THREE.SphereGeometry(0.72, 20, 14), navy);
  helmet.scale.set(1, 1.35, 1);
  helmet.position.y = 2.75;
  g.add(helmet);
  const brim = new THREE.Mesh(new THREE.TorusGeometry(0.72, 0.08, 8, 24), navy);
  brim.rotation.x = Math.PI / 2;
  brim.position.y = 2.42;
  g.add(brim);
  const badge = new THREE.Mesh(new THREE.CircleGeometry(0.2, 8), silver);
  badge.position.set(0, 2.85, -0.72);
  badge.rotation.y = Math.PI;
  g.add(badge);
  const lamp = new THREE.Mesh(new THREE.SphereGeometry(0.18, 10, 8), new THREE.MeshBasicMaterial({ color: 0x3d8bff }));
  lamp.position.y = 3.72;
  g.add(lamp);
  for (const s of [-1, 1]) {
    const eye = new THREE.Mesh(new THREE.SphereGeometry(0.2, 12, 10), white);
    eye.position.set(s * 0.3, 2.12, -0.72);
    g.add(eye);
    const pupil = new THREE.Mesh(new THREE.SphereGeometry(0.1, 8, 8), black);
    pupil.position.set(s * 0.3, 2.12, -0.9);
    g.add(pupil);
  }
  const shadow = new THREE.Mesh(new THREE.CircleGeometry(1.1, 20), new THREE.MeshBasicMaterial({ color: 0x000000, transparent: true, opacity: 0.4, depthWrite: false }));
  shadow.rotation.x = -Math.PI / 2;
  shadow.position.y = 0.14;
  g.add(shadow);

  const frightBody = new THREE.Color(0x7c9094);
  const baseBody = new THREE.Color(tint);
  return {
    group: g,
    lamp,
    setLook(state, t, flashing) {
      g.visible = state !== 'hidden';
      if (state === 'fright') {
        const white = flashing && Math.floor(t * 6) % 2;
        bodyMat.color.set(white ? 0xe6eeee : frightBody);
        bodyMat.emissive.set(0x000000);
        navy.color.set(white ? 0xffffff : 0x4a5557);
        lamp.material.color.set(0x666666);
      } else {
        bodyMat.color.copy(baseBody);
        bodyMat.emissive.copy(baseBody).multiplyScalar(0.12);
        navy.color.set(0x18214a);
        lamp.material.color.set(Math.floor(t * 4) % 2 ? 0x3d8bff : 0x0b1f55);
      }
    },
  };
}

export function makeSwitchOff() {
  const g = new THREE.Group();
  const ring = new THREE.Mesh(new THREE.TorusGeometry(0.9, 0.2, 10, 28, Math.PI * 1.6), new THREE.MeshBasicMaterial({ color: COLOURS.yellow }));
  ring.rotation.z = Math.PI / 2 + Math.PI * 0.2;
  const bar = new THREE.Mesh(new THREE.BoxGeometry(0.34, 1.1, 0.34), ring.material);
  bar.position.y = 0.55;
  const inner = new THREE.Group();
  inner.add(ring, bar);
  inner.position.y = 2.2;
  g.add(inner);
  const glow = new THREE.PointLight(COLOURS.yellow, 18, 12, 1.8);
  glow.position.y = 2;
  g.add(glow);
  return { group: g, spin: inner };
}

export function makeGigabit() {
  const g = new THREE.Group();
  const shape = new THREE.Shape();
  [[0.1, 1], [-0.5, 0], [0, 0], [-0.2, -1], [0.5, 0.15], [0, 0.15], [0.3, 1]].forEach(([x, y], i) => (i ? shape.lineTo(x, y) : shape.moveTo(x, y)));
  const bolt = new THREE.Mesh(new THREE.ExtrudeGeometry(shape, { depth: 0.25, bevelEnabled: false }), new THREE.MeshBasicMaterial({ color: COLOURS.pink }));
  bolt.scale.setScalar(1.3);
  const inner = new THREE.Group();
  inner.add(bolt);
  inner.position.y = 2.2;
  g.add(inner);
  const glow = new THREE.PointLight(COLOURS.pink, 16, 12, 1.8);
  glow.position.y = 2;
  g.add(glow);
  return { group: g, spin: inner };
}

function stripeTexture() {
  const c = document.createElement('canvas');
  c.width = 128; c.height = 32;
  const x = c.getContext('2d');
  x.fillStyle = '#ffffff'; x.fillRect(0, 0, 128, 32);
  x.fillStyle = '#e02424';
  for (let i = -2; i < 10; i++) { x.beginPath(); x.moveTo(i * 16, 32); x.lineTo(i * 16 + 8, 32); x.lineTo(i * 16 + 20, 0); x.lineTo(i * 16 + 12, 0); x.fill(); }
  const t = new THREE.CanvasTexture(c);
  t.colorSpace = THREE.SRGBColorSpace;
  return t;
}
let stripes;

export function makeHurdle(type, width) {
  const g = new THREE.Group();
  if (type === 'roadworks') {
    stripes = stripes || stripeTexture();
    const board = new THREE.Mesh(new THREE.BoxGeometry(width * 0.8, 0.45, 0.12), new THREE.MeshLambertMaterial({ map: stripes, emissive: 0x331111 }));
    board.position.y = 0.9;
    g.add(board);
    for (const s of [-1, 1]) {
      const leg = new THREE.Mesh(new THREE.BoxGeometry(0.12, 1.1, 0.5), new THREE.MeshLambertMaterial({ color: 0xdddddd }));
      leg.position.set(s * width * 0.38, 0.55, 0);
      g.add(leg);
    }
    const lamp = new THREE.Mesh(new THREE.SphereGeometry(0.14, 8, 6), new THREE.MeshBasicMaterial({ color: COLOURS.orange }));
    lamp.position.set(width * 0.38, 1.25, 0);
    g.add(lamp);
  } else if (type === 'manhole') {
    const rim = new THREE.Mesh(new THREE.CylinderGeometry(1.2, 1.2, 0.12, 20), new THREE.MeshLambertMaterial({ color: 0x3b4648 }));
    rim.position.y = 0.06;
    const hole = new THREE.Mesh(new THREE.CircleGeometry(1.0, 20), new THREE.MeshBasicMaterial({ color: 0x000000 }));
    hole.rotation.x = -Math.PI / 2;
    hole.position.y = 0.13;
    const lid = new THREE.Mesh(new THREE.CylinderGeometry(1.05, 1.05, 0.1, 20), new THREE.MeshLambertMaterial({ color: 0x505a5c }));
    lid.position.set(1.4, 0.3, 0.2);
    lid.rotation.z = 0.5;
    g.add(rim, hole, lid);
    for (const s of [-1, 1]) {
      const cone = new THREE.Mesh(new THREE.ConeGeometry(0.28, 0.8, 10), new THREE.MeshLambertMaterial({ color: COLOURS.orange, emissive: 0x331500 }));
      cone.position.set(s * 1.6, 0.4, -0.3);
      g.add(cone);
    }
  } else {
    const red = new THREE.MeshLambertMaterial({ color: 0xd62828 });
    const dark = new THREE.MeshLambertMaterial({ color: 0x1a1a1a });
    for (const s of [-1, 1]) {
      const wheel = new THREE.Mesh(new THREE.TorusGeometry(0.42, 0.07, 8, 20), dark);
      wheel.position.set(s * 0.7, 0.45, 0);
      g.add(wheel);
    }
    const frame = new THREE.Mesh(new THREE.BoxGeometry(1.4, 0.14, 0.12), red);
    frame.position.y = 0.8;
    const post = new THREE.Mesh(new THREE.BoxGeometry(0.12, 0.6, 0.12), red);
    post.position.set(-0.25, 1.0, 0);
    const bars = new THREE.Mesh(new THREE.BoxGeometry(0.12, 0.12, 0.7), dark);
    bars.position.set(0.55, 1.2, 0);
    g.add(frame, post, bars);
    g.rotation.y = Math.PI / 2;
    const wrap = new THREE.Group();
    wrap.add(g);
    return wrap;
  }
  return g;
}

function textTexture(text, bg, fg) {
  const c = document.createElement('canvas');
  c.width = 256; c.height = 64;
  const x = c.getContext('2d');
  x.fillStyle = bg; x.fillRect(0, 0, 256, 64);
  x.fillStyle = fg;
  x.font = '800 40px Outfit, system-ui, sans-serif';
  x.textAlign = 'center'; x.textBaseline = 'middle';
  x.fillText(text, 128, 34);
  const t = new THREE.CanvasTexture(c);
  t.colorSpace = THREE.SRGBColorSpace;
  return t;
}

// The classic blue lamp that hangs outside every London police station.
export function makeBlueLamp() {
  const g = new THREE.Group();
  const post = new THREE.Mesh(new THREE.CylinderGeometry(0.15, 0.2, 5, 10), new THREE.MeshLambertMaterial({ color: 0x111111 }));
  post.position.y = 2.5;
  g.add(post);
  const tex = textTexture('POLICE', '#1b4fd8', '#ffffff');
  const box = new THREE.Mesh(new THREE.BoxGeometry(1.4, 1.1, 1.4), [
    new THREE.MeshBasicMaterial({ map: tex }), new THREE.MeshBasicMaterial({ map: tex }),
    new THREE.MeshBasicMaterial({ color: 0x1b4fd8 }), new THREE.MeshBasicMaterial({ color: 0x1b4fd8 }),
    new THREE.MeshBasicMaterial({ map: tex }), new THREE.MeshBasicMaterial({ map: tex }),
  ]);
  box.position.y = 5.5;
  g.add(box);
  const light = new THREE.PointLight(0x3d7bff, 40, 30, 1.5);
  light.position.y = 5.5;
  g.add(light);
  return g;
}
