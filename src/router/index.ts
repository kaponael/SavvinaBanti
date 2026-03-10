import { createRouter, createWebHistory } from 'vue-router'
import Homepage from '../components/Homepage.vue'
import Services from '../components/Services.vue'
import ContactMe from '../components/ContactMe.vue'
import Blog from '../components/Blog.vue'

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      name: 'home',
      component: Homepage,
    },
    {
      path: '/services',
      name: 'services',
      component: Services,
    },
    {
      path: '/contactme',
      name: 'contactme',
      component: ContactMe,
    },
    {
      path: '/blog',
      name: 'blog',
      component: Blog,
    },
    // Fallback
    {
      path: '/:pathMatch(.*)*',
      redirect: '/',
    },
  ],
  scrollBehavior() {
    // Always scroll to top on navigation
    return { top: 0 }
  },
})

export default router
