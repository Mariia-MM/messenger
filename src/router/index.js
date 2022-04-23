import { createRouter, createWebHashHistory } from 'vue-router'
import LoginPage from '../views/LoginPage.vue'
import SignupPage from '../views/SignupPage.vue'


const routes = [
  {
    path: '/',
    name: 'login',
    component: LoginPage
  },
  {
    path: '/register',
    name: 'signup',
    component: SignupPage
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
