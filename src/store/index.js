import Vue from "vue";
import Vuex from "vuex";
import Product from "../api/Product";
import Account from "../api/Account";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    accounts: [],
    currentUserId: -1,
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
      state.cartItems.forEach((e) => {
        e.quantity = 1;
      });
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
      Account.create(account).then((response) => {
        commit("ADD_ACCOUNT", response.data);
        commit("SET_CURRENT_USER", response.data);
      });
    },
    addOrder(context, order) {
      let totalPrice = {
        totalPrice: order.totalPrice,
      };
      //creating an order
      fetch("http://localhost:8080/realOrders", {
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        method: "POST",
        body: JSON.stringify(totalPrice),
      })
        .then((resp) => resp.json())
        .then((realOrder) => {
          //creating a orderline for each product in the products array
          order.products.forEach((element) => {
            let quantity = {
              quantity: element.quantity,
            };
            fetch("http://localhost:8080/orderLines", {
              headers: {
                Accept: "application/json",
                "Content-Type": "application/json",
              },
              method: "POST",
              body: JSON.stringify(quantity),
            })
              .then((resp) => resp.json())
              .then((orderLine) => {
                //associating each product with each orderline
                fetch(
                  `http://localhost:8080/orderLines/${orderLine.id}/product`,
                  {
                    headers: {
                      Accept: "application/json",
                      "Content-Type": "text/uri-list",
                    },
                    method: "PUT",
                    body: element._links.product.href,
                  }
                ).then(() => {
                  //associating each orderline to the order
                  fetch(
                    "http://localhost:8080/realOrders/" +
                      realOrder.id +
                      "/orderLines",
                    {
                      headers: {
                        Accept: "application/json",
                        "Content-Type": "text/uri-list",
                      },
                      method: "POST",
                      body: orderLine._links.self.href,
                    }
                  ).then(() => context.commit("clearCart"));
                });
              });
          });
        });
    },
    getProducts({ commit }) {
      Product.all().then((response) => {
        let products = response.data._embedded.products;
        products.forEach((p) => {
          p.quantity = 1;
        });
        commit("SET_PRODUCTS", products);
      });
    },
    getAccounts({ commit }) {
      Account.all().then((response) => {
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
