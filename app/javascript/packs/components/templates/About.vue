<template>
  <div class="about">
    <h1>このページはこのサイトの趣旨を説明します。</h1>
    <h1>しかし、しばらくは様々な技術テストの為に使います</h1>
    <h1>
      This is a about page
      <font-awesome-icon icon="coffee"/>
      <font-awesome-icon icon="shopping-cart"/>
      <span class="cart-item-num">0</span>
      <font-awesome-icon icon="sign-in-alt"/>
      <font-awesome-icon icon="user-plus"/>
      <font-awesome-icon icon="home"/>
      <font-awesome-icon icon="info"/>
      <font-awesome-icon icon="bars"/>
      <font-awesome-icon icon="lock"/>
      <font-awesome-icon icon="search"/>
      <font-awesome-icon icon="user-circle"/>
      <font-awesome-icon icon="angle-double-left"/>
      <font-awesome-icon icon="angle-double-right"/>
      <font-awesome-icon icon="angle-left"/>
      <font-awesome-icon icon="angle-right"/>
      <font-awesome-icon icon="times"/>
      <font-awesome-icon class="angleIcon" icon="caret-down"/>
    </h1>

    <br>
    <router-link to="/drower-test">About</router-link>
    <router-link to="/humberger-test">Humberger</router-link>
    <router-link to="/signup">SignUp</router-link>
    <Search></Search>
    <button @click="all">All</button>
    <product></product>
    <PageNation/>
  </div>
</template>

<script>
import Search from "./Search.vue";
import PageNation from "./PageNation.vue";
import Product from "./Product.vue";
export default {
  name: "about",
  components: {
    PageNation,
    Search,
    Product
  },
  methods: {
    all() {
      console.log("hello all");
      this.$store.dispatch("all");
    }
  }
};
</script>


<style scoped>
.cart-item-num {
  display: inline-block;
  border-radius: 99999px;
  box-sizing: border-box;
  padding: 5px;
  height: 17px;
  font-size: 10px;
  line-height: 0.7;
  vertical-align: top;
  color: #fff;
  text-align: left;
  white-space: nowrap;
  background-color: #de5d50;
  position: absolute;
  left: 54%;
  top: 92px;
}
</style>
