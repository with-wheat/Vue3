import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'

import LocalCache from '@/utils/cache'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    redirect: '/login'
  },
  {
    path: '/login',
    name: 'Login',
    component: () => import('@/views/login/login.vue')
  },
  {
    path: '/main',
    name: 'Main',
    component: () => import('@/views/main/main.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

router.beforeEach((to, from, next) => {
  if (to.path !== '/login') {
    // 获取登录的token
    const token = LocalCache.getCache('TOKEN_KEY')
    if (!token) {
      router.push('/login')
    } else {
      next()
    }
  } else next()
})

export default router
