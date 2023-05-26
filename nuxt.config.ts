// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  app:{
  baseURL: 'ai-presentation',
    pageTransition: { name: 'page', mode: 'out-in' },
    head: {
      titleTemplate: 'AI Presentation%s',
      htmlAttrs: {
        lang: 'de'
      },
      charset: 'utf-8',
      meta: [
        { 'http-equiv': 'language', content: 'de' },
        { name: 'color-scheme', content: 'dark light' }
      ],
      link: [
        { rel: 'icon', href: 'https://fav.farm/🤖' }
      ]
    }
  },
  image: {
    dir: 'assets',
    screens: {
      xs: 320,
      sm: 640,
      md: 768,
      lg: 1024
    },
    provider: "static",
  },
  modules: [
    '@nuxt/image-edge',
    '@nuxtjs/tailwindcss'
  ]
})
