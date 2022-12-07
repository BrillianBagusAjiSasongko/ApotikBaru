import { createRouter, createWebHistory } from 'vue-router'
import MainApp from '../views/MainApp.vue'
import LoginPage from '../views/LoginPage.vue'
import DataObat from '../views/DataObat.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    
    {
      path: '/mainapp',
      name: 'mainapp',
      component: MainApp,
      children:[
        {
          path: '/loginpage',
          name: 'loginpage',
          component: LoginPage,
        },
        {
          path: '/dataobat',
          name: 'dataobat',
          component: DataObat,
        }
      ]
    },
  ]
})

export default router
