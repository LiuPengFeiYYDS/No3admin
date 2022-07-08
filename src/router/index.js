import { createRouter, createWebHashHistory } from 'vue-router'
import user from './modules/user'
import leave from './modules/leave'
import layout from '../layout'

export const routes = [
  {
    path: '/:catchAll(.*)', // 不识别的path自动匹配404
    redirect: '/exception'
  },
  {
    path: '/exception',
    component: () => import('../views/404')
  },
  {
    path: '/login',
    name: 'login',
    component: () => import(/* webpackChunkName: "about" */ '../views/login')
  },
  {
    path: '/',
    component: layout,
    redirect: '/welcome',
    children: [
      {
        path: '/welcome',
        name: 'welcome',
        component: () => import('../views/welcome')
      }
    ]
  },
  user,
  leave
]

const router = createRouter({
  history: createWebHashHistory(),
  // routes: [...routes, ...privateRoutes]
  routes
})

export default router
