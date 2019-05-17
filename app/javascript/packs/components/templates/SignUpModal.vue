<template>
  <div>
    <div id="mask" v-bind:class="{hidden:modal}" @click="close"></div>
    <section id="modal" v-bind:class="{hidden:modal}">
      <div id="close" @click="close">
        <font-awesome-icon class="closeIcon" icon="times"/>
      </div>
      <div class="main users-new">
        <div class="container">
          <div class="form-heading">
            <h1>新規ユーザー登録ページ</h1>
          </div>
          <div class="form users-form">
            <div class="form-body">
              <div>ユーザー名:</div>
              <div>
                <input v-model="name">
              </div>
              <div>メールアドレス:</div>
              <div>
                <input v-model="email">
              </div>

              <div>パスワード:</div>
              <div>
                <input v-model="pass1">
              </div>

              <div>
                パスワード確認:
                <div class="er-msg" v-if="passMatch">パスワードが一致しません</div>
              </div>
              <div>
                <input v-model="pass2">
              </div>
            </div>
            <div class="signupBtn" v-on:click="signup">新規登録</div>
            <div class="switch-form-button" @click="loginModal">既にアカウントをお持ちの方はこちら</div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>


<script>
export default {
  name: "Modal",
  // data: {
  //   hidden: this.modal
  // },
  data() {
    return {
      email: "yuji@cakeshop.jp",
      pass: "pass",
      login: true,
      name: "",
      pass1: "",
      pass2: ""
    };
  },
  computed: {
    modal() {
      return this.$store.state.mM.signModal;
    },
    passMatch() {
      return this.$store.state.mM.passMatch;
    }
  },
  methods: {
    close() {
      this.$store.dispatch("mM/modalClose");
    },
    auth() {
      this.$store.dispatch("uM/auth", { email: this.email, pass: this.pass });
    },
    signup() {
      this.$store.dispatch("uM/signUp", {
        name: this.name,
        email: this.email,
        pass1: this.pass1,
        pass2: this.pass2
      });
    },
    loginModal() {
      this.$store.dispatch("mM/loginModal");
    }
    // switchForm() {
    //   if (this.login === true) {
    //     this.login = false;
    //   } else {
    //     this.login = true;
    //   }
    // }
  }
};
</script>




<style scoped>
h1 {
  font-size: 2em;
  font-weight: bold;
}
#mask {
  background: rgba(0, 0, 0, 0.4);
  position: fixed;
  top: 0;
  bottom: 0;
  right: 0;
  left: 0;
  z-index: 100;
}

#close {
  cursor: pointer;
  /* width: 200px;
  border: 1px solid #ccc;
  border-radius: 4px;
  text-align: center; */
  padding: 12px 0;
  margin: 16px auto 0;
  position: absolute;
  left: 91%;
  top: 0px;
}

.closeIcon {
  font-size: 50px;
}

.closeIcon:hover {
  color: red;
}

#modal {
  background: #fff;
  width: 50%;
  height: 50%;
  padding: 20px;
  border-radius: 4px;
  position: absolute;
  top: 40px;
  left: 0;
  right: 0;
  margin: 0 auto;
  transition: 0.4s;
  z-index: 102;
}

#modal p {
  margin: 0 0 20px;
}

#mask.hidden {
  display: none;
}

#modal.hidden {
  transform: translate(0, -700px);
}

.login-form {
  text-align: center;
}
.signupBtn {
  cursor: pointer;
  margin-top: 1.5em;
  font-size: 2em;
  border-bottom: 2px solid #333;
  /* border-radius: 10px; */
}
.signupBtn:hover {
  color: dodgerblue;
}
.switch-form-button {
  cursor: pointer;
  width: 50%;
  border-bottom: 1px solid skyblue;

  text-align: center;
  padding: 12px 0;
  margin: 16px auto 0;
}
.switch-form-button:hover {
  color: aqua;
}
.main {
  display: flex;
  justify-content: center;
}
.container {
  /* background-color: darkgreen; */
  /* display: flex;
  justify-content: center;
  flex-direction: column; */
  width: 80%;
}
.er-msg {
  color: crimson;
}
.form-body {
  /* width: 50%; */
  display: grid;
  grid-template: repeat(4, 50px) / 35% 50%;
  /* justify-content: space-around;
  flex-direction: column;
  align-items: flex-start; */
  font-size: 1.2em;
}
input {
  font-size: 1em;
}
</style>


