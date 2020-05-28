import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    Accounts: [],
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
