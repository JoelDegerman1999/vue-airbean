import Vue from "vue";
import Vuex from "vuex";
import Product from "../api/Product";
import Account from "../api/Account";
import Order from "../api/Order";
import OrderLine from "../api/OrderLine";
import OrderHistory from "../api/OrderHistory";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    accounts: [],
    currentUserId: -1,
    orderHistory: [],
    menu: [],
    cartItems: [],
    orders: [],
  },
  mutations: {
    SET_PRODUCTS(state, products) {
      state.menu = products;
    },
    SET_ACCOUNTS(state, accounts) {
      state.accounts = accounts;
    },
    SET_CURRENT_USER(state, user) {
      state.currentUserId = user.id;
    },
    ADD_ACCOUNT(state, account) {
      state.accounts.push(account);
    },
    ADD_TO_CART(state, coffee) {
      if (!state.cartItems.find((i) => i == coffee)) {
        state.cartItems.push(coffee);
      }
    },
    REMOVE_FROM_CART(state, item) {
      state.cartItems = state.cartItems.filter((i) => i.id != item.id);
    },
    CLEAR_CART(state) {
      state.cartItems = [];
    },
    ADD_ORDER(state, order) {
      state.orders.push(order);
      console.log("Added an order");
      console.log(state.orders);
    },
  },
  actions: {
    addAccount({ commit }, account) {
      Account.createUser(account).then((response) => {
        commit("ADD_ACCOUNT", response.data);
        commit("SET_CURRENT_USER", response.data);
      });
    },
    async createOrder({ commit, state }, order) {
      let orderResponse = await Order.create({ totalPrice: order.totalPrice });
      for (const product of order.products) {
        let orderLineRespone = await OrderLine.create({
          quantity: product.quantity,
        });
        await OrderLine.addProduct(
          orderLineRespone.data.id,
          product._links.product.href
        );
        await Order.addOrderLine(
          orderResponse.data.id,
          orderLineRespone.data._links.self.href
        );
      }
      let orderHistoryResponse = await OrderHistory.create(
        orderResponse.data.orderNumber,
        order.totalPrice
      );
      await Account.addOrder(
        state.currentUserId,
        orderHistoryResponse.data._links.self.href
      );
      commit("CLEAR_CART");
    },

    getProducts({ commit }) {
      Product.getAll().then((response) => {
        let products = response.data._embedded.products;
        products.forEach((p) => {
          p.quantity = 1;
        });
        commit("SET_PRODUCTS", products);
      });
    },
    getAccounts({ commit }) {
      Account.getAll().then((response) => {
        let accounts = response.data._embedded.users;
        commit("SET_ACCOUNTS", accounts);
      });
    },
  },
  modules: {},
  getters: {
    getCurrentUser: (state) => (id) => {
      return state.accounts.find((u) => u.id == id);
    },
  },
});
