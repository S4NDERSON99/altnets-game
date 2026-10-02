// Characters and props: the Altnet runner, the coppers, power-ups, hurdles
// and the blue lamp outside the police station.
import * as THREE from 'three';
import { GLTFLoader } from 'three/addons/loaders/GLTFLoader.js';
import { MeshoptDecoder } from 'three/addons/libs/meshopt_decoder.module.js';
import { COLOURS } from './world.js';

const loader = new THREE.TextureLoader();

export function makeRunner() {
  const tex = loader.load(import.meta.env.BASE_URL + 'sprites/altnet-back.png');
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
  const light = new THREE.PointLight(COLOURS.fibre, 6, 12, 1.8);
  light.position.set(0, 0.8, 0); // low, so it lights the road and not the top of the head
  group.add(light);
  const runner = { group, sprite, shadow, mat, height: H, model: null, body: null, mixer: null, actions: {} };
  loadModel(runner);
  return runner;
}

// The 3D mascot replaces the flat cut-out once it has loaded. If the file is
// missing or broken, the cut-out stays.
// Run cycle done in the vertex shader: legs swing from the hips, the cable
// hair trails and sways, all worked out from the model's own proportions
// (0 = soles of the trainers, 1 = tips of the cables; the model faces +x).
function animateMaterial(mesh, uniforms, { hair = 1 } = {}) {
  uniforms.uHair = { value: hair };
  mesh.geometry.computeBoundingBox();
  const b = mesh.geometry.boundingBox;
  uniforms.uB = { value: new THREE.Vector4(b.min.y, b.max.y - b.min.y, (b.min.z + b.max.z) / 2, (b.max.z - b.min.z) / 2) };
  uniforms.uCx = { value: (b.min.x + b.max.x) / 2 };
  mesh.material.onBeforeCompile = (sh) => {
    Object.assign(sh.uniforms, uniforms);
    sh.vertexShader = sh.vertexShader
      .replace('#include <common>', '#include <common>\nuniform vec4 uB; uniform float uCx; uniform float uPhase; uniform float uRun; uniform float uTime; uniform vec2 uSway; uniform float uHair;')
      .replace('#include <begin_vertex>', `#include <begin_vertex>
        float f = (transformed.y - uB.x) / uB.y;
        float H = uB.y;
        float legW = 1.0 - smoothstep(0.16, 0.26, f);
        float side = clamp((transformed.z - uB.z) / (uB.w * 0.18), -1.0, 1.0);
        float a = sin(uPhase) * 0.6 * uRun * side * legW;
        float py = uB.x + 0.25 * H;
        float dx = transformed.x - uCx, dy = transformed.y - py;
        transformed.x = uCx + dx * cos(a) - dy * sin(a);
        transformed.y = py + dx * sin(a) + dy * cos(a) + max(0.0, sin(uPhase) * side) * 0.045 * H * uRun * legW;
        float h = clamp((f - 0.7) / 0.3, 0.0, 1.0);
        float hh = h * h * uHair;
        transformed.x -= hh * H * (0.11 * uRun + 0.018 * sin(uTime * 11.0 + f * 14.0));
        transformed.z += hh * H * (uSway.x * 0.3 + 0.025 * sin(uTime * 8.0 + transformed.x * 30.0));
        transformed.y += hh * H * 0.025 * sin(uPhase * 2.0) * uRun;`);
  };
  mesh.material.needsUpdate = true;
}

// The generated model lost the lettering on the hoodie back, which is the side
// the chase camera sees. Stick it back on: find the back surface with a ray.
function addHoodieBack(mesh) {
  const b = mesh.geometry.boundingBox;
  const H = b.max.y - b.min.y, W = b.max.z - b.min.z;
  const cz = (b.min.z + b.max.z) / 2;
  const y = b.min.y + H * 0.42;
  const ray = new THREE.Raycaster(new THREE.Vector3(b.min.x - H, y, cz), new THREE.Vector3(1, 0, 0));
  const hit = ray.intersectObject(new THREE.Mesh(mesh.geometry), false)[0];
  const x = hit ? hit.point.x : b.min.x;
  const tex = loader.load(import.meta.env.BASE_URL + 'models/hoodie-back.png');
  tex.colorSpace = THREE.SRGBColorSpace;
  const w = W * 0.62;
  const decal = new THREE.Mesh(new THREE.PlaneGeometry(w, w * (328 / 472)), new THREE.MeshStandardMaterial({ map: tex, transparent: true, roughness: 0.9, polygonOffset: true, polygonOffsetFactor: -4 }));
  decal.position.set(x - H * 0.006, y, cz);
  decal.rotation.y = -Math.PI / 2; // face out of the back (-x)
  mesh.add(decal);
}

