<template>
  <div>
    <div id="mask" v-bind:class="{hidden:modal}" @click="close"></div>
    <!-- ログイン -->
    <section id="modal" v-bind:class="{hidden:modal}">
      <div id="close" @click="close">
        <font-awesome-icon class="closeIcon" icon="times"/>
      </div>

      <div class="main">
        <div class="container">
          <div>
            <h1>Login Page</h1>
          </div>
          <div class="login-form-wraper">
            <div class="login-form">
              <div>email:</div>
              <div>
                <input type="email" v-model="email">
              </div>
              <div>password:</div>
              <div>
                <input type="password" v-model="pass">
              </div>
            </div>
          </div>

          <div class="loginBtn" v-on:click="auth">Login</div>

          <div class="switch-form-button" @click="signUpModal()">新規アカウント登録の方はこちら</div>
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
      // login: true,
      name: "",
      pass1: "",
      pass2: ""
    };
  },
  computed: {
    modal() {
      return this.$store.state.mM.loginModal;
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
    signUpModal() {
      this.$store.dispatch("mM/signUpModal");
    }
    // signup() {
    //   this.$store.dispatch("uM/signUp", {
    //     name: this.name,
    //     email: this.email,
    //     pass1: this.pass1,
    //     pass2: this.pass2
    //   });
    // }
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
#mask {
  background: rgba(0, 0, 0, 0.4);
  position: fixed;
  top: 0;
  bottom: 0;
  right: 0;
  left: 0;
  z-index: 100;
}
h1 {
  font-size: 2em;
  font-weight: bold;
}
input {
  font-size: 1em;
}
/* .main {
  width: 50%;
  flex-direction: column;
} */
.container {
  /* width: 50%; */
  margin: 0 auto;
}
.login-form {
  font-size: 1.2em;
  display: grid;
  grid-template: repeat(2, 50px) / 25% 50%;
  gap: 10px;
  /* justify-content: space-around;
  flex-direction: column; */
  /* align-items: center; */
}
.login-form-wraper {
  /* margin: 0 auto; */
}

.loginBtn {
  cursor: pointer;
  /* width: 50%; */
  margin-top: 2.5em;
  font-size: 2em;
  border-bottom: 2px solid #333;
  /* border-radius: 10px; */
  /* box-shadow: 0 4px 8px 0 #333; */
}
.loginBtn:hover {
  color: dodgerblue;
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

.er-msg {
  color: crimson;
}
</style>


