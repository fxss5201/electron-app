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
  },
  {
    path: '/notifications',
    name: 'Notifications',
    component: () => import('../views/example/Notifications.vue'),
    meta: {
      title: '通知' 
    }
  },
  {
    path: '/flashFrame',
    name: 'FlashFrame',
    component: () => import('../views/example/FlashFrame.vue'),
    meta: {
      title: '任务栏图标闪烁' 
    }
  },
  {
    path: '/flashTray',
    name: 'FlashTray',
    component: () => import('../views/example/FlashTray.vue'),
    meta: {
      title: 'Tray图标闪烁' 
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
