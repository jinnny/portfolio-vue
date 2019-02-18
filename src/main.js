// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
// import VueGlide from 'vue-glide-js'
// import 'vue-glide-js/dist/vue-glide.css'
import router from './router'
import AOS from 'aos'
import 'aos/dist/aos.css'

// Vue.use(VueGlide)
// Vue.use(Carousel3d)

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  created () {
    AOS.init({
      once: false
    })
  },
  el: '#app',
  router,
  components: { App },
  template: '<App/>',
  render: h => h(App)
})
