<template>
  <div class="position-relative">
    <svg width="80" height="80" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M1.26183 3.38729C0.0384755 2.11688 0.938794 0 2.70247 0H22C23.1046 0 24 0.895431 24 2V22.0397C24 23.8398 21.808 24.7236 20.5594 23.427L1.26183 3.38729Z"
        :fill="variantColor"
      />
    </svg>
    <div class="position-absolute fw-semibold text-white" style="top: 35%; left: 70%; transform: translateX(-50%) translateY(-50%) rotate(45deg); font-size: 12px">
      {{ variantLabel }}
    </div>
  </div>
</template>

<script setup>
import { computed } from 'vue'

const props = defineProps({
  variant: {
    type: String,
    default: 'new'
  }
})

const variantLabel = computed(() => {
  switch (props.variant) {
    case 'best':
      return 'Best Seller'
    case 'hot':
      return 'Hot Item'
    default:
      return 'New'
  }
})

const variantColor = computed(() => {
  switch (props.variant) {
    case 'best':
      return '#1dbfdc'
    case 'hot':
      return '#e7246b'
    default:
      return '#dcb81d'
  }
})
</script>
