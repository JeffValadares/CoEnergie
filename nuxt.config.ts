// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  css: ['vuetify/styles/main.css', '@mdi/font/css/materialdesignicons.min.css'],
  build: { transpile: ['vuetify'] }
});
