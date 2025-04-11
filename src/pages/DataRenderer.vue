<script setup>
defineProps({
  success: {
    type: Boolean,
    default: true,
  },
  error: {
    type: Object,
    default: () => ({
      message: 'Algo deu errado...',
      details: 'Tente novamente mais tarde.',
    }),
  },
  data: {
    type: Array,
    default: () => [],
  },
  empty: {
    type: Object,
    default: () => ({
      title: 'Oops! Nada aqui...',
      message: 'Oops! Nada aqui...',
      button: {
        label: 'Voltar para o início',
        to: '/',
      },
    }),
  },
})
</script>

<template>
  <div v-if="success && data.length === 0" class="col text-center q-gutter-md q-pt-xl">
    <div class="text-h4">{{ empty.title }}</div>

    <div class="text-h6" style="opacity: 0.4">{{ empty.message }}</div>

    <q-btn
      class="q-mt-xl"
      color="primary"
      unelevated
      :to="empty.button.to"
      :label="empty.button.label"
      no-caps
    />
  </div>
  <div v-else-if="!success" class="col text-center q-gutter-md q-pt-xl">
    <div class="text-h4">Erro!</div>

    <div class="text-h6" style="opacity: 0.4">{{ error.message }}</div>

    <p style="opacity: 0.4">{{ error.details }}</p>
  </div>
  <slot v-else></slot>
</template>
