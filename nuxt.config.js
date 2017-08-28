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
    { src: 'bootstrap/dist/css/bootstrap.css' },
    { src: 'bootstrap-vue/dist/bootstrap-vue.css' },
    { src: 'medium-editor/dist/css/medium-editor.css' },
    { src: 'medium-editor/dist/css/themes/default.css' }
  ],
  /*
  ** Customize the progress-bar color
  */
  loading: { color: '#3B8070' },
  plugins: [
    { src: '~/plugins/bootstrap'},
    { src: '~/plugins/axios' },
    { src: '~/plugins/vue2-medium-editor', ssr: false }
  ],
  /*
  ** Build configuration
  */
  build: {
    vendor: [ 'bootstrap-vue', 'axios', 'vue2-medium-editor' ],
    /*
    ** Run ESLINT on save
    */
    extend (config, ctx) {
      console.log(JSON.stringify(config))
      if (ctx.dev && ctx.isClient) {
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules)/
        })
      }
    }
  },
  modules: [
    '@nuxtjs/proxy'
  ],
  proxy: {
    '/api': 'http://localhost:8080',
    '/auth': 'http://localhost:8080',
    '/login': 'http://localhost:8080'
  }
}
