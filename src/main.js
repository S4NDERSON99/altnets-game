import * as THREE from 'three';
import { EffectComposer } from 'three/addons/postprocessing/EffectComposer.js';
import { RenderPass } from 'three/addons/postprocessing/RenderPass.js';
import { UnrealBloomPass } from 'three/addons/postprocessing/UnrealBloomPass.js';
import { OutputPass } from 'three/addons/postprocessing/OutputPass.js';
import { ShaderPass } from 'three/addons/postprocessing/ShaderPass.js';
import { GTAOPass } from 'three/addons/postprocessing/GTAOPass.js';

// Final look: warm highlights, cool shadows, a little more saturation and a soft vignette.
const GradeShader = {
  uniforms: { tDiffuse: { value: null } },
  vertexShader: 'varying vec2 vUv; void main(){ vUv = uv; gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0); }',
  fragmentShader: `uniform sampler2D tDiffuse; varying vec2 vUv;
    void main(){
      vec4 c = texture2D(tDiffuse, vUv);
      float l = dot(c.rgb, vec3(0.299, 0.587, 0.114));
      c.rgb = mix(vec3(l), c.rgb, 1.32);
      c.rgb += (1.0 - c.rgb) * 0.035; // lift the blacks a touch, cartoon not murk
      c.rgb = (c.rgb - 0.5) * 1.07 + 0.5;
      c.rgb += mix(vec3(0.01, -0.01, 0.04), vec3(0.02, 0.0, 0.01), smoothstep(0.2, 0.8, l));
      vec2 d = vUv - 0.5;
      c.rgb *= 1.0 - dot(d, d) * 0.55;
      gl_FragColor = vec4(clamp(c.rgb, 0.0, 1.0), c.a);
    }`,
};
import { Game } from './game.js';
import * as audio from './audio.js';

const STEP = 1 / 60;
// static hosting (GitHub Pages) has no API: maps and coverage come from the browser
const STATIC = import.meta.env.VITE_STATIC === '1';
const $ = (id) => document.getElementById(id);
const coarse = matchMedia('(pointer: coarse)').matches;
const TAGLINES = ['Not the same old network.', 'Different fibre. Brighter places.', 'Alternative routes. A brighter tomorrow.'];

const store = {
  get(k) { try { return localStorage.getItem(k); } catch { return null; } },
  set(k, v) { try { localStorage.setItem(k, v); } catch { /* storage blocked */ } },
};

// ------------------------------------------------------------ renderer
const canvas = $('scene');
const renderer = new THREE.WebGLRenderer({ canvas, antialias: !coarse, powerPreference: 'high-performance' });
renderer.setPixelRatio(Math.min(window.devicePixelRatio, coarse ? 1.5 : 2));
renderer.toneMapping = THREE.ACESFilmicToneMapping;
renderer.toneMappingExposure = 1.38;
renderer.shadowMap.enabled = !coarse;
renderer.shadowMap.type = THREE.PCFSoftShadowMap;
let composer = null;
let aoPass = null;
let tier = 0; // quality steps taken on a slow device
let bloom = null;

let game = null;
let area = null;
let paused = false;
let playMode = 'demo'; // 'postcode' when the player is on their own streets

function setupComposer() {
  // multisampled target keeps edges smooth through the bloom pass
  const size = renderer.getDrawingBufferSize(new THREE.Vector2());
  composer = new EffectComposer(renderer, new THREE.WebGLRenderTarget(size.x, size.y, { type: THREE.HalfFloatType, samples: coarse ? 2 : 4 }));
  composer.addPass(new RenderPass(game.scene, game.camera));
  if (!coarse) {
    // soft contact shading where walls, kerbs and props meet the ground
    const ao = new GTAOPass(game.scene, game.camera, innerWidth, innerHeight);
    ao.updateGtaoMaterial({ radius: 2.2, distanceExponent: 1.5, thickness: 2, scale: 1.1 });
    ao.blendIntensity = 0.85;
    composer.addPass(ao);
    aoPass = ao;
  }
  bloom = new UnrealBloomPass(new THREE.Vector2(innerWidth, innerHeight), 0.55, 0.45, 0.82);
  composer.addPass(bloom);
  composer.addPass(new OutputPass());
  composer.addPass(new ShaderPass(GradeShader));
  // keep any quality steps already taken when a new area is built
  if (tier >= 1 && aoPass) aoPass.enabled = false;
  if (tier >= 2) bloom.enabled = false;
  resize();
}

function resize() {
  const w = innerWidth, h = innerHeight;
  renderer.setSize(w, h, false);
  if (game) {
    game.camera.aspect = w / h;
    game.baseFov = game.camera.fov = w < h ? 70 : 62;
    game.frameShift = w < 720 ? { side: 0, up: -3.4, dist: 12 } : { side: 3.4, up: 0, dist: 9.5 };
    game.camBack = w < h ? 9.5 : 11;
    game.camUp = w < h ? 6.0 : 6.6;
    game.reducedMotion = matchMedia('(prefers-reduced-motion: reduce)').matches;
    game.camera.updateProjectionMatrix();
  }
  if (composer) {
    composer.setSize(w, h);
    bloom.resolution.set(w / 2, h / 2);
  }
}
addEventListener('resize', resize);

