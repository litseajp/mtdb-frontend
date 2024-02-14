import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '@/components/02_views/HomeView.vue'
import ScalesView from '@/components/02_views/ScalesView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      component: HomeView
    },
    {
      path: '/scales',
      component: ScalesView
    }
  ]
})

export default router
