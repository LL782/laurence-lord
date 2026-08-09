/* ============================================================
   Hacking minigame, shared by the 404 page and the private-mode gate.
   ============================================================ */

import { SITE_VENDOR, SITE_SYSTEM } from '../consts';
import { sfx, bindSfx } from './sfx';

export interface HackOptions {
  /** Called once the password is found, after the status line is shown. */
  onGranted?: (word: string) => void;
  grantText?: string;
  /** Delay before onGranted, in ms. */
  grantDelay?: number;
  /** On running out of attempts, offer RETRY and rebuild the board. */
  allowRetry?: boolean;
  /** Status text when locked out (used when allowRetry is off). */
  lockText?: string;
}

const WORDS_POOL = [
  'REACTOR', 'NUCLEAR', 'CIRCUIT', 'VOLTAGE', 'NETWORK', 'PROGRAM',
  'COMMAND', 'DEFAULT', 'PROCESS', 'MONITOR', 'SIGNALS', 'DECRYPT',
  'ENCRYPT', 'PAYLOAD', 'GATEWAY', 'SCANNER', 'ORBITAL', 'ISOTOPE',
  'PLASMAS', 'PROTECT', 'RADIALS', 'CONSOLE', 'CONDUIT', 'BREAKER',
];
const GARBAGE = '!@#$%^&*()_+-=[]{};:,.<>/?|\\~`"\'';
const WORD_LEN = 7;
const WORD_COUNT = 12; // More words means a harder board.
const COLS = 13;
const ROWS = 16;
const COLUMNS = 2;
const ATTEMPTS = 4;

type Cell = null | { ch: string; word: string; head: boolean };

const COMPACT_QUERY = '(max-width: 640px)';

function isCompact() {
  return window.matchMedia?.(COMPACT_QUERY).matches ?? false;
}

