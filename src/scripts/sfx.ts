/* ============================================================
   Terminal sound on Web Audio.
   Each signal plays a sample from SFX_SAMPLES, falling back to a
   synthesized version when no file is configured or the fetch fails —
   so the template also works with no audio files at all.
   ============================================================ */

import { SFX_SAMPLES } from '../consts';

const STORE_KEY = 'sound';

let ctx: AudioContext | null = null;
let master: GainNode | null = null;
// Read at module load: sfx may be needed before the header script runs.
let enabled = readEnabled();

function readEnabled() {
  try {
    const stored = localStorage.getItem(STORE_KEY);
    if (stored !== null) return stored === '1';
  } catch {
    // Private browsing — treat as "no choice made yet".
  }
  // Default off on phones: there is no hovering there, which is most of what
  // the sound exists for, and an unexpected beep from a pocket is annoying.
  return !window.matchMedia?.('(max-width: 640px)').matches;
}

const samples = new Map<string, AudioBuffer>();
let samplesLoading = false;

function loadSamples(ac: AudioContext) {
  if (samplesLoading) return;
  samplesLoading = true;
  for (const [name, url] of Object.entries(SFX_SAMPLES)) {
    if (!url) continue;
    fetch(url)
      .then((r) => (r.ok ? r.arrayBuffer() : Promise.reject(new Error(r.status + ' ' + url))))
      .then((data) => ac.decodeAudioData(data))
      .then((buf) => samples.set(name, buf))
      // Missing or broken file is not fatal — the signal stays synthesized.
      .catch((e) => console.warn('[sfx] sample skipped:', e.message));
  }
}

/** Plays the sample if loaded; returns false so the caller can synthesize. */
function sample(name: string, gain = 1) {
  const buf = samples.get(name);
  const ac = audio();
  if (!buf || !ac || !master) return false;
  const src = ac.createBufferSource();
  src.buffer = buf;
  const amp = ac.createGain();
  amp.gain.value = gain;
  src.connect(amp).connect(master);
  src.start();
  return true;
}

/** Created lazily: browsers suspend an AudioContext until the first gesture. */
function audio(): AudioContext | null {
  if (!enabled) return null;
  if (!ctx) {
    const AC = window.AudioContext ?? (window as any).webkitAudioContext;
    if (!AC) return null;
    ctx = new AC();
    master = ctx.createGain();
    master.gain.value = 0.18; // Signals should sit in the background, not hit.
    master.connect(ctx.destination);
    loadSamples(ctx);
  }
  if (ctx.state === 'suspended') ctx.resume();
  return ctx;
}

function tone(opts: {
  freq: number;
  /** Ramp target for a pitch slide; omit for a steady tone. */
  freqTo?: number;
  dur: number;
  type?: OscillatorType;
  gain?: number;
  delay?: number;
  /** Lowpass cutoff. Muting the upper harmonics is what makes a tone read as
      a speaker inside a case rather than a clean UI chime. */
  lowpass?: number;
}) {
  const ac = audio();
  if (!ac || !master) return;

  const t0 = ac.currentTime + (opts.delay ?? 0);
  const osc = ac.createOscillator();
  const amp = ac.createGain();

  osc.type = opts.type ?? 'square';
  osc.frequency.setValueAtTime(opts.freq, t0);
  if (opts.freqTo) osc.frequency.exponentialRampToValueAtTime(opts.freqTo, t0 + opts.dur);

  const peak = opts.gain ?? 0.6;
  // Short attack instead of an instant start, which would click.
  amp.gain.setValueAtTime(0.0001, t0);
  amp.gain.exponentialRampToValueAtTime(peak, t0 + 0.004);
  amp.gain.exponentialRampToValueAtTime(0.0001, t0 + opts.dur);

  let out: AudioNode = osc;
  if (opts.lowpass) {
    const lp = ac.createBiquadFilter();
    lp.type = 'lowpass';
    lp.frequency.value = opts.lowpass;
    osc.connect(lp);
    out = lp;
  }

  out.connect(amp).connect(master);
  osc.start(t0);
  osc.stop(t0 + opts.dur + 0.02);
}

