import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '@/components/02_views/HomeView.vue'
import ScalesView from '@/components/02_views/ScalesView.vue'
import ScaleView from '@/components/02_views/ScaleView.vue'
import ChordsView from '@/components/02_views/ChordsView.vue'
import ChordView from '@/components/02_views/ChordView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      component: HomeView
    },
    {
      path: '/scales',
      children: [
        {
          path: '',
          component: ScalesView
        },
        {
          path: ':scale',
          component: ScaleView
        }
      ]
    },
    {
      path: '/chords',
      children: [
        {
          path: '',
          component: ChordsView
        },
        {
          path: ':chord',
          component: ChordView
        }
      ]
    },
  ]
})

export default router
