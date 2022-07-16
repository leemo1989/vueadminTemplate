import { defineStore } from 'pinia'
import router from '@/router/index';

export const globalStore = defineStore('globalEnv', {
  state: () => {
    return {
      sidebarLogo: false,
      isCollapse: false,
      routers: []
    };
  },
  // could also be defined as
  // state: () => ({ count: 0 })
  actions: {
    changLogo () {
      this.sidebarLogo =!this.sidebarLogo;
    },
    changesider (){
      this.isCollapse =!this.isCollapse;
    },
    set_routers(){
      const m1 = [{
        path: '/dashboard',
        name: 'DashBoard',
        component: 'layout/index.vue',
        children:[
          {
            path: '',
            name: 'DashBoard',
            component: 'view/dashboard.vue'
          }
        ]
      }]
      m1.filter((value) => {
        let child = []  // 子路由数据格式处理
        if (value.children && value.children.length) {
          value.children.filter((val) => {
            child.push({
              name: val.name,
              path: val.path,
              component: () => import(`@/${val.component}`) // 开发中遇到问题，不能使用纯变量，需要字符串拼接才可以，要不然同样的地址报错。
            })
          })
        }
        this.routers.push({
          name: value.name,
          path: value.path,
          component: () => import(`@/${value.component}`),
          children: child
        })
      })
      this.routers.forEach((val) => {
        router.addRoute(val)
      })
    }
  },
})
