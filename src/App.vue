<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
import Menu from './components/Menu.vue'
</script>

<template>
  <Menu/>
  <RouterView class="content"/>
</template>

<style scoped>
.content {
  margin-top: 60px;
  padding: 20px;
}

</style>
