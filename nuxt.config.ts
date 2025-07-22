// https://nuxt.com/docs/api/configuration/nuxt-config
import Theme from "./themes/default"

export default defineNuxtConfig({
  compatibilityDate: '2024-04-03',
  devtools: { enabled: true },
  ssr: true,
  typescript: {
    typeCheck: true,
    strict: true
  },
  extends: [
    // ['github:red-plug/layers-nutrix', { auth: process.env.GITHUB_TOKEN }]
  ],
  modules: [
    '@nuxtjs/tailwindcss',
    '@primevue/nuxt-module',
    '@nuxtjs/color-mode',
    '@nuxt/icon',
    '@nuxtjs/i18n',
    '@nuxt/fonts',
    '@nuxt/image',
  ],
  primevue: {
    autoImport: false,
    components: {
      include: [
        'Button',
        'Avatar',
        'Textarea',
        'Tag',
        'Image',
        'Floatlabel',
        'Drawer',
        'Forms',
        'Dialog',
        'ScrollTop'
      ]
    },
    directives: {
       include: [
        'Button',
        'Avatar',
        'Textarea',
        'Tag',
        'Image',
        'Floatlabel',
        'Drawer',
        'Forms',
        'Dialog',
        'ScrollTop'
      ]
    },
    options: {
      theme: {
        preset: Theme,
        options: {
          darkModeSelector: '.dark-mode',
          cssLayer: {
            name: 'primevue',
            order: 'tailwind-base, primevue, tailwind-utilities'
          }
        }
      },
      ripple: true,
    },
  },
  i18n: {
    vueI18n: './i18n.config.ts',
    locales: [
      { code: 'en', language: 'en-US', file: 'en.json' },
      { code: 'es', language: 'es-MX', file: 'es.json' }
    ],
    defaultLocale: 'es',
    bundle: {
      optimizeTranslationDirective: false,
    },
  },
  colorMode: {

  },
  image: {
    format: ['webp']
  },
  runtimeConfig: {
    serverToken: process.env.SERVER_TOKEN,
    public: {
      apiBase: process.env.API_URL
    }
  },
  nitro: {
    prerender: {
      routes: [
        '/_ipx/w_320&f_webp/images/me-md.png',
        '/_ipx/w_640&f_webp/images/me-md.png',
        '/_ipx/w_768&f_webp/images/me-md.png',
        '/_ipx/w_1024&f_webp/images/me-md.png',
        '/_ipx/w_1280&f_webp/images/me-md.png',
        '/_ipx/w_1536&f_webp/images/me-md.png',
        '/_ipx/w_2048&f_webp/images/me-md.png',
        '/_ipx/w_2560&f_webp/images/me-md.png',
        '/_ipx/w_3072&f_webp/images/me-md.png',

        '/_ipx/f_webp&s_64x64/images/me-sm.png',
        '/_ipx/f_webp&s_128x128/images/me-sm.png',

        '/_ipx/w_320&f_webp/images/me-md.png',
        '/_ipx/w_640&f_webp/images/me-md.png',
        '/_ipx/w_768&f_webp/images/me-md.png',
        '/_ipx/w_1024&f_webp/images/me-md.png',
        '/_ipx/w_1280&f_webp/images/me-md.png',
        '/_ipx/w_1536&f_webp/images/me-md.png',
        '/_ipx/w_2048&f_webp/images/me-md.png',
        '/_ipx/w_2560&f_webp/images/me-md.png',
        '/_ipx/w_3072&f_webp/images/me-md.png',


        '/_ipx/f_webp/images/projects/ekar.png',
        '/_ipx/f_webp/images/projects/ekar.png',

        '/_ipx/f_webp/images/projects/jb_refacciones.webp',
        '/_ipx/f_webp/images/projects/jb_refacciones.webp',
        
        '/_ipx/f_webp/images/projects/mimo.png',
        '/_ipx/f_webp/images/projects/mimo.png',

        '/_ipx/f_webp/images/projects/solarudg.webp',
        '/_ipx/f_webp/images/projects/solarudg.webp',

        '/_ipx/f_webp/images/projects/tubin.png',
        '/_ipx/f_webp/images/projects/tubin.png'

      ]
    }
  },
})