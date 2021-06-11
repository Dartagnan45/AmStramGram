import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: () => import(/* webpackChunkName: "amstramgram" */'../views/Home.vue')

  },
  {
    path: '/amstramgram',
    name: 'AmStramGram',
    component: () => import(/* webpackChunkName: "amstramgram" */'../views/AmStramGram.vue')
  },
  {
    path: '/wheel',
    name: 'Wheel',
    component: () => import(/* webpackChunkName: "amstramgram" */'../views/Wheel.vue')
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
