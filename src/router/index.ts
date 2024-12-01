import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import Sobre from '../views/Sobre.vue'
import Cadastro from '../views/Cadastro.vue';  // Importando o componente Cadastro



const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path:'/',
      component: Home
  },{
    path:'/sobre',
    component: Sobre
  },{
    path:'/Cadastro',
    component: Cadastro
  }
   
  ],
})

export default router