function disposeScene(scene) {
  scene.traverse((o) => {
    o.geometry?.dispose();
    const m = o.material;
    (Array.isArray(m) ? m : m ? [m] : []).forEach((x) => { x.map?.dispose(); x.emissiveMap?.dispose(); x.dispose(); });
  });
}

function mountGame(a) {
  if (game) disposeScene(game.scene);
  area = a;
  game = new Game(a, onGameEvent, { shadows: !coarse, lowEnd: coarse });
  try { JSON.parse(store.get('altnets-hints') || '[]').forEach((k) => game.hints.add(k)); } catch { /* ignore */ }
  setupComposer();
}

// ------------------------------------------------------------ HUD
const hud = { score: -1, lives: -1, pct: -1, street: null, buf: undefined, power: -1, mult: -1 };

function showPlayUi(on) {
  $('hud').hidden = !on;
  $('minimap').hidden = !on;
  $('status').hidden = !on;
  $('pad').hidden = !on || !coarse;
}

function updateHud() {
  if (!game || game.attract) return;
  const h = game.hud();
  if (h.score !== hud.score) { hud.score = h.score; $('score').textContent = h.score.toLocaleString('en-GB'); }
  if (h.coins !== hud.coins) {
    hud.coins = h.coins;
    $('coins').textContent = h.coins;
    $('coins').parentElement.classList.remove('bump');
    void $('coins').offsetWidth;
    $('coins').parentElement.classList.add('bump');
  }
  if (h.pct !== hud.pct) { hud.pct = h.pct; $('pct').textContent = h.pct + '%'; $('bar').style.width = h.pct + '%'; }
  if (h.lives !== hud.lives) {
    hud.lives = h.lives;
    $('lives').innerHTML = Array.from({ length: Math.max(0, h.lives) }, () => `<img src="${import.meta.env.BASE_URL}sprites/altnet-back.png" alt="">`).join('');
    $('lives').setAttribute('aria-label', `${h.lives} lives left`);
  }
  const street = h.street || 'a back lane';
  if (street !== hud.street) { hud.street = street; $('street').textContent = street; }
  if (h.buf !== hud.buf) {
    hud.buf = h.buf;
    $('turnChip').hidden = !h.buf;
    $('turnChip').textContent = h.buf === 'left' ? '‹ Left lane: turning left' : 'Right lane: turning right ›';
  }
  const mult = h.mult > 1 ? h.mult : 0;
  if (mult !== hud.mult) {
    hud.mult = mult;
    $('multChip').hidden = !mult;
    $('multChip').textContent = `Streak x${mult}`;
  }
  // fibre finder chip: distance and an arrow relative to where you're facing
  const fc = $('finderChip');
  if (h.finder && game.state === 'play') {
    const pp = game.g.pose(game.p);
    const ang = Math.atan2(h.finder.x - pp.x, -(h.finder.z - pp.z)) - game.camH;
    fc.hidden = false;
    fc.querySelector('i').style.transform = `rotate(${ang}rad)`;
    fc.querySelector('b').textContent = `Fibre gap ${h.finder.dist}m`;
  } else fc.hidden = true;
  const power = h.fright > 0 ? Math.ceil(h.fright) : 0;
  if (power !== hud.power) {
    hud.power = power;
    $('powerChip').hidden = !power;
    $('powerChip').textContent = `Switch-off ${power}s`;
  }
  const banner = $('banner');
  if (game.state === 'ready') {
    const st = game.stationDist != null && game.stationDist > area.radius + 150
      ? `Coppers dispatched from ${game.stationName}, ${(game.stationDist / 1000).toFixed(1)}km away`
      : `Coppers dispatched from ${game.stationName}`;
    const intro = { start: 'Ready?', round: `Round ${game.round}`, respawn: 'Back on the run' }[game.readyReason] || 'Ready?';
    const count = Math.ceil(game.readyT);
    const title = game.readyT > 2.4 ? intro : String(count);
    const where = area.postcode === 'EC4M 7EH' ? 'Breaking out of the Old Bailey' : `Breaking out on ${h.street || 'a back lane'}`;
    const skip = game.intro && game.readyT > 1 ? `<div class="skip">${coarse ? 'Tap' : 'Press any key'} to skip</div>` : '';
    const html = `<div class="big${title.length === 1 ? ' count' : ''}">${title}</div><div class="sub">${esc(where)} &middot; ${esc(area.label)}</div><div class="sub">${esc(st)}</div>${skip}`;
    const key = 'ready' + game.round + game.lives + title + (skip ? 1 : 0);
    if (banner.dataset.k !== key) { banner.innerHTML = html; banner.dataset.k = key; }
    banner.hidden = false;
  } else if (banner.dataset.k?.startsWith('ready')) {
    banner.hidden = true;
    banner.dataset.k = '';
  }
}

