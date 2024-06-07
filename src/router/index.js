import { createRouter, createWebHistory } from 'vue-router'
import FullPage from '../views/FullPage.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'fullpage',
      component: FullPage
    },
  ]
})

export default router
