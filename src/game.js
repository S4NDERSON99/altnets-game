// Game rules: the runner lays fibre, the coppers chase, switch-offs turn the
// tables, hurdles trip you up. Runs on a fixed 60Hz step from main.js.
import * as THREE from 'three';
import { Graph, advance, wrap } from './graph.js';
import { buildWorld, roadWidth, COLOURS } from './world.js';
import { makeRunner, makeCopper, makeSwitchOff, makeGigabit, makeHurdle, makeBlueLamp } from './actors.js';
import { sfx, updateSiren, speak } from './audio.js';
import { Sparks, makeBubble, TAUNTS, SCARED } from './fx.js';

export const COPS = [
  { name: 'Sgt Dial-Up', kind: 'chase', tint: 0xd2753a, wait: 1.2 },
  { name: 'PC Landline', kind: 'ambush', tint: 0xe0906a, wait: 3.5 },
  { name: 'Inspector ADSL', kind: 'shy', tint: 0xb8622e, wait: 6 },
  { name: 'DC Buffering', kind: 'wander', tint: 0xa9582a, wait: 9 },
];
const MODES = [[5, 'scatter'], [20, 'chase'], [5, 'scatter'], [25, 'chase'], [Infinity, 'chase']];
const JUMP = 0.62;
const CATCH = 2.6;
const HURDLES = ['roadworks', 'manhole', 'bike'];
const HURDLE_TEXT = { roadworks: 'Roadworks!', manhole: 'Open manhole!', bike: 'Hire bike!' };
const FIBRE_CYCLE = [COLOURS.fibre, COLOURS.pink, COLOURS.yellow, COLOURS.orange, COLOURS.blue].map((c) => new THREE.Color(c));

const SPARK = [new THREE.Color(0x1ecbc4), new THREE.Color(0xc8fffb)];
const BURST = [new THREE.Color(0xc8703c), new THREE.Color(0xf6c521), new THREE.Color(0xffffff)];
const INTRO = 3.4;

const lerpAngle = (a, b, t) => a + wrap(b - a) * t;

export class Game {
  constructor(area, emit, opts = {}) {
    this.area = area;
    this.emit = emit;
    this.g = new Graph(area);
    this.world = buildWorld(area, this.g, opts);
    this.scene = this.world.scene;
    this.camera = new THREE.PerspectiveCamera(62, 1, 0.5, 2600);
    this.time = 0;
    this.attract = true;

    this.runner = makeRunner();
    this.scene.add(this.runner.group);
    this.cops = COPS.map((c) => ({ ...c, view: makeCopper(c.tint), m: null, mode: 'wait' }));
    this.cops.forEach((c) => {
      this.scene.add(c.view.group);
      c.bubble = makeBubble();
      c.view.group.add(c.bubble.sprite);
    });
    this.sparks = new Sparks(this.scene);
    // arrows painted on the road showing which way you'll go at the next junction
    const arrow = new THREE.Shape();
    [[0, 1.2], [1.2, -0.1], [0.6, -0.1], [0, 0.5], [-0.6, -0.1], [-1.2, -0.1]].forEach(([x, y], i) => (i ? arrow.lineTo(x, y) : arrow.moveTo(x, y)));
    const arrowGeo = new THREE.ShapeGeometry(arrow);
    arrowGeo.scale(1.7, 1.7, 1);
    arrowGeo.rotateX(-Math.PI / 2);
    this.chevrons = [0, 1, 2].map(() => {
      const m = new THREE.Mesh(arrowGeo, new THREE.MeshBasicMaterial({ color: 0xffffff, transparent: true, opacity: 0.8, depthWrite: false }));
      m.renderOrder = 5;
      m.visible = false;
      this.scene.add(m);
      return m;
    });
    this.siren = new THREE.PointLight(0x3d7bff, 0, 30, 1.5);
    this.scene.add(this.siren);
    this.shake = 0;
    this.baseFov = 62;
    this.hints = new Set();
    this.streets = new Map();
    for (const e of this.g.edges) {
      if (!e.name) continue;
      const s = this.streets.get(e.name) || { total: 0, laid: 0, done: false };
      s.total += e.cells;
      this.streets.set(e.name, s);
    }

    this.setupCorners();
    this.setupStation();
    this.setupStart();

    this.round = 1;
    this.score = 0;
    this.lives = 3;
    this.pickups = [];
    this.hurdles = [];
    this.resetRound();
    this.resetActors();
    this.state = 'title';
  }

  // ---------------------------------------------------------------- setup

