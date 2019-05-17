<template>
  <div class="cart-page-wrapper">
    <h2>ショッピングカート</h2>
    <hr>
    <div class="progress-container">
      <ul class="progress-list">
        <li class="progress-item">
          <div class="progress-number">1</div>
          <div class="progress-label">カートの商品</div>
        </li>
        <li class="progress-item">
          <div class="progress-number">2</div>
          <div class="progress-label">お客様情報</div>
        </li>
        <li class="progress-item">
          <div class="progress-number">3</div>
          <div class="progress-label">ご注文手続き</div>
        </li>
        <li class="progress-item">
          <div class="progress-number">4</div>
          <div class="progress-label">ご注文内容確認</div>
        </li>
        <li class="progress-item">
          <div class="progress-number">5</div>
          <div class="progress-label">完了</div>
        </li>
      </ul>
      <hr class="progress-hr" noshade>
    </div>

    <div class="check-comment">商品の合計金額は「¥{{sum}}」です。</div>

    <!-- <div class="cart-container">
      <div class="card" v-for="item in cart_items" v-bind:key="item.id">
        <div class="delbtn" @click="itemDel(item.id)">
          <font-awesome-icon icon="times" class="times-icon"/>
        </div>
        <img v-bind:src="'/images/' + item.id +'.jpg'" alt="cart-item">
        <h1>{{item.name}}</h1>
        <div class="price">{{item.price}}</div>
        <div>
          <span class="command" @click="countDown(item.id)">
            <font-awesome-icon icon="minus"/>
          </span>
          {{item.count}}
          <span class="command" @click="countUp(item.id)">
            <font-awesome-icon icon="plus"/>
          </span>
        </div>
        <div>残り{{item.stocks}}個</div>
        <div>小計：{{ item.count * item.price }}</div>
      </div>
    </div>-->
    <div class="cart-container">
      <table class="item-list">
        <thead>
          <tr>
            <th>削除</th>
            <th colspan="3">商品内容</th>
            <th>数量</th>
            <th>小計</th>
          </tr>
        </thead>
        <tr v-for="item in cart_items" v-bind:key="item.id">
          <td>
            <div class="delbtn" @click="itemDel(item.id)">
              <font-awesome-icon icon="times" class="times-icon"/>
            </div>
          </td>
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
            <div>
              <span class="command" @click="countDown(item.id)">
                <font-awesome-icon icon="minus"/>
              </span>
              {{item.count}}
              <span class="command" @click="countUp(item.id)">
                <font-awesome-icon icon="plus"/>
              </span>
            </div>
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
            <div class="fiveBuy" v-if="fiveBuy">5個以上ご購入で送料無料</div>
          </td>
        </tr>
        <tr>
          <td colspan="4"></td>
          <td colspan="2" class="check-info">
            合計:
            <span class="sum">¥{{sum}}</span>
          </td>
        </tr>
        <tr>
          <td colspan="4"></td>
          <td colspan="2" class="check-info">
            <div class="buyBtn" @click="buy">レジに進む</div>
          </td>
        </tr>
        <tr>
          <td colspan="4"></td>
          <td colspan="2" class="check-info">
            <div class="continueBtn">お買い物を続ける</div>
          </td>
        </tr>
      </table>
    </div>

    <!-- <div>
      小計：{{ sum }}
      <br>
      送料：{{ cost }}
      <div class="fiveBuy" v-if="fiveBuy">5個以上ご購入で送料無料</div>
      <br>
      <hr>
    </div>
    <div class="buyBtn" @click="buy">購入する</div>-->
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
    buy() {
      confirm("お買い上げありがとうございました");
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
.card {
  /* position: relative;
  display: flex; */
  /* width: 80%; */
  /* box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2); */
  /* width: 15rem;
  margin: auto;
  text-align: center;
  font-family: arial;
  object-fit: cover; */
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
/* .card {
  display: flex;
} */
.command {
  /* height: 50px; */
  font-size: 18px;
  cursor: pointer;
  color: #08c;
  padding: 5px;
}
.command:hover {
  color: blue;
}
/* table td {
  border-bottom: solid 1px lightgray;
} */
.delbtn {
  cursor: pointer;
  display: -webkit-flex;
  display: flex;
  -webkit-align-items: center; /* 縦方向中央揃え（Safari用） */
  align-items: center; /* 縦方向中央揃え */
  -webkit-justify-content: center; /* 横方向中央揃え（Safari用） */
  justify-content: center;
  /* display: table-cell; IE8から使用可能 */
  /* vertical-align: middle;
  cursor: pointer; */
  /* border: 1px solid #000; */
  /* border-radius: 4px; */
  /* background-color: aquamarine; */
  margin: 5px;
}
.check-info {
  width: 27%;
  font-weight: bold;
  text-align: right;
}
.times-icon {
  font-size: 30px;
}
.delbtn:hover {
  color: firebrick;
}

.fiveBuy {
  color: crimson;
  border-bottom: 1px;
  border-bottom-color: crimson;
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
</style>
