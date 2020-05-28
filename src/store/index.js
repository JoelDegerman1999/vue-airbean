import Vue from "vue";
import Vuex from "vuex";
import json from "../assets/data/menu.json";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    menu: json.menu,
    cartItems: [],
    orders: [],
  },
  mutations: {
    increaseItemQuantity(state, item) {
      let index = state.cartItems.findIndex((i) => i.id == item.id);
      item.quantity++;
      state.cartItems.splice(index, 1, item);
    },
    decreaseItemQuantity(state, item) {
      let index = state.cartItems.findIndex((i) => i.id == item.id);
      item.quantity--;
      state.cartItems.splice(index, 1, item);
    },
    addItemtoCart(state, coffee) {
      if (!state.cartItems.find((i) => i == coffee)) {
        state.cartItems.push(coffee);
      }
    },
    remoteItemFromCart(state, item) {
      state.cartItems = state.cartItems.filter((i) => i.id != item.id);
    },
    addOrder(state, order) {
      state.orders.push(order);
      console.log("Added an order");
      console.log(state.orders);
    },
  },
  actions: {},
  modules: {},
});
