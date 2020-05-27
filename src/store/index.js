import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    Accounts: [{name: "adam", email: "adam@mail.com", id: 1}]
  },
  mutations: {
    addAccount(state, payload) {
      let newAccount = {name: payload.name, email: payload.email, id: payload.id}
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
