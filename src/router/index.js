import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  {
    path: '/',
    redirect: '/login'
    // component: () => import('@/components/layout')
  },
  {
    path: '/login',
    name: 'UserLogin',
    component: () => import('@/components/UserLogin')
  },
  {
    path: '/dashboard',
    name: 'DashBoard',
    component: () => import('@/layout/index.vue'),
    children: [
      {
        path: '',
        name: 'DashBoard',
        component: () => import('@/view/dashboard.vue')
      }
    ]
  },
  {
    path: '/profile',
    name: 'profile',
    component: () => import('@/layout/index.vue'),
    children: [
      {
        path: '',
        name: 'profile',
        component: () => import('@/view/profile')
      }
    ]
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
