import Vue from 'vue'
import Router from 'vue-router'
import Home from '../components/templates/Home.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "about" */ '../components/templates/About.vue')
    },
    {
      path: '/contact',
      name: 'contact',
      component: () => import('../components/templates/Contact.vue')
    },
    {
      path: '/cart',
      name: 'cart',
      component: () => import('../components/templates/Cart.vue')
    },
    {
      path: '/login',
      name: 'login',
      component: () => import('../components/templates/Login.vue')
    },
    {
      path: '/user-index',
      name: 'user-index',
      component: () => import('../components/templates/UserIndex.vue')
    },
    {
      path: '/product/:id',
      name: 'product-detail',
      component: () => import('../components/templates/ProductDetail.vue'),
      props: route => ({ id: Number(route.params.id) }),
    },
    {
      path: '/user/sign-up',
      name: 'sign-up',
      component: () => import('../components/templates/SignUp.vue')
    },
    {
      path: '/home2',
      name: 'home2',
      component: () => import('../components/templates/Home2.vue')
    }
  ]
})
