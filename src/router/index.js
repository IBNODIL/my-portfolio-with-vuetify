import { createRouter, createWebHistory } from 'vue-router'
import Projects from '../views/Projects.vue'
import Home from '../views/Home.vue'
import ContactMe from '../views/ContactMe.vue'
import ChallangeProjects from '../views/ChallangeProjects.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/projects',
      name: 'projects',
      component: Projects
    },
    {
      path: '/contactme',
      name: 'contactme',
      component: ContactMe
    },

    {
      path: '/projects/challange',
      name: 'challange',
      component: ChallangeProjects
    },
  ]
})

export default router
