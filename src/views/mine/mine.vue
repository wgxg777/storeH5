<template>
  <div class="mine">
    <div class="mineInfo flex">
      <van-image
        class="ml20"
        width=" 1.6rem"
        height="1.6rem"
        fit="cover"
        round
        src="http://public.nodebook.top/fd123a3921e910809fba9da0101bf8f6.jpg"
      />
      <div class="flex flex-v flex-pack-around ml15">
        <div style="color: #fff;">张德零</div>
        <div class style="color: #fff;">手机号：18875254477</div>
      </div>
    </div>
    <div class="head2 flex flex-align-center bgw">
      <div class="flex-1">
        <div>0</div>
        <div style="color: #4a4a4a;">优惠卷</div>
      </div>
      <div class="flex-1">
        <div>0</div>
        <div style="color: #4a4a4a;">积分</div>
      </div>
      <div class="flex-1">
        <div>0</div>
        <div style="color: #4a4a4a;">余额（元）</div>
      </div>
    </div>
    <div class="mt10 myOrder bgw">
      <van-cell value="查看全部订单" icon="orders-o" is-link>
        <!-- 使用 title 插槽来自定义标题 -->
        <template #title>
          <span class="custom-title">我的订单</span>
        </template>
      </van-cell>
      <div class="myOrderIcon">
        <van-grid :border="false" :column-num="5">
          <van-grid-item icon="paid" text="待支付" />
          <van-grid-item icon="balance-pay" text="待发货" />
          <van-grid-item icon="logistics" text="待收货" />
          <van-grid-item icon="chat-o" text="待评价" />
          <van-grid-item icon="refund-o" text="退款" />
        </van-grid>
      </div>
    </div>
    <div class=" mt10 bgw">
     <van-cell title="邀请好友" is-link />
     <van-cell title="收货地址" is-link @click="$router.push({path:'/myAddress'})" />
    </div>
    <div class=" mt10 bgw">
     <van-cell title="关于" is-link />
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
};
</script>

<style lang="scss" scoped>
.mine {
  background-color: rgba(200, 200, 200, 0.5);
}
.mineInfo {
  height: 103px;
  padding: 22px 0;
  box-sizing: border-box;
  background: #3bba63;
  font-size: 13px;
}
.head2 {
  height: 75px;
}
.head2 > div {
  text-align: center;
}
.myOrder {
  height: 130px;
}
.myOrderIcon {
  height: 90px;
  margin:  0 10px;
  color: #3bba63;
}
</style>
