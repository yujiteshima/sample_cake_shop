export default {
  namespaced: true,
  state: {
    text: '',
    mode: 'processing',
    visible: true,
  },
  mutations: {
    setMessage: (state, payload) => {
      state.text = payload.text;
      state.mode = payload.mode;
      state.visible = false;
      let unvisible = function () {
        state.visible = true
      }
      setTimeout(unvisible, 5000);
    }
  },
  actions: {
    showFlashMessage: ({ commit }, flashInfo) => {
      commit('setMessage', flashInfo)
    }
  }
}