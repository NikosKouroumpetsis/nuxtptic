// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  app: {
    head: {
      link: [
        {
          rel: "stylesheet",
          href: "https://fonts.googleapis.com/icon?family=Material+Icons+Outlined",
        },
        {
          rel: "stylesheet",
          href: "https://fonts.googleapis.com/css?family=Kenia",
        },
      ],
    },
  },
  modules: [
    "nuxt-icon",
    "@nuxtjs/tailwindcss",
    "@nuxt/image-edge",
    "@pinia/nuxt",
  ],
});
