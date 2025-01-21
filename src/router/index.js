import { createRouter, createWebHistory } from 'vue-router'
import HomePage from '../views/pages/HomePage.vue'
import AboutView from '../views/pages/AboutView.vue'
import GetInTouch from '../views/pages/GetInTouch.vue'
import AwardsView from '../views/pages/AwardsView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomePage,
    },
    {
      path: '/contact',
      name: 'get-in-touch',
      component: GetInTouch,
    },
    {
      path: '/about',
      name: 'about',
      component: AboutView,
    },
    {
      path: '/awards',
      name: 'awards',
      component: AwardsView,
    },
  ],
})

export default router
