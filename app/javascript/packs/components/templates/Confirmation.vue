<template>
  <div class="cart-page-wrapper">
    <h2>ご注文内容の確認</h2>
    <hr>
    <div class="progress-container">
      <ul class="progress-list">
        <li class="progress-item">
          <div class="progress-number num1">1</div>
          <div class="progress-label">カートの商品</div>
        </li>
        <li class="progress-item">
          <div class="progress-number num2">2</div>
          <div class="progress-label">ご注文内容確認</div>
        </li>
        <li class="progress-item">
          <div class="progress-number num3">3</div>
          <div class="progress-label">完了</div>
        </li>
      </ul>
    </div>
    <div class="cart-container">
      <table class="item-list">
        <thead>
          <tr>
            <th colspan="3">商品内容</th>
            <th>数量</th>
            <th>小計</th>
          </tr>
        </thead>
        <tr v-for="item in cart_items" v-bind:key="item.id">
          <td class="img-td">
            <img v-bind:src="'/images/' + item.id +'.jpg'" alt="cart-item">
          </td>
          <td>
            <div>{{item.name}}</div>
          </td>
          <td>
            <div class="price">¥{{item.price}}</div>
          </td>
          <td>
            <div>{{item.count}}</div>
          </td>
          <td>
            <div>¥{{ item.count * item.price }}</div>
          </td>
        </tr>
        <tr>
          <td colspan="4"></td>
          <td colspan="2" class="check-info">送料:{{ cost }}</td>
        </tr>
        <tr>
          <td colspan="4"></td>
          <td colspan="2" class="check-info">
            合計:
            <span class="sum">¥{{sum}}</span>
          </td>
        </tr>
        <tr>
          <td colspan="4">お客様のお名前</td>
          <td colspan="2" class="check-info">
            <span class="user-name">{{user_info.name}} 様</span>
          </td>
        </tr>
        <tr>
          <td colspan="4">送り先</td>
          <td colspan="2" class="check-info">
            <span class="user-adress">{{user_info.name}} 様のご自宅</span>
          </td>
        </tr>
        <tr>
          <td colspan="4"></td>
          <td colspan="2" class="check-info">
            <router-link to="/thanks" class="list-item" @click.native="thanks()">
              <div class="buyBtn">この内容で購入する</div>
            </router-link>
          </td>
        </tr>
        <tr>
          <td colspan="4"></td>
          <td colspan="2" class="check-info">
            <div class="continueBtn" @click="continueShop">お買い物を続ける</div>
          </td>
        </tr>
      </table>
    </div>
  </div>
</template>

<script>
export default {
  computed: {
    cart_items() {
      return this.$store.state.cM.cart_items;
    },
    user_info() {
      return this.$store.state.uM.user;
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
    }
  },
  methods: {
    thanks() {
      this.$store.dispatch("thanks");
    },
    continueShop() {
      this.$router.go(-2);
    }
  }
};
</script>

<style scoped>
.cart-page-wrapper {
  box-sizing: border-box;
}
.cart-container {
  /* display: flex;
  flex-direction: column; */
  /* text-align: center; */
  margin: 0 auto;
  /* display: grid; */
  width: 74%;
  /* margin: 6% auto 50px;
  grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
  gap: 26px; */
}
table {
  width: 74%;
  margin: 0 auto;
}
thead {
  background-color: lightgray;
}
.item-list {
  position: relative;
}
.img-td {
  text-align: left;

  width: 17%;
}
img {
  height: 8rem;
  width: 100%;
}
.list-item {
  text-decoration: none;
}
.buyBtn {
  font-size: 0.8rem;
  /* display: block; */
  cursor: pointer;
  /* border: 1px solid #000; */
  /* border-radius: 4px; */
  /* margin: 5px; */
  background-color: #de5d50;
  color: antiquewhite;
  /* padding: 2%; */
  text-align: center;
  vertical-align: middle;
  opacity: 0.8;
}
.buyBtn:hover {
  opacity: 1;
}
.continueBtn {
  cursor: pointer;
  text-align: center;
  font-size: 0.8rem;
  background-color: #525263;
  color: antiquewhite;
  opacity: 0.8;
}
.continueBtn:hover {
  opacity: 1;
}
.sum {
  font-size: 1.8rem;
  color: #de5d50;
  margin-left: 10px;
}

/* プログレスバー */

.progress-list {
  display: flex;
  justify-content: center;
  /* width: 100%;
  text-align: center; */
}
.progress-item {
  list-style: none;
  display: table-cell;
  position: relative;
  font-size: 14px;
  text-align: center;
  font-weight: bold;
  z-index: 10;
  margin: 0 20px 0;
}
.progress-number {
  background-color: dimgray;
  font-size: 20px;
  color: antiquewhite;
  height: 42px;
  width: 42px;
  display: table-cell;
  vertical-align: middle;
  border-radius: 21px;
}
.num2 {
  background-color: deepskyblue;
}
.progress-label {
  list-style-position: outside;
  font-size: 13px;
}
.progress-container {
  position: relative;
}
.progress-hr {
  position: absolute;
  width: 445px;
  top: 10px;
  left: 350px;
  border-width: 3px;
  color: dimgray;
  z-index: 3;
}

.empty-message {
  font-size: 2rem;
  color: orangered;
  font-weight: bold;
}
</style>

