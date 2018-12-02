import Vue from 'vue'
import Router from 'vue-router'
import Main from '@/components/contents/Main'
import About from '@/components/contents/Profile'

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
    }
  ]
})
