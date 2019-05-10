<template>
  <div class="page-nation-containar" v-if="pagenationDisplay">
    <ul class="page-nation">
      <li>
        <span @click="paging('First')">
          <font-awesome-icon icon="angle-double-left"/>
        </span>
      </li>
      <li>
        <span @click="paging('Preb')">
          <font-awesome-icon icon="angle-left"/>
        </span>
      </li>
      <li
        v-for="(value, name) in pagenationData"
        @click="paging(name)"
        v-bind:class="name"
      >{{value}}</li>
      <!-- <li>2</li>
      <li>3</li>
      <li>...</li>
      <li>10</li>-->
      <li>
        <span @click="paging('Next')">
          <font-awesome-icon icon="angle-right"/>
        </span>
      </li>
      <li>
        <span @click="paging('Last')">
          <font-awesome-icon icon="angle-double-right"/>
        </span>
      </li>
    </ul>
    <!-- <div>totalPage:{{totalPage}}</div> -->
    <!-- <p>{{this.hello}}</p>
    <div>ItemCount:{{this.pagenationData.ItemCount}}</div>-->
  </div>
</template>

<script>
export default {
  computed: {
    pagenationData() {
      return this.$store.state.pM.pageObject;
    },
    pagenationDisplay() {
      //return true;
      return this.$store.state.pM.paginationDisplay;
    }
  },
  // data() {
  //   return {
  //     //
  //     pageObject: {
  //       First: 1,
  //       ThreeDots: "...",
  //       Preb: 3,
  //       Current: 4,
  //       Next: 5,
  //       ThreeDots2: "...",
  //       Last: 30
  //     },
  //     pagenationData: {
  //       currentPage: 1, //apiから入れる
  //       ItemCount: 27, //apiから入れる
  //       perPage: 9 //apiから入れる
  //     },
  //     hello: this.hello
  //     // totalPage: this.totalPage
  //   };
  // },
  methods: {
    paging(name) {
      console.log(name);
    }
    // First() {
    //   console.log("First");
    // },
    // ThreeDots() {
    //   console.log("ThreeDots");
    // },
    // Preb() {
    //   console.log("Preb");
    // },
    // Current() {
    //   console.log("Current");
    // },
    // Next() {
    //   console.log("Next");
    // },
    // ThreeDots2() {
    //   console.log("ThreeDots");
    // },
    // Last() {
    //   console.log("Last");
    // }
  }
  // comuputed: {
  //   totalPage() {
  //     // let totalPage = "";
  //     if (this.pagenationData.ItemCount / this.pagenationData.perPage === 0) {
  //       let totalPage =
  //         this.pagenationData.ItemCount / this.pagenationData.perPage;
  //     } else {
  //       let totalPage =
  //         this.pagenationData.ItemCount / this.pagenationData.perPage + 1;
  //     }
  //     return totalPage;
  //   }
  // }
  // hello() {
  //   return "hello";
  // }
};
</script>

<style scoped>
.page-nation-containar {
  text-align: center;
}
.page-nation {
  display: flex;
  justify-content: center;
  list-style: none;
}
.page-nation li {
  display: block;
  padding: 0.5em;
  border: solid 1px lightgray;
  color: mediumblue;
}
.page-nation li:hover {
  background-color: #ddd;
}
.Current {
  background-color: skyblue;
}
</style>


