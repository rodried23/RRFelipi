<script setup lang="ts">
import { RouterView } from 'vue-router'
import Cabecalho from './components/Cabecalho.vue'
import Rodape from './components/Rodape.vue'
</script>

<template>
  <div class="page-layout">
    <Cabecalho class="header"/>
    <main class="content">
      <RouterView />
    </main>
    <Rodape class="footer" />
  </div>
</template>

<style>
* {
  font-family: "Poppins", sans-serif;
  padding: 0;
  margin: 0;
  box-sizing: border-box;
}

.page-layout {
  display: flex;
  flex-direction: column;
  min-height: 100vh; 
}

.header {
  flex-shrink: 0;
}

main {
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 1rem;
  background-color: #f8f9fa;
}

.footer {
  flex-shrink: 0; 
  background-color: #000;
  color: #fff;
  padding: 1rem;
  text-align: center;
}
</style>