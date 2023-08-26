import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import ScheduleScreen from '../views/ScheduleScreen.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/schedule',
      name: 'schedule',
      component: () => import('../views/ScheduleScreen.vue')
    }
  ]
})

export default router
