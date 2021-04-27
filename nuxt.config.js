export default {
  // Disable server-side rendering: https://go.nuxtjs.dev/ssr-mode
  ssr: false,

  // Target: https://go.nuxtjs.dev/config-target
  target: 'static',

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    titleTemplate: 'Wizard House War',
    title: 'Wizard House War',
    htmlAttrs: {
      lang: 'en'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },

  css: ['~/assets/stylesheets/main.scss'],
  styleResources: {
    scss: ['./assets/stylesheets/variables.scss']
  },

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/typescript
    '@nuxt/typescript-build',
    // https://go.nuxtjs.dev/vuetify
    '@nuxtjs/vuetify'
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    [
      '@nuxtjs/firebase',
      {
        config: {
          apiKey: 'AIzaSyDm0IdHFc_KiT4f2SUzCCLnOsIj1hKzdN4',
          authDomain: 'wizard-house-war.firebaseapp.com',
          projectId: 'wizard-house-war',
          storageBucket: 'wizard-house-war.appspot.com',
          messagingSenderId: '245657858057',
          appId: '1:245657858057:web:0d179ac8d105862d6408d8'
        },
        services: {
          auth: true,
          firestore: true // Just as example. Can be any other service.
        }
      }
    ]
  ],

  // Vuetify module configuration: https://go.nuxtjs.dev/config-vuetify
  vuetify: {
    customVariables: ['~/assets/stylesheets/variables.scss'],
    theme: {
      dark: true,
      themes: {
        dark: {
          primary: {
            base: '#9B20F0',
            lighten1: '#96BCFF',
            lighten2: '#E5EEFF'
          },
          secondary: '#424242',
          accent: '#82B1FF',
          error: '#FF5252',
          info: '#2196F3',
          success: '#4CAF50',
          warning: '#FFC107'
        }
      }
    }
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
  }
}
