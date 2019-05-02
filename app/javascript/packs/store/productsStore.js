export default {
  state: {
    products: [],
  },
  mutations: {
    setProducts(state, payload) {
      state.products = payload
      console.log(this.state.products)
      console.log(typeof this.state.products)
      console.log("ミューテーション完了しました。")
    }

  },
  actions: {
    getRecomends({ commit }) {
      console.log("Vueインスタンス作成します！");
      let json = fetch("/api/products");
      // console.log(json);
      Promise.resolve(json)
        .then(result => {
          return result.json();
        })
        .then(response => {
          commit('setProducts', response)
          // console.log(response);
          // this.$store.state.products = response;
        })
        .catch(error => console.log(error));
      console.log("商品データ取得終了しました。");
    }
  }
}