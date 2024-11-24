import { createRouter, createWebHistory } from 'vue-router'
import Home from './Home.vue'
import Item from './Item.vue'

const routes = [
  {
    path: '/',
    component: Home,
    meta: {
      title: '',
      description: '',
      image: '',
    },
  },
  {
    path: '/item/:id',
    component: Item,
    meta: {
      title: '',
      description: '',
      image: '',
    },
  },
  {
    path: '/:catchAll(.*)',
    redirect: '/',
    meta: {
      title: '',
      description: '',
      image: '',
    },
  },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router