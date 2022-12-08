import { createRouter, createWebHistory } from 'vue-router'
import LoginPage from '../views/LoginPage.vue'
import MainApp from '../views/MainApp.vue'
import DashboardPage from '../views/sidebar/DashboardPage.vue'
import KaryawanPage from '../views/sidebar/KaryawanPage.vue'
import ObatPage from '../views/sidebar/ObatPage.vue'
import TransaksiPage from '../views/sidebar/TransaksiPage.vue'
import AboutPage from '../views/sidebar/AboutPage.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'loginpage',
      component: LoginPage,
    },
    {
      path: '/dashboardpage',
      name: 'mainapp',
      component: MainApp,
      children: [
        {
          path: '/dashboardpage',
          path: '/mainapp',
          name: 'dashboardpage',
          component: DashboardPage,
        },
        {
          path: '/karyawanpage',
          name: 'karyawanpage',
          component: KaryawanPage,
        },
        {
          path: '/obatpage',
          name: 'obatpage',
          component: ObatPage,
        },
        {
          path: '/transaksipage',
          name: 'transaksipage',
          component: TransaksiPage,
        },
        {
          path: '/aboutpage',
          name: 'aboutpage',
          component: AboutPage,
        },
      ]
    },
  ]
})

export default router
