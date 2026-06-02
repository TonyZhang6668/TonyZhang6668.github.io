import { defineConfig } from "astro/config";
import sitemap from "@astrojs/sitemap";

const site = process.env.SITE_URL ?? "https://your-github-username.github.io";
const base = process.env.SITE_BASE ?? "/";

export default defineConfig({
  site,
  base,
  output: "static",
  trailingSlash: "never",
  integrations: [sitemap()],
});