/** Relay click: a very short burst of filtered noise. */
function noise(dur = 0.03, gain = 0.35, freq = 1800) {
  const ac = audio();
  if (!ac || !master) return;

  const frames = Math.max(1, Math.floor(ac.sampleRate * dur));
  const buf = ac.createBuffer(1, frames, ac.sampleRate);
  const data = buf.getChannelData(0);
  for (let i = 0; i < frames; i++) {
    // Fade towards the end of the buffer so it does not cut off abruptly.
    data[i] = (Math.random() * 2 - 1) * (1 - i / frames);
  }

  const src = ac.createBufferSource();
  src.buffer = buf;

  const bp = ac.createBiquadFilter();
  bp.type = 'bandpass';
  bp.frequency.value = freq;
  bp.Q.value = 0.8;

  const amp = ac.createGain();
  amp.gain.value = gain;

  src.connect(bp).connect(amp).connect(master);
  src.start();
}

let lastHover = 0;

export const sfx = {
  hover() {
    // Sweeping a mouse across the character grid must not queue up blips.
    const now = performance.now();
    if (now - lastHover < 45) return;
    lastHover = now;
    if (sample('hover', 0.5)) return;
    tone({ freq: 240, dur: 0.035, type: 'square', gain: 0.5, lowpass: 900 });
  },

  select() {
    if (sample('select', 0.6)) return;
    tone({ freq: 240, dur: 0.04, gain: 0.5, lowpass: 900 });
    tone({ freq: 330, dur: 0.07, gain: 0.45, delay: 0.04, lowpass: 1000 });
  },

  deny() {
    if (sample('deny', 0.6)) return;
    tone({ freq: 190, freqTo: 120, dur: 0.22, type: 'sawtooth', gain: 0.4 });
    tone({ freq: 96, dur: 0.24, type: 'square', gain: 0.25, delay: 0.02 });
  },

  grant() {
    if (sample('grant', 0.7)) return;
    [260, 330, 390].forEach((f, i) =>
      tone({ freq: f, dur: 0.13, type: 'square', gain: 0.45, lowpass: 1000, delay: i * 0.11 }),
    );
  },

  key() {
    if (sample('key', 0.4)) return;
    tone({ freq: 700 + Math.random() * 200, dur: 0.02, gain: 0.2, lowpass: 1600 });
    noise(0.008, 0.08, 1400);
  },

  /** CRT hum — used when the theme switches and the screen "relights". */
  power() {
    if (sample('power')) return;
    tone({ freq: 60, freqTo: 220, dur: 0.5, type: 'sawtooth', gain: 0.22 });
    noise(0.14, 0.1, 900);
  },

  get enabled() {
    return enabled;
  },

  set enabled(on: boolean) {
    enabled = on;
    try {
      localStorage.setItem(STORE_KEY, on ? '1' : '0');
    } catch {}
    if (!on && ctx) ctx.suspend();
  },
};

/**
 * Attaches sound to elements matching `selector` inside `root`.
 * Listeners are delegated, so they survive the DOM being re-rendered.
 */
export function bindSfx(root: ParentNode | Document = document, selector = '[data-sfx]') {
  const target = (e: Event) =>
    (e.target as HTMLElement | null)?.closest<HTMLElement>(selector) ?? null;

  // pointerover rather than mouseover: no blips while scrolling on touch.
  root.addEventListener('pointerover', (e) => {
    if ((e as PointerEvent).pointerType !== 'mouse') return;
    const el = target(e);
    // Bubbling within one element must not repeat the blip.
    if (el && !el.contains((e as PointerEvent).relatedTarget as Node)) sfx.hover();
  });

  root.addEventListener('focusin', (e) => {
    if (target(e)) sfx.hover();
  });

  root.addEventListener('click', (e) => {
    const el = target(e);
    if (el && el.dataset.sfx !== 'hover') sfx.select();
  });
}
