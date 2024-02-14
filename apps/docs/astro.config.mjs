import { defineConfig } from "astro/config";
import solidJs from "@astrojs/solid-js";
import unocss from "unocss/astro";
import robotsTxt from "astro-robots-txt";
import mdx from "@astrojs/mdx";
import autoImport from "astro-auto-import";
import icon from "astro-icon";

export default defineConfig({
  markdown: {
    shikiConfig: {
      theme: "github-dark"
    }
  },
  integrations: [
    autoImport({
      imports: [
        {
          "#components/content": [
            "Card",
            "CardGrid",
            "Important",
            "Info",
            "EndpointCard",
            "RequestExample",
            "ResponseExample"
          ]
        }
      ]
    }),
    unocss({ injectReset: true }),
    solidJs(),
    robotsTxt({
      policy: [
        {
          userAgent: "*"
        }
      ]
    }),
    icon(),
    mdx()
  ],
  build: {
    redirects: false
  },
  site: "https://docs.vrite.io",
  server: {
    port: 3000,
    host: true
  }
});
