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
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
