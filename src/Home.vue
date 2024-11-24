<template>
  <div class="row">
    <Filter class="col col-lg-3 mb-3" @filter="filterProduct" />
    <Product class="col" :product="product" @wishlisted="fetchProducts" @sort="filterProduct" />
  </div>
</template>

<script setup>
import { ref, onMounted, inject } from 'vue'
import { useRoute } from 'vue-router'

import Filter from './components/Filter.vue'
import Product from './components/Product.vue'

const $axios = inject('$axios')
const route = useRoute()

const product = ref(null)

const fetchProducts = async () => {
  await $axios
    .get(`/gifts?page[number]=1&page[size]=18`)
    .then((response) => {
      product.value = response?.data
    })
}

const filterProduct = async () => {
  await fetchProducts()

  const { sort, ratingAbove4, availableStock } = route.query

  // Sorting logic
  const sortingStrategies = {
    new: (a, b) => b.attributes.isNew - a.attributes.isNew,
    rating: (a, b) => b.attributes.rating - a.attributes.rating,
  }

  if (sort) {
    product.value.data = product.value.data.sort(sortingStrategies[sort] || sortingStrategies.new)
  }

  // Filtering logic
  const filters = {
    ratingAbove4: (item) => item.attributes.rating >= 4,
    availableStock: (item) => item.attributes.stock > 0,
  }

  if (ratingAbove4 === "accepted") {
    product.value.data = product.value.data.filter(filters.ratingAbove4)
  }

  if (availableStock === "accepted") {
    product.value.data = product.value.data.filter(filters.availableStock)
  }
}

onMounted(() => {
  filterProduct()
})
</script>

<style scoped>

</style>
