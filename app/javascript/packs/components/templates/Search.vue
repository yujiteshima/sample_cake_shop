<template>
  <div class="search-form-wrappar">
    <div class="select-seach">
      <select v-model="selected">
        <option disabled value>Please select one</option>
        <option>A</option>
        <option>B</option>
        <option>C</option>
      </select>
    </div>
    <div class="manual-input">
      <input v-model="keyword" placeholder="キーワードを入力">
    </div>

    <div class="select2">
      <select v-model="selected">
        <option disabled value>Please select one</option>
        <option>A</option>
        <option>B</option>
        <option>C</option>
      </select>
    </div>
    <br>
    <div class="lineform">
      <div class="select2">
        <select v-model="selected">
          <option disabled value>Please select one</option>
          <option>A</option>
          <option>B</option>
          <option>C</option>
        </select>
      </div>
      <div class="manual-input">
        <input v-model="keyword" placeholder="キーワードを入力">
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return { selected: "", keyword: "" };
  }
};
</script>

<style scoped>
.select2 {
  /* background-color: #0084b4; */
  color: #0084b4;
}
.select2 select {
  width: 13em;
  height: 3em;
  outline: none;
  /* アウトラインは表示されず、太さも0になります。これが初期値です。*/
  text-indent: 0.01px;
  /*text-indentプロパティは、文章の段落などの一行目のインデント幅を指定する際に使用します。インデントには負の値を指定することもできます。*/
  text-overflow: "";
  /*表示されない内容をどのように表示するかをしてする*/
  background: none transparent;
  /*Firefox、Safari、Chromeは、この指定がなくても透過されます。（IEやOperaではこの指定が必要です）*/
  vertical-align: middle;
  /*vertical-alignプロパティは、行のなかでのテキストや画像などの縦方向の揃え位置を指定する際に使用します。*/
  /* top:上端揃え、middle:中央揃え、bottom:下端揃え、他、text-top,text-bottom,super,sub,数値＋単位*/
  font-size: inherit;
  color: inherit;
  /* -webkit-appearance: button;
  -moz-appearance: button;
  appearance: button; */
}
.select2 option {
  /* background-color: #fff; */
  color: #333;
}

select::-ms-expand {
  display: none;
}
select:-moz-focusring {
  color: transparent;
  text-shadow: 0 0 0 #828c9a;
}
.lineform input {
  height: 42px;
}
.lineform {
  display: flex;
}
</style>


