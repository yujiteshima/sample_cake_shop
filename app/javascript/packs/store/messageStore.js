export default {
  namespaced: true,
  state: {

    modal: true,
    passMatch: ""
  },
  mutations: {
    modalOpen(state, payload) {
      state.modal = false
      console.log("modalOpen!@mutation")
    },
    modalClose(state, payload) {
      state.modal = true
    },
    setPassMatch(state, payload) {
      state.passMatch = true
    }

  },
  actions: {
    modalOpen({ commit }) {
      commit('modalOpen')
    },
    loginModal({ commit }) {
      commit('modalOpen')
    },
    modalClose({ commit }) {
      commit('modalClose')
    }
  }

}