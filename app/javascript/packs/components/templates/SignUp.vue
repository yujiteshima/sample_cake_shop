<template>
  <div class="sign-up-wrapper">
    <div class="page-header">
      <h2>新規会員登録</h2>
    </div>
    <div class="grid-container">
      <div class="nameform-title">
        お名前
        <span class="required-item">必須</span>
      </div>
      <div class="last-name">
        <input type="text">
      </div>
      <div class="first-name">
        <input type="text">
      </div>

      <div class="kanaform-title"></div>
      <div class="last-kana"></div>
      <div class="first-kana"></div>

      <div class="companyname-title"></div>
      <div class="companyname-form"></div>

      <div class="adress-title"></div>
      <div class="post-number"></div>
      <div class="select-prefecture"></div>
      <div class="adress1"></div>
      <div class="adress2"></div>

      <div class="phone-number-title"></div>
      <div class="phone-number"></div>

      <div class="email-title"></div>
      <div class="email1"></div>
      <div class="email2"></div>

      <div class="password-title"></div>
      <div class="password1"></div>
      <div class="password2"></div>

      <div class="birth-day-title"></div>
      <div class="birth-day"></div>

      <div class="sex-title"></div>
      <div class="sex"></div>

      <div class="job-title"></div>
      <div class="job"></div>

      <div class="agree-check"></div>
      <div class="agree"></div>

      <div class="agree-button"></div>
      <div class="disagree-button"></div>
    </div>
  </div>
</template>

<style scoped>
.grid-container {
  display: grid;
  grid-template-rows: 100px;
  grid-template-columns: 160px 160px 160px 160px 160px 160px 160px 160px 160px 160px 160px 160px;
  grid-template-areas: "... nameform-title nameform-title last-name last-name last-name last-name first-name first-name first-name first-name ...";
  /* " "
    " "
    " "
    " "
    " "
    " "
    " "
    " "
    " "
    " "
    " "
    " "
    " "
    " "
    " "
    " "
    " "; */
}
</style>

