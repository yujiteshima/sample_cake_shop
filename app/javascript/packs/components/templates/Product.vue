<template>
  <div>
    <div class="shop-name">
      <router-link to="/" class="home-link">
        <h1>Sample Shop App</h1>
      </router-link>
    </div>
    <nav>
      <ul class="menu-nav">
        <router-link to="/products" class="list-item" @click.native="newItem()">新作</router-link>
        <router-link to="/products" class="list-item" @click.native="chocolate()">チョコ</router-link>
        <router-link to="/products" class="list-item" @click.native="fruits()">フルーツ</router-link>
        <router-link to="/products" class="list-item" @click.native="cheese()">チーズ</router-link>
      </ul>
    </nav>
    <h2>
      <span class="all" @click="all">全て</span>
      ｜{{genre}}
      <div class="top-page-nation">
        <PageNation/>
      </div>
    </h2>

    <hr>
    <div class="item-container">
      <div class="card" v-for="product in products" v-bind:key="product.id">
        <router-link :to="`/product/${product.id}`">
          <img v-bind:src="'/images/' + product.id +'.jpg'" alt="products-item" style="width:100%">
        </router-link>
        <h2>{{product.name}}</h2>
        <p class="price">￥{{product.price}}</p>
        <p>
          数量
          <span class="command" @click="countDown(product.id)">
            <font-awesome-icon icon="minus"/>
          </span>
          <span class="product-count">{{product.count}}</span>
          <span class="command" @click="countUp(product.id)">
            <font-awesome-icon icon="plus"/>
          </span>
        </p>
        <p>
          <button v-on:click="addCart(product.id)">カートに入れる</button>
        </p>
      </div>
    </div>
    <PageNation/>
  </div>
</template>

<script>
import PageNation from "./PageNation.vue";
export default {
  name: "Product",
  components: {
    PageNation
  },
  computed: {
    products() {
      return this.$store.state.pM.products;
    },
    genre() {
      let genre = this.$store.state.pM.mode;
      let genre_name = "";
      if (genre == "all") {
        genre_name = "";
      } else if (genre == "chocolate") {
        genre_name = "チョコレート";
      } else if (genre == "fruits") {
        genre_name = "フルーツ";
      } else if (genre == "newItem") {
        genre_name = "新作";
      } else if (genre == "cheese") {
        genre_name = "チーズ";
      }
      return genre_name;
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
        text: `Thank you Add to Cart !!`
      };
      this.$store.dispatch("fM/showFlashMessage", flashInfo);
      this.$store.dispatch("mM/addCartModal");
      // this.$store.dispatch("addCart", {});
    },
    countUp(id) {
      this.$store.dispatch("countUp", id);
    },
    countDown(id) {},
    all() {
      this.$store.dispatch("all");
    },
    chocolate() {
      this.$store.dispatch("chocolate");
    },
    newItem() {
      console.log("heihei");
      this.$store.dispatch("newItem");
    },
    fruits() {
      this.$store.dispatch("fruits");
    },
    cheese() {
      console.log("hi this in cheese-method in ProductVue");
      this.$store.dispatch("cheese");
    }
  }
  // created: function() {
  //   console.log(this.products);
  // }
};
</script>

<style scoped>
.home-link {
  color: #333;
  cursor: pointer;
  list-style: none;
  text-decoration: none;
}
img {
  height: 15rem;
}
.item-container {
  width: 74%;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
  gap: 26px;

  margin: 6% auto 50px;
  /* margin-bottom: 50px; */
  /* display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
  gap: 10px;
  grid-template-rows: 1fr 1fr; */
}
.card {
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
  width: 15rem;
  margin: auto;
  text-align: center;
  font-family: arial;
  object-fit: cover;
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

.menu-nav {
  text-align: center;
  display: flex;
  justify-content: center;
}
.list-item {
  cursor: pointer;
  font-size: 18px;
  display: list-item;
  list-style: none;
  padding: 0.8em;
  text-decoration: none;
  color: #333;
}
.list-item:hover {
  background-color: #eee;
}
.shop-name {
  /* font-family: "Diplomata+SC|Sonsie+One"; */
  font-size: 2em;
}
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
.all {
  cursor: pointer;
}
.all:hover {
  color: deepskyblue;
}
.top-page-nation {
  display: inline-block;
  font-size: 0.5em;
}
</style>

