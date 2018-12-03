import Vue from 'vue'
import Router from 'vue-router'
import Main from '@/components/contents/Main'
import About from '@/components/contents/About'
import Slider from '@/components/contents/Slider'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Main',
      component: Main,
      props: true,
      meta: {
        plainLayout: true
      }
    },
    {
      path: '/about',
      name: 'About',
      component: About,
      meta: {
        plainLayout: true
      }
    },
    {
      path: '/slider',
      name: 'Slider',
      component: Slider,
      meta: {
        plainLayout: true
      }
    }
  ]
})
