<template>
  <div class="text-grey-dark">
    <router-link to="/" style="text-decoration: none;">List Product</router-link> / {{ productName }}
  </div>
</template>

<script setup>
const props = defineProps({
  productName: {
    type: String,
    default: ''
  }
})
</script>

<style scoped>
a {
  color: #E64580;
}
</style>