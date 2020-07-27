import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter);

  const routes = [
  {
    path: '/',
    name: 'Description',
    component: () => import('../views/OpeningPage.vue')
  },
  {
    path: '/home',
    name: 'Home',
    component: () => import('../views/Home.vue')
  },
  {
    path: '/game',
    name: 'Game',
    component: () => import('../views/Game.vue')
  },
  {
    path: '/confirm/:token',
    name: 'Confirm Account',
    component: () => import('../views/ConfirmAccount.vue')
  }
];

const router = new VueRouter({
  routes
});

export default router