  setupCorners() {
    const g = this.g;
    const dirs = [[1, -1], [-1, -1], [-1, 1], [1, 1]];
    const used = new Set();
    this.corners = dirs.map(([sx, sz]) => {
      let best = -1, bv = -Infinity;
      g.nodes.forEach((n, i) => {
        const v = n.x * sx + n.z * sz;
        if (!used.has(i) && v > bv) { bv = v; best = i; }
      });
      used.add(best);
      return best;
    });
    this.cops.forEach((c, i) => { c.corner = this.corners[i]; });
  }

  setupStation() {
    const g = this.g, st = this.area.station, R = this.area.radius;
    let node;
    let lamp;
    if (st && st.dist < R + 150) {
      node = g.nearestNode(st.x, st.z);
      lamp = st.dist < R + 30 ? [st.x, st.z] : null;
    } else if (st) {
      const ang = Math.atan2(st.z, st.x);
      let bv = -Infinity;
      g.nodes.forEach((n, i) => {
        const v = n.x * Math.cos(ang) + n.z * Math.sin(ang);
        if (v > bv) { bv = v; node = i; }
      });
    } else {
      node = this.corners[0];
    }
    this.spawnNode = node;
    const n = g.nodes[node];
    if (!lamp) lamp = [n.x + 6, n.z + 6];
    const bl = makeBlueLamp();
    bl.position.set(lamp[0], 0, lamp[1]);
    this.scene.add(bl);
    // waiting coppers line up between the lamp and the junction
    this.waitSpots = this.cops.map((_, i) => {
      const t = (i + 1) / (this.cops.length + 1);
      return [lamp[0] + (n.x - lamp[0]) * t, lamp[1] + (n.z - lamp[1]) * t];
    });
    this.stationName = st?.name || 'the local nick';
    this.stationDist = st?.dist ?? null;
  }

  setupStart() {
    const g = this.g;
    // start near the postcode, on a named street when one is close by
    let near = g.nearestOnEdges(0, 0);
    if (!g.edges[near.edge].name) {
      const named = g.nearestOnEdges(0, 0, (e) => e.name);
      if (named && named.dist < near.dist + 60) near = named;
    }
    const e = g.edges[near.edge];
    const sp = g.nodes[this.spawnNode];
    const da = Math.hypot(g.nodes[e.a].x - sp.x, g.nodes[e.a].z - sp.z);
    const db = Math.hypot(g.nodes[e.b].x - sp.x, g.nodes[e.b].z - sp.z);
    const dir = db >= da ? 1 : -1; // run away from the station
    this.start = { edge: e.i, dir, s: dir === 1 ? near.d : e.len - near.d };
  }

  resetRound() {
    this.streets.forEach((s) => { s.laid = 0; s.done = false; });
    this.streetsDone = 0;
    this.g.resetFibre();
    this.world.resetFibre();
    for (const p of this.pickups) this.scene.remove(p.view.group);
    this.pickups = [];
    for (const i of this.corners) {
      if (i === this.spawnNode) continue;
      const n = this.g.nodes[i];
      const v = makeSwitchOff();
      v.group.position.set(n.x, 0, n.z);
      this.scene.add(v.group);
      this.pickups.push({ type: 'switch', x: n.x, z: n.z, view: v, life: Infinity });
    }
  }

  resetActors() {
    this.p = { ...this.start, buf: null, air: 0, jcd: 0, stumble: 0, boost: 0, since: 99, last: null };
    this.cops.forEach((c, i) => {
      c.mode = 'wait';
      c.waitT = Math.max(0.8, c.wait - (this.round - 1) * 0.8);
      c.m = null;
      c.rT = 0;
      c.wt = null;
      c.sayT = 0;
      c.nextTaunt = 1 + Math.random() * 3;
      c.bubble.hide();
    });
    this.streak = 0;
    this.streakT = 0;
    this.mult = 1;
    this.modeIdx = 0;
    this.modeT = 0;
    this.fright = 0;
    this.combo = 0;
    for (const h of this.hurdles) this.scene.remove(h.view);
    this.hurdles = [];
    this.hurdleT = 5;
    this.gigT = 14;
    this.pickups = this.pickups.filter((p) => {
      if (p.type === 'gig') this.scene.remove(p.view.group);
      return p.type !== 'gig';
    });
    const pose = this.g.pose(this.p);
    this.camH = pose.h;
    this.readyT = 2.2;
    this.seedTrail();
  }

