import { createRouter, createWebHistory } from '@ionic/vue-router';
import { RouteRecordRaw } from 'vue-router';
import BaseLayout from '@/layouts/BaseLayout.vue';


const Login = () => import('@/views/login.vue');

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    redirect: '/seccion'
  },
  {
    path: '/login',
    component: Login
  },
  {
    path: '/seccion',
    component: BaseLayout,
    meta: {
      requiresAuth: true
    },
  },
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes
})

router.beforeEach((to, from, next) => {
    
  }
export default router
