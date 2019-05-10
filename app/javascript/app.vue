<template>
  <div id="app">
    <TopNav/>
    <FlashMessage/>
    <Modal/>
    <LoginModal/>
    <!-- <LoginModal v-if="modal"/> -->
    <!-- <LoginModal v-if="showModal" @close="showModal = false"> -->
    <!--
      you can use custom content here to overwrite
      default content
    -->
    <!-- <h3 slot="header">custom header</h3> -->
    <!-- </LoginModal> -->
    <!-- <div class="message">
      <NoticeMessage/>
    </div>-->
    <router-view/>
    <!-- test -->
    <!-- <div class="outer__buttons">
      <button @click="showFlashMessage">Show Flush Message 1</button>
      <button @click="showFlashMessage2">Show Flush Message 2</button>
      <button @click="showFlashMessage3">Show Flush Message 3</button>
    </div>-->
    <!-- test -->
    <BottomNav/>
  </div>
</template>
<script>
import TopNav from "packs/components/templates/TopNav.vue";
import BottomNav from "packs/components/templates/BottomNav.vue";
import NoticeMessage from "packs/components/templates/NoticeMessage";
import Modal from "packs/components/templates/Modal.vue";
import FlashMessage from "packs/components/templates/FlashMessage.vue";
import LoginModal from "packs/components/templates/LoginModal.vue";
// import LoginModal.vue from "packs/components/templates/LoginModal.vue";
export default {
  components: {
    TopNav,
    BottomNav,
    NoticeMessage,
    Modal,
    FlashMessage,
    LoginModal
    // LoginModal
  }
  // noticeMessage methods
  // methods: {
  //   showFlashMessage() {
  //     this.$store.dispatch("showFlashMessage", {
  //       text: "Message!",
  //       duration: 4000,
  //       mode: "done"
  //     });
  //   },
  //   showFlashMessage2() {
  //     this.$store.dispatch("showFlashMessage", {
  //       text: "Loading...",
  //       duration: 0,
  //       mode: "processing"
  //     });
  //     setTimeout(() => {
  //       this.$store.dispatch("showFlashMessage", {
  //         text: "Completed!",
  //         duration: 4000,
  //         mode: "done"
  //       });
  //     }, 1500);
  //   },
  //   showFlashMessage3() {
  //     this.$store.dispatch("showFlashMessage", {
  //       text: "Error!",
  //       duration: 4000,
  //       mode: "error"
  //     });
  //   }
  // }
};
</script>

<style lang="scss">
body {
  background-color: #f6f6f6;
  margin: 0;
  font-family: Arial, Helvetica, sans-serif;
}
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
// .message {
//   position: relative;
//   width: 100%;
//   height: 100%;
// }
</style>