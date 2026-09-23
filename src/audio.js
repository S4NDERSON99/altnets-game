// Tiny WebAudio sound kit. Nothing plays until start() runs from a click.
let ctx = null;
let master = null;
let siren = null;
let muted = false;
try { muted = localStorage.getItem('altnets-muted') === '1'; } catch { /* storage blocked */ }

export function start() {
  if (ctx) { ctx.resume(); return; }
  const AC = window.AudioContext || window.webkitAudioContext;
  if (!AC) return;
  ctx = new AC();
  master = ctx.createGain();
  master.gain.value = muted ? 0 : 0.7;
  master.connect(ctx.destination);
  // two tone siren, volume follows the nearest copper
  const osc = ctx.createOscillator();
  osc.type = 'square';
  const lp = ctx.createBiquadFilter();
  lp.type = 'lowpass'; lp.frequency.value = 1400;
  const g = ctx.createGain();
  g.gain.value = 0;
  osc.connect(lp).connect(g).connect(master);
  osc.start();
  siren = { osc, g };
}

export function isMuted() { return muted; }

export function setMuted(v) {
  muted = v;
  try { localStorage.setItem('altnets-muted', v ? '1' : '0'); } catch { /* storage blocked */ }
  if (master) master.gain.value = v ? 0 : 0.7;
}

function tone(freq, dur, { type = 'square', vol = 0.05, slide = 1, delay = 0 } = {}) {
  if (!ctx) return;
  const t = ctx.currentTime + delay;
  const o = ctx.createOscillator();
  const g = ctx.createGain();
  o.type = type;
  o.frequency.setValueAtTime(freq, t);
  if (slide !== 1) o.frequency.exponentialRampToValueAtTime(freq * slide, t + dur);
  g.gain.setValueAtTime(vol, t);
  g.gain.exponentialRampToValueAtTime(0.0001, t + dur);
  o.connect(g).connect(master);
  o.start(t);
  o.stop(t + dur + 0.02);
}

let tick = 0;
export const sfx = {
  lay() { tick = (tick + 1) % 6; tone(900 + tick * 70, 0.04, { type: 'triangle', vol: 0.025 }); },
  turn() { tone(520, 0.05, { type: 'triangle', vol: 0.03 }); },
  jump() { tone(380, 0.22, { vol: 0.04, slide: 2 }); },
  land() { tone(160, 0.08, { type: 'triangle', vol: 0.05 }); },
  hit() { tone(170, 0.3, { type: 'sawtooth', vol: 0.07, slide: 0.5 }); },
  clear() { tone(620, 0.12, { vol: 0.04, slide: 1.4 }); },
  power() { tone(220, 0.5, { type: 'sawtooth', vol: 0.06, slide: 4 }); },
  retire() { tone(440, 0.25, { vol: 0.06, slide: 3 }); tone(880, 0.2, { vol: 0.04, delay: 0.12 }); },
  boost() { tone(600, 0.35, { type: 'triangle', vol: 0.06, slide: 2.5 }); },
  caught() { tone(700, 1.1, { vol: 0.07, slide: 0.15 }); },
  win() { [523, 659, 784, 1047, 1319].forEach((f, i) => tone(f, 0.22, { vol: 0.05, delay: i * 0.11 })); },
  streak() { [660, 880, 1320].forEach((f, i) => tone(f, 0.1, { type: 'triangle', vol: 0.05, delay: i * 0.06 })); },
  street() { [784, 988, 1175, 1568].forEach((f, i) => tone(f, 0.14, { type: 'square', vol: 0.035, delay: i * 0.07 })); },
  go() { [392, 523].forEach((f, i) => tone(f, 0.16, { vol: 0.05, delay: i * 0.14 })); },
};

// nearest: metres to the closest chasing copper (Infinity for none)
export function updateSiren(nearest, time) {
  if (!siren) return;
  const vol = nearest < 70 ? 0.035 * (1 - nearest / 70) : 0;
  siren.g.gain.setTargetAtTime(vol, ctx.currentTime, 0.1);
  siren.osc.frequency.setTargetAtTime(Math.floor(time * 1.6) % 2 ? 960 : 720, ctx.currentTime, 0.01);
}

