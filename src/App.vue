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
  font-family: Helvetica Neue,Helvetica,PingFang SC,Hiragino Sans GB,Microsoft YaHei,\5fae\8f6f\96c5\9ed1,Arial,sans-serif;
  background: #eee;
  height: 100vh;
  overflow: hidden;
  font-weight: 400 !important;
}
.el-button{
  font-weight: 400 !important;
}
</style>
