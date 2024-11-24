import { createRouter, createWebHistory } from 'vue-router'

import META from '@/constants/meta'

import Home from './Home.vue'
import Item from './Item.vue'

const routes = [
  {
    path: '/',
    component: Home,
    meta: {
      title: META.DEFAULT_TITLE,
      description: META.DEFAULT_DESCRIPTION,
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