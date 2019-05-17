<template>
  <div class="home2">
    <!-- <link href="https://fonts.googleapis.com/css?family=Diplomata+SC|Sonsie+One" rel="stylesheet"> -->
    <div class="shop-name">
      <h1>Sample Shop App</h1>
    </div>
    <nav>
      <ul class="menu-nav">
        <router-link to="/products" class="list-item" @click.native="newItem()">新作</router-link>

        <router-link to="/products" class="list-item" @click.native="chocolate()">チョコ</router-link>
        <router-link to="/products" class="list-item" @click.native="fruits()">フルーツ</router-link>

        <router-link to="/products" class="list-item" @click.native="cheese()">チーズ</router-link>
      </ul>
    </nav>

    <div id="top-img">
      <h1>Sample Cake Shop</h1>
      <!-- <img src="/images/top.jpg" alt="top-img"> -->
    </div>

    <div class="about-shop">
      <div class="about-shop-image">
        <img src="/images/about.jpg" alt="shop-images" role="presentation">
      </div>
      <div class="about-shop-article">
        <p class="about-shop-article-title">Sample Cake Shop</p>
        <p class="about-shop-article-subtitle">美味しい&quot;CAKE&quot;をご賞味下さい。</p>
        <p class="about-shop-discription">
          ケーキは子供から大人まで多くの人の生活を彩ります。
          <br>当店では、甘さ控えめで香り豊かな、男性の方にも人気のチョコレートケーキから、季節の果物をふんだんに使ったケーキまで取り揃えております。
          <br>創作ケーキも取り揃えています。是非ご賞味ください。
          <br>
        </p>
        <router-link to="/products" @click.native="all()">一覧を見る</router-link>
      </div>
    </div>

    <div class="new-item-container">
      <div class="new-item-wrappar">
        <div class="new-item-top">
          <h2>NEW ITEM</h2>
          <p>新着商品</p>
        </div>

        <div class="new-item">
          <img src="/images/3.jpg" alt="newItemImage">
          <br>
          <div>Name:hogehoge</div>
          <br>
          <div>price:¥1350(税込)</div>
        </div>

        <div class="new-item">
          <img src="/images/3.jpg" alt="newItemImage">
          <br>
          <div>Name:hogehoge</div>
          <br>
          <div>price:¥1350(税込)</div>
        </div>

        <!-- <div class="new-item">
          <img src="/images/3.jpg" alt="newItemImage">
          <br>
          <div>Name:hogehoge</div>
          <br>
          <div>price:¥1350(税込)</div>
        </div>-->
      </div>
    </div>

    <div class="special">
      <div class="special-wrappar">
        <div class="special-title">
          <h2>TOPICS</h2>
          <div class="line">|</div>
          <h3>特集</h3>
        </div>
        <div class="special-contents-1">
          <img src="/images/10.jpg" alt="special-img">
          <p>チョコレートケーキ特集</p>
        </div>
        <div class="special-contents-2">
          <img src="/images/10.jpg" alt="special-img">
          <p>チョコレートケーキ特集</p>
        </div>
        <!-- <div class="special-contents-3"></div> -->
      </div>
    </div>

    <div class="news">
      <div class="news-wrappar">
        <div class="news-title">
          <h2>NEWS</h2>
          <div class="line">|</div>
          <p>新着情報</p>
        </div>
        <div class="news-item">
          <p>2019/05/19 サイトオープンしました</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src

export default {
  methods: {
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
      this.$store.dispatch("cheese");
    }
  }
};
</script>

<style scoped>
.home2 {
  color: #333;
  width: 74%;
  margin: 6% auto 50px;
}
.shop-name {
  /* font-family: "Diplomata+SC|Sonsie+One"; */
  font-size: 2em;
}
.menu-nav {
  text-align: center;
  display: flex;
  justify-content: center;
}
.all-link {
  cursor: pointer;
}
.all-link:hover {
  color: blue;
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
#top-img {
  display: flex;
  justify-content: center;
  align-items: center;
  /* position: relative; */
  height: 400px;
  background: #f7f7f7 url(/images/top.jpg) center top/cover no-repeat;
  margin-bottom: 26px;
  /* text-align: center; */
  /* object-fit: cover;*/
  /* width: 100%; */
}
#top-img h1 {
  font-size: 4em;
  /* position: absolute;
  top: 50%; */
}
.about-shop {
  display: flex;
}

.about-shop-image {
  order: 2;
}

.about-shop-article {
  order: 1;
}
.about-shop-discription {
  text-align: left;
}
/* about-shop-discription */
.about-shop-article-subtitle {
  font-size: 24px;
  font-weight: bold;
}

/* 新着商品 */
.new-item-container {
  background-color: #eee;
  height: 18em;
}
.new-item-wrappar {
  height: 85%;
  /* display: flex;
  align-items: center;
  justify-content: center; */
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
  gap: 5px;
  align-items: center;
  margin: 3% auto 25px;
}
/* .new-item-top {
  height: 95%;
} */
/* .new-item {
  height: 95%;
  display: grid;
  grid-template-columns: 1fr;
  align-items: center;
} */

/* 特集 */
.special {
  margin-top: 3em;
}
.special-wrappar {
  height: 90%;
  display: flex;
  align-content: center;
  align-items: center;
}
.special-title {
  display: flex;
  align-items: center;
  margin: 3% auto 25px;
}

/* 新着情報 */

.news-wrappar {
  height: 90%;
}

.news-title {
  display: flex;
  align-items: center;
}

.line {
  font-size: 1.5em;
  margin: 0.3em;
}
</style>

