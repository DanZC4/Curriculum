export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'DanielZC',
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
    // https://go.nuxtjs.dev/tailwindcss
    '@nuxtjs/tailwindcss',
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    'vue-scrollto/nuxt',
 
        // Or if you have custom options...
        ['vue-scrollto/nuxt', { duration: 600 }],
  ],

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
  },
  tailwindcss: {
    config: {
      theme: {
        extend: {    
          spacing: {
            '100': '30rem',
            '134': '37rem',
            '138': '38rem',
            '140': '40rem',
            '143': '43rem',
            '145': '45rem',
            '146': '46rem',
            '150': '50rem',
            '151': '51rem',
            '152': '52rem',
            '154': '54rem',
            '156': '56rem',
            '160': '60rem',
            '164': '64rem',
            '166': '66rem',
            '168': '68rem',
            '169': '69rem',
            '170': '70rem',
            '172': '72rem',
            '174': '74rem',
            '188': '88rem',
            '190': '90rem',
            '196': '96rem',
            '200': '100rem',
            '204': '104rem',
            '238': '138rem',
            '244': '144rem',
            '1/2': '50%',
          },
          maxWidth: {
            '12xl': '100rem',
           },
           rotate: {
             '2' : '2deg',
             '4' : '4deg',
             '6' : '6deg',
             '8' : '8deg',
             '10' : '10deg',
             '12' : '12deg',
             '14' : '14deg',
             '16' : '16deg'
           },
           screens: {
            'cel': {'min': '418px'},
            'ant': {'min': '460px'},
            '2xl': {'min': '1535px'},
            'sm': {'min': '620px'},
            'md': {'min': '767px'},
            'lg': {'min': '1023px'},
            'lt': {'min': '1120px'},
            'xl': {'min': '1279px'},
            '1xl': {'min': '1435px'},
            '1.5xl': {'min': '1472px'},
          },
          zIndex: {
            'men10': '-10',
           }
         
        }
      }
    }
  },
}
