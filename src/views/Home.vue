<template>
  <div class="home">
   <first-page v-show="active === 0"></first-page>

    <van-tabbar v-model="active" active-color="#07c160" inactive-color="#000"  @change="onChange">
      <van-tabbar-item icon="home-o">首页</van-tabbar-item>
      <van-tabbar-item icon="search">分类</van-tabbar-item>
      <van-tabbar-item icon="shopping-cart-o">购物车</van-tabbar-item>
      <van-tabbar-item icon="user-o">我的</van-tabbar-item>
    </van-tabbar>
  </div>
</template>

<script>
// @ is an alias to /src
import firstPage from '@/views/firstPage/firstPage.vue';

export default {
  name: 'Home',
  data() {
    return {
      active: 0,
    };
  },
  components: {
    firstPage,
  },
  methods: {
    onChange() {
      console.log(this.active);
    },
  },
};
</script>

<style >

</style>
