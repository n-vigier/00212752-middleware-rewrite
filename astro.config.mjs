// https://astro.build/config
import { defineConfig } from 'astro/config'
import vue from "@astrojs/vue"
import tailwind from "@astrojs/tailwind"
import vercel from "@astrojs/vercel/serverless"

export default defineConfig({
  output: 'server',
  integrations: [vue(), tailwind({
    config: {
      applyBaseStyles: false
    }
  })],
  adapter: vercel({
    analytics: false
  })
});
