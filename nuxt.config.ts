// https://nuxt.com/docs/api/configuration/nuxt-config

import path from 'path';


export default defineNuxtConfig({
  devtools: { enabled: true },

  modules: [
    '@nuxtjs/tailwindcss',
    'nuxt-icon',
    'nuxt-swiper',
    '@nuxt/image',
    "@nuxt/content",
    
  ],

  primevue: {
    options: {
      unstyled: true,
    },
    
    
    importPT: { as: 'Wind', from: path.resolve(__dirname, './presets/wind/') },
    //import and apply preset   
  },

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

  swiper: {
    /* module options */
    modules: ['navigation', 'pagination', 'scrollbar', 'autoplay'],
    
  },

  content: {
    experimental: {
      search: {
        indexed: true
      }
    },
    // sources: {
    //   blog: {
    //     type: 'markdown',
    //     dir: 'blog',
    //     driver: 'fs'
    //   }
    // }
  },

  compatibilityDate: '2024-07-15',
})