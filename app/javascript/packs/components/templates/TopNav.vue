<template>
  <div id="nav">
    <div class="topnav">
      <router-link to="/" class="active">Home</router-link>|
      <router-link to="/about">About</router-link>
      <router-link to="/contact">Contact</router-link>
      <router-link to="/login" style="float:right">Login</router-link>
      <router-link to="/cart" style="float:right">Cart</router-link>
    </div>
  </div>
</template>

<script>
export default {
  name: "TopNav"
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

.topnav a.active {
  background-color: #4caf50;
  color: white;
}
</style>

