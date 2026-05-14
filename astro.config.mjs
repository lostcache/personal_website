// @ts-check

import expressiveCode from "astro-expressive-code";
import mdx from "@astrojs/mdx";
import sitemap from "@astrojs/sitemap";
import { defineConfig } from "astro/config";
import icon from "astro-icon";

import { remarkReadingTime } from "./remark-reading-time.mjs";

import tailwindcss from "@tailwindcss/vite";

import react from "@astrojs/react";

// https://astro.build/config
export default defineConfig({
  site: "https://harshdevisha.com",

  integrations: [expressiveCode({
    styleOverrides: {
      codeFontSize: "15px",
    },
  }), mdx({
    remarkPlugins: [remarkReadingTime],
  }), sitemap(), icon(), react()],

  vite: {
    plugins: [tailwindcss()],
  },
});