import { createRouter, createWebHistory } from 'vue-router';
import Home from '@/pages/home/indexHome.vue';



const routes = [
  {
    path: '/',
    component: Home
  },
];


const router = createRouter({
  history: createWebHistory(),
  routes
});


export default router;
