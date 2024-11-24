import { createApp } from 'vue'
import router from './router'
import { createPinia } from 'pinia'
import { createBootstrap } from 'bootstrap-vue-next'
import axiosInstance from './plugins/axios'

import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue-next/dist/bootstrap-vue-next.css'

import './assets/main.css'

import App from './App.vue'

const app = createApp(App)

app.use(router)
app.use(createPinia())
app.use(createBootstrap())
app.provide('$axios', axiosInstance)

app.mount('#app')
