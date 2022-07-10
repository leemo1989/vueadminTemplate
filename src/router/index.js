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
    component: () => import('@/layout/index'),
    children:[
      {
        path: '',
        name: 'DashBoard',
        component: () => import('@/view/dashboard')
      }
    ]

  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
