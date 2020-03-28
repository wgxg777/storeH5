<template>
  <div class="first">
    <van-search
      placeholder="请输入搜索关键词"
      readonly
      @click="jumpSearch"
      class="searchInput"
      shape="round"
    />
    <van-swipe class="my-swipe" :autoplay="3000" indicator-color="#3FAE29">
      <van-swipe-item v-for="item in carouselSrc" v-bind:key="item.id">
        <img :src="item.src" class="img" />
      </van-swipe-item>
    </van-swipe>
  </div>
</template>


<script>
import { getIndexCarousel } from '@/http/indexApi';

export default {
  name: 'firstPage',
  data() {
    return {
      active: 0,
      carouselSrc: [],
    };
  },
  methods: {
    onChange() {
      console.log(this.active);
    },
    jumpSearch() {
      console.log('jumpsearh');
    },
    init() {
      getIndexCarousel().then((res) => {
        this.carouselSrc = res.data.list;
      });
    },
  },
  mounted() {
    this.init();
  },
};
</script>

<style lang="scss" scoped>
.my-swipe .van-swipe-item {
  height: 190px;
}
.searchInput {
  height: 45px;
}
.img {
  width: 100%;
  height: auto;
}
  ::v-deep .van-swipe__indicator {
  background: rgba(63, 174, 41, 1);
}
</style>
