<template>
  <div>
    <div class="fs-5 fw-bold mb-2">Filter</div>
    <div class="bg-grey-light mb-2 w-100" style="height: 1px;" />
    <BCard class="text-grey fs-6">
      <div class="mb-2 d-flex justify-content-between">
        <div>Rating 4 ke atas</div>
        <BFormCheckbox
          v-model="rating"
          value="accepted"
          unchecked-value="not_accepted"
          @change="filterProduct"
        />
      </div>
      <div class="d-flex justify-content-between">
        <div>Stock tersedia</div>
        <BFormCheckbox
          v-model="stock"
          value="accepted"
          unchecked-value="not_accepted"
          @change="filterProduct"
        />
      </div>
    </BCard>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import { useRouter, useRoute } from 'vue-router'

const router = useRouter()
const route = useRoute()

const rating = ref('not_accepted')
const stock = ref('not_accepted')

const emit = defineEmits()

const filterProduct = () => {
  router.push({ query: {
    ...route.query,
    ratingAbove4: rating.value,
    availableStock: stock.value
  }})
  emit('filter')
}

onMounted(() => {
  const { ratingAbove4, availableStock } = route.query
  if (ratingAbove4) rating.value = ratingAbove4
  if (availableStock) stock.value = availableStock
})
</script>