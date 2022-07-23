import request from '@/utils/request'
export const menu = {
  menus: [
    {
      ID: 22,
      CreatedAt: '2022-07-09T19:02:48.587+08:00',
      UpdatedAt: '2022-07-09T19:02:48.587+08:00',
      parentId: '0',
      path: 'https://www.gin-vue-admin.com',
      name: 'https://www.gin-vue-admin.com',
      hidden: false,
      component: '/',
      sort: 0,
      meta: {
        keepAlive: false,
        defaultMenu: false,
        title: '官方网站',
        icon: 'home-filled',
        closeTab: false
      },
      authoritys: null,
      menuBtn: null,
      menuId: '22',
      children: null,
      parameters: [],
      btns: null
    },
    {
      ID: 1,
      CreatedAt: '2022-07-09T19:02:48.587+08:00',
      UpdatedAt: '2022-07-09T19:02:48.587+08:00',
      parentId: '0',
      path: 'dashboard',
      name: 'dashboard',
      hidden: false,
      component: 'view/dashboard/index.vue',
      sort: 1,
      meta: {
        keepAlive: false,
        defaultMenu: false,
        title: '仪表盘',
        icon: 'odometer',
        closeTab: false
      },
      authoritys: null,
      menuBtn: null,
      menuId: '1',
      children: null,
      parameters: [],
      btns: null
    },
    {
      ID: 3,
      CreatedAt: '2022-07-09T19:02:48.587+08:00',
      UpdatedAt: '2022-07-09T19:02:48.587+08:00',
      parentId: '0',
      path: 'admin',
      name: 'superAdmin',
      hidden: false,
      component: 'view/superAdmin/index.vue',
      sort: 3,
      meta: {
        keepAlive: false,
        defaultMenu: false,
        title: '超级管理员',
        icon: 'user',
        closeTab: false
      },
      authoritys: null,
      menuBtn: null,
      menuId: '3',
      children: [
        {
          ID: 4,
          CreatedAt: '2022-07-09T19:02:48.587+08:00',
          UpdatedAt: '2022-07-09T19:02:48.587+08:00',
          parentId: '3',
          path: 'authority',
          name: 'authority',
          hidden: false,
          component: 'view/superAdmin/authority/authority.vue',
          sort: 1,
          meta: {
            keepAlive: false,
            defaultMenu: false,
            title: '角色管理',
            icon: 'avatar',
            closeTab: false
          },
          authoritys: null,
          menuBtn: null,
          menuId: '4',
          children: null,
          parameters: [],
          btns: null
        },
        {
          ID: 5,
          CreatedAt: '2022-07-09T19:02:48.587+08:00',
          UpdatedAt: '2022-07-09T19:02:48.587+08:00',
          parentId: '3',
          path: 'menu',
          name: 'menu',
          hidden: false,
          component: 'view/superAdmin/menu/menu.vue',
          sort: 2,
          meta: {
            keepAlive: true,
            defaultMenu: false,
            title: '菜单管理',
            icon: 'tickets',
            closeTab: false
          },
          authoritys: null,
          menuBtn: null,
          menuId: '5',
          children: null,
          parameters: [],
          btns: null
        },
        {
          ID: 6,
          CreatedAt: '2022-07-09T19:02:48.587+08:00',
          UpdatedAt: '2022-07-09T19:02:48.587+08:00',
          parentId: '3',
          path: 'api',
          name: 'api',
          hidden: false,
          component: 'view/superAdmin/api/api.vue',
          sort: 3,
          meta: {
            keepAlive: true,
            defaultMenu: false,
            title: 'api管理',
            icon: 'platform',
            closeTab: false
          },
          authoritys: null,
          menuBtn: null,
          menuId: '6',
          children: null,
          parameters: [],
          btns: null
        },
        {
          ID: 7,
          CreatedAt: '2022-07-09T19:02:48.587+08:00',
          UpdatedAt: '2022-07-09T19:02:48.587+08:00',
          parentId: '3',
          path: 'user',
          name: 'user',
          hidden: false,
          component: 'view/superAdmin/user/user.vue',
          sort: 4,
          meta: {
            keepAlive: false,
            defaultMenu: false,
            title: '用户管理',
            icon: 'coordinate',
            closeTab: false
          },
          authoritys: null,
          menuBtn: null,
          menuId: '7',
          children: null,
          parameters: [],
          btns: null
        },
        {
          ID: 18,
          CreatedAt: '2022-07-09T19:02:48.587+08:00',
          UpdatedAt: '2022-07-09T19:02:48.587+08:00',
          parentId: '3',
          path: 'dictionary',
          name: 'dictionary',
          hidden: false,
          component: 'view/superAdmin/dictionary/sysDictionary.vue',
          sort: 5,
          meta: {
            keepAlive: false,
            defaultMenu: false,
            title: '字典管理',
            icon: 'notebook',
            closeTab: false
          },
          authoritys: null,
          menuBtn: null,
          menuId: '18',
          children: null,
          parameters: [],
          btns: null
        },
        {
          ID: 20,
          CreatedAt: '2022-07-09T19:02:48.587+08:00',
          UpdatedAt: '2022-07-09T19:02:48.587+08:00',
          parentId: '3',
          path: 'operation',
          name: 'operation',
          hidden: false,
          component: 'view/superAdmin/operation/sysOperationRecord.vue',
          sort: 6,
          meta: {
            keepAlive: false,
            defaultMenu: false,
            title: '操作历史',
            icon: 'pie-chart',
            closeTab: false
          },
          authoritys: null,
          menuBtn: null,
          menuId: '20',
          children: null,
          parameters: [],
          btns: null
        }
      ],
      parameters: [],
      btns: null
    },
    {
      ID: 8,
      CreatedAt: '2022-07-09T19:02:48.587+08:00',
      UpdatedAt: '2022-07-09T19:02:48.587+08:00',
      parentId: '0',
      path: 'person',
      name: 'person',
      hidden: true,
      component: 'view/person/person.vue',
      sort: 4,
      meta: {
        keepAlive: false,
        defaultMenu: false,
        title: '个人信息',
        icon: 'message',
        closeTab: false
      },
      authoritys: null,
      menuBtn: null,
      menuId: '8',
      children: null,
      parameters: [],
      btns: null
    },
    {
      ID: 14,
      CreatedAt: '2022-07-09T19:02:48.587+08:00',
      UpdatedAt: '2022-07-09T19:02:48.587+08:00',
      parentId: '0',
      path: 'systemTools',
      name: 'systemTools',
      hidden: false,
      component: 'view/systemTools/index.vue',
      sort: 5,
      meta: {
        keepAlive: false,
        defaultMenu: false,
        title: '系统工具',
        icon: 'tools',
        closeTab: false
      },
      authoritys: null,
      menuBtn: null,
      menuId: '14',
      children: [
        {
          ID: 26,
          CreatedAt: '2022-07-09T19:02:48.587+08:00',
          UpdatedAt: '2022-07-09T19:02:48.587+08:00',
          parentId: '14',
          path: 'autoPkg',
          name: 'autoPkg',
          hidden: false,
          component: 'view/systemTools/autoPkg/autoPkg.vue',
          sort: 0,
          meta: {
            keepAlive: false,
            defaultMenu: false,
            title: '自动化package',
            icon: 'folder',
            closeTab: false
          },
          authoritys: null,
          menuBtn: null,
          menuId: '26',
          children: null,
          parameters: [],
          btns: null
        },
        {
          ID: 15,
          CreatedAt: '2022-07-09T19:02:48.587+08:00',
          UpdatedAt: '2022-07-09T19:02:48.587+08:00',
          parentId: '14',
          path: 'autoCode',
          name: 'autoCode',
          hidden: false,
          component: 'view/systemTools/autoCode/index.vue',
          sort: 1,
          meta: {
            keepAlive: true,
            defaultMenu: false,
            title: '代码生成器',
            icon: 'cpu',
            closeTab: false
          },
          authoritys: null,
          menuBtn: null,
          menuId: '15',
          children: null,
          parameters: [],
          btns: null
        },
        {
          ID: 24,
          CreatedAt: '2022-07-09T19:02:48.587+08:00',
          UpdatedAt: '2022-07-09T19:02:48.587+08:00',
          parentId: '14',
          path: 'autoCodeAdmin',
          name: 'autoCodeAdmin',
          hidden: false,
          component: 'view/systemTools/autoCodeAdmin/index.vue',
          sort: 1,
          meta: {
            keepAlive: false,
            defaultMenu: false,
            title: '自动化代码管理',
            icon: 'magic-stick',
            closeTab: false
          },
          authoritys: null,
          menuBtn: null,
          menuId: '24',
          children: null,
          parameters: [],
          btns: null
        },
        {
          ID: 16,
          CreatedAt: '2022-07-09T19:02:48.587+08:00',
          UpdatedAt: '2022-07-09T19:02:48.587+08:00',
          parentId: '14',
          path: 'formCreate',
          name: 'formCreate',
          hidden: false,
          component: 'view/systemTools/formCreate/index.vue',
          sort: 2,
          meta: {
            keepAlive: true,
            defaultMenu: false,
            title: '表单生成器',
            icon: 'magic-stick',
            closeTab: false
          },
          authoritys: null,
          menuBtn: null,
          menuId: '16',
          children: null,
          parameters: [],
          btns: null
        }
      ],
      parameters: [],
      btns: null
    },
    {
      ID: 27,
      CreatedAt: '2022-07-09T19:02:48.587+08:00',
      UpdatedAt: '2022-07-09T19:02:48.587+08:00',
      parentId: '0',
      path: 'plugin',
      name: 'plugin',
      hidden: false,
      component: 'view/routerHolder.vue',
      sort: 6,
      meta: {
        keepAlive: false,
        defaultMenu: false,
        title: '插件系统',
        icon: 'cherry',
        closeTab: false
      },
      authoritys: null,
      menuBtn: null,
      menuId: '27',
      children: [
        {
          ID: 28,
          CreatedAt: '2022-07-09T19:02:48.587+08:00',
          UpdatedAt: '2022-07-09T19:02:48.587+08:00',
          parentId: '27',
          path: 'https://plugin.gin-vue-admin.com/',
          name: 'https://plugin.gin-vue-admin.com/',
          hidden: false,
          component: 'https://plugin.gin-vue-admin.com/',
          sort: 0,
          meta: {
            keepAlive: false,
            defaultMenu: false,
            title: '插件市场',
            icon: 'shop',
            closeTab: false
          },
          authoritys: null,
          menuBtn: null,
          menuId: '28',
          children: null,
          parameters: [],
          btns: null
        },
        {
          ID: 30,
          CreatedAt: '2022-07-09T19:02:48.587+08:00',
          UpdatedAt: '2022-07-09T19:02:48.587+08:00',
          parentId: '27',
          path: 'autoPlug',
          name: 'autoPlug',
          hidden: false,
          component: 'view/systemTools/autoPlug/autoPlug.vue',
          sort: 2,
          meta: {
            keepAlive: false,
            defaultMenu: false,
            title: '插件模板',
            icon: 'folder',
            closeTab: false
          },
          authoritys: null,
          menuBtn: null,
          menuId: '30',
          children: null,
          parameters: [],
          btns: null
        },
        {
          ID: 31,
          CreatedAt: '2022-07-09T19:02:48.587+08:00',
          UpdatedAt: '2022-07-09T19:02:48.587+08:00',
          parentId: '27',
          path: 'plugin-email',
          name: 'plugin-email',
          hidden: false,
          component: 'plugin/email/view/index.vue',
          sort: 3,
          meta: {
            keepAlive: false,
            defaultMenu: false,
            title: '邮件插件',
            icon: 'message',
            closeTab: false
          },
          authoritys: null,
          menuBtn: null,
          menuId: '31',
          children: null,
          parameters: [],
          btns: null
        }
      ],
      parameters: [],
      btns: null
    },
    {
      ID: 9,
      CreatedAt: '2022-07-09T19:02:48.587+08:00',
      UpdatedAt: '2022-07-09T19:02:48.587+08:00',
      parentId: '0',
      path: 'example',
      name: 'example',
      hidden: false,
      component: 'view/example/index.vue',
      sort: 7,
      meta: {
        keepAlive: false,
        defaultMenu: false,
        title: '示例文件',
        icon: 'management',
        closeTab: false
      },
      authoritys: null,
      menuBtn: null,
      menuId: '9',
      children: [
        {
          ID: 10,
          CreatedAt: '2022-07-09T19:02:48.587+08:00',
          UpdatedAt: '2022-07-09T19:02:48.587+08:00',
          parentId: '9',
          path: 'excel',
          name: 'excel',
          hidden: false,
          component: 'view/example/excel/excel.vue',
          sort: 4,
          meta: {
            keepAlive: false,
            defaultMenu: false,
            title: 'excel导入导出',
            icon: 'takeaway-box',
            closeTab: false
          },
          authoritys: null,
          menuBtn: null,
          menuId: '10',
          children: null,
          parameters: [],
          btns: null
        },
        {
          ID: 11,
          CreatedAt: '2022-07-09T19:02:48.587+08:00',
          UpdatedAt: '2022-07-09T19:02:48.587+08:00',
          parentId: '9',
          path: 'upload',
          name: 'upload',
          hidden: false,
          component: 'view/example/upload/upload.vue',
          sort: 5,
          meta: {
            keepAlive: false,
            defaultMenu: false,
            title: '媒体库（上传下载）',
            icon: 'upload',
            closeTab: false
          },
          authoritys: null,
          menuBtn: null,
          menuId: '11',
          children: null,
          parameters: [],
          btns: null
        },
        {
          ID: 12,
          CreatedAt: '2022-07-09T19:02:48.587+08:00',
          UpdatedAt: '2022-07-09T19:02:48.587+08:00',
          parentId: '9',
          path: 'breakpoint',
          name: 'breakpoint',
          hidden: false,
          component: 'view/example/breakpoint/breakpoint.vue',
          sort: 6,
          meta: {
            keepAlive: false,
            defaultMenu: false,
            title: '断点续传',
            icon: 'upload-filled',
            closeTab: false
          },
          authoritys: null,
          menuBtn: null,
          menuId: '12',
          children: null,
          parameters: [],
          btns: null
        },
        {
          ID: 13,
          CreatedAt: '2022-07-09T19:02:48.587+08:00',
          UpdatedAt: '2022-07-09T19:02:48.587+08:00',
          parentId: '9',
          path: 'customer',
          name: 'customer',
          hidden: false,
          component: 'view/example/customer/customer.vue',
          sort: 7,
          meta: {
            keepAlive: false,
            defaultMenu: false,
            title: '客户列表（资源示例）',
            icon: 'avatar',
            closeTab: false
          },
          authoritys: null,
          menuBtn: null,
          menuId: '13',
          children: null,
          parameters: [],
          btns: null
        }
      ],
      parameters: [],
      btns: null
    },
    {
      ID: 23,
      CreatedAt: '2022-07-09T19:02:48.587+08:00',
      UpdatedAt: '2022-07-09T19:02:48.587+08:00',
      parentId: '0',
      path: 'state',
      name: 'state',
      hidden: false,
      component: 'view/system/state.vue',
      sort: 8,
      meta: {
        keepAlive: false,
        defaultMenu: false,
        title: '服务器状态',
        icon: 'cloudy',
        closeTab: false
      },
      authoritys: null,
      menuBtn: null,
      menuId: '23',
      children: null,
      parameters: [],
      btns: null
    },
    {
      ID: 2,
      CreatedAt: '2022-07-09T19:02:48.587+08:00',
      UpdatedAt: '2022-07-09T19:02:48.587+08:00',
      parentId: '0',
      path: 'about',
      name: 'about',
      hidden: false,
      component: 'view/about/index.vue',
      sort: 9,
      meta: {
        keepAlive: false,
        defaultMenu: false,
        title: '关于我们',
        icon: 'info-filled',
        closeTab: false
      },
      authoritys: null,
      menuBtn: null,
      menuId: '2',
      children: null,
      parameters: [],
      btns: null
    }
  ]
}

