import { createRouter, createWebHistory } from 'vue-router'
import CategoriasPrincipal from '../views/CategoriasPrincipal.vue'
import LivrosPrincipal from '../views/LivrosPrincipal.vue'
import AutoresPrincipal from '../views/AutoresPrincipal.vue'
import EditorasPrincipal from '../views/EditorasPrincipal.vue'
import MainView from '../views/MainView.vue'


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/categorias',
      name: 'categorias',
      component: CategoriasPrincipal
    },
    {
      path: '/livros',
      name: 'livros',
      component: LivrosPrincipal
    
    },

    {
      path: '/autores',
      name: 'autores',
      component: AutoresPrincipal
    
    },

    {
      path: '/editoras',
      name: 'editoras',
      component: EditorasPrincipal
    },
    {
      path: '/main',
      name: 'main',
      component: MainView
    },
    

  ]
})

export default router
