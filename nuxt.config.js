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
            '134': '36rem',
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
            '172': '76rem',
            '196': '96rem',
            '204': '104rem',
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
            '2xl': {'min': '1535px'},
            // => @media (min-width: 1535px) { ... }
            '1xl': {'min': '1435px'},
      
            'xl': {'min': '1279px'},
            // => @media (min-width: 1279px) { ... }
      
            'lg': {'min': '1023px'},
            // => @media (min-width: 1023px) { ... }
      
            'md': {'min': '767px'},
            // => @media (min-width: 767px) { ... }
      
            'sm': {'min': '620px'},
            // => @media (min-width: 639px) { ... }
            'ant': {'min': '460px'},
          }
         
        }
      }
    }
  },
}
