<template>
  <div>
    <div id="mask" v-bind:class="{hidden:modal}" @click="close"></div>
    <section id="modal" v-bind:class="{hidden:modal}">
      <div class="main users-new">
        <div class="container">
          <div class="form-heading">新規ユーザー登録</div>
          <div class="form users-form">
            <div class="form-body">
              <p>ユーザー名</p>
              <input v-model="name">
              <p>メールアドレス</p>
              <input v-model="email">
              <p>パスワード</p>
              <input v-model="pass1">
              <p>パスワード確認</p>
              <input v-model="pass2">
              <br>
              <input type="button" value="新規登録" v-on:click="signup">
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  data() {
    return {
      name: "hoge",
      email: "hoge@hoge",
      pass1: "hogehoge",
      pass2: "hogehoge"
    };
  },
  methods: {
    signup() {
      this.$store.dispatch("signUp", {
        name: this.name,
        email: this.email,
        pass1: this.pass1,
        pass2: this.pass2
      });
    }
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
    }
  }
};
</script>

<style>
</style>


