export default {
  namespaced: true,
  state: {
    signModal: true,
    loginModal: true,
    addCartModal: true,
    passMatch: ""
  },
  mutations: {
    addCartModal(state, payload) {
      state.addCartModal = false
    },
    loginOpen(state, payload) {
      if (state.signModal == false) {
        state.signModal = true
      }
      state.loginModal = false
      // console.log("modalOpen!@mutation")
    },
    signOpen(state, payload) {
      if (state.loginModal == false) {
        state.loginModal = true
      }
      state.signModal = false
    },
    modalClose(state, payload) {
      state.loginModal = true
      state.signModal = true
      state.addCartModal = true
    },
    setPassMatch(state, payload) {
      state.passMatch = true
    }

  },
  actions: {
    modalOpen({ commit }) {
      commit('modalOpen')
    },
    addCartModal({ commit }) {
      commit('addCartModal')
    },
    loginModal({ commit }) {
      commit('loginOpen')
    },
    signUpModal({ commit }) {
      commit('signOpen')
    },
    modalClose({ commit }) {
      commit('modalClose')
    }
  }

}