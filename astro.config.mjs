import { defineConfig } from "astro/config";
import svelte from "@astrojs/svelte";
import sitemap from "@astrojs/sitemap";
import { seoConfig } from "./src/shared/seoConfig";
import tailwind from "@astrojs/tailwind";
import mdx from "@astrojs/mdx";
import node from "@astrojs/node";
import paraglide from "@inlang/paraglide-astro";
import vercel from "@astrojs/vercel/serverless";
import icon from "astro-icon";

const adapter =
  process.env.NODE_ENV === "production"
    ? vercel({
        webAnalytics: {
          enabled: true,
        },
      })
    : node({
        mode: "standalone",
      });

// https://astro.build/config
export default defineConfig({
  adapter: adapter,
  output: "server",
  server: { port: 4322, host: true },
  site: seoConfig.baseURL,
  prefetch: {
    prefetchAll: true,
  },
  devToolbar: {
    enabled: false,
  },
  build: {
    inlineStylesheets: "always",
  },
  compressHTML: true,
  integrations: [
    svelte(),
    sitemap({
      i18n: {
        defaultLocale: "en",
        locales: {
          en: "en-US",
          da: "da-DK",
          it: "it-IT",
        },
      },
    }),
    mdx(),
    tailwind({ applyBaseStyles: false }),
    paraglide({
      project: "./project.inlang",
      outdir: "./src/paraglide",
    }),
    icon(),
  ],
  i18n: {
    defaultLocale: "en",
    locales: ["en", "it", "da"],
    routing: {
      prefixDefaultLocale: true,
      redirectToDefaultLocale: false,
    },
  },
  redirects: {
    "/": {
      status: 302,
      destination: "/en",
    },
  },
  security: {
    checkOrigin: true,
  },
});
