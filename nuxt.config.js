export default {
  // Disable server-side rendering (https://go.nuxtjs.dev/ssr-mode)
  ssr: false,

  // Global page headers (https://go.nuxtjs.dev/config-head)
  head: {
    title: 'frontend',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ],
    script: [
      {
        src: 'https://cdnjs.cloudflare.com/ajax/libs/jquery/3.1.1/jquery.min.js'
      },
      {
        src: 'https://www.chartjs.org/dist/2.9.3/Chart.min.js'
      },
      {
        src: 'https://www.chartjs.org/samples/latest/utils.js'
      },
      
      { src: '/scripts/scripts.js'},
      {
        src: '/scripts/dashboardchart.js'
      },

    ],
  },

  // Global CSS (https://go.nuxtjs.dev/config-css)
  css: [
  ],

  // Plugins to run before rendering page (https://go.nuxtjs.dev/config-plugins)
  plugins: [
    { src: '~/plugins/vue-good-table', ssr: false },
    {src: '~/plugins/vuelidate.js', ssr: false}
  ],

  // Auto import components (https://go.nuxtjs.dev/config-components)
  components: true,

  // Modules for dev and build (recommended) (https://go.nuxtjs.dev/config-modules)
  buildModules: [
  ],

  // Modules (https://go.nuxtjs.dev/config-modules)
  modules: [
    // https://go.nuxtjs.dev/bootstrap
    '@nuxtjs/bulma',
    '@nuxtjs/axios',
    '@nuxtjs/auth',
    [
      'nuxt-fontawesome', {
        imports: [
         {
           set: '@fortawesome/free-solid-svg-icons',
           icons: ['fas']
         },
         {
           set:'@fortawesome/free-brands-svg-icons',
           icons: ['fab']
         }
       ]
      }
]
  ],

axios: {
  baseURL: "http://localhost:8000",
  credentials: true
},
auth: {
  redirect: {
    login: '/login',
    logout: '/',
    callback: '/login',
    home: '/dashboard'
  },
  strategies: {
    local: {
      endpoints: {
        login: { url: '/login', method: 'post', propertyName: false, withCredentials: true,
          headers: {
            'X-Requested-With': 'XMLHttpRequest',
            'Content-Type': 'application/json'
          }  },
        logout: { url: '/logout', method: 'post' },
        user: { url: '/api/user', method: 'get', propertyName: false, withCredentials: true,
          headers: {
            'X-Requested-With': 'XMLHttpRequest',
            'Content-Type': 'application/json'
          }}
      },
      tokenRequired: false,
      tokenType: false
    }
  },
  localStorage: false
},

  // Build Configuration (https://go.nuxtjs.dev/config-build)
  build: {
    postcss: {
      preset: {
        features: {
          customProperties: false
        }
      }
    },
  }
}