  begin() {
    this.attract = false;
    this.state = 'ready';
    this.readyT = INTRO;
    this.intro = true;
    this.readyReason = 'start';
  }

  // ---------------------------------------------------------------- input

  turn(want) {
    if (this.state !== 'play' && this.state !== 'ready') return;
    const P = this.p, g = this.g;
    P.buf = want;
    sfx.turn();
    // pressed just after a junction: take the turn anyway
    if (this.state === 'play' && P.last && P.since < 9) {
      const { node, inH, edge, dir } = P.last;
      const pick = g.choose(g.options(node, { edge, dir }, inH), want);
      if (pick && !(pick.edge === P.edge && pick.dir === P.dir)) {
        P.edge = pick.edge;
        P.dir = pick.dir;
        P.s = Math.min(P.since, g.edges[pick.edge].len - 0.1);
        P.buf = null;
        P.last = null;
      }
    }
  }

  uturn() {
    if (this.state !== 'play') return;
    const P = this.p;
    P.dir = -P.dir;
    P.s = this.g.edges[P.edge].len - P.s;
    P.buf = null;
    P.last = null;
    this.seedTrail();
  }

  jump() {
    if (this.state !== 'play') return;
    const P = this.p;
    if (P.air > 0 || P.jcd > 0) return;
    P.air = JUMP;
    sfx.jump();
  }

  // ---------------------------------------------------------------- update

  update(dt) {
    this.time += dt;
    if (this.state === 'ready') {
      this.readyT -= dt;
      if (this.readyT <= 0) {
        this.state = 'play';
        this.intro = false;
        sfx.go();
        this.emit('go');
        this.hint('turn');
      }
      return;
    }
    if (this.state === 'dying') {
      this.dyingT -= dt;
      if (this.dyingT <= 0) {
        this.lives--;
        if (this.lives <= 0) { this.state = 'over'; this.emit('over'); }
        else { this.resetActors(); this.state = 'ready'; this.readyReason = 'respawn'; }
      }
      return;
    }
    if (this.state !== 'play') return;

    this.updatePlayer(dt);
    if (this.state !== 'play') return;
    this.updateModes(dt);
    this.updateCops(dt);
    this.updateHurdles(dt);
    this.updatePickups(dt);
    this.checkCops();
  }

  hint(key) {
    if (this.hints.has(key)) return;
    this.hints.add(key);
    this.emit('hint', key);
  }

  updatePlayer(dt) {
    const P = this.p, g = this.g;
    this.streakT -= dt;
    if (this.streakT <= 0 && this.streak) { this.streak = 0; this.mult = 1; }
    if (P.air > 0) {
      P.air -= dt;
      if (P.air <= 0) { P.air = 0; P.jcd = 0.12; sfx.land(); }
    } else if (P.jcd > 0) P.jcd -= dt;
    P.stumble = Math.max(0, P.stumble - dt);
    P.boost = Math.max(0, P.boost - dt);
    let sp = 15 + (this.round - 1) * 0.6;
    if (P.boost > 0) sp *= 1.45;
    if (P.stumble > 0) sp *= 0.4;
    advance(g, P, sp * dt, (m, node, inH) => this.playerAtNode(m, node, inH));
    P.since += sp * dt;
    const e = g.edges[P.edge];
    this.layAt(P.edge, P.dir === 1 ? P.s : e.len - P.s);
  }

  layAt(edge, d) {
    const c = this.g.lay(edge, d);
    if (c < 0) return;
    this.world.layCell(edge, c);
    this.streak++;
    this.streakT = 1.4;
    const mult = Math.min(5, 1 + Math.floor(this.streak / 20));
    if (mult > this.mult) { this.emit('pop', { text: `x${mult} streak!`, tone: 'pink' }); sfx.streak(); }
    this.mult = mult;
    this.score += 10 * mult;
    sfx.lay();
    const pp = this.g.pose(this.p);
    this.sparks.burst(pp.x, 0.3, pp.z, 3, SPARK, { up: 4, spread: 3, life: 0.5 });
    const name = this.g.edges[edge].name;
    const st = name && this.streets.get(name);
    if (st && !st.done && ++st.laid >= st.total) {
      st.done = true;
      this.streetsDone++;
      this.score += 250;
      this.emit('pop', { text: `${name} connected! +250`, tone: 'teal' });
      sfx.street();
      this.sparks.burst(pp.x, 1, pp.z, 40, FIBRE_CYCLE, { up: 10, spread: 7, life: 1.3 });
    }
    if (this.g.laidCount === this.g.totalCells) this.levelClear();
  }