// ------------------------------------------------------------ music
// A small chiptune loop: kick, hats, a bassline and an arpeggio that joins in
// as the streets fill up. Tempo climbs with coverage.
const BASS = [40, 40, 52, 40, 43, 43, 55, 43, 36, 36, 48, 36, 38, 38, 50, 45];
const ARP = [64, 67, 71, 67, 62, 67, 71, 74, 60, 64, 67, 64, 62, 66, 69, 66];
const hz = (m) => 440 * 2 ** ((m - 69) / 12);
let music = null;

function noiseBuffer() {
  const b = ctx.createBuffer(1, ctx.sampleRate * 0.2, ctx.sampleRate);
  const d = b.getChannelData(0);
  for (let i = 0; i < d.length; i++) d[i] = Math.random() * 2 - 1;
  return b;
}

function voice(freq, t, dur, type, vol, out) {
  const o = ctx.createOscillator();
  const g = ctx.createGain();
  o.type = type;
  o.frequency.setValueAtTime(freq, t);
  g.gain.setValueAtTime(vol, t);
  g.gain.exponentialRampToValueAtTime(0.0001, t + dur);
  o.connect(g).connect(out);
  o.start(t);
  o.stop(t + dur + 0.02);
  return o;
}

function playStep(step, t) {
  const m = music, out = m.gain;
  if (step % 4 === 0) {
    const o = voice(140, t, 0.18, 'sine', 0.35, out);
    o.frequency.exponentialRampToValueAtTime(40, t + 0.15);
  }
  if (step % 2 === 1 || m.level > 0.5) {
    const n = ctx.createBufferSource();
    n.buffer = m.noise;
    const hp = ctx.createBiquadFilter();
    hp.type = 'highpass'; hp.frequency.value = 7000;
    const g = ctx.createGain();
    g.gain.setValueAtTime(step % 2 ? 0.07 : 0.035, t);
    g.gain.exponentialRampToValueAtTime(0.0001, t + 0.05);
    n.connect(hp).connect(g).connect(out);
    n.start(t);
    n.stop(t + 0.06);
  }
  if (step % 8 === 4) {
    const n = ctx.createBufferSource();
    n.buffer = m.noise;
    const bp = ctx.createBiquadFilter();
    bp.type = 'bandpass'; bp.frequency.value = 1800;
    const g = ctx.createGain();
    g.gain.setValueAtTime(0.12, t);
    g.gain.exponentialRampToValueAtTime(0.0001, t + 0.14);
    n.connect(bp).connect(g).connect(out);
    n.start(t);
    n.stop(t + 0.16);
  }
  if (step % 2 === 0) voice(hz(BASS[(step >> 1) % 16]), t, 0.16, 'triangle', 0.22, out);
  if (m.level > 0.25) voice(hz(ARP[step % 16]), t, 0.09, 'square', 0.035 + m.level * 0.02, out);
}

export function setMusic(on) {
  if (!ctx) return;
  if (on && !music?.timer) {
    music = music || { gain: ctx.createGain(), noise: noiseBuffer(), level: 0, tempo: 124, step: 0, next: 0 };
    music.gain.gain.value = 0.55;
    music.gain.connect(master);
    music.next = ctx.currentTime + 0.06;
    music.timer = setInterval(() => {
      while (music.next < ctx.currentTime + 0.12) {
        playStep(music.step, music.next);
        music.next += 60 / music.tempo / 4;
        music.step = (music.step + 1) % 64;
      }
    }, 25);
  } else if (!on && music?.timer) {
    clearInterval(music.timer);
    music.timer = null;
    music.gain.disconnect();
  }
}

// level: 0 to 1 coverage
export function setMusicLevel(level) {
  if (!music) return;
  music.level = level;
  music.tempo = 124 + level * 30;
}
