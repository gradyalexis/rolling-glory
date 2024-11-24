<template>
  <div class="d-flex align-items-center gap-3">
    <div>Urutkan</div>
    <BFormSelect
      v-model="selectValue"
      class="text-center rounded-pill"
      :options="options"
      size="sm"
      style="width: 200px;"
      @change="sortProduct"
    />
  </div>
</template>

<script setup>
import { reactive, ref, onMounted } from 'vue'
import { useRouter, useRoute } from 'vue-router'

const emit = defineEmits()

const router = useRouter()
const route = useRoute()

const selectValue = ref('new')

const options = reactive([
  { value: 'new', text: 'Terbaru' },
  { value: 'rating', text: 'Ulasan' },
])

const sortProduct = () => {
  router.push({ query: {
    ...route.query,
    sort: selectValue.value
  }})
  emit('sort')
}

onMounted(() => {
  const { sort } = route.query
  if (sort) selectValue.value = sort
})
</script>