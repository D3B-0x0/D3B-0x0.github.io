// @ts-check
import { defineConfig } from "astro/config";
import svelte from "@astrojs/svelte";
import sitemap from "@astrojs/sitemap";
import tailwindcss from "@tailwindcss/vite";

// Static output. The Cloudflare Worker serves ./dist as static assets, so
// there is no adapter and no server runtime — the whole site is files.
export default defineConfig({
  site: "https://aboutme.debnerd.in",
  output: "static",
  trailingSlash: "never",
  integrations: [svelte(), sitemap()],
  vite: {
    plugins: [tailwindcss()],
  },
});
