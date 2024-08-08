//createRouter:创建router实例对象
//createWebHistory:创建history路由模式
import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  // path和compoent对应关系的位置
  routes: [
    {
      path:'/',
      component:()=>import('@/views/Layout/index.vue'),
      children: [
        {
          path:'',
          component:()=>import('@/views/Home/index.vue'),
        },
        {
          path:'category/:id',
          component:()=>import('@/views/Category/index.vue')
        },
      ]
    },
    {
      path:'/login',
      component:()=>import('@/views/Login/index.vue')
    },
  ],

  //路由跳转始终保持top为0
  scrollBehavior() {
    // 始终滚动到顶部
    return { top: 0 }
  },
})

export default router
