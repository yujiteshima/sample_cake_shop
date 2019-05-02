export default {
  state: {
    cart_items: [
      // { "id": 28, "name": "hoge", "price": 100, "genre": "cake", "coment": "春の新作です。", "stocks": 100, "created_at": "2019-04-24T06:33:22.308Z", "updated_at": "2019-04-24T06:33:22.308Z", "count": 1, "cart": null },
      // { "id": 23, "name": "hoge", "price": 100, "genre": "cake", "coment": "春の新作です。", "stocks": 100, "created_at": "2019-04-24T06:33:22.296Z", "updated_at": "2019-04-24T06:33:22.296Z", "count": 1, "cart": null },
      // { "id": 24, "name": "hoge", "price": 100, "genre": "cake", "coment": "春の新作です。", "stocks": 100, "created_at": "2019-04-24T06:33:22.298Z", "updated_at": "2019-04-24T06:33:22.298Z", "count": 1, "cart": null },
      // { "id": 5, "name": "hoge", "price": 100, "genre": "cake", "coment": "春の新作です。", "stocks": 100, "created_at": "2019-04-24T06:33:22.249Z", "updated_at": "2019-04-24T06:33:22.249Z", "count": 1, "cart": null }
    ]
  },

  mutations: {

    setCart(state, payload) {
      let item = this.getters.products.find((cart => {
        return cart.id === payload;
      }))
      //console.log(this.getters.products)
      console.log("this is setCart @cartStore!")
      // state.cart_items.push(item)
      if (state.cart_items.find((cart) => {
        return cart.id === payload
      })) {
        state.cart_items.find((cart) => {
          return cart.id === payload
        }).count++
      } else {
        state.cart_items.push(item)
      }
    },
    increment(state, payload) {
      // console.log("@cartStore!increment受け取りました!")

      let item = state.cart_items.find(cart => {
        return cart.id === payload;
      });
      item.count++
    },
    decrement(state, payload) {
      let item = state.cart_items.find(cart => {
        return cart.id === payload;
      });
      item.count--
    },
    delete(state, payload) {
      console.log("hi, this is deldel!")
      let item = state.cart_items.find(cart => {
        return cart.id === payload;
      });
      let itemIndex = state.cart_items.indexOf(item)
      console.log(
        state.cart_items.indexOf(item)
      )
      state.cart_items.splice(itemIndex, 1)
    }
  },

  getters: {
    products(state, getters, rootState, rootGetters) {
      return rootState.pM.products
    }
  },
  actions: {
    addCart({ commit }, id) {
      commit('setCart', id)
    },
    increment({ commit }, id) {
      commit('increment', id)
    },
    decrement({ commit }, id) {
      commit('decrement', id)
    },
    delete({ commit }, id) {
      commit('delete', id)
    }
  }

}