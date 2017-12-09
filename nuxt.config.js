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
    '~/assets/styles/style.scss',
    'medium-editor/dist/css/medium-editor.css',
    'medium-editor/dist/css/themes/default.css'
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
    { src: '~/plugins/vue2-medium-editor', ssr: false }
  ],

  /*
  ** Build configuration
  */
  build: {
    /*
    ** Run ESLINT on save
    */
    extend (config, ctx) {
      if (ctx.dev && ctx.isClient) {
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
