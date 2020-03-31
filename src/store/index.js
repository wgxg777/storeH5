import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
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
  },
  mutations: {
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
  modules: {
  },
});
