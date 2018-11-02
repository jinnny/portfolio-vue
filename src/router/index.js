import Vue from 'vue'
import Router from 'vue-router'
import Main from '@/components/contents/Main'
import Sub2 from '@/components/contents/Sub2'

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
      path: '/sub2',
      name: 'Sub2',
      component: Sub2
    }
  ]
})
