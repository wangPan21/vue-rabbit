//createRouter:创建router实例对象
//createWebHistory:创建history路由模式
import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  // path和compoent对应关系的位置
  routes: [
    {
      path: '/',
      component: () => import('@/views/Layout/index.vue'),
      children: [
        {
          path: '',
          component: () => import('@/views/Home/index.vue'),
        },
        {
          path: 'category/:id',
          component: () => import('@/views/Category/index.vue'),
        },
        {
          path: 'category/sub/:id',
          component: () => import('@/views/SubCategory/index.vue')
        },
        {
          path: 'detail/:id',
          component: () => import('@/views/Detail/index.vue')
        }
      ]
    },
    {
      path: '/login',
      component: () => import('@/views/Login/index.vue')
    },
  ],

  //路由跳转始终保持top为0
  scrollBehavior() {
    //只有在根页面下top为0，其他页面保持原来的位置
    // if (to.path === '/') {
      return { top: 0 }
    // }
    // return savedPosition;
  },
})

export default router
