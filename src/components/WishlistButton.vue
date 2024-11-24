<template>
  <button
    class="wishlist-button d-flex align-items-center justify-content-center"
    :class="size"  
    :style="{
      background: variantColor,
    }"
    @click="wishlistProduct"
  >
    <svg
      :class="imgSize"
      style="vertical-align: middle; overflow: hidden;"
      viewBox="0 0 1024 1024"
      version="1.1"
      xmlns="http://www.w3.org/2000/svg"
      fill="currentColor"
    >
      <path
        d="M729.068827 119.55798c-94.686523 0-176.905082 48.314379-217.069851 118.640074-40.163745-70.325695-122.382305-118.640074-217.044268-118.640074-143.767358 0-229.665727 123.660414-229.665727 243.219417 0 283.128359 415.870616 527.841803 433.576883 538.126031 4.062526 2.363837 8.584516 3.538593 13.132088 3.538593 4.547573 0 9.070586-1.174756 13.132088-3.538593 17.706267-10.283204 433.576883-254.997672 433.576883-538.126031C958.708971 243.218394 872.811626 119.55798 729.068827 119.55798z"
      />
    </svg>
  </button>
</template>

<script setup>
import { computed, inject } from 'vue'

const props = defineProps({
  productId: {
    type: String,
    default: ''
  },
  variant: {
    type: String,
    default: 'primary'
  },
  size: {
    type: String,
    default: 'md'
  }
})

const emit = defineEmits()

const $axios = inject('$axios')

const variantColor = computed(() => props.variant === 'danger' ? '#e7246b' : 'transparent')
const size = computed(() => `btn-${props.size}`)
const imgSize = computed(() => `img-${props.size}`)

// #NOTE: It's like wishlist endpoint is not working properly
const wishlistProduct = () => {
  $axios
    .post(`/gifts/${props.productId}/wishlist`)
    .then((response) => {
      console.log(response)
      emit('wishlisted')
    })
}
</script>

<style scoped>
.wishlist-button {
  color: #E1E1E1;
  border: 1px solid #E1E1E1 !important;
  border-radius: 100px;
  padding: 0.5rem 1rem;
  background: transparent;
}

.btn-sm {
  width: 50px;
  height: 30px;
}

.btn-md {
  width: 60px;
  height: 40px;
}

.btn-lg {
  width: 80px;
  height: 50px;
}

.img-sm {
  width: 15px;
  height: 15px;
}

.img-md {
  width: 20px;
  height: 20px;
}

.img-lg {
  width: 25px;
  height: 25px;
}
</style>