export function buildHackGame(root: HTMLElement, opts: HackOptions = {}) {
  const grantText = opts.grantText ?? 'ACCESS GRANTED';
  const grantDelay = opts.grantDelay ?? 1400;
  const lockText = opts.lockText ?? 'TERMINAL LOCKED';

  render();

  function render() {
    let attempts = ATTEMPTS;
    let solved = false;
    const compact = isCompact();
    let attEl: HTMLElement;
    let status: HTMLElement;

    // Pick the words and the password (all exactly WORD_LEN long).
    const words = shuffle([...WORDS_POOL])
      .filter((w) => w.length === WORD_LEN)
      .slice(0, WORD_COUNT);
    const password = words[Math.floor(Math.random() * words.length)];

    // Scatter the words across the grid, several per row where they fit.
    const totalRows = ROWS * COLUMNS;
    const grid: Cell[][] = [];
    for (let r = 0; r < totalRows; r++) grid.push(new Array(COLS).fill(null));

    for (const w of words) {
      for (let tries = 0; tries < 400; tries++) {
        const row = Math.floor(Math.random() * totalRows);
        const start = Math.floor(Math.random() * (COLS - WORD_LEN + 1));
        // Require free cells for the word plus one blank on each side.
        let free = true;
        for (let c = start - 1; c <= start + WORD_LEN; c++) {
          if (c >= 0 && c < COLS && grid[row][c]) { free = false; break; }
        }
        if (!free) continue;
        for (let i = 0; i < w.length; i++) {
          grid[row][start + i] = { ch: w[i], word: w, head: i === 0 };
        }
        break;
      }
    }
    // Fill everything else with garbage characters.
    for (let r = 0; r < totalRows; r++) {
      for (let c = 0; c < COLS; c++) {
        if (!grid[r][c]) grid[r][c] = { ch: rand(GARBAGE), word: '', head: false };
      }
    }

    const baseAddr = 0xf000 + Math.floor(Math.random() * 0x0800);
    root.innerHTML = '';

    const head = el('div', 'hack__head');
    head.innerHTML =
      `<p>${SITE_VENDOR} (TM) ${SITE_SYSTEM}</p>` +
      '<p>ENTER PASSWORD NOW</p>' +
      '<p class="hack__attempts" id="hack-att"></p>' +
      '<p class="hack__status" id="hack-status"></p>';
    root.appendChild(head);

    // The character grid is unusable on a phone: ~344 targets of about
    // 9x15px. Show the same words as a list of finger-sized rows instead.
    if (compact) {
      const list = el('div', 'hack__list');
      for (const w of words) {
        const row = el('button', 'hack__word hack__word--row');
        row.setAttribute('type', 'button');
        row.dataset.sfx = 'hover'; // guess() voices the click: grant/deny
        row.dataset.word = w;
        const addr = el('span', 'hack__addr');
        addr.textContent =
          '0x' + (baseAddr + words.indexOf(w) * COLS).toString(16).toUpperCase();
        const label = el('span', 'hack__word-label');
        label.textContent = w;
        row.append(addr, label);
        row.addEventListener('click', () => guess(w, row));
        list.appendChild(row);
      }
      root.appendChild(list);
      bindSfx(list);
      finish(head);
      return;
    }

    const gridEl = el('div', 'hack__grid');
    for (let col = 0; col < COLUMNS; col++) {
      const colEl = el('div', 'hack__col');
      for (let r = 0; r < ROWS; r++) {
        const rowIndex = col * ROWS + r;
        const rowEl = el('div', 'hack__row');
        const addr = document.createElement('span');
        addr.className = 'hack__addr';
        addr.textContent =
          '0x' + (baseAddr + rowIndex * COLS).toString(16).toUpperCase();
        const stream = el('span', 'hack__stream');
        renderRow(grid[rowIndex], stream);
        rowEl.append(addr, stream);
        colEl.appendChild(rowEl);
      }
      gridEl.appendChild(colEl);
    }
    root.appendChild(gridEl);
    bindSfx(gridEl);
    finish(head);

    function finish(headEl: HTMLElement) {
      attEl = headEl.querySelector<HTMLElement>('#hack-att')!;
      status = headEl.querySelector<HTMLElement>('#hack-status')!;
      drawAttempts();
      status.innerHTML = '&gt; AWAITING INPUT<span class="hack__cursor"></span>';
    }

    function drawAttempts() {
      let s = 'ATTEMPTS LEFT: ';
      for (let i = 0; i < ATTEMPTS; i++) {
        s += i < attempts ? '<span>■ </span>' : '<span class="used">■ </span>';
      }
      attEl.innerHTML = s;
    }

    function renderRow(cells: Cell[], parent: HTMLElement) {
      let i = 0;
      while (i < cells.length) {
        const cell = cells[i]!;
        if (cell.word && cell.head) {
          const span = document.createElement('span');
          span.className = 'hack__word';
          span.dataset.sfx = 'hover'; // guess() voices the click: grant/deny
          span.dataset.word = cell.word;
          span.textContent = cell.word;
          span.addEventListener('click', () => guess(cell.word, span));
          parent.appendChild(span);
          i += cell.word.length;
        } else {
          // Every garbage character highlights on its own.
          const c = document.createElement('span');
          c.className = 'hack__char';
          c.dataset.sfx = 'hover';
          c.textContent = cell.ch;
          parent.appendChild(c);
          i++;
        }
      }
    }

    function guess(word: string, span: HTMLElement) {
      if (solved || attempts <= 0) return;
      if (word === password) {
        solved = true;
        sfx.grant();
        setStatus('&gt; ' + word + ' — ' + grantText, 'granted');
        root
          .querySelectorAll<HTMLElement>('.hack__word')
          .forEach((w) => (w.style.pointerEvents = 'none'));
        if (opts.onGranted) setTimeout(() => opts.onGranted!(word), grantDelay);
        return;
      }
      sfx.deny();
      span.classList.add('is-dud');
      attempts--;
      drawAttempts();
      const like = likeness(word, password);
      if (attempts <= 0) {
        root
          .querySelectorAll<HTMLElement>('.hack__word')
          .forEach((w) => w.classList.add('is-dud'));
        if (opts.allowRetry) {
          status.className = 'hack__status denied';
          status.innerHTML =
            '&gt; TERMINAL LOCKED — <button type="button" class="hack__retry">[ RETRY ]</button>';
          status
            .querySelector('.hack__retry')!
            .addEventListener('click', () => render());
        } else {
          setStatus('&gt; ' + lockText, 'denied');
        }
      } else {
        setStatus('&gt; ' + word + ' — ENTRY DENIED, LIKENESS=' + like, 'denied');
      }
    }

    function setStatus(html: string, kind: 'granted' | 'denied') {
      status.innerHTML = html + '<span class="hack__cursor"></span>';
      status.className = 'hack__status ' + kind;
    }
  }
}

function likeness(a: string, b: string) {
  let n = 0;
  for (let i = 0; i < Math.min(a.length, b.length); i++) {
    if (a[i] === b[i]) n++;
  }
  return n;
}

function shuffle<T>(arr: T[]) {
  for (let i = arr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
  return arr;
}

function rand(s: string) {
  return s[Math.floor(Math.random() * s.length)];
}

function el(tag: string, cls: string) {
  const e = document.createElement(tag);
  e.className = cls;
  return e;
}
