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
      <q-btn class="gradient-hover-btn" label="Explorar Gifs" @click="setSelectedCategory" />
    </q-card-actions>
  </q-card>
</template>

<style lang="scss" scoped>
.gradient-hover-btn {
  background-color: #ff3b7f;
  color: white;
  transition: background 0.5s ease-in-out;

  &:hover {
    background: linear-gradient(135deg, orange, #ff3b7f);
    background-size: 200% 200%;
    animation: gradientShift 2s ease infinite;
  }
}

@keyframes gradientShift {
  0% {
    background-position: 0% 50%;
  }
  50% {
    background-position: 100% 50%;
  }
  100% {
    background-position: 0% 50%;
  }
}
</style>
