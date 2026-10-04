import { defineConfig } from "astro/config";
import sitemap from "@astrojs/sitemap";

// Preview mode: build for the GitHub-provided *.github.io/<repo>/ URL so we
// can review before switching DNS to the custom domain. Set via the PREVIEW
// env var in CI or locally.
const preview = process.env.PREVIEW === "1" || process.env.PREVIEW === "true";

export default defineConfig({
  site: preview ? "https://casaway-it.github.io" : "https://nocciolina.net",
  base: preview ? "/nocciolina.net" : "/",
  trailingSlash: "never",
  integrations: [sitemap()],
  image: {
    service: {
      entrypoint: "astro/assets/services/sharp",
    },
  },
});
