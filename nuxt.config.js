import colors from 'vuetify/es5/util/colors'

export default {
  // Disable server-side rendering: https://go.nuxtjs.dev/ssr-mode
  ssr: false,

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    titleTemplate: '%s - BSIT-3A',
    title: 'QR Code Scanner',
    htmlAttrs: {
      lang: 'en'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/vuetify
    '@nuxtjs/vuetify',
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    '@nuxtjs/axios',
    '@nuxtjs/auth-next'
  ],

  auth: {
    // Options
    redirect: {
      login: '/auth/signin',      // Redirect user when not connected
      logout: '/auth/signin',     // Redirect user when logout
      callback: '/auth/callback',   // Callback URL after login
      home: '/'        // After login redirect
    },
    autoFetchUser: false,
    strategies: {
      google: {
        clientId: '556868606794-vim29disnrl6hrf149ud1r0kopjfevjk.apps.googleusercontent.com',
        scheme: 'oauth2',
        endpoints: {
          authorization: "https://accounts.google.com/o/oauth2/auth",
          userInfo: "https://www.googleapis.com/oauth2/v3/userinfo",
        },
        token: {
          property: "access_token",
          type: "Bearer",
          maxAge: 1800,
        },
        responseType: "token id_token ",
        scope: ["openid", "profile", "email"],
        redirectUri: "http://localhost:3000/auth/callback",
        codeChallengeMethod: "",
      },
    } 
  },

  // Vuetify module configuration: https://go.nuxtjs.dev/config-vuetify
  vuetify: {
    customVariables: ['~/assets/variables.scss'],
    theme: {
      dark: true,
      themes: {
        dark: {
          primary: colors.blue.darken2,
          accent: colors.grey.darken3,
          secondary: colors.amber.darken3,
          info: colors.teal.lighten1,
          warning: colors.amber.base,
          error: colors.deepOrange.accent4,
          success: colors.green.accent3
        }
      }
    }
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
  }
}
