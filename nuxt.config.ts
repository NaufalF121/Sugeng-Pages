// https://nuxt.com/docs/api/configuration/nuxt-config



export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: ['@nuxtjs/tailwindcss', 'nuxt-icon'], 
  tailwindcss: {
    configPath: 'tailwind.config.js',
    exposeConfig: true
  },
  icon: {
    customCollections: [
      {
        prefix: 'my-icon',
        dir: './assets/my-icons'
      },
    ],
  },
})
