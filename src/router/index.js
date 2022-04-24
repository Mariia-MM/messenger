import { createRouter, createWebHashHistory } from 'vue-router'
import LoginPage from '../views/LoginPage.vue'
import SignupPage from '../views/SignupPage.vue'
import HomePage from '../views/HomePage.vue'


const routes = [
  {
    path: '/',
    name: 'login',
    component: LoginPage
  },
  {
    path: '/register/',
    name: 'signup',
    component: SignupPage
  },
  {
    path: '/home/',
    name: 'home',
    component: HomePage
  },
  {
    path: '/about',
    name: 'about',
   
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
