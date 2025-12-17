// @ts-check

import mdx from "@astrojs/mdx";
import sitemap from "@astrojs/sitemap";
import { defineConfig } from "astro/config";

import { remarkReadingTime } from './remark-reading-time.mjs';

// https://astro.build/config
export default defineConfig({
  site: "https://lostcache.github.io",
  base: "/personal_website",
  integrations: [mdx({
    remarkPlugins: [remarkReadingTime],
  }), sitemap()],
});