// the mascot file is fetched once per visit and copied for every new area
let mascotLoad = null;
function mascotGltf() {
  if (!mascotLoad) {
    const loader = new GLTFLoader();
    loader.setMeshoptDecoder(MeshoptDecoder);
    mascotLoad = loader.loadAsync(import.meta.env.BASE_URL + 'models/altnet.glb');
  }
  return mascotLoad;
}
export const preloadModels = () => { mascotGltf().catch(() => {}); };

function loadModel(runner) {
  mascotGltf().then((gltf) => {
    const model = gltf.scene.clone(true);
    model.traverse((o) => { if (o.isMesh && o.material) o.material = o.material.clone(); });
    const box = new THREE.Box3().setFromObject(model);
    const size = box.getSize(new THREE.Vector3());
    const s = (runner.height * 0.92) / size.y;
    model.scale.setScalar(s);
    const c = box.getCenter(new THREE.Vector3());
    model.position.set(-c.x * s, -box.min.y * s, -c.z * s);
    runner.uniforms = { uPhase: { value: 0 }, uRun: { value: 0 }, uTime: { value: 0 }, uSway: { value: new THREE.Vector2() } };
    let mainMesh = null;
    model.traverse((o) => {
      if (!o.isMesh) return;
      o.castShadow = true;
      mainMesh = mainMesh || o;
      o.frustumCulled = false; // the shader moves vertices outside the static bounds
      if (o.material) {
        o.material.metalness = 0; // the fur and hoodie read better fully rough at night
        o.material.roughness = 0.9;
        animateMaterial(o, runner.uniforms);
      }
    });
    if (mainMesh) addHoodieBack(mainMesh);
    const body = new THREE.Group(); // squash, lean and bob happen here
    body.add(model);
    const holder = new THREE.Group(); // turns to face the direction of travel
    holder.add(body);
    runner.group.add(holder);
    runner.model = holder;
    runner.body = body;
    runner.sprite.visible = false;
    if (gltf.animations.length) {
      runner.mixer = new THREE.AnimationMixer(model);
      gltf.animations.forEach((clip) => { runner.actions[clip.name.toLowerCase()] = runner.mixer.clipAction(clip); });
      const run = Object.entries(runner.actions).find(([k]) => k.includes('run'))?.[1] || Object.values(runner.actions)[0];
      run.play();
      runner.run = run;
    }
  }).catch(() => { /* keep the cut-out */ });
}

function mat(color, extra = {}) {
  return new THREE.MeshStandardMaterial({ color, roughness: 0.45, metalness: 0.1, ...extra });
}

// A copper: a coiled copper-cable body under a custodian helmet, blue lamp on top.
// One shared load of the 3D copper; every copper gets its own copy.
let copperModel = null;
const copperWaiting = [];
function withCopperModel(cb) {
  if (copperModel) return cb(copperModel);
  copperWaiting.push(cb);
  if (copperWaiting.length > 1) return;
  const loader = new GLTFLoader();
  loader.setMeshoptDecoder(MeshoptDecoder);
  loader.load(import.meta.env.BASE_URL + 'models/copper.glb', (gltf) => {
    copperModel = gltf.scene;
    copperWaiting.splice(0).forEach((f) => f(copperModel));
  }, undefined, () => { copperWaiting.length = 0; });
}

