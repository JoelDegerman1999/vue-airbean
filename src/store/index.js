import Vue from "vue";
import Vuex from "vuex";
// import * as API from "../api/index";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    Accounts: [],
    currentUser: -1, //-1 -> logged in as guest
    menu: [],
    cartItems: [],
    orders: [],
  },
  mutations: {
    addAccount(state, payload) {
      let newAccount = payload;
      state.Accounts.push(newAccount);
    },
    addItemtoCart(state, coffee) {
      if (!state.cartItems.find((i) => i == coffee)) {
        state.cartItems.push(coffee);
      }
    },
    remoteItemFromCart(state, item) {
      state.cartItems = state.cartItems.filter((i) => i.id != item.id);
    },
    clearCart(state) {
      state.cartItems.forEach((e) => {
        e.quantity = 1;
      });
      state.cartItems = [];
    },
    addOrder(state, order) {
      state.orders.push(order);
      console.log("Added an order");
      console.log(state.orders);
    },
  },
  actions: {
    addAccount(context, account) {
      fetch("http://localhost:8080/users", {
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        method: "POST",
        body: JSON.stringify(account),
      })
        .then((resp) => resp.json())
        .then((data) => {
          context.state.currentUser = data.id;
          context.commit("addAccount", data);
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
    fetchProducts(context) {
      fetch("http://localhost:8080/products")
        .then((resp) => resp.json())
        .then((data) => {
          data._embedded.products.forEach((element) => {
            element.quantity = 1;
          });
          context.state.menu = data._embedded.products;
        });
    },
    fetchAccounts(context) {
      return fetch("http://localhost:8080/users")
        .then((resp) => resp.json())
        .then((data) => {
          context.state.Accounts = data._embedded.users;
          console.log("accounts");
        });
    },
  },
  modules: {},
  getters: {},
});
