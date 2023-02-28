import { createRouter, createWebHistory } from 'vue-router';



const routes = [
  { path: '/',component:()=>import('../views/HomePage.vue') },
  { path: '/about', component: () => import('../views/AboutPage.vue') },
  { path: '/contact', component: () => import('../views/ContactForm.vue') },
 
];


const router = createRouter({
  history: createWebHistory(),
  routes
});


export default router;
