<template>
  <div class="home">
    <h1>Sample Shop App</h1>
    <button @click="more">More</button>
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
    }
  },
  created: function() {
    // this.$nextTick(function() {
    this.$store.dispatch("getRecomends");
    // });
  }
};
</script>
