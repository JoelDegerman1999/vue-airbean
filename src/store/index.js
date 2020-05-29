import Vue from "vue";
import Vuex from "vuex";
import json from "../assets/data/menu.json";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    Accounts: [{name: "Adam Adamson", email: "adam.adamson@mail.com", id: 1, orderHistory: [
      {orderId: "#AAAAAAABBBBBCCCC", totalSum: 231, date: "20/05/28"},
      {orderId: "#AAAAAAABBBBBCCCC", totalSum: 2331, date: "20/05/21"},
      {orderId: "#AAAAAAABBBBBCCCC", totalSum: 1231, date: "20/05/23"}]}],
    currentUser: -1, //-1 -> logged in as guest
    menu: json.menu,
    cartItems: [],
    orders: [],
  },
  mutations: {
    addAccount(state, payload) {
      let newAccount = payload
      state.Accounts.push(newAccount)
      localStorage.setItem("Accounts", JSON.stringify(state.Accounts))
    },
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
  actions: {
    addAccount(state, payload){
      state.commit("addAccount", payload)
    }
  },
  modules: {
  },
  getters: {
  }
});
