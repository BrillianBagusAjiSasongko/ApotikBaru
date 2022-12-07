import { createRouter, createWebHistory } from 'vue-router'
import MainApp from '../views/MainApp.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'mainapp',
      component: MainApp,
      children:[
        {
          path: '/dataobat',
          name: 'dataobat',
          // route level code-splitting
          // this generates a separate chunk (About.[hash].js) for this route
          // which is lazy-loaded when the route is visited.
          component: () => import('../views/DataObat.vue')
        }
      ]
    },
  ]
})

export default router
