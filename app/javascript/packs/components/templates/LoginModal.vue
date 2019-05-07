<template>
  <div>
    <div id="mask" v-bind:class="{hidden:modal}" @click="close"></div>
    <section id="modal" v-bind:class="{hidden:modal}" v-if="login">
      <div id="close" @click="close">閉じる</div>
      <div class="login-form">
        <h1>Login Page</h1>email:
        <input type="email" v-model="email">
        <br>password:
        <input type="password" v-model="pass">
        <br>
        <input type="button" value="Login" v-on:click="auth">
      </div>
      <div class="switch-form-button" @click="switchForm">新規アカウント登録の方はこちら</div>
    </section>
    <section id="modal" v-bind:class="{hidden:modal}" v-else>
      <div id="close" @click="close">閉じる</div>
      <div class="main users-new">
        <div class="container">
          <div class="form-heading">
            <h1>新規ユーザー登録ページ</h1>
          </div>
          <div class="form users-form">
            <div class="form-body">
              <p>ユーザー名</p>
              <input v-model="name">
              <p>メールアドレス</p>
              <input v-model="email">
              <p>パスワード</p>
              <input v-model="pass1">
              <p>パスワード確認</p>
              <div class="er-msg" v-if="passMatch">パスワードが一致しません</div>
              <input v-model="pass2">
              <br>
              <input type="button" value="新規登録" v-on:click="signup">
            </div>
            <div class="switch-form-button" @click="switchForm">既にアカウントをお持ちの方はこちら</div>
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
      return this.$store.state.mM.modal;
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
    switchForm() {
      if (this.login === true) {
        this.login = false;
      } else {
        this.login = true;
      }
    }
  }
};
</script>

<style scoped>
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
  width: 200px;
  border: 1px solid #ccc;
  border-radius: 4px;
  text-align: center;
  padding: 12px 0;
  margin: 16px auto 0;
}

#modal {
  background: #fff;
  width: 300px;
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

.switch-form-button {
  cursor: pointer;
  width: 50%;
  border: 1px solid #ccc;
  border-radius: 4px;
  text-align: center;
  padding: 12px 0;
  margin: 16px auto 0;
}

.er-msg {
  color: crimson;
}
</style>


