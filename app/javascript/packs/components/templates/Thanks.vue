<template>
  <div class="cart-page-wrapper">
    <h2>お買い上げありがとうございました</h2>
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
    <hr>
    <img src="/images/thanks.jpg" alt="thanks image">
    <router-link to="/" class="goHome">
      <div>ホームに戻る</div>
    </router-link>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
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
.num3 {
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
.goHome {
  text-decoration: none;
}
img {
  height: auto;
  width: 70%;
}
</style>

