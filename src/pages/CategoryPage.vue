<script setup>
import { onBeforeUnmount, onMounted } from 'vue'
import useGifStore from '../stores/gifStore'
import { useRouter } from 'vue-router'
import GallerySkeleton from 'src/components/GallerySkeleton.vue'
import GalleryView from 'src/components/GalleryView.vue'
import DataRenderer from './DataRenderer.vue'

const gifStore = useGifStore()

const router = useRouter()

const categoryName = gifStore.selectedCategory.name
const subCategories = gifStore.selectedCategory.subcategories

const goToCategories = () => {
  router.push('/categorias')
}

const loadMore = async (_index, done) => {
  gifStore.getMoreGifs(done)
}

const toggleSubCategory = (value) => {
  if (gifStore.search === value) {
    gifStore.search = categoryName
    gifStore.searchGifs()
  } else {
    gifStore.search = value
    gifStore.searchGifs()
  }
}

onMounted(async () => {
  gifStore.search = categoryName
  gifStore.searchGifs(categoryName)
})

onBeforeUnmount(() => {
  gifStore.search = ''
  gifStore.clearGifs()
})
</script>

<template>
  <q-page class="flex">
    <div class="col justify-center q-pa-md fit">
      <div class="row items-center q-gutter-md">
        <q-btn color="secondary" @click="goToCategories" icon="arrow_back" flat round size="md" />

        <div class="text-h5">{{ categoryName }}</div>

        <div class="row q-gutter-sm">
          <q-chip
            v-for="(item, idx) in subCategories"
            :key="idx"
            class="cursor-pointer"
            clickable
            color="accent"
            :outline="item.name !== gifStore.search"
            :text-color="item.name !== gifStore.search ? 'white' : 'black'"
            @click="() => toggleSubCategory(item.name)"
          >
            {{ item.name }}
          </q-chip>
        </div>
      </div>

      <q-separator class="q-my-md" />

      <GallerySkeleton v-if="gifStore.loading" />
      <DataRenderer
        v-else
        :success="!gifStore.error"
        :error="{ message: 'Algo deu errado', details: gifStore.error }"
        :data="gifStore.gifs"
        :empty="{
          title: '',
          message: 'Nenhum GIF encontrado.',
          button: {
            label: 'Atualizar',
            to: '/',
          },
        }"
      >
        <q-infinite-scroll @load="loadMore" :offset="250">
          <GalleryView :key="gifStore.gifs.length" :data="gifStore.gifs" />
          <template v-slot:loading>
            <div class="row justify-center q-my-md">
              <q-spinner-dots color="secondary" size="40px" />
            </div>
          </template>
        </q-infinite-scroll>
      </DataRenderer>
    </div>
  </q-page>
</template>
