<template>
  <div class="contact">
    <h1>This is a contact page</h1>
    <h1>{{ testMessage }}</h1>
    <button @click="doAjax">AjaxTest</button>
  </div>
</template>

<script>
import { error } from "util";
export default {
  data() {
    return { testMessage: "" };
  },
  methods: {
    doAjax() {
      console.log("start Ajax");
      let message = { data: "helloRailsApi" };
      console.log(message.data + "in vue comp");
      let json = fetch("/api/products", {
        mode: "cors",
        headers: {
          //ヘッダーにこの記述が無ければRailsに送られない。長い時間つまっていた部分である。
          Accept: "application/json",
          "Content-Type": "application/json"
        },
        credentials: "include",
        method: "POST",
        body: JSON.stringify({
          data: "helloRailsApi"
        })
      });
      Promise.resolve(json)
        .then(result => {
          return result.json();
        })
        .then(response => {
          console.log(response);
          this.testMessage = response.message;
        })
        .catch(error => cosole.log(error));
    }
  }
};
</script>
