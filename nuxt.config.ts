// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  routeRules: {
    '/': { prerender: true }
  },
  modules: ['@nuxt/content'],
  content: {
    defaultLocale: 'fr-FR',
    locales: ['fr-FR', 'en-US'],
  },
})