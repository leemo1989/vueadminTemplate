<template>
  <el-container class="app-wrapper">
    <SiderBarA/>
    <el-container>
      <el-header class="navbar">
        <el-row >
          <el-col :span="12">
            <el-icon v-if="isCollapse" @click="cgsider"><DArrowRight /></el-icon>
            <el-icon v-else @click="cgsider"><DArrowLeft/></el-icon>
            <el-button @click="cglogo">logo</el-button>
  <button @click="toggleDark()">
<!--    <i inline-block align-middle i="dark:carbon-moon carbon-sun" />-->

<!--    <span class="ml-2">{{ isDark ? 'Dark' : 'Light' }}</span>-->
  </button>
          </el-col>
          <el-col :span="12" style="text-align: right">
            <el-dropdown>
              <div style="display: flex;text-align:center;align-items: center;margin-top: 5px">
                <el-avatar shape="circle" :size="40" fit="cover" src="https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg" />
                <span style="margin:0 10px">{{userStore.userName}}</span>
                <el-icon class="el-icon--right">
                  <arrow-down />
                </el-icon>
                </div>
              <template #dropdown>
                <el-dropdown-menu>
                  <el-dropdown-item ><router-link to="/profile">个人信息</router-link></el-dropdown-item>
                  <el-dropdown-item @click="logout">退出</el-dropdown-item>
                </el-dropdown-menu>
              </template>
            </el-dropdown>
          </el-col>
        </el-row>
      </el-header>
      <el-main>
        <router-view></router-view>
      </el-main>
    </el-container>
  </el-container>
</template>

<script>
import SiderBarA from '@/layout/siderbar'
import { globalStore } from '@/store/modules/global'
import router from '@/router'
// import { useToggle } from '@vueuse/shared'
// import { isDark } from '../../.vitepress/theme/composables/dark'
import { useDark, useToggle } from '@vueuse/core'

export default {
  name: 'layOut',
  data () {
    return {
    }
  },
  components: {
    SiderBarA
  },
  computed: {
    isCollapse () {
      return globalStore().isCollapse
    }
  },
  methods: {
    cgsider () {
      globalStore().changesider()
    },
    cglogo () {
      globalStore().changLogo()
    },
    logout () {
      localStorage.removeItem('token')
      router.push('/')
    }
  },
  setup () {
    const isDark = useDark()
    const toggleDark = useToggle(isDark)
    const userStore = globalStore().getUserInfo()
    console.log(userStore, 666666)
    return { isDark, toggleDark, userStore }
  }
}
</script>
<style lang="scss" scoped>
  .app-wrapper {
    position: relative;
    height: 100%;
    width: 100%;
    &.mobile.openSidebar {
      position: fixed;
      top: 0;
    }
  }
.el-scrollbar {
  .el-scrollbar__view {
    height: 100%;
  }
}
.layout-container-demo .el-header {
  position: relative;
  background-color: var(--el-color-primary-light-7);
  color: var(--el-text-color-primary);
}
.layout-container-demo .el-aside {
  color: var(--el-text-color-primary);
  background: var(--el-color-primary-light-8);
}
.layout-container-demo .el-menu {
  border-right: none;
}
.layout-container-demo .el-main {
  padding: 0;
}
.layout-container-demo .toolbar {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  height: 100%;
  right: 20px;
}
.navbar {
  height: 50px;
  //overflow: hidden;
  //position: relative;
  background: #fff;
  line-height: 50px;
  box-shadow: 0 1px 4px rgba(0,21,41,.08);
}
</style>
