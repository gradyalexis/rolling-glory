<template>
  <div>
    <div class="d-flex mb-2 align-items-center">
      <div class="fs-5 fw-bold">Product List</div>
      <SortSelect class="ms-auto" @sort="emit('sort', $event)" />
    </div>
    <div class="bg-grey-light mb-2 w-100" style="height: 1px;" />
    <div class="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-4">
      <div v-for="item in products" class="col">
        <BCard class="product-card position-relative fs-6">
          <div
            v-if="item.attributes.stock === 0"
            class="position-absolute z-1 bg-grey-light"
            style="top: 0; left: 0; width: 100%; height: 100%; opacity: 0.9;"
          />
          <div
            v-else
            class="position-absolute d-flex z-1 active-product"
          >
            <div class="m-auto text-center w-100 px-4">
              <div>{{ item.attributes.name }}</div>
              <ViewButton class="mt-4 w-100" @click="redirectToItem(item.id)" />
            </div>
          </div>
          <ProductBadge
            v-if="generateBadge(item.attributes)"
            :variant="generateBadge(item.attributes)"
            class="position-absolute"
            style="top: 0; right: 0;"
          />
          <div class="position-relative mb-4 z-2" :class="{
            'text-danger': item.attributes.stock === 0,
            'text-green stock': item.attributes.stock > 5,
            'text-danger stock': item.attributes.stock <= 5
          }">
            {{ productStock(item.attributes.stock) }}
          </div>
          <img
            :src="item.attributes.images[0]"
            class="w-100 object-fit-md-contain mb-2"
            style="height: 260px;"
            :alt="item.attributes.name"
          />
          <p class="mb-2">{{ item.attributes.name }}</p>
          <div class="d-flex gap-1">
            <img src="@/assets/point.png" class="object-fit-md-contain" />
            <div class="text-green" style="font-size: 12px;">
              {{ item.attributes.points }} poins
            </div>
          </div>
          <div class="d-flex gap-2">
            <star-rating
              :active-color="['#F0D946','#F0D946']"
              :star-size="15"
              :rating="roundStarRating(item.attributes.rating)"
              :show-rating="false"
              :round-start-rating="false"
              :padding="2"
              read-only
            />
            <div class="text-grey mt-auto" style="font-size: 12px;">
              {{ item.attributes.numOfReviews }} reviews
            </div>
          </div>
          <WishlistButton
            class="position-absolute z-2"
            :product-id="item.id"
            :variant="item.attributes.wishlist ? 'danger' : 'primary'"
            style="right: 10px; bottom: 10px;"
            @wishlisted="wishlisted"
          />
        </BCard>
      </div>
    </div>
  </div>
</template>

<script setup>
import { computed } from 'vue'
import { useRouter } from 'vue-router'

import SortSelect from '@/components/SortSelect.vue'
import ProductBadge from '@/components/ProductBadge.vue'
import WishlistButton from '@/components/WishlistButton.vue'
import ViewButton from '@/components/ViewButton.vue'

import StarRating from 'vue-star-rating'

const router = useRouter()

const props = defineProps({
  product: {
    type: Object,
    default: () => ({}),
  },
})

const emit = defineEmits()

const products = computed(() => props.product?.data || [])

const productStock = (stock) => {
  if (stock === 0) {
    return 'Sold Out'
  }

  if (stock > 5) {
    return 'In Stock'
  }

  return `Stock < ${stock}`
}

const redirectToItem = (id) => {
  router.push(`/item/${id}`)
}

const roundStarRating = (number) => {
  return Math.round(number * 2) / 2;
}

const generateBadge = ({ isNew, rating, numOfReviews }) => {
  if (isNew && rating >= 4 && numOfReviews > 25) {
    return 'hot'
  }

  if (rating >= 4 && numOfReviews > 25) {
    return 'best'
  }

  if (isNew) {
    return 'new'
  }

  return null
}

const wishlisted = () => {
  emit('wishlisted')
}
</script>

<style scoped>
.active-product {
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: #79B625;
  color: #FFFFFF;
  opacity: 0;
}

.product-card:hover .active-product {
  opacity: 0.9;
  transition: all 0.2s;
}

.product-card:hover .stock {
  color: #FFFFFF;
}
</style>