<script setup>
import useGifStore from '../stores/gifStore'

const props = defineProps({
  data: {
    type: Array,
    required: true,
  },
})

const gifStore = useGifStore()
</script>

<template>
  <masonry-wall :items="props.data" :ssr-columns="1" :column-width="200" :gap="16">
    <template #default="{ item }">
      <q-card flat>
        <q-img
          class="image"
          :src="item.images.fixed_height_downsampled.url"
          :alt="item.title"
          spinner-color="secondary"
          spinner-size="md"
          no-native-menu
        >
          <div class="absolute-bottom text-subtitle1 text-center image-caption">
            {{ item.title }}
          </div>
        </q-img>

        <q-card-actions class="justify-end">
          <q-btn flat round color="grey-7" icon="share" />

          <q-btn
            flat
            round
            :color="gifStore.favorites.includes(item.id) ? 'red' : 'grey-7'"
            :icon="gifStore.favorites.includes(item.id) ? 'favorite' : 'favorite_outline'"
            @click="() => gifStore.toggleFavorite(item.id)"
          />
        </q-card-actions>
      </q-card>
    </template>
  </masonry-wall>
</template>

<style lang="scss">
.image .image-caption {
  visibility: hidden;
  opacity: 0;
  transition: 0.3s;
}

.image:hover .image-caption {
  visibility: visible;
  opacity: 1;
  transition: 0.3s;
}
</style>
