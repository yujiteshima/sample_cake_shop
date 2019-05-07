<template>
  <div class="home">
    <h1>Sample Shop App</h1>
    <button @click="more">More</button>
    <!-- <button @click="modal">Modal</button> -->
    <button @click="flash">Flash</button>
    <!-- <button @click="login">Login</button> -->
    <product></product>
  </div>
</template>

<script>
// @ is an alias to /src

import Product from "./Product.vue";

export default {
  name: "home",
  components: {
    Product
  },
  methods: {
    more() {
      this.$store.dispatch("getRecomends");
      console.log("more!dispatch（getRecomends）しました。");
    },
    modal() {
      this.$store.dispatch("modalOpen");
      console.log("modalOpen!");
    },
    flash() {
      let flashInfo = {
        mode: "processing",
        text: "This is FlashMessge TestDayo!!"
      };
      this.$store.dispatch("fM/showFlashMessage", flashInfo);
    },
    login() {
      this.$store.dispatch("loginModal");
      console.log("loginModal!");
    }
  },
  created: function() {
    // this.$nextTick(function() {
    this.$store.dispatch("getRecomends");
    // });
  }
};
</script>
