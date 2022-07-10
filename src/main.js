import { createApp } from 'vue';
import App from './App.vue';
import ElementPlus from 'element-plus';
import 'element-plus/dist/index.css';
import router from '@/router/index';
import './permission';
import * as ElementPlusIconsVue from '@element-plus/icons-vue';
import store from "@/store";
import 'element-plus/theme-chalk/dark/css-vars.css'

const app = createApp(App);
app.use(ElementPlus, { size: 'small', zIndex: 3000 });
app.use(router);
app.use(store);
for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
  app.component(key, component)
}
app.mount('#app');