export function makeCopper(tint) {
  const g = new THREE.Group();
  const proc = new THREE.Group(); // simple fallback copper until the model loads
  g.add(proc);
  const bodyMat = mat(tint, { metalness: 0.75, roughness: 0.32, emissive: new THREE.Color(tint).multiplyScalar(0.12) });
  const coilMat = mat(0x7a3a17, { metalness: 0.8, roughness: 0.3 });
  const navy = mat(0x18214a, { roughness: 0.55 });
  const silver = mat(0xd5dde0, { metalness: 0.9, roughness: 0.2 });
  const white = mat(0xffffff, { roughness: 0.3 });
  const black = mat(0x050607);

  const body = new THREE.Mesh(new THREE.CylinderGeometry(0.85, 1.0, 1.9, 20), bodyMat);
  body.position.y = 0.95;
  proc.add(body);
  for (let i = 0; i < 2; i++) {
    const ring = new THREE.Mesh(new THREE.TorusGeometry(0.97 - i * 0.03, 0.09, 8, 24), coilMat);
    ring.rotation.x = Math.PI / 2;
    ring.position.y = 0.3 + i * 0.36;
    proc.add(ring);
  }
  // hi-vis police jacket with reflective bands and a blue and white chequer
  const hivisMat = mat(0xd4ef1f, { roughness: 0.6, emissive: new THREE.Color(0x3a4a00) });
  const vest = new THREE.Mesh(new THREE.CylinderGeometry(0.9, 0.96, 1.05, 20), hivisMat);
  vest.position.y = 1.38;
  proc.add(vest);
  for (const y of [1.12, 1.62]) {
    const band = new THREE.Mesh(new THREE.CylinderGeometry(0.915 + (y > 1.4 ? -0.015 : 0.01), 0.925 + (y > 1.4 ? -0.01 : 0.02), 0.12, 20), mat(0xe8eef0, { metalness: 0.9, roughness: 0.15, emissive: new THREE.Color(0x333a3c) }));
    band.position.y = y;
    proc.add(band);
  }
  const chequer = new THREE.CanvasTexture((() => {
    const c = document.createElement('canvas'); c.width = 64; c.height = 16;
    const x = c.getContext('2d');
    for (let i = 0; i < 8; i++) for (let j = 0; j < 2; j++) { x.fillStyle = (i + j) % 2 ? '#ffffff' : '#1d3fae'; x.fillRect(i * 8, j * 8, 8, 8); }
    return c;
  })());
  chequer.colorSpace = THREE.SRGBColorSpace;
  chequer.wrapS = THREE.RepeatWrapping;
  chequer.repeat.set(3, 1);
  const cheq = new THREE.Mesh(new THREE.CylinderGeometry(0.73, 0.73, 0.16, 24, 1, true), new THREE.MeshStandardMaterial({ map: chequer, roughness: 0.5 }));
  cheq.position.y = 2.5;
  proc.add(cheq);
  const radio = new THREE.Mesh(new THREE.BoxGeometry(0.22, 0.34, 0.12), mat(0x111111));
  radio.position.set(0.45, 1.65, -0.82);
  proc.add(radio);
  const head = new THREE.Mesh(new THREE.SphereGeometry(0.82, 20, 14), bodyMat);
  head.position.y = 2.05;
  proc.add(head);
  const helmet = new THREE.Mesh(new THREE.SphereGeometry(0.72, 20, 14), navy);
  helmet.scale.set(1, 1.35, 1);
  helmet.position.y = 2.75;
  proc.add(helmet);
  const brim = new THREE.Mesh(new THREE.TorusGeometry(0.72, 0.08, 8, 24), navy);
  brim.rotation.x = Math.PI / 2;
  brim.position.y = 2.42;
  proc.add(brim);
  const badge = new THREE.Mesh(new THREE.CircleGeometry(0.2, 8), silver);
  badge.position.set(0, 2.85, -0.72);
  badge.rotation.y = Math.PI;
  proc.add(badge);
  const lamp = new THREE.Mesh(new THREE.SphereGeometry(0.18, 10, 8), new THREE.MeshBasicMaterial({ color: 0x3d8bff }));
  lamp.position.y = 3.72;
  proc.add(lamp);
  for (const s of [-1, 1]) {
    const eye = new THREE.Mesh(new THREE.SphereGeometry(0.2, 12, 10), white);
    eye.position.set(s * 0.3, 2.12, -0.72);
    proc.add(eye);
    const pupil = new THREE.Mesh(new THREE.SphereGeometry(0.1, 8, 8), black);
    pupil.position.set(s * 0.3, 2.12, -0.9);
    proc.add(pupil);
  }
  const shadow = new THREE.Mesh(new THREE.CircleGeometry(1.1, 20), new THREE.MeshBasicMaterial({ color: 0x000000, transparent: true, opacity: 0.4, depthWrite: false }));
  shadow.rotation.x = -Math.PI / 2;
  shadow.position.y = 0.14;
  g.add(shadow);

  g.add(lamp);
  const frightBody = new THREE.Color(0x7c9094);
  const baseBody = new THREE.Color(tint);
  const view = { group: g, lamp, model: null, mats: [], uniforms: null };
  withCopperModel((src) => {
    const model = src.clone(true);
    const uniforms = { uPhase: { value: Math.random() * 6 }, uRun: { value: 0 }, uTime: { value: 0 }, uSway: { value: new THREE.Vector2() } };
    const box = new THREE.Box3().setFromObject(model);
    const size = box.getSize(new THREE.Vector3());
    const s = 3.9 / size.y;
    model.scale.setScalar(s);
    const c = box.getCenter(new THREE.Vector3());
    model.position.set(-c.x * s, -box.min.y * s, -c.z * s);
    model.traverse((o) => {
      if (!o.isMesh) return;
      o.material = o.material.clone();
      o.material.metalness = Math.min(o.material.metalness, 0.6);
      o.castShadow = true;
      o.frustumCulled = false;
      view.mats.push(o.material);
      animateMaterial(o, uniforms, { hair: 0 });
    });
    const holder = new THREE.Group();
    holder.rotation.y = Math.PI / 2; // the model faces +x, coppers face -z
    holder.add(model);
    g.add(holder);
    lamp.position.y = 4.05;
    proc.visible = false;
    view.model = holder;
    view.uniforms = uniforms;
  });
  const greyC = new THREE.Color(0x8fa3b0), whiteC = new THREE.Color(0xffffff);
  return Object.assign(view, {
    // walking waddle for the 3D model
    tick(dt, t, moving) {
      if (!view.uniforms) return;
      const u = view.uniforms;
      u.uRun.value += ((moving ? 1 : 0) - u.uRun.value) * (1 - Math.exp(-dt * 8));
      u.uPhase.value += dt * 13 * (moving ? 1 : 0);
      u.uTime.value = t;
      view.model.rotation.z = Math.sin(u.uPhase.value) * 0.06 * u.uRun.value;
    },
    setLook(state, t, flashing) {
      g.visible = state !== 'hidden';
      if (view.model) {
        const col = state === 'fright' ? (flashing && Math.floor(t * 6) % 2 ? whiteC : greyC) : whiteC;
        for (const m of view.mats) {
          m.color.copy(col);
          if (m.emissive) m.emissive.setScalar(state === 'fright' && flashing && Math.floor(t * 6) % 2 ? 0.25 : 0);
        }
        lamp.material.color.set(state === 'fright' ? 0x666666 : Math.floor(t * 4) % 2 ? 0x3d8bff : 0x0b1f55);
        return;
      }
      if (state === 'fright') {
        const white = flashing && Math.floor(t * 6) % 2;
        bodyMat.color.set(white ? 0xe6eeee : frightBody);
        bodyMat.emissive.set(0x000000);
        navy.color.set(white ? 0xffffff : 0x4a5557);
        hivisMat.color.set(white ? 0xffffff : 0x9aa6a8);
        hivisMat.emissive.set(0x000000);
        lamp.material.color.set(0x666666);
      } else {
        bodyMat.color.copy(baseBody);
        bodyMat.emissive.copy(baseBody).multiplyScalar(0.12);
        navy.color.set(0x18214a);
        hivisMat.color.set(0xd4ef1f);
        hivisMat.emissive.set(0x3a4a00);
        lamp.material.color.set(Math.floor(t * 4) % 2 ? 0x3d8bff : 0x0b1f55);
      }
    },
  });
}

// a tall soft beam so power-ups can be spotted from streets away
function beacon(colour) {
  const g = new THREE.CylinderGeometry(0.9, 1.6, 40, 16, 1, true);
  g.translate(0, 20, 0);
  const c = document.createElement('canvas');
  c.width = 4; c.height = 64;
  const x = c.getContext('2d');
  const grd = x.createLinearGradient(0, 0, 0, 64);
  grd.addColorStop(0, 'rgba(255,255,255,0)');
  grd.addColorStop(1, 'rgba(255,255,255,0.9)');
  x.fillStyle = grd;
  x.fillRect(0, 0, 4, 64);
  const m = new THREE.Mesh(g, new THREE.MeshBasicMaterial({ map: new THREE.CanvasTexture(c), color: colour, transparent: true, opacity: 0.35, depthWrite: false, blending: THREE.AdditiveBlending, side: THREE.DoubleSide, fog: false }));
  m.renderOrder = 4;
  return m;
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
  g.add(beacon(COLOURS.yellow));
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
  g.add(beacon(COLOURS.pink));
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
