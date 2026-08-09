// @ts-check
import { defineConfig } from 'astro/config';

import mdx from '@astrojs/mdx';

// https://astro.build/config
export default defineConfig({
  site: 'https://example.com',

  markdown: {
    syntaxHighlight: 'prism',
  },

  integrations: [mdx()],
});