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
    },
    {
      path: '/information',
      name: 'product-information',
      component: () => import('@/pages/information/index.vue')
    },
    {
      path: '/commodity/:category',
      name: 'product-commodity-category',
      component: () => import('@/pages/commodity/index.vue')
    },
    {
      path: '/cart',
      name: 'cart-list',
      component: () => import('@/pages/cart/index.vue')
    },
    {
      path: '/me',
      name: 'shop-me',
      component: () => import('@/pages/me/index.vue')
    },
    {
      path: '/person',
      name: 'shop-person',
      component: () => import('@/pages/person/index.vue')
    }
  ]
})
