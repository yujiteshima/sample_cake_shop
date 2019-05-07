<template>
  <div>
    <h1>This is a cart page</h1>
    <div class="cart-container">
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
    <div>
      小計：{{ sum }}
      <br>
      送料：{{ cost }}
      <div class="fiveBuy" v-if="fiveBuy">5個以上ご購入で送料無料</div>
      <br>
      <hr>
      合計：{{ total }}
    </div>
    <div class="buyBtn" @click="buy">購入する</div>
  </div>
</template>

<script>
export default {
  computed: {
    cart_items() {
      return this.$store.state.cM.cart_items;
    },
    sum() {
      let i = 0;
      let sum = 0;
      while (i < this.cart_items.length) {
        sum += this.cart_items[i].count * this.cart_items[i].price;
        //console.log(this.cart_items[i]);
        i++;
      }
      // for..in では上手く算出できなかった。
      // itemにオブジェクトが取ってこれない。
      // 原因不明、究明するべき。
      //for (let item in this.cart_items) {
      //sum = sum + item.count * item.price;
      //console.log(item);
      //}
      return sum;
    },
    cost() {
      if (this.cart_items.length === 0) {
        return 0;
      } else if (!this.fiveBuy) {
        return 0;
      } else {
        return 500;
      }
    },
    total() {
      return this.sum + this.cost;
    },
    fiveBuy() {
      let i = 0;
      let sum = 0;
      while (i < this.cart_items.length) {
        sum += parseInt(this.cart_items[i].count);
        i++;
      }
      if (sum < 5) {
        //console.log(sum);
        return true;
      } else {
        // console.log(sum);
        return false;
      }
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
    },
    buy() {}
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

.fiveBuy {
  color: crimson;
  border-bottom: 1px;
  border-bottom-color: crimson;
}

.buyBtn {
  cursor: pointer;
  border: 1px solid #000;
  border-radius: 4px;
  text-align: center;
  margin: 5px;
  background-color: cyan;
}
</style>