  playerAtNode(m, node, inH) {
    const g = this.g, P = this.p;
    const e = g.edges[m.edge];
    this.layAt(m.edge, m.dir === 1 ? e.len - 0.01 : 0.01);
    const opts = g.options(node, m, inH);
    let pick = null;
    if (P.buf) {
      pick = g.choose(opts, P.buf);
      if (pick || opts.length >= 2) P.buf = null;
    }
    if (!pick) pick = g.choose(opts, null);
    P.last = { node, inH, edge: m.edge, dir: m.dir };
    P.since = 0;
    if (!pick) { m.dir = -m.dir; return; } // dead end: turn round
    m.edge = pick.edge;
    m.dir = pick.dir;
  }

  modeName() {
    return MODES[this.modeIdx][1];
  }

  updateModes(dt) {
    if (this.fright > 0) {
      this.fright -= dt;
      if (this.fright <= 0) {
        this.fright = 0;
        this.cops.forEach((c) => { if (c.mode === 'fright') c.mode = 'active'; });
      }
      return;
    }
    this.modeT += dt;
    if (this.modeT > MODES[this.modeIdx][0]) { this.modeT = 0; this.modeIdx = Math.min(this.modeIdx + 1, MODES.length - 1); }
  }

  copSpeed(c) {
    if (c.mode === 'fright') return 6.5;
    let s = 11.0 + (this.round - 1) * 0.9;
    if (c.kind === 'chase' && this.g.coverage > 0.7) s += 0.9;
    return Math.min(14.5, s);
  }

  updateCops(dt) {
    const pp = this.g.pose(this.p);
    for (const c of this.cops) {
      if (c.sayT > 0) { c.sayT -= dt; if (c.sayT <= 0) c.bubble.hide(); }
      if (c.mode === 'active') {
        const cp = this.g.pose(c.m);
        const d = Math.hypot(cp.x - pp.x, cp.z - pp.z);
        if (d < 26 && (c.nextTaunt -= dt) <= 0) {
          const line = TAUNTS[Math.floor(Math.random() * TAUNTS.length)];
          c.bubble.say(line.text);
          speak(line.voice, d);
          c.sayT = 1.6;
          c.nextTaunt = 4 + Math.random() * 5;
        }
      }
      if (c.mode === 'wait') {
        c.waitT -= dt;
        if (c.waitT <= 0) this.release(c);
        continue;
      }
      if (c.mode === 'retired') {
        c.rT -= dt;
        if (c.rT <= 0) { c.mode = 'wait'; c.waitT = 0.6; }
        continue;
      }
      advance(this.g, c.m, this.copSpeed(c) * dt, (m, node, inH) => this.copAtNode(c, m, node, inH));
    }
  }

  release(c) {
    const g = this.g;
    const opts = g.nodes[this.spawnNode].out.map((o) => ({ ...o, rel: 0 }));
    const pick = this.copPick(c, this.spawnNode, opts);
    c.m = { edge: pick.edge, dir: pick.dir, s: 0 };
    c.mode = 'active';
  }

  farNode(o) {
    const e = this.g.edges[o.edge];
    return o.dir === 1 ? e.b : e.a;
  }

  copTarget(c) {
    const g = this.g, P = this.p;
    const pNode = g.endNode(P);
    if (this.modeName() === 'scatter') return c.corner;
    const pp = g.pose(P), cp = c.m ? g.pose(c.m) : g.nodes[this.spawnNode];
    const d = Math.hypot(pp.x - cp.x, pp.z - cp.z);
    switch (c.kind) {
      case 'ambush': {
        const o = g.choose(g.options(pNode, P, g.arriveHeading(P)), null);
        return o ? this.farNode(o) : pNode;
      }
      case 'shy':
        return d > 70 ? pNode : c.corner;
      case 'wander':
        if (d < 45) return pNode;
        if (c.wt == null || this.time > c.wtT) { c.wt = Math.floor(Math.random() * g.nodes.length); c.wtT = this.time + 7; }
        return c.wt;
      default:
        return pNode;
    }
  }

  copPick(c, node, opts) {
    const g = this.g, P = this.p;
    if (c.mode === 'fright') return opts[Math.floor(Math.random() * opts.length)];
    // standing at either end of the runner's street: go straight at them
    if (this.modeName() === 'chase' && (node === g.endNode(P) || node === g.startNode(P))) {
      const direct = opts.find((o) => o.edge === P.edge);
      if (direct) return direct;
    }
    const dist = g.distancesTo(this.copTarget(c));
    let best = opts[0], bv = Infinity;
    for (const o of opts) {
      const v = g.edges[o.edge].len + dist[this.farNode(o)] + Math.random() * 3;
      if (v < bv) { bv = v; best = o; }
    }
    return best;
  }

