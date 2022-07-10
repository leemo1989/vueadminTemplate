import { createStore } from 'vuex'
// 创建一个新的 store 实例
const store = createStore({
  state () {
    return {
      count: 0,
      sidebarLogo: false,
      isCollapse: false
    }
  },
  mutations: {
    changLogo (state) {
      state.sidebarLogo =!state.sidebarLogo
    },
    changesider (state){
      state.isCollapse =!state.isCollapse
    }
  }
})
export default store
