<script setup>
import { ref } from 'vue'

const items = ref([
  { title: 'Item 1', span: 12 },
  { title: 'Item 2', span: 10 },
  { title: 'Item 3', span: 14 },
  { title: 'Item 4', span: 10 },
  { title: 'Item 5', span: 12 },
  { title: 'Item 6', span: 10 },
  { title: 'Item 7', span: 12 },
  { title: 'Item 8', span: 10 },
])
</script>

<template>
  <div class="col justify-center fit">
    <div class="masonry-layout">
      <q-skeleton
        v-for="(item, index) in items"
        :key="index"
        :style="{
          'grid-row': `span ${item.span}`,
        }"
      />
    </div>
  </div>
</template>
