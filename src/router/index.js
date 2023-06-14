import { createRouter, createWebHistory } from 'vue-router';

const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: '/', name: 'home', component: () => import('../components/HomeMain.vue') },
    { path: '/detalleItem/:id', name: 'detalleItem', component: () => import('../components/DetalleItems.vue') }
  ]
});

export default router