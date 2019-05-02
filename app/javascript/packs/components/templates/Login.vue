<template>
  <div class="login-form">
    <h1>Login Page</h1>email:
    <input type="email" v-model="email">
    <br>password:
    <input type="password" v-model="pass">
    <br>
    <input type="button" value="Login" v-on:click="auth">
  </div>
</template>

<script>
export default {
  data() {
    return { email: "email", pass: "pass" };
  },
  methods: {
    auth() {
      this.$store.dispatch("auth", { email: this.email, pass: this.pass });
    }
  }
};
</script>

<style scoped>
.login-form {
  text-align: center;
}
</style>


