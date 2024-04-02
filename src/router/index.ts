import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '@/components/02_views/HomeView.vue'
import ScalesIndex from '@/components/02_views/ScalesIndex.vue'
import ScalesShow from '@/components/02_views/ScalesShow.vue'
import ChordsIndex from '@/components/02_views/ChordsIndex.vue'
import ChordsShow from '@/components/02_views/ChordsShow.vue'
import AvailableChordsIndex from '@/components/02_views/AvailableChordsIndex.vue'
import AvailableChordsShow from '@/components/02_views/AvailableChordsShow.vue'
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
          component: ScalesIndex,
          meta: { title: 'スケール一覧' }
        },
        {
          path: ':scale',
          component: ScalesShow
        }
      ]
    },
    {
      path: '/chords',
      children: [
        {
          path: '',
          component: ChordsIndex,
          meta: { title: 'コード一覧' }
        },
        {
          path: ':chord',
          component: ChordsShow
        }
      ]
    },
    {
      path: '/available-chords',
      children: [
        {
          path: '',
          component: AvailableChordsIndex,
          meta: { title: 'アヴェイラブルコード' }
        },
        {
          path: ':key',
          component: AvailableChordsShow
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
