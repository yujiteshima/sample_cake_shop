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
  /* background: skyblue; */
  color: aliceblue;
  padding: 20px;
  border-radius: 4px;
  position: absolute;
  top: 40px;
  left: 0;
  right: 0;
  margin: 0 auto;
  transition: 0.4s;
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
  transform: translate(0, -500px);
}
</style>


