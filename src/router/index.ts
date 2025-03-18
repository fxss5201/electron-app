import { createWebHashHistory, createRouter } from 'vue-router'

export const routes = [
  {
    path: '/',
    name: 'Empty',
    component: () => import('../views/Empty.vue')
  },
  {
    path: '/login',
    name: 'Login',
    component: () => import('../views/Login.vue')
  },
  {
    path: '/home',
    name: 'Home',
    component: () => import('../views/Home.vue'),
    meta: {
      title: '首页'
    }
  },
  {
    path: '/:pathMatch(.*)*',
    name: 'NotFound',
    component: () => import('../views/NotFound.vue')
  },
  {
    path: '/darkMode',
    name: 'DarkMode',
    component: () => import('../views/example/DarkMode.vue'),
    meta: {
      title: '暗黑模式'
    }
  },
  {
    path: '/progressBar',
    name: 'ProgressBar',
    component: () => import('../views/example/ProgressBar.vue'),
    meta: {
      title: '进度条'
    }
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes,
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition
    } else {
      return { top: 0 }
    }
  },
})

export default router;
