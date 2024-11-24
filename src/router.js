import { createRouter, createWebHistory } from 'vue-router'
import Home from './Home.vue'
import Item from './Item.vue'

const routes = [
  {
    path: '/',
    component: Home,
    meta: {
      title: 'Situs Jual Beli Online Smartphone Terlengkap, Mudah & Aman | TokoMulyo',
      description: 'Situs jual beli smartphone terlengkap dengan berbagai pilihan toko online terpercaya. Belanja smartphone dengan mudah dan menyenangkan di TokoMulyo. Pengiriman cepat.',
      image: 'https://example.com/thumbnail.jpg',
    },
  },
  {
    path: '/item/:id',
    component: Item,
    meta: {
      title: 'Xiaomi Mi A2 Lite',
      description: '',
      image: 'https://example.com/product-thumbnail.jpg',
    },
  },
  {
    path: '/:catchAll(.*)',
    redirect: '/',
    meta: {
      title: 'Situs Jual Beli Online Smartphone Terlengkap, Mudah & Aman | TokoMulyo',
      description: 'Situs jual beli smartphone terlengkap dengan berbagai pilihan toko online terpercaya. Belanja smartphone dengan mudah dan menyenangkan di TokoMulyo. Pengiriman cepat.',
      image: 'https://example.com/thumbnail.jpg',
    },
  },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router