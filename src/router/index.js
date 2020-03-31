import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from '../views/Home.vue';
import productDetail from '../views/productDetail/productDetail.vue';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
  },
  {
    path: '/productDetail',
    name: 'productDetail',
    component: productDetail,
  },
];

const router = new VueRouter({
  routes,
});

export default router;
