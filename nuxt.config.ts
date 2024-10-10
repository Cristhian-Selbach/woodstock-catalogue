// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  css: ["~/assets/css/main.css"],
  modules: ["nuxt-server-utils", "nuxt-viewport"],

  viewport: {
    breakpoints: {
      mobile: 600,
      desktop: 1000,
    },
  },

  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },

  nitro: {
    esbuild: {
      options: {
        target: "esnext",
      },
    },
    plugins: ["~/server/plugins/mongodb.ts"],
  },

  app: {
    head: {
      script: [{ src: "https://kit.fontawesome.com/4a53af05d6.js" }],
    },
  },

  compatibilityDate: "2024-10-10",
});