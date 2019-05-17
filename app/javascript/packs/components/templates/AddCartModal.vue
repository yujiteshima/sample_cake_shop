<template>
  <div class="add-cart-modal-container">
    <div id="mask" v-bind:class="{hidden:modal}" @click="close"></div>
    <section id="modal" v-bind:class="{hidden:modal}">
      <div id="close" @click="close">
        <font-awesome-icon class="closeIcon" icon="times"/>
      </div>
      <div class="main">
        <p>カートに追加しました</p>
        <div class="button">
          <div class="cotinue-button" @click="close">お買い物を続ける</div>
          <router-link to="/cart" @click.native="close()" class="go-to-cart-button">
            <div>カートへ進む</div>
          </router-link>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  computed: {
    modal() {
      return this.$store.state.mM.addCartModal;
    }
  },
  methods: {
    close() {
      this.$store.dispatch("mM/modalClose");
    }
  }
};
</script>

<style scoped>
#mask {
  background: rgba(0, 0, 0, 0.4);
  position: fixed;
  top: 0;
  bottom: 0;
  right: 0;
  left: 0;
  z-index: 100;
}
#modal {
  position: relative;
}
p {
  font-size: 2rem;
  margin-bottom: 0.5rem;
}
#close {
  cursor: pointer;
  /* width: 200px;
  border: 1px solid #ccc;
  border-radius: 4px;
  text-align: center; */
  padding: 12px 0;
  margin: 16px auto 0;

  position: absolute;
  left: 91%;
  top: 0px;
}
.closeIcon {
  font-size: 2rem;
}
.closeIcon:hover {
  color: crimson;
}
.button {
  display: flex;
  justify-content: center;
}
.button a {
  text-decoration: none;
}
.cotinue-button {
  cursor: pointer;
  display: inline-block;
  height: 15%;
  width: 30%;
  background-color: #525263;
  color: antiquewhite;
  border: solid 1px #222;
  border-radius: 4px;
  margin-right: 10px;
  opacity: 0.7;
}
.cotinue-button:hover {
  opacity: 1;
}
.go-to-cart-button {
  display: inline-block;
  height: 15%;
  width: 30%;
  background-color: #de5d50;
  color: antiquewhite;
  border: solid 1px #de5d50;
  border-radius: 4px;
  opacity: 0.7;
}
.go-to-cart-button:hover {
  opacity: 1;
}
#modal {
  background: #fff;
  width: 60%;
  height: 15%;
  padding: 20px;
  border-radius: 4px;
  /* position: absolute;
  top: 0;
  left: 0;
  right: 0;
  margin: 0 auto; */
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  transition: 0.4s;
  z-index: 102;
}

#mask.hidden {
  display: none;
}
#modal.hidden {
  display: none;
  /* transform: translate(0, -700px); */
}
</style>

