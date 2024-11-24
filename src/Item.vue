<template>
  <Breadcrumb class="mt-4 p-4" :product-name="product?.attributes?.name || ''" />
  <div class="row mt-4">
    <div class="col">
      <img
        :src="product?.attributes?.images[0] || ''"
        class="w-100 object-fit-md-contain mb-2"
        style="height: 460px;"
        :alt="product?.attributes?.name || ''"
      />
    </div>
    <div class="col">
      <div class="fs-3 fw-semibold mb-2">
        {{ product?.attributes?.name || '' }}
        <div class="d-flex align-items-center gap-2">
          <star-rating
            :active-color="['#F0D946','#F0D946']"
            :star-size="15"
            :rating="product?.attributes?.rating || 0"
            :show-rating="false"
            :round-start-rating="false"
            :padding="2"
            read-only
          />
          <div class="text-grey mt-2" style="font-size: 12px;">
            {{ product?.attributes?.numOfReviews || 0 }} reviews
          </div>
        </div>
      </div>
      <div class="d-flex gap-2">
        <img src="@/assets/point-big.png" class="object-fit-md-contain" />
        <div class="text-green fs-6 fw-bold" style="font-size: 12px;">
          {{ product?.attributes?.points }} poins
        </div>
        <div class="position-relative fs-6 fw-semibold text-grey-dark">
          {{ productStock(product?.attributes?.stock) }}
        </div>
      </div>
      <div v-html="product?.attributes?.info || ''" class="mt-2" />
      <QuantityCounter class="mt-4" />
      <div class="d-flex mt-4 gap-3">
        <WishlistButton
          :product-id="product?.id"
          :variant="product?.attributes?.wishlist ? 'danger' : 'primary'"
          size="lg"
          @wishlisted="fetchProduct"
        />
        <button
          class="rounded-pill justify-content-center align-items-center text-white"
          style="background: #006a4e; width: 170px; border: none"
        >
          Redeem
        </button>
        <button
          class="rounded-pill justify-content-center align-items-center text-green"
          style="background: transparent; width: 170px; border: 1px solid #79B625;"
        >
          Add to cart
        </button>  
      </div>
    </div>
    <DetailProduct :render="product?.attributes?.info || ''" />
  </div>
</template>

<script setup>
import { ref, onMounted, inject } from 'vue'
import { useRoute } from 'vue-router';

import Breadcrumb from '@/components/Breadcrumb.vue';
import QuantityCounter from '@/components/QuantityCounter.vue';
import WishlistButton from '@/components/WishlistButton.vue';
import DetailProduct from '@/components/DetailProduct.vue';

import StarRating from 'vue-star-rating'

const $axios = inject('$axios')
const route = useRoute()

const product = ref(null)

const fetchProduct = () => {
  $axios
    .get(`/gifts/${route.params.id}`)
    .then(response => (product.value = response?.data?.data || null))
}

onMounted(() => {
  fetchProduct()
})

const productStock = (stock) => {
  if (stock === 0) {
    return 'Sold Out'
  }

  if (stock > 5) {
    return 'In Stock'
  }

  return `Stock < ${stock}`
}
</script>

<style scoped>

</style>
