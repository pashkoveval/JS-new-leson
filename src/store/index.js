import axios from "axios";
import Vue from "vue";
import Vuex from "vuex";


Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    goods: [],
    cart: [],
  },
  mutations: {
    SET_PRODUCTS_TO_GOODS: (state, products) => {
      state.goods = products;
    },
    SET_TOCART_PRODUCT: (state, products) => {
      if (state.cart.length) {
        let isProductExist = false;
        state.cart.map((item) => {
          if (item.id === products.id) {
            isProductExist = true;
            item.quantity++
          }
        })
        if (!isProductExist) {
          state.cart.push(products);
        }
      } else {
        state.cart.push(products);
      }
    },
    DELET_ITEM_FROM_CART(state, index) {
      state.cart.splice(index, 1)
    },

  },
  actions: {
    GET_GOODS_FROM_API({
      commit
    }) {
      return axios("https://602c2a0730ba720017222bc0.mockapi.io/goods", {
          method: "GET"
        })
        .then((products) => {
          commit("SET_PRODUCTS_TO_GOODS", products.data)
          return products
        })
        .catch((e) => {
          console.log(e);
          return e;
        });
    },
    ADD_TO_CART({
      commit
    }, products) {
      commit('SET_TOCART_PRODUCT', products);
    },
    DELET_FROM_CART({
      commit
    }, index) {
      commit('DELET_ITEM_FROM_CART', index);
    },

  },
  modules: {},
  getters: {
    PRODUCTS: state => {
      return state.goods;
    },
    CART: state => {
      return state.cart;
    },

  }
});