export const userinfo = {
  user: {
    ID: 1,
    CreatedAt: '2022-07-09T19:02:48.575+08:00',
    UpdatedAt: '2022-07-09T19:02:48.58+08:00',
    uuid: '8d30f3af-8c1d-4186-bbd8-ef55cd2e2a99',
    userName: 'admin',
    nickName: '超级管理员',
    sideMode: 'dark',
    headerImg: 'https://qmplusimg.henrongyi.top/gva_header.jpg',
    baseColor: '#fff',
    activeColor: '#1890ff',
    authorityId: 888,
    authority: {
      CreatedAt: '2022-07-09T19:02:48.361+08:00',
      UpdatedAt: '2022-07-09T19:02:48.596+08:00',
      DeletedAt: null,
      authorityId: 888,
      authorityName: '普通用户',
      parentId: 0,
      dataAuthorityId: null,
      children: null,
      menus: null,
      defaultRouter: 'dashboard'
    },
    authorities: [
      {
        CreatedAt: '2022-07-09T19:02:48.361+08:00',
        UpdatedAt: '2022-07-09T19:02:48.596+08:00',
        DeletedAt: null,
        authorityId: 888,
        authorityName: '普通用户',
        parentId: 0,
        dataAuthorityId: null,
        children: null,
        menus: null,
        defaultRouter: 'dashboard'
      },
      {
        CreatedAt: '2022-07-09T19:02:48.361+08:00',
        UpdatedAt: '2022-07-09T19:02:48.606+08:00',
        DeletedAt: null,
        authorityId: 8881,
        authorityName: '普通用户子角色',
        parentId: 888,
        dataAuthorityId: null,
        children: null,
        menus: null,
        defaultRouter: 'dashboard'
      },
      {
        CreatedAt: '2022-07-09T19:02:48.361+08:00',
        UpdatedAt: '2022-07-09T19:02:48.599+08:00',
        DeletedAt: null,
        authorityId: 9528,
        authorityName: '测试角色',
        parentId: 0,
        dataAuthorityId: null,
        children: null,
        menus: null,
        defaultRouter: 'dashboard'
      }
    ],
    phone: '17611111111',
    email: '333333333@qq.com',
    enable: 1
  },
  token: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJVVUlEIjoiOGQzMGYzYWYtOGMxZC00MTg2LWJiZDgtZWY1NWNkMmUyYTk5IiwiSUQiOjEsIlVzZXJuYW1lIjoiYWRtaW4iLCJOaWNrTmFtZSI6Iui2hee6p-euoeeQhuWRmCIsIkF1dGhvcml0eUlkIjo4ODgsIkJ1ZmZlclRpbWUiOjg2NDAwLCJleHAiOjE2NTg0MTcxMTcsImlzcyI6InFtUGx1cyIsIm5iZiI6MTY1NzgxMTMxN30.Kb48V-hRG6_Exq4HeNu4KZvMu0fx6l91axEQ8QRnk68',
  expiresAt: 1658417117000
}
export async function Login (user, pwd) {
  console.log('data', user, pwd)
  return new Promise(resolve => {
    return resolve({
      code: 0,
      data: userinfo
    })
  })
}
export async function getMenu () {
  return new Promise(resolve => {
    return resolve({
      code: 200,
      data: menu
    })
  })
}
// export const Login = (data) =>request({url: '', method: 'post', data: data})
export const getlist = (data) => request({ url: '', method: 'get', params: data })
