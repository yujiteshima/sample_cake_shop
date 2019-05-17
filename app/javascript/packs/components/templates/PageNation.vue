<template>
  <div class="page-nation-containar" v-if="pagenationDisplay">
    <ul class="page-nation">
      <li @click="paging(1)" v-bind:class="{pageCursor: preCursor}">
        <font-awesome-icon icon="angle-double-left" v-bind:class="{pageCursor: preCursor}"/>
      </li>
      <li @click="paging(currentPage-1)" v-bind:class="{pageCursor: preCursor}">
        <font-awesome-icon icon="angle-left" v-bind:class="{pageCursor: preCursor}"/>
      </li>
      <li
        v-for="(value, index) in pagenationData"
        @click="paging(value)"
        v-bind:class="{Current:value == currentPage}"
      >{{value}}</li>

      <li @click="paging(currentPage+1)" v-bind:class="{pageCursor: nextCursor}">
        <font-awesome-icon icon="angle-right" v-bind:class="{pageCursor: nextCursor}"/>
      </li>
      <li @click="paging(-1)" v-bind:class="{pageCursor: nextCursor}">
        <font-awesome-icon icon="angle-double-right" v-bind:class="{pageCursor: nextCursor}"/>
      </li>
    </ul>
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
    },
    currentPage() {
      return this.$store.state.pM.current;
    },
    lastPage() {
      return this.$store.state.pM.lastPage;
    },
    preCursor() {
      if (this.currentPage === 1) {
        return true;
      } else {
        return false;
      }
    },
    nextCursor() {
      if (this.currentPage === this.lastPage) {
        return true;
      } else {
        return false;
      }
    }
  },

  methods: {
    paging(page) {
      this.$store.dispatch("paging", page);
    }
  }
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
  font-size: 2em;
  display: block;
  padding: 0.5em;
  border-right: solid 1px lightgray;
  border-left: solid 1px lightgray;
  color: mediumblue;
}

.page-nation li:hover {
  background-color: #ddd;
}
.Current {
  background-color: skyblue;
}
.pageCursor {
  pointer-events: none;
  color: lightgray;
}
</style>


