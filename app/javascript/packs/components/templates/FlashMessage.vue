<template>
  <div class="flash-message" v-bind:class="flashClass">{{text}}</div>
</template>

<script>
export default {
  // data() {
  //   return {
  //     text: "this is a Flash Message!!!",
  //     mode: "processing",
  //     visible: true
  //   };
  // },
  computed: {
    mode: function() {
      return this.$store.state.fM.mode;
    },
    text: function() {
      return this.$store.state.fM.text;
    },
    visible: function() {
      return this.$store.state.fM.visible;
    },
    flashClass: function() {
      return {
        darkblue: this.mode === "processing",
        lightblue: this.mode === "done",
        red: this.mode === "error",
        hidden: this.visible
      };
    }
  }
};
</script>

<style scoped>
.flash-message {
  /* position: fixed; */
  height: 1em;
  /* background: skyblue; */
  color: aliceblue;
  padding: 20px;
  border-radius: 4px;
  top: 0px;
  left: 0;
  right: 0;
  margin: 0 auto;
  transition: 0.4s;
  position: sticky;
  font-size: 2em;
  z-index: 999;
}
.darkblue {
  background-color: #0e6191;
  border-color: #054468;
  color: whitesmoke;
}
.lightblue {
  background-color: #72d0ff;
  border-color: #3386af;
}
.red {
  background-color: #880000;
  border-color: #550000;
  color: whitesmoke;
}
.hidden {
  /* display: none; */
  transform: translate(0, -500px);
}
</style>


