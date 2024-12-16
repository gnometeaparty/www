// @ts-check
// @ts-check
import { defineConfig } from "astro/config";

import cloudflare from "@astrojs/cloudflare";
import parytown from "@astrojs/partytown";
import sitemap from "@astrojs/sitemap";
import tailwind from "@astrojs/tailwind";

// https://astro.build/config
export default defineConfig({
  site: "https://gnometeaparty.com",
  adapter: cloudflare({
    platformProxy: {
      enabled: true,
    },
  }),
  integrations: [parytown(), sitemap(), tailwind()],
  experimental: {
    responsiveImages: true,
    svg: {
      mode: "inline",
    },
  },
});
