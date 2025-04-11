<script setup>
import { useRouter } from 'vue-router'
import useGifStore from '../stores/gifStore'

const props = defineProps({
  title: {
    type: String,
    required: true,
  },
  link: {
    type: String,
    required: true,
  },
  image: {
    type: String,
    required: true,
  },
  subcategories: {
    type: Array,
    required: true,
  },
})

const router = useRouter()
const gifStore = useGifStore()

const setSelectedCategory = () => {
  gifStore.setSelectedCategory({
    name: props.title,
    subcategories: props.subcategories,
  })

  // Navigate to the category page
  router.push(props.link)
}
</script>

<template>
  <q-card class="my-card" flat :style="{ width: '240px' }">
    <div class="q-gutter-md row items-start">
      <q-img
        :src="image"
        :alt="title"
        mode="cover"
        no-native-menu
        spinner-color="secondary"
        spinner-size="md"
        :style="{ maxWidth: '240px', height: '180px' }"
      />
    </div>

    <q-card-section>
      <div class="text-h6">{{ title }}</div>
    </q-card-section>

    <q-card-actions vertical>
      <q-btn class="special-button" label="Explorar Gifs" @click="setSelectedCategory" />
    </q-card-actions>
  </q-card>
</template>
