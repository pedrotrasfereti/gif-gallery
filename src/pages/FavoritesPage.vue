<script setup>
import { onBeforeUnmount, onMounted } from 'vue'
import useGifStore from '../stores/gifStore'
import DataRenderer from './DataRenderer.vue'
import GalleryView from '../components/GalleryView.vue'
import GallerySkeleton from '../components/GallerySkeleton.vue'

const gifStore = useGifStore()

onMounted(async () => {
  if (gifStore.favorites.length > 0) {
    gifStore.getFavorites()
  }
})

onBeforeUnmount(() => {
  gifStore.clearGifs()
})
</script>

<template>
  <q-page class="flex justify-center">
    <div class="col justify-center q-gutter-md q-pa-md fit">
      <GallerySkeleton v-if="gifStore.loading" />
      <DataRenderer
        v-else
        :success="!gifStore.error"
        :error="{ message: 'Algo deu errado', details: gifStore.error }"
        :data="gifStore.gifs"
        :empty="{
          title: 'Favoritos',
          message: 'Você ainda não tem GIFs favoritos.',
          button: { label: 'Ver todos os GIFs', to: '/' },
        }"
      >
        <div class="text-h5">Meus Favoritos</div>

        <GalleryView :data="gifStore.gifs" />
      </DataRenderer>
    </div>
  </q-page>
</template>
