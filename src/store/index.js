import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    index: 0,
    shoppingCartList: [
      {
        id: '1',
        cover: '//img.alicdn.com/img/i3/161960079/O1CN01Sirv521CSDs6NZrHM_!!0-saturn_solar.jpg_210x210.jpg',
        price: 200,
        name: '三只松鼠手撕面包15sadasd',
        num: 1,
      },
      {
        id: '2',
        cover: '//img.alicdn.com/img/i3/161960079/O1CN01Sirv521CSDs6NZrHM_!!0-saturn_solar.jpg_210x210.jpg',
        price: 800,
        name: 'gogog',
        num: 1,
      },
    ],
    addressList: [{
      id: '1',
      name: '张三',
      tel: '13000000000',
      address: '浙江省杭州市西湖区文三路 138 号东方通信大厦 7 楼 501 室',
      isDefault: true,
      areaCode: '330106',
      addressDetail: '138 号东方通信大厦 7 楼 501 室',
    },
    {
      id: '2',
      name: '李四',
      tel: '1310000000',
      address: '浙江省杭州市拱墅区莫干山路 50 号',
      areaCode: '330105',
      addressDetail: '莫干山路 50 号',
    }],
  },
  mutations: {
    setIndex: (state, index) => {
      state.index = index;
    },
    addAddress(state, param) {
      const obj = param;
      obj.id = state.addressList.length + 1;
      state.addressList.push(obj);
    },
    deleteAddress(state, param) {
      const item = state.addressList.find((i) => i.id === param.id);
      const index = state.addressList.indexOf(item);
      state.addressList.splice(index, 1);
    },
    editAddress(state, param) {
      const item = state.addressList.find((i) => i.id === param.id);
      Object.assign(item, param);
    },
    add(state, param) {
      const item = state.shoppingCartList.find((i) => i.id === param.id);
      if (!item) {
        state.shoppingCartList.push({
          ...param,
          num: 1,
        });
      } else {
        // eslint-disable-next-line no-plusplus
        item.num++;
      }
    },
    carChange(state, param) {
      const item = state.shoppingCartList.find((i) => i.id === param.id);
      if (param.num === 0) {
        const index = state.shoppingCartList.indexOf(item);
        console.log(index);
        state.shoppingCartList.splice(index, 1);
      }
      if (!item) {
        state.shoppingCartList.push({
          ...param,
          num: 1,
        });
      } else {
        // eslint-disable-next-line no-plusplus
        item.num = param.num;
      }
    },
  },

  actions: {

  },
  getters: {
    getCartListLength: (state) => state.shoppingCartList.length,

  },

  modules: {
  },
});
