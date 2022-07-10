import { defineStore } from 'pinia'

export const globalStore = defineStore('globalEnv', {
  state: () => {
    return {
      sidebarLogo: false,
      isCollapse: false
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
    }
  },
})
