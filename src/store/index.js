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
    eta: 0,
    orderNumber: "",
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
    ADD_ORDER_HISTORY(state, payload) {
      state.orderHistory.push(payload);
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
    UPDATE_ACCOUNT(state, payload) {
      let id = payload.data.id;
      let foundUserIndex = state.accounts.findIndex((u) => u.id == id);
      state.accounts.splice(foundUserIndex, 1, payload.data);
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
      if (state.currentUserId != -1) {
        let orderHistoryResponse = await OrderHistory.create(
          orderResponse.data.orderNumber,
          order.totalPrice
        );
        await Account.addOrder(
          state.currentUserId,
          orderHistoryResponse.data._links.self.href
        );

        let getUser = await Account.getUser(state.currentUserId);
        commit("UPDATE_ACCOUNT", getUser);
      }
      commit("CLEAR_CART");
      state.eta = orderResponse.data.eta;
      state.orderNumber = orderResponse.data.orderNumber;
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
