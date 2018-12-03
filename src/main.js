// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import VueGlide from 'vue-glide-js'
// import Carousel3d from 'vue-carousel-3d'
import 'vue-glide-js/dist/vue-glide.css'
import router from './router'

Vue.use(VueGlide)

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>',
  render: h => h(App)
})