  copAtNode(c, m, node, inH) {
    const opts = this.g.options(node, m, inH);
    if (!opts.length) { m.dir = -m.dir; return; }
    const pick = this.copPick(c, node, opts);
    m.edge = pick.edge;
    m.dir = pick.dir;
  }

  reverse(m) {
    m.dir = -m.dir;
    m.s = this.g.edges[m.edge].len - m.s;
  }

  startFright() {
    this.fright = Math.max(2.5, 5.5 - (this.round - 1) * 0.7);
    this.combo = 0;
    this.score += 50;
    for (const c of this.cops) {
      if (c.mode === 'active') {
        this.reverse(c.m);
        c.mode = 'fright';
        const line = SCARED[Math.floor(Math.random() * SCARED.length)];
        c.bubble.say(line.text);
        c.sayT = 1.4;
        speak(line.voice, 10);
      }
    }
    this.hint('chase');
    sfx.power();
    this.emit('pop', { text: 'SWITCH-OFF!', tone: 'yellow' });
  }

  checkCops() {
    const pp = this.g.pose(this.p);
    let nearest = Infinity;
    for (const c of this.cops) {
      if (c.mode !== 'active' && c.mode !== 'fright') continue;
      const cp = this.g.pose(c.m);
      const d = Math.hypot(pp.x - cp.x, pp.z - cp.z);
      if (c.mode === 'active') nearest = Math.min(nearest, d);
      if (d > CATCH) continue;
      if (c.mode === 'fright') {
        this.combo++;
        const pts = 200 * 2 ** (this.combo - 1);
        this.score += pts;
        c.mode = 'retired';
        c.rT = 4;
        c.bubble.hide();
        this.sparks.burst(cp.x, 1.5, cp.z, 50, BURST, { up: 9, spread: 8, life: 1.1 });
        this.shake = 0.35;
        sfx.retire();
        this.emit('retire');
        this.emit('pop', { text: `${c.name} retired! +${pts}`, tone: 'teal' });
      } else {
        this.caughtBy = c;
        this.caughtOn = this.g.edges[this.p.edge].name;
        this.state = 'dying';
        this.dyingT = 1.8;
        this.shake = 1.3;
        speak('gotcha', 0, true);
        this.streak = 0;
        this.mult = 1;
        this.sparks.burst(pp.x, 1.5, pp.z, 60, BURST, { up: 8, spread: 9, life: 1.2 });
        sfx.caught();
        updateSiren(Infinity, this.time);
        this.emit('caught', { name: c.name });
        return;
      }
    }
    this.nearestCop = nearest;
  }

  randomSpot(minDist) {
    const g = this.g, pp = g.pose(this.p);
    for (let tries = 0; tries < 30; tries++) {
      const e = g.edges[Math.floor(Math.random() * g.edges.length)];
      if (e.len < 30) continue;
      const d = 10 + Math.random() * (e.len - 20);
      const q = g.pointAt(e, d);
      if (Math.hypot(q.x - pp.x, q.z - pp.z) < minDist) continue;
      const clash = [...this.hurdles, ...this.pickups].some((o) => Math.hypot(o.x - q.x, o.z - q.z) < 12);
      if (clash) continue;
      return { e, d, ...q };
    }
    return null;
  }

  updateHurdles(dt) {
    this.hurdleT -= dt;
    if (this.hurdleT <= 0) {
      this.hurdleT = Math.max(3, 6.5 - this.round);
      if (this.hurdles.length < 3 + this.round) {
        const s = this.randomSpot(55);
        if (s) {
          const type = HURDLES[Math.floor(Math.random() * HURDLES.length)];
          const view = makeHurdle(type, roadWidth(s.e.kind));
          view.position.set(s.x, 0, s.z);
          view.rotation.y = -s.h;
          this.scene.add(view);
          this.hurdles.push({ type, x: s.x, z: s.z, view, life: 30, cleared: false });
        }
      }
    }
    const pp = this.g.pose(this.p), P = this.p;
    if (!this.hints.has('jump') && this.hurdles.some((h) => Math.hypot(pp.x - h.x, pp.z - h.z) < 45)) this.hint('jump');
    this.hurdles = this.hurdles.filter((h) => {
      h.life -= dt;
      const d = Math.hypot(pp.x - h.x, pp.z - h.z);
      let keep = h.life > 0;
      if (d < 2.2) {
        if (P.air > 0) {
          if (!h.cleared) { h.cleared = true; this.score += 50; this.emit('pop', { text: 'Cleared! +50', tone: 'teal' }); }
        } else if (!h.cleared) {
          P.stumble = 1.1;
          this.streak = 0;
          this.mult = 1;
          this.shake = 0.6;
          this.emit('hit');
          sfx.hit();
          this.emit('pop', { text: HURDLE_TEXT[h.type], tone: 'orange' });
          keep = false;
        }
      } else if (d > 5) h.cleared = false;
      if (!keep) this.scene.remove(h.view);
      return keep;
    });
  }

