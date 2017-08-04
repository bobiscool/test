import Vue from 'vue'
import Router from 'vue-router'
import Hello from '@/components/Hello'
import testSort from '@/components/testSort'
import test3 from '@/components/3'
import test4 from '@/components/handShake.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Hello',
      component: Hello
    },
    {
      path: '/2',
      name: '2',
      component: testSort
    },
    {
      path: '/3',
      name: '3',
      component: test3
    },
    {
      path: '/4',
      name: '4',
      component: test4
    },
  ]
})
