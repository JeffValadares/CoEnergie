// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: ['@nuxtjs/supabase'],
  css: ['vuetify/styles/main.css', '@mdi/font/css/materialdesignicons.min.css'],
  build: { transpile: ['vuetify'] }
});
