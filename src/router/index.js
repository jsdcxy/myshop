import Vue from 'vue'
import Router from 'vue-router'
import HelloShop from '@/pages/index.vue'
import Me from '@/pages/me/main.vue'

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
    }
  ]
})
