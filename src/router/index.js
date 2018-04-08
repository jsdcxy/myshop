import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'Home',
      component: () => import('@/pages/index/index.vue')
    },
    {
      path: '/products',
      name: 'product-list',
      component: () => import('@/pages/products/index.vue')
    },
    {
      path: '/products/:category',
      name: 'product-list-by-category',
      component: () => import('@/pages/products/index.vue')
    }
  ]
})
