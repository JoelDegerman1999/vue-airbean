import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    Accounts: [{name: "Adam Adamson", email: "adam.adamson@mail.com", id: 1, orderHistory: [
      {orderId: "#AAAAAAABBBBBCCCC", totalSum: 231, date: "20/05/28"},
      {orderId: "#AAAAAAABBBBBCCCC", totalSum: 2331, date: "20/05/21"},
      {orderId: "#AAAAAAABBBBBCCCC", totalSum: 1231, date: "20/05/23"}]}],
    currentUser: -1 //-1 -> logged in as guest
  },
  mutations: {
    addAccount(state, payload) {
      let newAccount = payload
      state.Accounts.push(newAccount)
      localStorage.setItem("Accounts", JSON.stringify(state.Accounts))
    }
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
})
