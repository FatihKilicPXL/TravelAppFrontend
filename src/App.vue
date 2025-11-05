<script setup>
import { useRoute } from 'vue-router'
import Navbar from './components/Navbar.vue'

const route = useRoute()
</script>

<template>
  <Navbar v-if="route.name !== 'Login'" />
  <router-view />
</template>

<style scoped>
nav {
  margin-bottom: 1em;
}
</style>
