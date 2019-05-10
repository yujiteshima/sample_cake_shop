<template>
  <div id="nav">
    <div class="topnav">
      <router-link to="/" class="active">
        <font-awesome-icon icon="home"/>
        <span class="top-nav-menu">Home</span>
      </router-link>
      <router-link to="/home2" class="active">Home2</router-link>
      <router-link to="/about">About</router-link>

      <router-link to="/contact">Contact</router-link>

      <!-- 右のメニュー -->
      <router-link to="/cart" style="float:right">
        <font-awesome-icon icon="shopping-cart"/>
        <span class="cart-item-num">{{cartCount}}</span>
        <span class="sum">¥{{sum}}</span>
      </router-link>
      <!-- <router-link to="/user-index" style="float:right">UserIndex</router-link> -->

      <router-link to="/#" @click.native="loginModal()" v-if="!loginUser" style="float:right">
        <font-awesome-icon icon="user-plus"/>
        <span class="top-nav-menu">新規ユーザー登録</span>
      </router-link>

      <router-link to="/#" @click.native="loginModal()" v-if="!loginUser" style="float:right">
        <font-awesome-icon icon="lock"/>
        <span class="top-nav-menu">ログイン</span>
      </router-link>

      <router-link to="/#" @click.native="logout()" v-if="loginUser" style="float:right">
        <font-awesome-icon icon="sign-out-alt"/>ログアウト
      </router-link>

      <!-- <router-link to="/user/sign-up" v-if="!loginUser" style="float:right">SignUp</router-link> -->
    </div>
  </div>
</template>

<script>
export default {
  name: "TopNav",
  computed: {
    loginUser: function() {
      return this.$store.state.uM.user;
    },
    cartCount() {
      return this.$store.getters.itemCount;
    },
    sum() {
      return this.$store.getters.sum;
    }
  },
  methods: {
    loginModal() {
      this.$store.dispatch("mM/loginModal");
    },
    logout() {
      this.$store.dispatch("uM/logout");
    }
  }
};
</script>

<style scoped>
#nav {
  width: 76%;
  margin: 10px auto;
}
.topnav {
  overflow: hidden;
  background-color: #f6f6f6;
}
.top-nav-menu {
  padding-left: 0.5em;
}
.topnav a {
  float: left;
  color: #333;
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
  color: #333;
}
/* .topnav a.active{
  background-color: #4caf50;
  color: white;
} */

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
  left: 84%;
  top: 44px;
}
</style>

