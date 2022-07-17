<template>
  <router-view></router-view>
</template>
<script>
import "pinia";
export default {
  name: 'App',
  created () {
    console.log(pinia.state,66666666666)
    // 在页面加载时读取sessionStorage里的状态信息
    if (sessionStorage.getItem('store')) {
      this.$store.replaceState(Object.assign({}, this.$store.state, JSON.parse(sessionStorage.getItem('store'))));
    }
    // 在页面刷新时将vuex里的信息保存到sessionStorage里
    window.addEventListener('beforeunload', () => {
      sessionStorage.setItem('store', JSON.stringify(this.$store.state));
    });
  },
  // save the whole state
  // watch(pinia.state, (state) => {
  //   localStorage.setItem('state', JSON.stringify(state)
  // }, { deep: true })
  //
  // // save cart store
  // watch(() => pinia.state.value.cart, (state) => {
  //   localStorage.setItem('cart', JSON.stringify(state)
  // }, { deep: true })
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