  updatePickups(dt) {
    this.gigT -= dt;
    if (this.gigT <= 0) {
      this.gigT = 20;
      if (!this.pickups.some((p) => p.type === 'gig')) {
        const s = this.randomSpot(80);
        if (s) {
          const v = makeGigabit();
          v.group.position.set(s.x, 0, s.z);
          this.scene.add(v.group);
          this.pickups.push({ type: 'gig', x: s.x, z: s.z, view: v, life: 14 });
        }
      }
    }
    const pp = this.g.pose(this.p);
    this.pickups = this.pickups.filter((p) => {
      p.life -= dt;
      const got = Math.hypot(pp.x - p.x, pp.z - p.z) < 3.2;
      if (got && p.type === 'switch') this.startFright();
      if (got && p.type === 'gig') {
        this.p.boost = 4;
        this.score += 100;
        sfx.boost();
        this.emit('pop', { text: 'GIGABIT! +100', tone: 'pink' });
      }
      const keep = !got && p.life > 0;
      if (!keep) this.scene.remove(p.view.group);
      return keep;
    });
  }

  levelClear() {
    this.state = 'clear';
    this.score += 1000 + this.lives * 250;
    updateSiren(Infinity, this.time);
    sfx.win();
    this.emit('clear');
  }

  nextRound() {
    this.round++;
    this.resetRound();
    this.resetActors();
    this.state = 'ready';
    this.readyT = INTRO;
    this.intro = true;
    this.readyReason = 'round';
  }

  // ---------------------------------------------------------------- views

