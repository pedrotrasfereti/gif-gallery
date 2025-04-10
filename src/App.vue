<template>
  <router-view />
</template>

<script setup>
import { useQuasar } from 'quasar'

const $q = useQuasar()

// calling here; equivalent to when component is created
$q.dark.set(true)
</script>
