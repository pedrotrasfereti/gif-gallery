<script setup>
import useGifStore from 'src/stores/gifStore'
import { ref, watch } from 'vue'

const gifStore = useGifStore()
const searchTerm = ref('')

watch(searchTerm, () => {
  // Run after 1 second
  const delayDebounceFn = setTimeout(() => {
    if (searchTerm.value !== '') {
      updateQuery()
    } else {
      gifStore.getTrendingGifs()
    }
  }, 1000)

  return () => clearTimeout(delayDebounceFn)
})

const updateQuery = async () => {
  gifStore.searchGifs(searchTerm.value)
}
</script>

<template>
  <div class="col q-gutter-sm" style="width: 350px">
    <q-input
      v-model="searchTerm"
      color="secondary"
      :disable="gifStore.loading"
      filled
      style="max-width: 350px"
    >
      <template v-slot:append>
        <q-icon name="search" />
      </template>
    </q-input>

    <div class="row q-gutter-sm">
      <q-chip
        v-for="(item, idx) in gifStore.trendingSearches"
        :key="idx"
        class="cursor-pointer"
        clickable
        color="accent"
        :outline="item !== searchTerm"
        :text-color="item !== searchTerm ? 'white' : 'black'"
        @click="searchTerm = item"
      >
        {{ item }}
      </q-chip>
    </div>
  </div>
</template>
