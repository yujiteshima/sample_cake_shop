import { strictEqual } from "assert";

export default {
  state: {
    products: [],
    current: "",
    paginationDisplay: false,
    pageObject: [],
    mode: "",
    displayItem: "",
    lastPage: "",
    select: "",
    keyword: ""
    // pageObject: {
    //   First: 1,
    //   ThreeDots: "...",
    //   Preb: 3,
    //   Current: 4,
    //   Next: 5,
    //   ThreeDots2: "...",
    //   Last: 30
    // }
  },
  mutations: {
    setProducts(state, payload) {
      state.products = payload.products
      state.current = payload.current
      state.paginationDisplay = true
      state.pageObject = payload.pageAry
      state.mode = payload.mode
      state.displayItem = payload.displayItem
      state.lastPage = payload.lastPage
      state.select = payload.select
      state.keyword = payload.keyword
      // console.log(this.state.products)
      // console.log(typeof this.state.products)
      // console.log("ミューテーション完了しました。")
    },
    countUp(state, payload) {
      state.products.filter(product => product.id == payload)[0].count++
    },
    countDown(state, payload) {
      state.products.filter(product => product.id == payload)[0].count--
    }
  },
  actions: {
    getRecomends({ commit }) {
      // console.log("Vueインスタンス作成します！");
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
      // console.log("商品データ取得終了しました。");
    },
    all({ commit }) {
      //AllSearch
      let searchInfo = {
        mode: "all",
        displayItem: 9,
        current: 1,
      }
      let json = fetch("/api/search", {
        mode: 'cors',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        },
        credentials: 'include',
        method: 'POST',
        body: JSON.stringify(searchInfo)
      })
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
    },
    chocolate({ commit }) {
      //console.log("dispatchOK!")
      let searchInfo = {
        mode: "chocolate",
        displayItem: 9,
        current: 1,
      }
      let json = fetch("/api/search", {
        mode: 'cors',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        },
        credentials: 'include',
        method: 'POST',
        body: JSON.stringify(searchInfo)
      })
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
    },
    fruits({ commit }) {
      let searchInfo = {
        mode: "fruits",
        displayItem: 9,
        current: 1,
      }
      let json = fetch("/api/search", {
        mode: 'cors',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        },
        credentials: 'include',
        method: 'POST',
        body: JSON.stringify(searchInfo)
      })
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
    },
    newItem({ commit }) {
      let searchInfo = {
        mode: "newItem",
        displayItem: 9,
        current: 1,
      }
      let json = fetch("/api/search", {
        mode: 'cors',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        },
        credentials: 'include',
        method: 'POST',
        body: JSON.stringify(searchInfo)
      })
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
    },
    cheese({ commit }) {
      console.log("hi this is cheese in productStore")
      let searchInfo = {
        mode: "cheese",
        displayItem: 9,
        current: 1,
      }
      let json = fetch("/api/search", {
        mode: 'cors',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        },
        credentials: 'include',
        method: 'POST',
        body: JSON.stringify(searchInfo)
      })
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
    },
    search({ commit }, searchIf) {
      let searchInfo = {
        mode: "select",
        displayItem: 9,
        current: 1,
        select: searchIf.select,
        keyword: searchIf.keyword
      }
      let json = fetch("/api/search", {
        mode: "cors",
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        },
        credentials: 'include',
        method: 'POST',
        body: JSON.stringify(searchInfo)
      })
      Promise.resolve(json)
        .then(result => {
          return result.json();
        })
        .then(response => {
          commit('setProducts', response)
        })
        .catch(error => console.log(error));
    },
    paging({ state, commit }, page) {
      let searchInfo = {
        mode: state.mode,
        displayItem: state.displayItem,
        current: page,
        select: state.select,
        keyword: state.keyword
      }
      let json = fetch("/api/search", {
        mode: 'cors',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        },
        credentials: 'include',
        method: 'POST',
        body: JSON.stringify(searchInfo)
      })
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

    },
    countUp({ commit }, id) {
      commit('countUp', id)
    },
    countDown({ commit }, id) {
      commit('countDown', id)
    }

  }
}