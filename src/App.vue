<template>
  <div class="container z-2">
    <img alt="Vue logo" src="@/assets/logo-dummy.png" />
    <router-view></router-view>
  </div>
  <img
    class="z-1 w-100"
    src="@/assets/batik-bg.png"
    style="margin-top: -500px"
    alt="background batik"
  />
  <div class="w-100 d-flex align-items-center text-white justify-content-between px-5" style="height: 100px; background: #232323">
    <div class="d-flex gap-3">
      <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
        <img
          src="@/assets/social-instagram.svg"
          alt="instagram"
          style="width: 25px; height: 25px;"
        />
      </a>
      <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
        <img
          src="@/assets/social-facebook.svg"
          alt="instagram"
          style="width: 25px; height: 25px;"
        />
      </a>
      <a href="https://x.com" target="_blank" rel="noopener noreferrer">
        <img
          src="@/assets/social-twitter.svg"
          alt="twitter"
          style="width: 25px; height: 25px;"
        />
      </a>
    </div>
    <div class="d-flex gap-3">
      <router-link to="/">Terms & Condition</router-link>
      <div>|</div>
      <div>Copyright © 2018. All rights reserved. PT Radya Gita Bahagi</div>
    </div>
  </div>
</template>

<script setup>
import { watch } from 'vue'
import { useRoute } from 'vue-router'

import updateMetaTags from '@/utils/update-meta-tags'

const route = useRoute()

// Set META for SEO
watch(
  () => route.meta,
  (meta) => {
    if (meta) {
      updateMetaTags(meta)
    }
  },
  { immediate: true }
)
</script>

<style scoped>
a {
  text-decoration: none;
  color: #ffffff;
}
</style>
