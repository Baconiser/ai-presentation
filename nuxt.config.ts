// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  app: {
    pageTransition: { name: 'page', mode: 'out-in' },
    head: {
      titleTemplate: 'AI Presentation%s',
      htmlAttrs: {
        lang: 'de'
      },
      charset: 'utf-8',
      meta: [
        { 'http-equiv': 'language', content: 'de' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no' }
      ],
      link: [
        { rel: 'icon', href: 'https://fav.farm/🤖' }
      ]
    }
  },
  modules: [
    '@nuxtjs/tailwindcss',
    '@vueuse/nuxt'
  ]
})
