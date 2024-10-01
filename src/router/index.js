import { createRouter, createWebHistory } from 'vue-router'
import Login from '@/stores/views/Login.vue'
import AppLayout from '@/layout/AppLayout.vue'
import Admin from '@/stores/views/Admin.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      component: AppLayout,
      children: [
        {
          path: '/home',
          name: 'home',
          component: () => import('@/stores/views/Dashboard.vue')
        },
        {
          path: '/upload',
          name: 'upload',
          component: () =>import('@/stores/views/Upload.vue')
        },
        {
          path: '/bt2',
          name: 'bt2',
          component: () =>import('@/stores/views/BT2.vue')
        }
      ]
    },

    {
      path: '/authetic',
      name: 'authetic',
      component: Login
    }, 

    {
      path:'/admin',
      name: 'admin',
      component: Admin
    }
  ]
})

export default router
