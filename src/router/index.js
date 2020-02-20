import Vue from 'vue'
import Router from 'vue-router'
import Main from '@/views/Main'
import About from '@/views/About'
import Detail from '@/views/Detail'

Vue.use(Router)

export default new Router({
  mode: 'history',
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
      path: '/detail/:index',
      name: 'Detail',
      props: true,
      component: Detail,
      meta: {
        plainLayout: true
      }
    }
  ]
})
