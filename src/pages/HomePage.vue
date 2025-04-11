<script setup>
import { onBeforeUnmount, onMounted } from 'vue'
import useGifStore from '../stores/gifStore'
import DataRenderer from './DataRenderer.vue'
import GalleryView from '../components/GalleryView.vue'
import GallerySkeleton from '../components/GallerySkeleton.vue'
import HomeSearch from '../components/HomeSearch.vue'

const gifStore = useGifStore()

const loadMore = async (_index, done) => {
  gifStore.getMoreGifs(done)
}

onMounted(async () => {
  gifStore.getTrendingSearches()
  gifStore.getTrendingGifs()
})

onBeforeUnmount(() => {
  gifStore.clearGifs()
})
</script>

<template>
  <q-page class="flex">
    <div class="col justify-center q-pa-md fit">
      <div class="row justify-between items-center q-gutter-sm q-mb-md">
        <HomeSearch />
      </div>

      <q-separator class="q-mb-md" />

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
