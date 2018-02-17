const serverUrl = process.env.SERVER_URL || 'https://theskeleton.codenergic.org'

module.exports = {
  /*
  ** Headers of the page
  */
  head: {
    title: 'TheSkeleton',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'TheSkeleton' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },

  css: [
    '~/assets/styles/style.scss'
  ],

  env: {
    serverUrl
  },
  /*
  ** Customize the progress-bar color
  */
  loading: { color: '#3B8070' },

  modules: [
    [ '@nuxtjs/axios', {
      baseURL: serverUrl + '/api',
      requestInterceptor: (config, { store }) => {
        return config
      }
    }],
    [ '@nuxtjs/font-awesome' ],
    [ 'bootstrap-vue/nuxt', { css: false } ],
  ],

  plugins: [
  ],

  /*
  ** Build configuration
  */
  build: {
    publicPath: process.env.PUBLIC_PATH || '/_/',
    /*
    ** Run ESLINT on save
    */
    extend (config, ctx) {
      if (ctx.isDev && ctx.isClient) {
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules)/
        })
      }
    }
  }
}
