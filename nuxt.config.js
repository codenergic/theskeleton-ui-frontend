const proxyTarget = 'http://localhost:8080'

module.exports = {
  /*
  ** Headers of the page
  */
  head: {
    title: 'theskeleton-ui-frontend',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'TheSkeleton UI Frontend' }
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
  /*
  ** Customize the progress-bar color
  */
  loading: { color: '#3B8070' },

  modules: [
    [ '@nuxtjs/axios', {
      baseURL: '/api',
      requestInterceptor: (config, { store }) => {
        return config
      }
    }],
    [ '@nuxtjs/bootstrap-vue', { css: false } ],
    [ '@nuxtjs/font-awesome' ],
    [ '@nuxtjs/proxy' ]
  ],

  plugins: [
    { src: '~/plugins/vue2-medium-editor', ssr: false }
  ],

  proxy: {
    '/api'     : proxyTarget,
    '/auth'    : proxyTarget,
    '/login'   : proxyTarget,
    '/manage'  : proxyTarget,
    '/webjars' : proxyTarget
  },

  /*
  ** Build configuration
  */
  build: {
    vendor: [
      '@nuxtjs/bootstrap-vue',
      '@nuxtjs/axios',
      '@nuxtjs/font-awesome',
      'vue2-medium-editor'
    ],
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