  sync(dt, t) {
    const g = this.g, P = this.p, R = this.runner;
    const pp = g.pose(P);
    R.group.position.set(pp.x, 0, pp.z);
    const f = P.air > 0 ? 1 - P.air / JUMP : 0;
    const lift = Math.sin(Math.PI * f);
    const running = this.state === 'play';
    R.sprite.position.y = lift * 3.4 + (running ? Math.abs(Math.sin(t * 15)) * 0.28 : 0);
    R.shadow.scale.setScalar(1 - 0.45 * lift);
    let rot = running ? Math.sin(t * 15) * 0.07 : 0;
    if (P.stumble > 0) rot = Math.sin(t * 40) * 0.3;
    let scale = 1;
    if (this.state === 'dying') { rot = t * 14; scale = Math.max(0.05, this.dyingT / 1.8); }
    R.mat.rotation = rot;
    R.sprite.scale.set(R.height * (168 / 327) * scale, R.height * scale, 1);
    if (R.model) {
      // face the way we're running, lean into turns, squash on landing
      this.faceH = this.faceH == null ? pp.h : lerpAngle(this.faceH, pp.h, 1 - Math.exp(-dt * 12));
      const turn = wrap(pp.h - this.faceH);
      R.model.rotation.y = Math.PI / 2 - this.faceH;
      const b = R.body;
      const stride = running ? Math.sin(t * 15) : 0;
      b.position.y = lift * 3.4 + (running && !R.mixer ? Math.abs(stride) * 0.3 : 0);
      b.rotation.x = running ? 0.14 : 0;
      b.rotation.z = -turn * 1.4 + (running && !R.mixer ? stride * 0.08 : 0);
      if (P.stumble > 0) b.rotation.z += Math.sin(t * 40) * 0.25;
      let sy = 1 + (running && !R.mixer ? Math.abs(stride) * 0.05 : 0);
      if (P.air > 0) sy = 1 + lift * 0.12;
      if (this.state === 'dying') { R.model.rotation.y += t * 14; sy = scale; }
      b.scale.set(this.state === 'dying' ? scale : 1 / Math.sqrt(sy), sy, this.state === 'dying' ? scale : 1 / Math.sqrt(sy));
      if (R.uniforms) {
        const u = R.uniforms;
        const want = running && P.air <= 0 ? 1 : 0;
        u.uRun.value += (want - u.uRun.value) * (1 - Math.exp(-dt * 10));
        u.uPhase.value += dt * (P.boost > 0 ? 21 : P.stumble > 0 ? 8 : 15) * (running ? 1 : 0);
        u.uTime.value = t;
        u.uSway.value.set(Math.max(-1, Math.min(1, turn * 3)), 0);
      }
      if (R.mixer) {
        if (R.run) R.run.timeScale = running ? (P.boost > 0 ? 1.5 : P.stumble > 0 ? 0.5 : 1.1) : 0.001;
        R.mixer.update(dt);
      }
    }
    R.mat.color.setScalar(P.boost > 0 && Math.floor(t * 12) % 2 ? 1.6 : 1);

    this.cops.forEach((c, i) => {
      const v = c.view;
      if (c.mode === 'retired') { v.setLook('hidden', t); return; }
      v.setLook(c.mode === 'fright' ? 'fright' : 'normal', t, this.fright < 1.6);
      if (c.mode === 'wait' || !c.m) {
        const [x, z] = this.waitSpots[i];
        v.group.position.set(x, 0, z);
        v.group.rotation.y = -Math.atan2(pp.x - x, -(pp.z - z));
        v.group.position.y = 0;
        return;
      }
      const cp = g.pose(c.m);
      v.group.position.set(cp.x, Math.abs(Math.sin(t * 12 + i)) * 0.2, cp.z);
      v.group.rotation.y = -cp.h;
      v.tick?.(dt, t, this.state === 'play');
    });

    for (const p of this.pickups) {
      p.view.spin.rotation.y = t * 2.5;
      p.view.spin.position.y = 2.2 + Math.sin(t * 3) * 0.25;
    }

    // fibre colour: steady teal, rainbow when the area is connected
    if (this.state === 'clear') {
      const k = (t * 3) % FIBRE_CYCLE.length;
      const a = FIBRE_CYCLE[Math.floor(k)], b = FIBRE_CYCLE[(Math.floor(k) + 1) % FIBRE_CYCLE.length];
      this.world.fibreMat.color.copy(a).lerp(b, k % 1).multiplyScalar(1.3);
    } else {
      this.world.fibreMat.color.set(COLOURS.fibre).multiplyScalar(1.15 + Math.sin(t * 4) * 0.1);
    }

    // blue lights wash over the street from the nearest chasing copper
    let near = null, nd = 60;
    for (const c of this.cops) {
      if (c.mode !== 'active' || !c.m) continue;
      const cp = g.pose(c.m);
      const d = Math.hypot(cp.x - pp.x, cp.z - pp.z);
      if (d < nd) { nd = d; near = cp; }
    }
    if (near && this.state === 'play') {
      this.siren.position.set(near.x, 3.8, near.z);
      this.siren.intensity = Math.floor(t * 7) % 2 ? 90 : 8;
    } else this.siren.intensity = 0;

    if (this.state === 'clear' && Math.random() < 0.6) {
      this.sparks.burst(pp.x + (Math.random() - 0.5) * 16, 7, pp.z + (Math.random() - 0.5) * 16, 5, FIBRE_CYCLE, { up: 2, spread: 3, life: 1.8 });
    }
    this.sparks.update(dt);
    this.syncChevrons(t);
    this.world.update(t, pp);
    this.syncCamera(dt, t, pp);
    if (this.state === 'play') updateSiren(this.nearestCop ?? Infinity, t);
  }

  syncChevrons(t) {
    const g = this.g, P = this.p;
    const hide = () => this.chevrons.forEach((c) => { c.visible = false; });
    if (this.state !== 'play' && this.state !== 'ready') return hide();
    const e = g.edges[P.edge];
    if (e.len - P.s > 60) return hide();
    const node = g.endNode(P);
    const opts = g.options(node, P, g.arriveHeading(P));
    if (opts.length < 2) return hide();
    let pick = P.buf ? g.choose(opts, P.buf) : null;
    const turning = !!pick;
    if (!pick) pick = g.choose(opts, null);
    const pe = g.edges[pick.edge];
    this.chevrons.forEach((c, i) => {
      const di = 3.5 + i * 4.2;
      if (di > pe.len - 1) { c.visible = false; return; }
      const pt = g.pointAt(pe, pick.dir === 1 ? di : pe.len - di);
      const h = pick.dir === 1 ? pt.h : pt.h + Math.PI;
      c.position.set(pt.x, 0.12, pt.z);
      c.rotation.y = -h;
      c.material.color.set(turning ? 0xf6c521 : 0xffffff);
      c.material.opacity = (turning ? 0.55 : 0.28) + 0.4 * Math.max(0, Math.sin(t * 7 - i * 1.2));
      c.visible = true;
    });
  }

