import { createRouter, createWebHistory } from 'vue-router'
import AboutMe from '../views/AboutMe.vue'
import Projects from '../views/Projects.vue'
import Certificates from '../views/Certificates.vue'
import Home from '../views/Home.vue'
import ContactMe from '../views/ContactMe.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/aboutme',
      name: 'aboutMe',
      component: AboutMe
    },
    {
      path: '/certificates',
      name: 'certificates',
      component: Certificates
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
  ]
})

export default router
