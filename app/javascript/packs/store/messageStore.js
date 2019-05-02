export default {
  state: {
    modal: true,

  },
  mutations: {
    modalOpen(state, payload) {
      state.modal = false
      console.log("modalOpen!@mutation")
    },
    modalClose(state, payload) {
      state.modal = true
    }
  },
  actions: {
    modalOpen({ commit }) {
      commit('modalOpen')
    },
    modalClose({ commit }) {
      commit('modalClose')
    }
  }

}