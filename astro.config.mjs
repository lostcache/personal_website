// @ts-check

import expressiveCode from "astro-expressive-code";
import mdx from "@astrojs/mdx";
import sitemap from "@astrojs/sitemap";
import tailwind from "@astrojs/tailwind";
import { defineConfig } from "astro/config";

import { remarkReadingTime } from "./remark-reading-time.mjs";

// https://astro.build/config
export default defineConfig({
  site: "https://harshdevisha.com",
  integrations: [
    expressiveCode({
      styleOverrides: {
        codeFontSize: "15px",
      },
    }),
    mdx({
      remarkPlugins: [remarkReadingTime],
    }),
    sitemap(),
    tailwind(),
  ],
});
