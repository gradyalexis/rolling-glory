import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { VitePWA } from 'vite-plugin-pwa';
import vueDevTools from 'vite-plugin-vue-devtools'
import Components from 'unplugin-vue-components/vite'
import { BootstrapVueNextResolver } from 'bootstrap-vue-next'

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    vueDevTools(),
    Components({
      resolvers: [BootstrapVueNextResolver()],
    }),
    VitePWA({
      registerType: 'autoUpdate',
      manifest: {
        name: 'TokoMulyo',
        short_name: 'TM',
        description: 'Situs jual beli smartphone terlengkap dengan berbagai pilihan toko online terpercaya. Belanja smartphone dengan mudah dan menyenangkan di TokoMulyo. Pengiriman cepat.',
        theme_color: '#79B625',
        icons: [
          {
            src: '/thumbnail-192x192.png',
            sizes: '192x192',
            type: 'image/png',
          },
          {
            src: '/thumbnail-512x512.png',
            sizes: '512x512',
            type: 'image/png',
          },
        ],
      },
    }),
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    },
  },
})
