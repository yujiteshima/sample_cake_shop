<template>
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
  }
};
</script>

<style>
</style>


