import { createRouter, createWebHistory } from 'vue-router';
const routes = [
  {
    path: '/',
    name: 'home',
    component: () => import('../views/home/index.vue'),
  },
  {
    path: '/login',
    name: 'login',
    component: () => import('../views/auth/login.vue'),
  },
  {
    path: '/register',
    name: 'register',
    component: () => import('../views/auth/register.vue'),
  },
  {
    path: '/dashboard',
    name: 'dashboard',
    component: () => import('../views/dashboard/index.vue'),
  },
];
const router = createRouter({
  history: createWebHistory(),
  routes,
});
export default router;
