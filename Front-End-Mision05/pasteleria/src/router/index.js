import { createRouter, createWebHashHistory } from 'vue-router'
import Admin from '../views/Admin.vue'
import Pasteleria from '../views/Pasteleria.vue'
const routes = [
  {
    path: '/admin',
    name: 'admin',
    component: Admin
  },
  {
    path: '/pasteleria',
    name: 'pasteleria',
    component: Pasteleria
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
