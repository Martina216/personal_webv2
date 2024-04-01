// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  script: {
    "deploy": "gh-pages --dotfiles -d .output/public",
  },
  app: {
    baseURL: process.env.NODE_ENV === 'production' ? '/personal_webv2/' : '/',
    buildAssetsDir: '/static/'
  }
})
