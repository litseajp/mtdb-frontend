import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '@/components/02_views/HomeView.vue'
import ScalesView from '@/components/02_views/ScalesView.vue'
import ScaleView from '@/components/02_views/ScaleView.vue'
import ChordsView from '@/components/02_views/ChordsView.vue'
import ChordView from '@/components/02_views/ChordView.vue'
import NotFoundView from '@/components/02_views/NotFoundView.vue'

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
          component: ScalesView,
          meta: { title: 'スケール一覧' }
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
          component: ChordsView,
          meta: { title: 'コード一覧' }
        },
        {
          path: ':chord',
          component: ChordView
        }
      ]
    },
    {
      path: '/:pathMatch(.*)*',
      component: NotFoundView
    },
  ]
})

export default router
