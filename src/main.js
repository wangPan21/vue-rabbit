// 引入初始化样式文件
import '@/styles/common.scss'

import { createApp } from 'vue'
import { createPinia } from 'pinia'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import { lazyPlugin } from "@/directives/index";

import App from './App.vue'
import router from './router'

const app = createApp(App)

app.use(createPinia())
app.use(ElementPlus)

app.use(router)

app.use(lazyPlugin)

app.mount('#app')

