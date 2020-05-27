import Vue from "vue";
import Vuex from "vuex";
import json from "../assets/data/menu.json";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    menu: json.menu,
    cartItems: [],
  },
  mutations: {
    addItemtoCart(state, coffee) {
      if (!state.cartItems.find((i) => i == coffee)) {
        state.cartItems.push(coffee);
      }
    },
    remoteItemFromCart(state, payload) {
      state.cartItems = state.cartItems.filter((i) => i != payload);
    },
  },
  actions: {},
  modules: {},
});
