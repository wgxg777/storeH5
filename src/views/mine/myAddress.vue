<template>
  <div>
    <div class="top"> <van-icon name="arrow-left" class="icon"  size="0.4rem" @click="back"  />
     <div class="title1">收货地址</div></div>
    <div class="copy"></div>
    <van-address-list
      class="add"
      v-model="chosenAddressId"
      :list="list"
      :switchable="false"
      default-tag-text="默认"
      @add="onAdd"
      @edit="onEdit"
    />
  </div>
</template>

<script>
import { Toast } from 'vant';

export default {
  data() {
    return {
      chosenAddressId: '1',
      //   list: [
      //     {
      //       id: '1',
      //       name: '张三',
      //       tel: '13000000000',
      //       address: '浙江省杭州市西湖区文三路 138 号东方通信大厦 7 楼 501 室',
      //       isDefault: true,
      //     },
      //     {
      //       id: '2',
      //       name: '李四',
      //       tel: '1310000000',
      //       address: '浙江省杭州市拱墅区莫干山路 50 号',
      //     },
      //   ],

    };
  },
  methods: {
    back() {
      this.$router.back(-1);
    },
    onAdd() {
      this.$router.push({ path: '/addAddress' });
    },
    onEdit(item) {
      this.$router.push({ name: 'addAddress', params: item });
    },
  },
  computed: {
    list() {
      return this.$store.state.addressList;
    },
  },
};
</script>

<style lang="scss" scoped>
.top {

  height: 40px;
  line-height: 40px;
  width: 375px;
  position: fixed;
  top: 0;
  z-index: 99999;
  background: white;
}

.copy {
  height: 40px;
  line-height: 40px;
  width: 375px;
}
.icon{
    float: left;
    line-height: 40px;
    padding-left: 10px;
}
.title1{
  margin-left: 160px;
  font-size: 15px;
}
</style>
