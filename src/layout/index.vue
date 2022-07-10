<template>
  <el-container class="app-wrapper">
    <siderBar/>
    <el-container>
      <el-header class="navbar">
        <el-row >
          <el-col :span="12">
            <el-switch v-model="isCollapse" @change="cgsider" class="drawer-switch" />
            <el-button @click="cglogo">logo</el-button>
          </el-col>
          <el-col :span="12" style="text-align: right">
            <span style="margin-right: 10px">wanglei</span>
            <el-dropdown>
              <span class="el-dropdown-link">
                <el-avatar style="margin-top:3px" shape="square" :size="40" fit="cover" src="https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg" />
                <el-icon class="el-icon--right">
                  <arrow-down />
                </el-icon>
              </span>
              <template #dropdown>
                <el-dropdown-menu>
                  <el-dropdown-item>个人信息</el-dropdown-item>
                  <el-dropdown-item>退出</el-dropdown-item>
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
import siderBar from "@/layout/siderbar";
import { globalStore } from '@/store/modules/global'
export default {
  name: "layOut",
  data(){
    return{
    }
  },
  components:{
    siderBar
  },
  computed: {
    isCollapse() {
      return globalStore().isCollapse
    }
  },
  methods:{
    cgsider(){
      globalStore().changesider()
    },
    cglogo(){
      globalStore().changLogo()
    }
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
