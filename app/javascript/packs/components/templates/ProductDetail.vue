<template>
  <div class="productDetail">
    <h1>商品情報</h1>
    <p>このページはID:{{ $route.params.id}}の詳細を表示するページです。</p>
    <img v-bind:src="'/images/' + id +'.jpg'" alt="products-item">
    <p>商品名：{{productDetail.name}}</p>
    <p>価格： ¥{{ productDetail.price}}</p>
    <p>コメント：{{productDetail.coment}}</p>
  </div>
</template>

<script>
export default {
  name: "ProductDetail",
  props: { id: Number },
  data() {
    return {
      productDetail: ""
    };
  },
  computed: {
    products() {
      return this.$store.state.pM.products;
    }
    // productDetail() {
    //   return {};
    // }
  },
  // created: function() {
  //   let item = this.$store.state.pM.products.find(detailItem => {
  //     return detailItem.id === this.id;
  //   });
  //   prductDetail = item;
  // },
  watch: {
    id: {
      handler() {
        console.log("動いているよ！");
        // console.log(this.productDetail);
        // this.prductDetail = this.$store.state.pM.products.find(detailItem => {
        //   return detailItem.id === this.id;
        // });
        let item = this.products.find(detailItem => {
          return detailItem.id === this.id;
        });
        this.productDetail = item;
        console.log(this.products);
      },
      immediate: true
    }
  }
};
</script>

<style scoped>
</style>

