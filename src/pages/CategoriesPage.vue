<script setup>
import { onMounted } from 'vue'
import useGifStore from '../stores/gifStore'
import CategoryCard from 'src/components/CategoryCard.vue'

const gifStore = useGifStore()

onMounted(async () => {
  if (gifStore.selectedCategory) {
    gifStore.clearSelectedCategory()
  }

  if (gifStore.categories.length === 0) {
    gifStore.getCategories()
  }
})
</script>

<template>
  <q-page class="flex justify-center">
    <div class="col justify-center q-gutter-md q-pa-md fit">
      <div class="text-h5">Categorias</div>

      <div v-if="gifStore.loading" class="row justify-center q-my-md">
        <q-spinner-dots color="secondary" size="40px" />
      </div>
      <div v-else>
        <div
          class="q-gutter-md"
          style="display: grid; grid-template-columns: repeat(auto-fit, minmax(250px, 1fr))"
        >
          <CategoryCard
            v-for="category in gifStore.categories"
            :key="category.name_encoded"
            :title="category.name"
            :link="`/categorias/${category.name_encoded}`"
            :image="category.gif.images.original.url"
            :subcategories="category.subcategories"
          />
        </div>
      </div>
    </div>
  </q-page>
</template>
