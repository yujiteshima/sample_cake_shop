import router from "../router/router"

export default {
  namespaced: true,
  state: {
    userIndex: [],
    user: ""
  },
  mutations: {
    auth(state, payload) {
      console.log("認証成功")
      console.log(payload.name)
      console.log(payload.email)
      console.log(payload.pass)
      console.log(payload.mode)
      state.user = {
        name: payload.name,
        email: payload.email
      }

      // console.log(payload.pass)
      // console.log(payload.email)
    },
    setUserIndex(state, payload) {
      state.userIndex = payload
      console.log("ミューテーション完了しました。@userIndex")

    },
    signup(state, payload) {
      state.user = payload
      // if (payload.flashMessage) {
      //   dispatch("fM / showFlashMessage", payload.flash, { root: true })
      // }
      if (payload.mode === "processing") {
        router.push('/');
      } else if (payload.mode === "error") {
        router.push('/user/sign-up')
      }
    },
    logout(state, payload) {
      state.user = ""
    }
  },
  actions: {
    auth({ commit }, userInfo) {
      console.log(`/api/auth/?email=${userInfo.email}&pass=${userInfo.pass}`)
      console.log(`/api/auth/?email="${userInfo.email}"&pass="${userInfo.pass}"`)
      let json = fetch(`/api/auth/?email=${userInfo.email}&pass=${userInfo.pass}`)
      Promise.resolve(json)
        .then(result => {
          return result.json();
        })
        .then(response => {
          if (response.authFlg) {
            commit('auth', response)
            commit('fM/setMessage', {
              mode: "processing",
              text: `ログインしました。${response.name}様、お買い物をお楽しみ下さい。`
            }, { root: true })
            // closeModal
            commit('mM/modalClose', null, { root: true })
          } else {
            commit('fM/setMessage', {
              mode: response.mode,
              text: response.text
            }, { root: true })
            console.log("auth失敗")
          }
          // console.log(response);
          // this.$store.state.products = response;
        })
        .catch(error => console.log(error));
    },
    userIndex({ commit }) {
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

    },
    signUp({ commit }, userInfo) {
      console.log(userInfo)
      let json = fetch("/api/users", {
        mode: 'cors',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        },
        credentials: 'include',
        method: 'POST',
        body: JSON.stringify(userInfo)
      });
      console.log(userInfo.name)
      Promise.resolve(json)
        .then(result => {
          return result.json();
        }).then(response => {
          commit('signup', response)
          if (response.mode === "processing") {
            commit('mM/modalClose', null, { root: true })
          }
          if (response.flashMessage) {
            commit('fM/setMessage', response, { root: true })
          } else if (response.passMatch) {
            commit('mM/setPassMatch', response, { root: true })
          }
        }).catch(error => console.log(error));
    },
    logout({ commit }, userInfo) {
      commit('logout', userInfo)
      commit('fM/setMessage', {
        mode: "processing",
        text: `ログアウトしました。またのお越しをお待ち申し上げております。`
      }, { root: true })
    }
  }
}