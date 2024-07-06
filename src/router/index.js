import { createRouter, createWebHistory } from 'vue-router'
import FullPage from '../views/FullPage.vue'
import AllProjects from '../views/AllProjects.vue'
import AddProject from '../views/AddProject.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'fullpage',
      component: FullPage
    },
    {
      path: '/projects',
      name: 'projects',
      component: AllProjects
    },
    {
      path: "/bale/addProject",
      name: 'addproject',
      component: AddProject
    }
  ]
})

export default router
