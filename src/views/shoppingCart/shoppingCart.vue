<template>
  <div class="cart">
    <div class="top">购物车</div>
    <van-checkbox-group v-model="result" ref="checkboxGroup">
      <div class="flex check flex-align-center" v-for="item in list" :key="item.id">
        <van-checkbox :name="item" class="check1"></van-checkbox>
        <van-image width="1.92rem" height="1.92rem" :src="item.cover" class="img" />
        <div class="named">
          <!-- <span>{{item.name}}</span>
          <span>{{item.price}}</span>-->
          <div>{{item.name}}</div>
          <div>￥{{item.price}}</div>
        </div>
        <van-stepper class="steper" v-model="item.num" @change="stepperChange(item)"  min="0"  />
      </div>
    </van-checkbox-group>
    <div class="bottom flex flex-align-center">
      <van-checkbox v-model="checked" @change="checkAll" class="checkAll">全选</van-checkbox>
      <div class="total">总价：{{total}} 元</div>
      <van-button round type="primary" size="small" class="mt5">结算</van-button>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      checked: '',
      result: [],
    };
  },
  methods: {
    stepperChange(res) {
      if (res.num === 0) {
        this.$dialog.confirm({
          title: '温馨提示',
          message: '减到0将删除购物车该商品？',
          confirmButtonColor: '#3FAE29',
        }).then(() => {
          this.$store.commit('carChange', res);
        }).catch(() => { // 点击 否，数量为1
          this.$dialog.close();
          this.$store.commit('carChange', res);
        });
      } else {
        this.$store.commit('carChange', res);
      }
    },
    checkAll() {
      if (this.checked) {
        this.$refs.checkboxGroup.toggleAll(true);
      } else {
        this.$refs.checkboxGroup.toggleAll();
      }
    },
  },
  computed: {
    list() {
      console.log(this.$store.state.shoppingCartList);
      return this.$store.state.shoppingCartList;
    },
    total() {
      let total = 0;
      const list = this.result;
      list.forEach((item) => {
        total += item.price * item.num;
      });
      return total;
    },
  },
};
</script>

<style lang="scss" scoped>
.cart {
}
.top {
  text-align: center;
  font-weight: 700;
  font-size: 16px;
  height: 50px;
  line-height: 50px;
  margin-bottom: 1px;
}
.check {
  height: 100px;
  line-height: 100px;
  border-bottom: 1px solid rgba(200, 200, 200, 0.5);
}
.check1 {
  height: 100px;
  line-height: 100px;
  padding-left: 8px;
}
.img {
  padding-left: 30px;
}
.named {
  height: 100px;
  margin-left: 15px;
}
.named > div {
  height: 50px;
  width: 120px;
  line-height: 13px;
  font-weight: 600;
  margin-top: 15px;
}
.bottom {
  width: 100%;
  height: 40px;
  background-color: rgba(200, 200, 200, 0.3);
  position: fixed;
  bottom: 50px;

}
.checkAll{
   width: 100%;
  height: 40px;
  margin-left: 15px;

}
.total{
width: 50%;

}
</style>
