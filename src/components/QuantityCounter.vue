<template>
  <div>
    <div>Jumlah</div>
    <div class="d-flex">
      <BButton variant="light" class="text-grey-dark fw-semibold" @click="decrement">-</BButton>
      <input v-model="qty" class="form-control form-control-sm text-center z-1" type="text" value="1" style="width: 50px;" readonly />
      <BButton variant="light" class="text-grey-dark fw-semibold" @click="increment">+</BButton>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const qty = ref(1)

const increment = () => {
  qty.value++
}

const decrement = () => {
  if (qty.value === 1) return
  qty.value--
}
</script>