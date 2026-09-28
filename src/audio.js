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
  loadVoices();
}

export function isMuted() { return muted; }

// Copper voice lines, loaded once sound is allowed.
const VOICES = ['oi', 'ello', 'sunshine', 'dialup', 'landline', 'legit', 'switchoff', 'gotcha', 'buffering'];
const voiceBuf = {};
let voiceBusyUntil = 0;
function loadVoices() {
  for (const k of VOICES) {
    fetch(`/audio/${k}.mp3`).then((r) => r.arrayBuffer()).then((b) => ctx.decodeAudioData(b)).then((buf) => { voiceBuf[k] = buf; }).catch(() => {});
  }
}

// dist: metres from the runner; far voices are quieter, one line at a time
export function speak(key, dist = 0, force = false) {
  if (!ctx || !voiceBuf[key]) return;
  if (!force && ctx.currentTime < voiceBusyUntil) return;
  const src = ctx.createBufferSource();
  src.buffer = voiceBuf[key];
  src.playbackRate.value = 0.96 + Math.random() * 0.1;
  const g = ctx.createGain();
  g.gain.value = Math.max(0.25, 1 - dist / 40) * 0.9;
  src.connect(g).connect(master);
  src.start();
  voiceBusyUntil = ctx.currentTime + src.buffer.duration / src.playbackRate.value + 0.6;
  duck(src.buffer.duration / src.playbackRate.value);
}

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
// A cartoon night groove: pad chords (Am, F, C, G), a bassline, a plucked
// arpeggio, kick, snare and hats. Layers join in and the tempo climbs as the
// streets fill with fibre. The mix ducks under the coppers' voices.
const CHORDS = [[57, 60, 64], [53, 57, 60], [48, 52, 55], [55, 59, 62]]; // one bar each
const BASS = [0, 0, 12, 0, 0, 7, 0, 12];
const hz = (m) => 440 * 2 ** ((m - 69) / 12);
let music = null;

function noiseBuffer() {
  const b = ctx.createBuffer(1, ctx.sampleRate * 0.3, ctx.sampleRate);
  const d = b.getChannelData(0);
  for (let i = 0; i < d.length; i++) d[i] = Math.random() * 2 - 1;
  return b;
}

function voice(freq, t, dur, type, vol, out, attack = 0.005) {
  const o = ctx.createOscillator();
  const g = ctx.createGain();
  o.type = type;
  o.frequency.setValueAtTime(freq, t);
  g.gain.setValueAtTime(0.0001, t);
  g.gain.exponentialRampToValueAtTime(vol, t + attack);
  g.gain.exponentialRampToValueAtTime(0.0001, t + dur);
  o.connect(g).connect(out);
  o.start(t);
  o.stop(t + dur + 0.05);
  return o;
}

function noiseHit(t, dur, vol, type, freq, out) {
  const n = ctx.createBufferSource();
  n.buffer = music.noise;
  const f = ctx.createBiquadFilter();
  f.type = type; f.frequency.value = freq;
  const g = ctx.createGain();
  g.gain.setValueAtTime(vol, t);
  g.gain.exponentialRampToValueAtTime(0.0001, t + dur);
  n.connect(f).connect(g).connect(out);
  n.start(t);
  n.stop(t + dur + 0.02);
}

function pad(chord, t, dur) {
  const f = ctx.createBiquadFilter();
  f.type = 'lowpass'; f.frequency.value = 900 + music.level * 900; f.Q.value = 0.7;
  const g = ctx.createGain();
  g.gain.setValueAtTime(0.0001, t);
  g.gain.exponentialRampToValueAtTime(0.045, t + 0.35);
  g.gain.setValueAtTime(0.045, t + dur - 0.3);
  g.gain.exponentialRampToValueAtTime(0.0001, t + dur);
  f.connect(g).connect(music.gain);
  for (const m of chord) {
    for (const det of [-7, 7]) {
      const o = ctx.createOscillator();
      o.type = 'sawtooth';
      o.frequency.value = hz(m);
      o.detune.value = det;
      o.connect(f);
      o.start(t);
      o.stop(t + dur + 0.05);
    }
  }
}

function playStep(step, t) {
  const m = music, out = m.gain, lv = m.level;
  const bar = Math.floor(step / 16) % 4, s16 = step % 16;
  const chord = CHORDS[bar];
  if (s16 === 0) pad(chord, t, (60 / m.tempo) * 4);
  // kick: on the beat, doubled up once the streets start filling
  if (s16 % 4 === 0 || (lv > 0.6 && s16 === 14)) {
    const o = voice(150, t, 0.22, 'sine', 0.5, out);
    o.frequency.exponentialRampToValueAtTime(45, t + 0.12);
  }
  // snare on two and four
  if (s16 === 4 || s16 === 12) { noiseHit(t, 0.16, 0.16, 'bandpass', 1900, out); voice(190, t, 0.08, 'triangle', 0.12, out); }
  // hats: offbeats, sixteenths later on
  if (s16 % 2 === 1 || (lv > 0.45 && s16 % 1 === 0)) noiseHit(t, 0.04, s16 % 4 === 2 ? 0.05 : 0.03, 'highpass', 8000, out);
  // bass
  if (s16 % 2 === 0) voice(hz(chord[0] - 24 + BASS[(s16 / 2) % 8]), t, 0.2, 'triangle', 0.26, out);
  // plucked arpeggio once you're a quarter of the way in
  if (lv > 0.25 && s16 % 2 === 0) voice(hz(chord[(s16 / 2) % 3] + 12 + (s16 >= 8 ? 12 : 0)), t, 0.16, 'square', 0.028 + lv * 0.02, out);
}

export function setMusic(on) {
  if (!ctx) return;
  if (on && !music?.timer) {
    music = music || { gain: ctx.createGain(), noise: noiseBuffer(), level: 0, tempo: 112, step: 0, next: 0 };
    music.gain.gain.value = 0.5;
    music.gain.connect(master);
    music.next = ctx.currentTime + 0.06;
    music.step = 0;
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
  music.tempo = 112 + level * 26;
}

// pull the music down while a voice line plays
function duck(seconds) {
  if (!music?.timer) return;
  const g = music.gain.gain, t = ctx.currentTime;
  g.cancelScheduledValues(t);
  g.setTargetAtTime(0.18, t, 0.05);
  g.setTargetAtTime(0.5, t + seconds, 0.25);
}
