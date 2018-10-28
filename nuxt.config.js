module.exports = {
  /*
  ** Headers of the page
  */
  head: {
    title: 'my-portfolio',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'Nuxt.js project' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },
  css: [
    {
      src: 'bulma/bulma.sass',lang: 'sass',
    },
			  '@fortawesome/fontawesome-free-webfonts',
        '@fortawesome/fontawesome-free-webfonts/css/fa-brands.css',
        '@fortawesome/fontawesome-free-webfonts/css/fa-regular.css',
        '@fortawesome/fontawesome-free-webfonts/css/fa-solid.css',
  ],
  /*
  ** Customize the progress bar color
  */
  loading: { color: '#3B8070' },
  /*
  ** Build configuration
  */
  build: {
    extend (config, { isDev, isClient }) {
      // Run ESLint on save
      if (isDev && isClient) {
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

