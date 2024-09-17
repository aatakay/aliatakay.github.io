// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: ['@nuxt/content'],
  routeRules: {
    '/': { prerender: true }
  },
  content: {
    defaultLocale: 'fr-FR',
    locales: ['fr-FR', 'en-US'],
  }
})