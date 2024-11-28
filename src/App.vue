<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
import Cabecalho from './components/Cabecalho.vue'
import Rodape from './components/Rodape.vue'
</script>

<template>
  <Cabecalho/>
  <RouterView class="content"/>
  <Rodape/>
</template>

<style scoped>
.content {
  margin-top: 100px;
  padding: 20px;
}

</style>
