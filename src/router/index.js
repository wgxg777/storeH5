import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from '../views/Home.vue';
import productDetail from '../views/productDetail/productDetail.vue';
import myAddress from '../views/mine/myAddress.vue';

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
  {
    path: '/myAddress',
    name: 'myAddress',
    component: myAddress,
  },
];

const router = new VueRouter({
  routes,
});

export default router;
