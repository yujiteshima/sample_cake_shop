export default {
  state: {
    userIndex: [],
    user: []
  },
  mutations: {
    auth(state, payload) {
      console.log("Hi@auth.mutaitons")
      // console.log(payload.pass)
      // console.log(payload.email)
    },
    setUserIndex(state, payload) {
      state.userIndex = payload
      console.log("ミューテーション完了しました。@userIndex")

    },
  },
  actions: {
    auth({ commit }, userInfo) {
      console.log(userInfo.email)
      console.log(userInfo.pass)

      commit('auth', "auth")
    },
    userIndex({ commit }) {
      console.log("UserIndexインスタンス作成します！");
      let json = fetch("/api/users");
      // console.log(json);
      Promise.resolve(json)
        .then(result => {
          return result.json();
        })
        .then(response => {
          commit('setUserIndex', response)
          // console.log(response);
          // this.$store.state.products = response;
        })
        .catch(error => console.log(error));
      console.log("商品データ取得終了しました。");
    }
  }
}