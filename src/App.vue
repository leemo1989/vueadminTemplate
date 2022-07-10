<template>
  <router-view></router-view>
</template>
<script>
export default {
  name: 'App'
}
</script>

<style lang="scss">
@import '@/style/index.scss';
:root{
  --theme_sider_color:#272c33;
  --theme_sider_text_color:#fff
}
#app {
  background: #eee;
  height: 100vh;
  overflow: hidden;
  font-weight: 400 !important;
}
.el-button{
  font-weight: 400 !important;
}
</style>
