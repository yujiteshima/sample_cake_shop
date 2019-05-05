<template>
  <div class="item-container">
    <div class="card" v-for="product in products" v-bind:key="product.id">
      <router-link :to="`/product/${product.id}`">
        <img v-bind:src="'/images/' + product.id +'.jpg'" alt="products-item" style="width:100%">
      </router-link>
      <h1>{{product.name}}</h1>
      <p class="price">{{product.price}}</p>

      <p>
        <button v-on:click="addCart(product.id)">Add to Cart</button>
      </p>
    </div>
  </div>
</template>

<script>
export default {
  name: "Product",
  computed: {
    products() {
      return this.$store.state.pM.products;
    }
  },
  // watch: {
  //   products(val) {
  //     console.log(val);
  //     console.log("watch!success!!");
  //     this.draw();
  //   }
  //   // deep: true
  // },
  methods: {
    addCart(id) {
      console.log(id);
      this.$store.dispatch("addCart", id);
      // Do FlashMessage
      let flashInfo = {
        mode: "processing",
        text: `Thank you Add Cart !!`
      };
      this.$store.dispatch("fM/showFlashMessage", flashInfo);
      // this.$store.dispatch("addCart", {});
    }
  }
  // created: function() {
  //   console.log(this.products);
  // }
};
</script>

<style scoped>
img {
  height: 200px;
}
.item-container {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
  gap: 10px;
  grid-template-rows: 1fr 1fr;
}
.card {
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
  max-width: 300px;
  margin: auto;
  text-align: center;
  font-family: arial;
}

.price {
  color: grey;
  font-size: 22px;
}

.card button {
  border: none;
  outline: 0;
  padding: 12px;
  color: white;
  background-color: #000;
  text-align: center;
  cursor: pointer;
  width: 100%;
  font-size: 18px;
}

.card button:hover {
  opacity: 0.7;
}
</style>

