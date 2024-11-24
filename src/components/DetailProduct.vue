<template>
  <div class="w-100">
    <div class="w-100" style="border-bottom: 1px solid #79B625">
      <div class="p-2" style="border-bottom: 3px solid #79B625; width: 130px">Info Product</div>
    </div>
    <div class="p-2">
      <div v-html="render" />
    </div>
  </div>
</template>

<script setup>
const props = defineProps({
  render: {
    type: String,
    default: ''
  }
})
</script>