<script setup>
import Navbar from './components/Navbar.vue';
</script>

<template>
  <Navbar />
  <router-view />
</template>

<style scoped>
nav {
  margin-bottom: 1em;
}
</style>
