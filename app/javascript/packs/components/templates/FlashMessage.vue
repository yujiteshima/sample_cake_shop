<template>
  <div class="flash-message" v-bind:class="{hidden:visible}">{{text}}</div>
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
    }
  }
};
</script>

<style scoped>
.flash-message {
  background: skyblue;
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
.hidden {
  transform: translate(0, -500px);
}
</style>


