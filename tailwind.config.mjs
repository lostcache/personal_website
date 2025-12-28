/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {},
  },
  plugins: [require('daisyui')],
  daisyui: {
    themes: [
      {
        light: {
          "primary": "#2337ff",
          "primary-content": "#ffffff",
          "secondary": "#000d8a",
          "accent": "#2337ff",
          "neutral": "#0f1117",
          "base-100": "#ffffff",
          "base-200": "#f5f6f9",
          "base-300": "#e5e9f0",
          "base-content": "#0f1219",
        },
        dark: {
          "primary": "#5b7cff",
          "primary-content": "#ffffff",
          "secondary": "#4366ff",
          "accent": "#5b7cff",
          "neutral": "#e5e9f0",
          "base-100": "#1a1d25",
          "base-200": "#282d38",
          "base-300": "#363b48",
          "base-content": "#f5f5f5",
        },
      },
    ],
    darkTheme: "dark",
  },
}