  seedTrail() {
    const g = this.g, P = this.p;
    this.trail = [];
    for (let d = Math.min(P.s, 16); d > 0.4; d -= 0.8) {
      const q = g.pose({ edge: P.edge, dir: P.dir, s: P.s - d });
      this.trail.push({ x: q.x, z: q.z });
    }
  }

  addTrail(pp) {
    const tr = this.trail || (this.trail = []);
    const last = tr[tr.length - 1];
    if (!last || Math.hypot(pp.x - last.x, pp.z - last.z) > 0.6) {
      tr.push({ x: pp.x, z: pp.z });
      if (tr.length > 120) tr.shift();
    }
  }

  // a point dist metres back along the trail
  behind(pp, dist) {
    const tr = this.trail;
    let px = pp.x, pz = pp.z, left = dist;
    for (let i = tr.length - 1; i >= 0; i--) {
      const q = tr[i];
      const d = Math.hypot(q.x - px, q.z - pz);
      if (d >= left && d > 0) return { x: px + ((q.x - px) * left) / d, z: pz + ((q.z - pz) * left) / d };
      left -= d;
      px = q.x; pz = q.z;
    }
    return { x: px - Math.sin(pp.h) * left, z: pz + Math.cos(pp.h) * left };
  }

  syncCamera(dt, t, pp) {
    const cam = this.camera;
    if (this.attract) {
      const r = this.area.radius * 0.9;
      cam.position.set(Math.cos(t * 0.08) * r, this.area.radius * 0.55, Math.sin(t * 0.08) * r);
      cam.lookAt(0, 0, 0);
      return;
    }
    this.camH = lerpAngle(this.camH, pp.h, 1 - Math.exp(-dt * 4.5));
    const fx = Math.sin(this.camH), fz = -Math.cos(this.camH);
    // the camera rides the runner's own path, so it stays in the street round corners
    this.addTrail(pp);
    const back = this.behind(pp, 9.5);
    const want = new THREE.Vector3(back.x, 5.2, back.z);
    const look = new THREE.Vector3(pp.x + fx * 8, 2.2, pp.z + fz * 8);
    if (this.state === 'ready' && this.intro) {
      // swoop down from above the whole area onto the runner
      const k = 1 - Math.max(0, this.readyT) / INTRO;
      const e = k < 0.25 ? 0 : 1 - Math.pow(1 - (k - 0.25) / 0.75, 3);
      const R = this.area.radius;
      const high = new THREE.Vector3(pp.x * 0.4 - fx * R * 0.5, R * 1.25, pp.z * 0.4 - fz * R * 0.5);
      cam.position.lerpVectors(high, want, e);
      cam.lookAt(new THREE.Vector3(pp.x * 0.6, 0, pp.z * 0.6).lerp(look, e));
    } else {
      cam.position.lerp(want, 1 - Math.exp(-dt * (this.state === 'ready' ? 2.5 : 10)));
      cam.lookAt(look);
      cam.rotateZ(-wrap(pp.h - this.camH) * 0.35);
    }
    if (this.shake > 0) {
      this.shake = Math.max(0, this.shake - dt * 1.8);
      const s = this.shake * this.shake;
      cam.position.x += (Math.random() - 0.5) * s;
      cam.position.y += (Math.random() - 0.5) * s;
      cam.position.z += (Math.random() - 0.5) * s;
    }
    const fov = this.baseFov + (this.p.boost > 0 ? 12 : 0);
    if (Math.abs(cam.fov - fov) > 0.05) {
      cam.fov += (fov - cam.fov) * (1 - Math.exp(-dt * 5));
      cam.updateProjectionMatrix();
    }
  }

  hud() {
    const P = this.p, g = this.g;
    return {
      score: this.score,
      lives: this.lives,
      pct: Math.floor(g.coverage * 100),
      street: g.edges[P.edge].name,
      buf: P.buf,
      round: this.round,
      fright: this.fright,
      boost: P.boost,
      mult: this.mult,
      streets: this.streetsDone,
    };
  }
}
