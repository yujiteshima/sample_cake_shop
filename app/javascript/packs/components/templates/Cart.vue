<template>
  <div class="cart-container">
    <h1>This is a cart page</h1>
    <div class="card" v-for="item in cart_items" v-bind:key="item.id">
      <img v-bind:src="'/images/' + item.id +'.jpg'" alt="cart-item" style="width:100%">
      <h1>{{item.name}}</h1>
      <div class="price">{{item.price}}</div>
      <div>
        <span class="command" @click="countDown(item.id)">[-]</span>
        {{item.count}}
        <span class="command" @click="countUp(item.id)">[+]</span>
      </div>
      <div>残り{{item.stocks}}個</div>
      <div>小計：{{ item.count * item.price }}</div>
      <div class="delbtn" @click="itemDel(item.id)">カートから削除する</div>
    </div>
  </div>
</template>

<script>
export default {
  computed: {
    cart_items() {
      return this.$store.state.cM.cart_items;
    }
  },
  methods: {
    countUp(id) {
      console.log(
        this.cart_items.find(cart => {
          return cart.id === id;
        })
      );
      let item = this.cart_items.find(cart => {
        return cart.id === id;
      });

      if (item.stocks >= 1) {
        this.$store.dispatch("increment", id);
      }
    },
    countDown(id) {
      let item = this.cart_items.find(cart => {
        return cart.id === id;
      });
      if (item.count > 1) {
        this.$store.dispatch("decrement", id);
      }
    },
    itemDel(id) {
      let item = this.cart_items.find(cart => {
        return cart.id === id;
      });
      if (confirm("Are you sure?")) {
        this.$store.dispatch("delete", id);
      }
    }
  }
};
</script>

<style scoped>
.cart-container {
  display: flex;
}
/* .card {
  display: flex;
} */
.command {
  height: 50px;
  font-size: 12px;
  cursor: pointer;
  color: #08c;
  padding: 0 5px;
}
img {
  height: 200px;
}

.delbtn {
  cursor: pointer;
  border: 1px solid #000;
  border-radius: 4px;
  text-align: center;
  margin: 5px;
}
</style>
