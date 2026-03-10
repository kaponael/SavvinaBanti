import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      name: 'home',
      component: '',
    },
    {
      path: '/about',
      name: 'about',
      component: '',
    },
    {
      path: '/services',
      name: 'services',
      component: '',
    },
    {
      path: '/contact',
      name: 'contact',
      component: '',
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
