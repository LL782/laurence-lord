import { defineConfig } from "astro/config";
import mdx from "@astrojs/mdx";
import react from "@astrojs/react";
import sitemap from "@astrojs/sitemap";
import { rehypeHighlightLine } from "./src/plugins/rehype-highlight-line.js";

export default defineConfig({
  site: "https://www.laurencelord.co.uk",
  trailingSlash: "always",
  integrations: [
    mdx({
      rehypePlugins: [rehypeHighlightLine],
    }),
    react(),
    sitemap({
      filter: (page) => !page.includes("/embeds/"),
    }),
  ],
  markdown: {
    rehypePlugins: [rehypeHighlightLine],
  },
});
