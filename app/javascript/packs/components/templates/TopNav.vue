<template>
  <div id="nav">
    <div class="topnav">
      <router-link to="/" class="active">Home</router-link>|
      <router-link to="/about">About</router-link>
      <router-link to="/contact">Contact</router-link>

      <router-link to="/user-index" style="float:right">UserIndex</router-link>
      <router-link to="/login" v-if="!loginUser" style="float:right">Login</router-link>
      <router-link to="/logout" v-else style="float:right">Logout</router-link>
      <router-link to="/cart" style="float:right">Cart</router-link>
      <router-link to="/user/sign-up" v-if="!loginUser" style="float:right">SignUp</router-link>
    </div>
  </div>
</template>

<script>
export default {
  name: "TopNav",
  computed: {
    loginUser: function() {
      return this.$store.state.uM.user;
    }
  }
};
</script>

<style scoped>
.topnav {
  overflow: hidden;
  background-color: #333;
}

.topnav a {
  float: left;
  color: #f2f2f2;
  text-align: center;
  padding: 14px 16px;
  text-decoration: none;
  font-size: 17px;
}

.topnav a:hover {
  background-color: #ddd;
  color: black;
}
.router-link-exact-active {
  background-color: #4caf50;
  color: white;
}
/* .topnav a.active{
  background-color: #4caf50;
  color: white;
} */
</style>

