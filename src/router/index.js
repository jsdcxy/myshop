import Vue from 'vue'
import Router from 'vue-router'
import HelloShop from '@/pages/index.vue'
import Me from '@/pages/me/main.vue'
import Store from '@/pages/store/main.vue'
import Text from '@/pages/text/main.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloShop',
      component: HelloShop
    },
    {
      path: '/me/main',
      component: Me,
      name: 'me-main'
    },
    {
      path: '/store/main',
      component: Store,
      name: 'store-main'
    },
    {
      path: '/text/main',
      component: Text,
      name: 'text-main'
    }
  ]
})
