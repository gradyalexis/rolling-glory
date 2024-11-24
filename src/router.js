import { createRouter, createWebHistory } from 'vue-router'
import Home from './Home.vue'
import Item from './Item.vue'

const routes = [
  {
    path: '/',
    component: Home,
  },
  {
    path: '/item/:id',
    component: Item,
  },
  {
    path: '/:catchAll(.*)',
    redirect: '/',
  },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router