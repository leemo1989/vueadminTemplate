<template>
  <router-view></router-view>
</template>
<script>
import { globalStore } from '@/store/modules/global'

export default {
  name: 'App',
  setup () {
    // if (sessionStorage.getItem('store')) {
    //   this.$store.replaceState(Object.assign({}, this.$store.state, JSON.parse(sessionStorage.getItem('store'))));
    // }
    globalStore().$subscribe((mutation, state) => {
      console.log(mutation, state, 5555555)
      sessionStorage.setItem('store', JSON.stringify(state))
    })
  }
}
</script>

<style lang="scss">
@import '@/style/index.scss';
#app {
  font-family: Helvetica Neue,Helvetica,PingFang SC,Hiragino Sans GB,Microsoft YaHei,\5fae\8f6f\96c5\9ed1,Arial,sans-serif;
  background: #eee;
  height: 100vh;
  overflow: hidden;
  font-weight: 400 !important;
}
</style>
