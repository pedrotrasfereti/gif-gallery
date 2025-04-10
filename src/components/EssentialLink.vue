<template>
  <q-item
    :active="isActive(link)"
    active-class="text-secondary"
    clickable
    dark
    v-ripple
    @click="$router.push(link)"
  >
    <q-item-section v-if="props.icon" avatar>
      <q-icon :color="isActive(link) ? '' : 'grey-7'" :name="props.icon" />
    </q-item-section>

    <q-item-section>
      <q-item-label class="text-subtitle2">{{ props.title }}</q-item-label>
    </q-item-section>
  </q-item>
</template>

<script setup>
import { useRouter } from 'vue-router'
import { computed } from 'vue'

const router = useRouter()

const currentRoute = computed(() => router.currentRoute.value.fullPath)

const isActive = (name) => {
  return name === currentRoute.value
}

const props = defineProps({
  title: {
    type: String,
    required: true,
  },

  link: {
    type: String,
    default: '#',
  },

  icon: {
    type: String,
    default: '',
  },
})
</script>
