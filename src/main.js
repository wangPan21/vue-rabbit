// 引入初始化样式文件
import '@/styles/common.scss'

import { createApp } from 'vue'
import { createPinia } from 'pinia'
import piniaPluginPersistedstate from 'pinia-plugin-persistedstate'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import { lazyPlugin } from "@/directives/index";

import App from './App.vue'
import router from './router'

import { componentPligin } from "@/components";
const app = createApp(App)
const pinia = createPinia()
//注册持久化插件
pinia.use(piniaPluginPersistedstate)
app.use(pinia)
app.use(ElementPlus)

app.use(router)

app.use(lazyPlugin)

app.mount('#app')

app.use(componentPligin)
