import router from './router'
import { globalStore } from '@/store/modules/global'
let refreshRoute = 0
router.beforeEach((to, from, next) => {
  console.log(from.fullPath, '--->', to.fullPath)
  const token = localStorage.getItem('token')
  console.log(token)
  if (to.fullPath !== '/login' && !token) {
    next({ name: 'UserLogin' })
  }
  if (to.fullPath === '/login' && token) {
    next('/dashboard')
  } else {
    // 刷新后路由热重载
    if (!refreshRoute) {
      console.log('refsh route...')
      refreshRoute++
      globalStore().setRouters()
      next('/dashboard')
    }
    next()
  }
  return false
})
