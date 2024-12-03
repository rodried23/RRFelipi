<script setup lang="ts">
import { RouterView } from 'vue-router'
import Cabecalho from './components/Cabecalho.vue'
import Rodape from './components/Rodape.vue'
</script>

<template>
  <div class="page-layout">
    <Cabecalho class="header" />
    <main class="content">
      <RouterView />
    </main>
    <Rodape class="footer" />
  </div>
</template>

<style>
/* Reset de estilo básico */
* {
  font-family: "Poppins", sans-serif;
  padding: 0;
  margin: 0;
  box-sizing: border-box;
}

/* Estrutura principal */
.page-layout {
  display: flex;
  flex-direction: column;
  min-height: 100vh; /* Garante que o layout ocupa toda a altura da tela */
}

/* Estilo do cabeçalho */
.header {
  flex-shrink: 0; /* Garante que o cabeçalho não encolha */
}

/* Área de conteúdo */
.content {
  flex: 1; /* Faz o conteúdo ocupar o espaço restante entre cabeçalho e rodapé */
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 1rem;
  background-color: #f8f9fa; /* Fundo claro para diferenciar o conteúdo */
}

/* Estilo do rodapé */
.footer {
  flex-shrink: 0; /* Garante que o rodapé não encolha */
  background-color: #000;
  color: #fff;
  padding: 1rem;
  text-align: center;
}
</style>