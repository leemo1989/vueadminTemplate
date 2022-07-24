import { defineStore } from 'pinia'
import router from '@/router/index'

export const globalStore = defineStore('globalEnv', {
  state: () => {
    return {
      sidebarLogo: false,
      isCollapse: false,
      routers: [],
      user: {
        userName: '',
        nickName: '',
        sideMode: ''
      }
    }
  },
  actions: {
    setUserInfo (username) {
      this.user.userName = username
      localStorage.setItem('user', this.user)
    },
    getUserInfo () {
      console.log('get-----', this.user, JSON.parse(sessionStorage.getItem('store')))
      if (this.user.userName.length === 0) {
        this.user = JSON.parse(sessionStorage.getItem('store')).user
      }
      return this.user
    },
    getRouters () {
      console.log('get-----111111111', this.user, JSON.parse(sessionStorage.getItem('store')))
      if (this.routers.length === 0) {
        this.routers = JSON.parse(sessionStorage.getItem('store')).routers
      }
      return this.routers
    },
    changLogo () {
      this.sidebarLogo = !this.sidebarLogo
    },
    changesider () {
      this.isCollapse = !this.isCollapse
    },
    setRouters () {
      const m1 = [{
        path: '/dashboard',
        name: 'DashBoard',
        component: 'layout/index.vue',
        meta: {
          keepAlive: false,
          defaultMenu: false,
          title: '仪表盘',
          icon: 'odometer',
          closeTab: false
        },
        children: [
          {
            path: '',
            name: 'DashBoard',
            component: 'view/dashboard.vue',
            meta: {
              keepAlive: false,
              defaultMenu: false,
              title: '概览',
              icon: 'odometer',
              closeTab: false
            }
          },
          {
            path: 'list',
            name: 'clusterList',
            component: 'view/clusterList.vue',
            meta: {
              keepAlive: false,
              defaultMenu: false,
              title: '实例列表',
              icon: 'odometer',
              closeTab: false
            }
          }
        ]
      }]
      m1.forEach((value) => {
        const child = [] // 子路由数据格式处理
        if (value.children && value.children.length) {
          value.children.forEach((val) => {
            child.push({
              name: val.name,
              path: val.path,
              meta: val.meta,
              component: () => import(`@/${val.component}`) // 开发中遇到问题，不能使用纯变量，需要字符串拼接才可以，要不然同样的地址报错。
            })
          })
        }
        this.routers.push({
          name: value.name,
          path: value.path,
          meta: value.meta,
          component: () => import(`@/${value.component}`),
          children: child
        })
      })
      this.routers.forEach((val) => {
        router.addRoute(val)
      })
    }
  }
})
