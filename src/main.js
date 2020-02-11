// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import { store } from './store/index';

import App from './App'
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
  store,
  components: { App },
  template: '<App/>',
  render: h => h(App)
})
