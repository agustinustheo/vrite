import { defineConfig } from "astro/config";
import solidJs from "@astrojs/solid-js";
import mdx from "@astrojs/mdx";
import unocss from "unocss/astro";
import robotsTxt from "astro-robots-txt";

export default defineConfig({
  markdown: {
    shikiConfig: {
      theme: "github-dark"
    }
  },
  integrations: [
    mdx({ jsxImportSource: "solid-js/h" }),
    unocss(),
    solidJs(),
    robotsTxt({
      policy: [
        {
          userAgent: "*"
        }
      ]
    })
  ],
  site: "https://docs.vrite.io",
  server: {
    port: 3000,
    host: true
  }
});
