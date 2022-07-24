<template>
<div :style="{background: bgcolor}">
  <div v-if="globalStore().sidebarLogo" class="sidebar-logo-container" :class="{'collapse':globalStore().isCollapse}">
    <transition name="sidebarLogoFade">
      <router-link v-if="globalStore().isCollapse" key="collapse" class="sidebar-logo-link" to="/">
        <img v-if="logo" :src="logo" class="sidebar-logo">
        <h1 v-else class="sidebar-title">{{ title }} </h1>
      </router-link>
      <router-link v-else key="expand" class="sidebar-logo-link" to="/">
        <img v-if="logo" :src="logo" class="sidebar-logo">
        <h1 class="sidebar-title">{{ title }} </h1>
      </router-link>
    </transition>
  </div>
  <el-scrollbar>
    <el-menu
        style="border-right: 0"
        class="el-menu-vertical-demo"
      :default-active="activeMenu"
      :collapse="globalStore().isCollapse"
      :background-color=bgcolor
      text-color="#fff"
      :unique-opened="false"
      :active-text-color="variables.menuActiveText"
      :collapse-transition="false"
      mode="vertical"
    >
        <el-sub-menu index="1" v-for="route in globalStore().getRouters()" :key="route.path">
          <template #title>
            <el-icon><location /></el-icon>
            <span>{{route.meta.title}}</span>
          </template>
          <el-menu-item :index="index" v-for="(r,index) in route.children">
            <el-icon><setting /></el-icon>
            <router-link :to="route.path+'/'+r.path">{{r.meta.title}}</router-link>
          </el-menu-item>
      </el-sub-menu>
    </el-menu>
  </el-scrollbar>
</div>
</template>

<script setup>
import variables from '@/style/variables.scss'
import { globalStore } from '@/store/modules/global'

const title = 'Vue Element Admin'
const logo = 'https://wpimg.wallstcn.com/69a1c46c-eb1c-4b46-8bd4-e9e686ef5251.png'
const bgcolor = '#191a23'
</script>
<style lang="scss" scoped>
.sidebarLogoFade-enter-active {
  transition: opacity 1.5s;
}

.sidebarLogoFade-enter,
.sidebarLogoFade-leave-to {
  opacity: 0;
}

.sidebar-logo-container {
  position: relative;
  width: 100%;
  height: 50px;
  line-height: 50px;
  background: #2b2f3a;
  text-align: center;
  overflow: hidden;

  & .sidebar-logo-link {
    height: 100%;
    width: 100%;

    & .sidebar-logo {
      width: 32px;
      height: 32px;
      vertical-align: middle;
      margin-right: 12px;
    }

    & .sidebar-title {
      display: inline-block;
      margin: 0;
      color: #fff;
      font-weight: 600;
      line-height: 50px;
      font-size: 14px;
      font-family: Avenir, Helvetica Neue, Arial, Helvetica, sans-serif;
      vertical-align: middle;
    }
  }

  &.collapse {
    .sidebar-logo {
      margin-right: 0px;
    }
  }
}
.el-menu-vertical-demo:not(.el-menu--collapse) {
  width: 200px;
  min-height: 100%;
}
</style>