function flashBanner(html, ms) {
  const b = $('banner');
  b.innerHTML = html;
  b.dataset.k = 'flash';
  b.hidden = false;
  clearTimeout(flashBanner.t);
  flashBanner.t = setTimeout(() => { if (b.dataset.k === 'flash') b.hidden = true; }, ms);
}

function pop(text, tone) {
  const el = document.createElement('span');
  el.className = `pop ${tone || 'teal'}`;
  el.textContent = text;
  $('pops').appendChild(el);
  setTimeout(() => el.remove(), 1400);
}

const esc = (s) => String(s ?? '').replace(/[&<>"]/g, (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[c]));

// ------------------------------------------------------------ copper warnings
// Arrows on the screen edge for coppers you can't see, and a red glow when close.
const threatEls = [];
const tv = new THREE.Vector3();
function drawThreats() {
  const box = $('threats');
  const on = game && !game.attract && game.state === 'play';
  const h = on ? game.hud() : { threats: [] };
  const pp = on ? game.g.pose(game.p) : null;
  let nearest = Infinity, shown = 0;
  for (const c of h.threats) {
    const d = Math.hypot(c.x - pp.x, c.z - pp.z);
    nearest = Math.min(nearest, d);
    if (d > 70) continue;
    tv.set(c.x, 2, c.z).project(game.camera);
    const onScreen = tv.z < 1 && Math.abs(tv.x) < 0.92 && Math.abs(tv.y) < 0.9;
    if (onScreen) continue;
    // direction on screen; behind the camera flips
    let sx = tv.x, sy = tv.y;
    if (tv.z > 1) { sx = -sx; sy = -sy; }
    const a = Math.atan2(-sy, sx);
    const el = threatEls[shown] || (threatEls[shown] = Object.assign(document.createElement('div'), { className: 'threat' }));
    if (!el.parentNode) box.appendChild(el);
    const r = 0.42;
    el.style.left = `${50 + Math.cos(a) * r * 100}%`;
    el.style.top = `${50 + Math.sin(a) * r * 100}%`;
    el.style.transform = `translate(-50%, -50%) rotate(${a}rad)`;
    el.dataset.d = `${Math.round(d)}m`;
    el.hidden = false;
    shown++;
  }
  for (let i = shown; i < threatEls.length; i++) threatEls[i].hidden = true;
  $('danger').style.opacity = on && nearest < 28 ? String(Math.min(1, (28 - nearest) / 18) * 0.9) : '0';
}

// ------------------------------------------------------------ minimap
const mm = $('minimap');
const mctx = mm.getContext('2d');
function drawMinimap() {
  if (mm.hidden || !game) return;
  const g = game.g, W = mm.width, R = area.radius * 1.08;
  const pp = g.pose(game.p);
  const s = (W / 2) / R;
  mctx.clearRect(0, 0, W, W);
  mctx.save();
  mctx.beginPath();
  mctx.arc(W / 2, W / 2, W / 2, 0, Math.PI * 2);
  mctx.clip();
  mctx.translate(W / 2, W / 2);
  mctx.scale(s, s);
  mctx.lineCap = 'round';
  for (const e of g.edges) {
    const laid = g.laid[e.i];
    for (let c = 0; c < e.cells; c++) {
      const a = g.pointAt(e, c * e.cellLen), b = g.pointAt(e, (c + 1) * e.cellLen);
      mctx.strokeStyle = laid[c] ? '#1ecbc4' : 'rgba(200,112,60,0.55)';
      mctx.lineWidth = (laid[c] ? 7 : 4) / s * (W / 300);
      mctx.beginPath(); mctx.moveTo(a.x, a.z); mctx.lineTo(b.x, b.z); mctx.stroke();
    }
  }
  const dot = (x, z, r, col) => { mctx.fillStyle = col; mctx.beginPath(); mctx.arc(x, z, r / s * (W / 300), 0, Math.PI * 2); mctx.fill(); };
  for (const p of game.pickups) dot(p.x, p.z, 9, p.type === 'switch' ? '#f6c521' : '#e8408f');
  const sp = g.nodes[game.spawnNode];
  dot(sp.x, sp.z, 9, '#2f72e6');
  for (const c of game.cops) {
    if (c.mode === 'retired' || !c.m) continue;
    const cp = g.pose(c.m);
    dot(cp.x, cp.z, 11, c.mode === 'fright' ? '#9fb0b3' : '#f28a24');
  }
  // runner arrow
  mctx.translate(pp.x, pp.z);
  mctx.rotate(pp.h);
  const k = 1 / s * (W / 300);
  mctx.fillStyle = '#ffffff';
  mctx.beginPath(); mctx.moveTo(0, -16 * k); mctx.lineTo(11 * k, 12 * k); mctx.lineTo(-11 * k, 12 * k); mctx.closePath(); mctx.fill();
  mctx.restore();
}

// ------------------------------------------------------------ screens
const screen = $('screen');

// variant: 'side' docks the panel beside the live world (a bottom sheet on
// phones); 'center' is for small interruptions like pause.
function show(html, variant = 'center') {
  screen.className = `screen ${variant}`;
  screen.innerHTML = html;
  screen.hidden = false;
  const first = screen.querySelector('[data-autofocus]');
  if (first && !coarse) setTimeout(() => first.focus(), 30);
}
function hide() { screen.hidden = true; screen.innerHTML = ''; }

function titleScreen(message = '') {
  showPlayUi(false);
  $('banner').hidden = true;
  $('hint').hidden = true;
  audio.setMusic(false);
  if (game) {
    if (game.state !== 'title') game.resetRun();
    game.attract = true;
  }
  const last = store.get('altnets-postcode') || '';
  const best = Number(store.get('altnets-best') || 0);
  show(`
  <div class="card panel title">
    <div>
      <div>
        <p class="eyebrow">Alternative routes. A brighter tomorrow.</p>
        <div class="wordmark"><span>The</span>Altnets</div>
        <p class="game-name">Escape the Coppers</p>
        <span class="swoosh"></span>
        <p class="lede"><span class="long">Our hero has just legged it out of the Old Bailey. </span>Every street it runs down gets <b>full fibre</b>. Connect your whole area before the coppers nick you.</p>
        <form class="postcode" id="pcForm" novalidate>
          <label for="pc">Your postcode</label>
          <input id="pc" name="pc" autocomplete="postal-code" autocapitalize="characters" spellcheck="false" inputmode="text" placeholder="e.g. EC4M 7EH" maxlength="8" value="${esc(last)}" data-autofocus aria-describedby="pcError pcNote">
          <p class="error" id="pcError" role="alert">${esc(message)}</p>
          <button class="btn teal wide" type="submit">Play my streets</button>
          <button class="btn ghost wide" type="button" id="playDemo">Play the Old Bailey</button>
          <p class="note" id="pcNote">Your postcode only draws the map.${best ? ` <b class="best-chip">Your best: ${best.toLocaleString('en-GB')}</b>` : ''}</p>
        </form>
        <ul class="how">
          <li class="keys-only"><kbd>&larr;</kbd><kbd>&rarr;</kbd> change lane. Your lane picks the turn</li>
          <li class="keys-only"><kbd>Space</kbd> jump roadworks</li>
          <li class="keys-only"><kbd>&darr;</kbd> U-turn</li>
          <li class="touch-only">Swipe left and right to change lane. Your lane picks the turn</li>
          <li class="touch-only">Swipe up to jump</li>
          <li><span class="dot" style="background:#ffc928"></span> Grab the Altnets coins</li>
          <li><span class="dot" style="background:var(--yellow)"></span> Switch-off: the coppers run for it</li>
          <li><span class="dot" style="background:var(--pink)"></span> Gigabit: speed boost</li>
        </ul>
        <p class="osm-note">Real streets from <a href="https://www.openstreetmap.org/copyright" target="_blank" rel="noopener">OpenStreetMap contributors</a>.</p>
      </div>
    </div>
  </div>`, 'side');
  $('pcForm').addEventListener('submit', (e) => {
    e.preventDefault();
    const pc = $('pc').value.trim();
    if (!pc) { $('pcError').textContent = 'Enter a postcode, or play the Old Bailey.'; return; }
    startWithPostcode(pc);
  });
  $('playDemo').addEventListener('click', () => startDemo());
  // tidy the postcode as it's typed: capitals, one space before the last three characters
  $('pc').addEventListener('input', (e) => {
    const raw = e.target.value.toUpperCase().replace(/[^A-Z0-9]/g, '').slice(0, 7);
    e.target.value = raw.length > 4 ? `${raw.slice(0, -3)} ${raw.slice(-3)}` : raw;
    $('pcError').textContent = '';
    // start fetching the map as soon as the postcode looks complete
    clearTimeout(prefetchT);
    if (/^[A-Z]{1,2}\d[A-Z\d]?\s\d[A-Z]{2}$/.test(e.target.value)) prefetchT = setTimeout(() => fetchArea(e.target.value).catch(() => {}), 350);
  });
}

const areaCache = new Map();
let prefetchT = 0;
function fetchArea(pc) {
  const key = pc.toUpperCase().replace(/\s+/g, '');
  if (!areaCache.has(key)) {
    const p = STATIC
      ? import('./area-client.js').then((m) => m.areaFor(pc))
      : fetch('/api/area?postcode=' + encodeURIComponent(pc)).then(async (res) => {
        const body = await res.json().catch(() => ({}));
        if (!res.ok) throw new Error(body.error || 'Something went wrong loading that area.');
        return body;
      });
    p.catch(() => areaCache.delete(key));
    areaCache.set(key, p);
  }
  return areaCache.get(key);
}

// a short fade hides the moment the city is swapped for another
function fade(on) {
  const f = $('fade');
  f.classList.toggle('on', on);
  return new Promise((ok) => setTimeout(ok, on ? 220 : 0));
}

async function switchArea(a) {
  if (area && area.postcode === a.postcode && game) { game.resetRun(); return; }
  await fade(true);
  mountGame(a);
  game.attract = true;
  game.sync(0.016, performance.now() / 1000);
  fade(false);
}

async function startWithPostcode(pc) {
  playMode = 'postcode';
  track('start', { mode: 'postcode' });
  audio.start();
  store.set('altnets-postcode', pc.toUpperCase());
  const btn = screen.querySelector('#pcForm button[type=submit]');
  const slow = setTimeout(() => { if (btn) { btn.disabled = true; btn.innerHTML = '<span class="mini-spin"></span> Finding your streets&hellip;'; } }, 150);
  try {
    const a = await fetchArea(pc);
    clearTimeout(slow);
    await switchArea(a);
    play();
  } catch (err) {
    clearTimeout(slow);
    titleScreen(err.message || 'Something went wrong loading that area.');
  }
}

let baileyArea = null;
async function startDemo() {
  playMode = 'demo';
  track('start', { mode: 'demo' });
  audio.start();
  baileyArea = baileyArea || await (await fetch(import.meta.env.BASE_URL + 'areas/old-bailey.json')).json();
  await switchArea(baileyArea);
  play();
}

function play() {
  hide();
  paused = false;
  hud.lives = hud.score = hud.pct = hud.mult = hud.power = -1;
  hud.street = null;
  $('hudArea').textContent = area.label;
  showPlayUi(true);
  syncMute();
  game.begin();
}

// builds the share card in the background and shares or saves it on click
function wireShare(stats, text) {
  let card = null;
  import('./share.js').then(async ({ makeShareCard }) => {
    card = await makeShareCard(stats);
    const img = $('cardPreview');
    if (img) { img.src = URL.createObjectURL(card); img.hidden = false; }
  }).catch(() => { /* card is optional */ });
  $('shareCard').addEventListener('click', async () => {
    const btn = $('shareCard');
    try {
      const { makeShareCard, shareCard } = await import('./share.js');
      card = card || await makeShareCard(stats);
      const r = await shareCard(card, { text, url: 'https://thealtnets.com' });
      btn.textContent = r === 'shared' ? 'Shared' : r === 'downloaded' ? 'Card saved' : 'Share my streets';
    } catch { btn.textContent = 'Could not make the card'; }
  });
}

// Where "Check fibre in my area" goes. Confirm the page with The Altnets; the
// postcode and campaign tags ride along so they can prefill and attribute.
const CTA_BASE = 'https://thealtnets.com/';
function ctaUrl(pc) {
  const q = new URLSearchParams({ utm_source: 'escape-the-coppers', utm_medium: 'game', utm_campaign: 'end-screen' });
  if (pc) q.set('postcode', pc);
  return `${CTA_BASE}?${q}`;
}

// funnel events, ready for GA4 or any tag manager
function track(event, data = {}) {
  try { (window.dataLayer = window.dataLayer || []).push({ event: `etc_${event}`, ...data }); } catch { /* ignore */ }
}

function copyText(text, btn) {
  const fallback = () => {
    const t = document.createElement('textarea');
    t.value = text; t.setAttribute('readonly', ''); t.style.position = 'fixed'; t.style.opacity = '0';
    document.body.appendChild(t); t.select();
    try { document.execCommand('copy'); btn.textContent = 'Copied'; } catch { btn.textContent = 'Could not copy'; }
    t.remove();
  };
  if (navigator.clipboard) navigator.clipboard.writeText(text).then(() => { btn.textContent = 'Copied'; }).catch(fallback);
  else fallback();
}

// The real-world line: gigabit coverage for the player's own postcode.
async function fillReality(pc) {
  const box = $('reality');
  if (!box) return;
  if (!pc) {
    box.innerHTML = `<p class="reality-q">What can <b>your</b> street get?</p>
      <form class="reality-form" id="realForm" novalidate><input id="realPc" autocomplete="postal-code" autocapitalize="characters" placeholder="Your postcode" maxlength="8" aria-label="Your postcode"><button class="btn" type="submit">Show me</button></form>`;
    $('realForm').addEventListener('submit', (e) => {
      e.preventDefault();
      const v = $('realPc').value.trim().toUpperCase();
      if (!v) return;
      store.set('altnets-postcode', v);
      $('ctaBtn').href = ctaUrl(v);
      fillReality(v);
    });
    return;
  }
  box.innerHTML = `<p class="reality-q">Checking ${esc(pc)}&hellip;</p>`;
  let data = null;
  try {
    if (STATIC) data = await (await import('./area-client.js')).fibreFor(pc);
    else {
      const res = await fetch('/api/fibre?postcode=' + encodeURIComponent(pc));
      if (res.ok) data = await res.json();
    }
  } catch { /* offline: fall back */ }
  if (!$('reality')) return;
  if (data && data.gigabit != null) {
    const g = Math.round(data.gigabit);
    box.innerHTML = `<p class="reality-k">In real life at ${esc(data.postcode)}</p>
      <p class="reality-big"><b>${g}%</b> of ${data.homes ? 'homes' : 'premises'} can get gigabit broadband</p>
      <p class="reality-s">${g >= 50 ? 'Gigabit broadband could already reach your street.' : 'Your street could be next.'} Source: ${esc(data.source)}.</p>`;
  } else {
    box.innerHTML = `<p class="reality-k">In real life</p><p class="reality-big">See what full fibre you can get at <b>${esc(pc)}</b></p>`;
  }
}

// One end panel for every ending: caught, area connected, or quitting.
function endScreen(kind) {
  const best = Math.max(game.score, Number(store.get('altnets-best') || 0));
  store.set('altnets-best', String(best));
  const pct = kind === 'clear' ? 100 : Math.floor(game.g.coverage * 100);
  const mine = playMode === 'postcode' ? area.postcode : (store.get('altnets-postcode') || '');
  const head = {
    over: ['Game over', 'Nicked!', `${esc(game.caughtBy?.name || 'The coppers')} caught you${game.caughtOn ? ` on ${esc(game.caughtOn)}` : ''}.`],
    clear: [`Round ${game.round} complete`, 'Connected!', `Every street in ${esc(area.label)} is on fibre. The coppers are calling for backup.`],
    quit: ['Run over', 'Nice run', `You got ${pct}% of ${esc(area.label)} onto fibre.`],
  }[kind];
  const share = kind === 'clear'
    ? `I connected every street in ${area.label} to full fibre and escaped the coppers. Score ${game.score.toLocaleString('en-GB')}. Can you connect your street? thealtnets.com`
    : `I got ${pct}% of ${area.label} onto full fibre before ${game.caughtBy?.name || 'the coppers'} nicked me. Score ${game.score.toLocaleString('en-GB')}. Escape the Coppers at thealtnets.com`;
  showPlayUi(false);
  $('banner').hidden = true;
  $('hint').hidden = true;
  audio.setMusic(false);
  track('end', { kind, pct, score: game.score, area: area.postcode });
  show(`
  <div class="card panel end">
    <p class="eyebrow">${head[0]}</p>
    <h2 class="big-title${kind === 'clear' ? ' teal' : ''}">${head[1]}</h2>
    <p class="story">${head[2]}</p>
    <div class="stats">
      <div><small>Score</small><b>${game.score.toLocaleString('en-GB')}</b></div>
      <div><small>In the game</small><b>${pct}%</b></div>
      <div><small>Coins</small><b>${game.coinCount}</b></div>
    </div>
    <p class="best">${game.score >= best && game.score > 0 ? 'New personal best!' : `Your best: ${best.toLocaleString('en-GB')}`}</p>
    <div class="reality" id="reality"></div>
    <a class="btn teal wide cta-main" id="ctaBtn" href="${ctaUrl(mine)}" target="_blank" rel="noopener">Check fibre in my area</a>
    <div class="actions">
      ${kind === 'clear' ? '<button class="btn" id="next" data-autofocus>Keep running</button>' : '<button class="btn" id="again" data-autofocus>Run again</button>'}
      <button class="btn ghost" id="shareCard">Share my streets</button>
    </div>
    <div class="share">
      <img class="card-preview" id="cardPreview" alt="Your share card" hidden>
      <div class="share-row"><button class="linkish" id="copy" type="button">Copy my score</button><button class="linkish" id="newPc" type="button">Try another postcode</button></div>
    </div>
  </div>`, 'side');
  fillReality(mine);
  $('ctaBtn').addEventListener('click', () => track('cta', { kind, postcode: mine || null }));
  $('again')?.addEventListener('click', () => { game.resetRun(); play(); });
  $('next')?.addEventListener('click', () => { hide(); showPlayUi(true); game.nextRound(); });
  $('newPc').addEventListener('click', () => titleScreen());
  $('copy').addEventListener('click', () => copyText(share, $('copy')));
  wireShare({ area, graph: game.g, score: game.score, pct, caughtBy: kind === 'over' ? game.caughtBy?.name || null : null, cleared: kind === 'clear', round: game.round }, share);
  $('shareCard').addEventListener('click', () => track('share', { kind }));
}
const overScreen = () => endScreen('over');
const clearScreen = () => endScreen('clear');

function pauseScreen() {
  paused = true;
  audio.setMusic(false);
  audio.updateSiren(Infinity, 0);
  show(`
  <div class="card narrow">
    <h2 class="big-title">Paused</h2>
    <p class="story">Having a breather on ${esc(game.hud().street || 'a back lane')}.</p>
    <div class="menu">
      <button class="btn teal wide" id="resume" data-autofocus>Keep running</button>
      <button class="btn ghost wide" id="soundToggle">${audio.isMuted() ? 'Sound: off' : 'Sound: on'}</button>
      <button class="btn ghost wide" id="restart">Start this area again</button>
      <button class="linkish" id="quit">End this run</button>
    </div>
    <ul class="how compact">
      <li class="keys-only"><kbd>&larr;</kbd><kbd>&rarr;</kbd> change lane</li>
      <li class="keys-only"><kbd>Space</kbd> jump</li>
      <li class="keys-only"><kbd>&darr;</kbd> U-turn</li>
      <li class="keys-only"><kbd>M</kbd> sound</li>
      <li class="touch-only">Swipe left and right to change lane, swipe up to jump, swipe down to turn round</li>
    </ul>
  </div>`);
  $('resume').addEventListener('click', resume);
  $('soundToggle').addEventListener('click', () => { toggleMute(); $('soundToggle').textContent = audio.isMuted() ? 'Sound: off' : 'Sound: on'; });
  $('restart').addEventListener('click', () => { paused = false; game.resetRun(); play(); });
  $('quit').addEventListener('click', () => { paused = false; game.startOutro(); endScreen('quit'); });
}

function resume() { hide(); paused = false; if (game.state === 'play') audio.setMusic(true); }

const HINTS = {
  turn: coarse ? 'Swipe left or right to change lane. Be in the left lane at a junction to turn left, the right lane to turn right.' : 'Press <kbd>&larr;</kbd> or <kbd>&rarr;</kbd> to change lane. Left lane at a junction turns left, right lane turns right, the middle goes straight on.',
  coins: 'Altnets coins! Change lane to scoop up whole rows.',
  jump: coarse ? 'Roadworks ahead! Swipe up to jump.' : 'Roadworks ahead! Press <kbd>Space</kbd> to jump.',
  chase: 'Switch-off! The coppers are scared. Catch them for big points.',
};
function showHint(key) {
  const el = $('hint');
  el.innerHTML = HINTS[key];
  el.hidden = false;
  clearTimeout(showHint.t);
  showHint.t = setTimeout(() => { el.hidden = true; }, 4200);
  store.set('altnets-hints', JSON.stringify([...game.hints]));
}
const buzz = (p) => { try { navigator.vibrate?.(p); } catch { /* not supported */ } };

function onGameEvent(type, data) {
  if (type === 'hint') showHint(data);
  if (type === 'hit') buzz(60);
  if (type === 'retire') buzz(30);
  if (type === 'caught') { buzz([80, 60, 220]); audio.setMusic(false); }
  if (type === 'pop') pop(data.text, data.tone);
  if (type === 'go') flashBanner('<div class="big" style="color:var(--teal)">Go!</div>', 700);
  if (type === 'caught') flashBanner(`<div class="big" style="color:var(--orange)">Nicked!</div><div class="sub">${esc(data.name)} got you</div>`, 1700);
  if (type === 'over') setTimeout(overScreen, 900); // let the camera rise over your streets first
  if (type === 'go') audio.setMusic(true);
  if (type === 'clear') {
    audio.setMusic(false);
    buzz([40, 40, 40, 40, 120]);
    flashBanner(`<div class="big" style="color:var(--teal)">Connected!</div><div class="hand">Different fibre. Brighter places.</div>`, 2400);
    setTimeout(clearScreen, 2600);
  }
}

// ------------------------------------------------------------ input
const playing = () => game && !paused && screen.hidden && (game.state === 'play' || game.state === 'ready');

addEventListener('keydown', (e) => {
  if (e.target.tagName === 'INPUT') return;
  const k = e.key;
  if (!playing()) {
    if ((k === 'Escape' || k === 'p' || k === 'P') && paused) { e.preventDefault(); resume(); }
    return;
  }
  if (game.state === 'ready' && game.intro && !['ArrowLeft', 'ArrowRight', 'a', 'A', 'd', 'D'].includes(k)) { e.preventDefault(); game.skipIntro(); return; }
  if (k === 'ArrowLeft' || k === 'a' || k === 'A') { e.preventDefault(); game.turn('left'); }
  else if (k === 'ArrowRight' || k === 'd' || k === 'D') { e.preventDefault(); game.turn('right'); }
  else if (k === 'ArrowDown' || k === 's' || k === 'S') { e.preventDefault(); game.uturn(); }
  else if (k === ' ' || k === 'ArrowUp' || k === 'w' || k === 'W') { e.preventDefault(); game.jump(); }
  else if (k === 'Escape' || k === 'p' || k === 'P') { e.preventDefault(); pauseScreen(); }
  else if (k === 'm' || k === 'M') toggleMute();
});

let touch = null;
canvas.addEventListener('pointerdown', (e) => { if (playing()) touch = { x: e.clientX, y: e.clientY, used: false }; });
canvas.addEventListener('pointermove', (e) => {
  if (!touch || touch.used) return;
  const dy = e.clientY - touch.y, dx = e.clientX - touch.x;
  if (dy < -35 && Math.abs(dy) > Math.abs(dx)) { touch.used = true; game.jump(); }
  else if (dy > 45 && Math.abs(dy) > Math.abs(dx)) { touch.used = true; game.uturn(); }
  else if (Math.abs(dx) > 40 && Math.abs(dx) > Math.abs(dy)) { touch.used = true; game.turn(dx < 0 ? 'left' : 'right'); }
});
canvas.addEventListener('pointerup', (e) => {
  if (touch && !touch.used && game?.state === 'ready' && game.intro) { game.skipIntro(); touch = null; return; }
  if (touch && !touch.used && playing()) game.turn(e.clientX < innerWidth / 2 ? 'left' : 'right');
  touch = null;
});

$('pad').addEventListener('pointerdown', (e) => {
  const b = e.target.closest('button');
  if (!b || !playing()) return;
  e.preventDefault();
  const act = b.dataset.act;
  if (act === 'jump') game.jump(); else game.turn(act);
});

$('pauseBtn').addEventListener('click', () => { if (playing()) pauseScreen(); });
const ICON_ON = '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M4 9h4l5-4v14l-5-4H4z"/><path d="M16 8.5a5 5 0 0 1 0 7M18.5 6a8.5 8.5 0 0 1 0 12" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"/></svg>';
const ICON_OFF = '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M4 9h4l5-4v14l-5-4H4z"/><path d="M16 9l5 6M21 9l-5 6" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"/></svg>';
function syncMute() {
  const off = audio.isMuted();
  $('muteBtn').innerHTML = off ? ICON_OFF : ICON_ON;
  $('muteBtn').setAttribute('aria-label', off ? 'Turn sound on' : 'Turn sound off');
}
function toggleMute() { audio.setMuted(!audio.isMuted()); syncMute(); }
$('muteBtn').addEventListener('click', toggleMute);

document.addEventListener('visibilitychange', () => { if (document.hidden && playing()) pauseScreen(); });

// drop the render resolution on slow devices so the game stays smooth
let slow = 0, fast = 0, ratio = renderer.getPixelRatio();
// Quality steps down when frames run slow: resolution first, then contact
// shading, then bloom. It never steps back up past what the device managed.
function tuneResolution(dt) {
  if (dt > 0.024) { slow += dt; fast = 0; } else { fast += dt; slow = Math.max(0, slow - dt * 0.5); }
  if (slow > 1.5 && ratio <= 0.75 && tier < 2) {
    tier++;
    slow = 0;
    if (tier === 1 && aoPass) aoPass.enabled = false;
    if (tier === 2 && bloom) bloom.enabled = false;
    track('quality', { tier });
    return;
  }
  if (slow > 1.5 && ratio > 0.75) { ratio = Math.max(0.75, ratio - 0.25); slow = 0; applyRatio(); }
  else if (fast > 6 && ratio < Math.min(devicePixelRatio, coarse ? 1.5 : 2)) { ratio += 0.25; fast = 0; applyRatio(); }
}
function applyRatio() {
  renderer.setPixelRatio(ratio);
  composer?.setPixelRatio?.(ratio);
  resize();
}

// ------------------------------------------------------------ loop
let last = performance.now();
let acc = 0;
function frame(now) {
  const dt = Math.min(0.1, (now - last) / 1000);
  last = now;
  if (game) {
    if (!paused) {
      // a short slow-motion beat when you're caught
      const scale = game.slowmo > 0 ? 0.3 : 1;
      if (game.slowmo > 0) game.slowmo -= dt;
      acc += dt * scale;
      while (acc >= STEP) { game.update(STEP); acc -= STEP; }
    } else acc = 0;
    game.sync(dt, now / 1000);
    if (game.state === 'play') audio.setMusicLevel(game.g.coverage);
    composer.render();
    tuneResolution(dt);
    updateHud();
    drawThreats();
    drawMinimap();
  }
  requestAnimationFrame(frame);
}

// boot: the Old Bailey turns slowly behind the title card
(async () => {
  baileyArea = await (await fetch(import.meta.env.BASE_URL + 'areas/old-bailey.json')).json();
  mountGame(baileyArea);
  titleScreen();
  requestAnimationFrame(frame);
})();

window.__game = () => game; // handy for debugging in the console
