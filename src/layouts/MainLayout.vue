<script setup>
import { ref } from 'vue'
import EssentialLink from '../components/EssentialLink.vue'

const linksList = [
  {
    title: 'Início',
    icon: 'home',
    link: '/',
  },
  {
    title: 'Favoritos',
    icon: 'favorite',
    link: '/favoritos',
  },
  {
    title: 'Categorias',
    icon: 'category',
    link: '/categorias',
  },
  {
    title: 'Sobre',
    icon: 'info',
    link: '/sobre',
  },
]

const leftDrawerOpen = ref(false)

function toggleLeftDrawer() {
  leftDrawerOpen.value = !leftDrawerOpen.value
}
</script>

<template>
  <q-layout view="lHh Lpr lFf">
    <q-header dark>
      <q-toolbar>
        <q-btn flat dense round icon="menu" aria-label="Menu" @click="toggleLeftDrawer" />

        <q-toolbar-title class="mono-text text-h4" tag="h1">GIF SEARCH</q-toolbar-title>

        <div>
          <span class="text-subtitle2 q-mr-md">Pedro Trasfereti</span>

          <q-avatar>
            <img src="https://avatars.githubusercontent.com/u/70381963" />
          </q-avatar>
        </div>
      </q-toolbar>
    </q-header>

    <q-drawer v-model="leftDrawerOpen" show-if-above bordered>
      <q-list>
        <q-item-label header> Menu </q-item-label>

        <EssentialLink v-for="link in linksList" :key="link.title" v-bind="link" />
      </q-list>
    </q-drawer>

    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>
