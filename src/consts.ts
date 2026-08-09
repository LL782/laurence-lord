// Site-wide settings — edit these to make the template your own.
export const SITE_TITLE = 'ASTRO TERMINAL';
export const SITE_TAGLINE = 'PERSONAL BLOG // NOTES, ARTICLES, FIELD LOGS';
export const SITE_DESCRIPTION =
  'A personal blog with a retro terminal look: notes, articles and field logs.';
export const SITE_VERSION = '0.0.1';

// Fictional terminal manufacturer, shown on the boot screen, the 404 page
// and the private-mode gate.
export const SITE_VENDOR = 'ORBITEC SYSTEMS';
export const SITE_SYSTEM = 'DATALINK';
export const SITE_MODEL = 'OTX-1200';

// Sound files, one per signal. Anything left out is synthesized instead
// (see scripts/sfx.ts), so this map can be empty. Only use audio you have
// the rights to.
export const SFX_SAMPLES: Partial<
  Record<'hover' | 'select' | 'deny' | 'grant' | 'key' | 'power', string>
> = {
  deny: '/sounds/deny.ogg',
};

// Decorative only — shown in the header next to VER.
export const SITE_BUILD_ID = '52656448616972426C61636B';

// When true, a hacking minigame gates the site on the first visit of a
// session. The site is static, so this is a cosmetic lock rather than real
// protection: the content ships in the HTML either way.
export const PRIVATE_MODE = false;
