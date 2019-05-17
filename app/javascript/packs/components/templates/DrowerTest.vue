<template>
  <div>
    <input type="checkbox" id="navTgl">
    <!-- inputはdisplay=noneする -->

    <!-- ボタンは二つ用意する。一つは開くと閉じるの両用、もう一つは閉じる用 -->
    <label for="navTgl" class="open">
      <span></span>
    </label>

    <label for="navTgl" class="close"></label>

    <!-- ここから開いてくるナビの中身 -->
    <nav class="menu">
      <h2>menu</h2>
      <ul>
        <li>
          <a href="#article1">なつかしくってあったかい、きりぎりす。</a>
        </li>
        <li>
          <a href="#article2">透明ノイズと紙テクスチャ。</a>
        </li>
        <li>
          <a href="#article3">Webサイトの作り方のまとめ！ブラウザチェック。</a>
        </li>
        <li>
          <a href="#article4">Photoshopのシェイプでできること。</a>
        </li>
        <li>
          <a href="#article5">CSSだけでスライドショーはつくれるよ。</a>
        </li>
      </ul>
    </nav>
    <!-- ここまで -->

    <div class="contents">
      <header>
        <h1 class="logo">Lopan.jp</h1>
      </header>

      <article>
        <h1>Sample</h1>
        <section id="article1">
          <h2>なつかしくってあったかい、きりぎりす。</h2>
          <figure>
            <img src="//lopan.jp/wp/wp-content/uploads/2014/01/title.png">
            <figcaption>
              フォント好きな人がフォントについて熱く語る「LOVEFONT」という企画にあと乗りで、僕の好きなフォント「きりぎりす」について、語るってほどは語れませんが、記事にさせていただきます。
              <a
                href="#"
                class="btn"
              >この記事を読む</a>
            </figcaption>
          </figure>
        </section>

        <section id="article2">
          <h2>透明ノイズと紙テクスチャ。</h2>
          <figure>
            <img src="//lopan.jp/wp/wp-content/uploads/2013/09/title.jpg">
            <figcaption>
              ちょっとざらざらした質感とか、手触りを感じるテクスチャって、背景にさりげなく敷くだけで、ほんのり暖かみが出ていいですよね。そんなざらざらノイズ画像を半透明にした「透明ノイズ」のつくり方についてまとめてみました。
              <a
                href="#"
                class="btn"
              >この記事を読む</a>
            </figcaption>
          </figure>
        </section>

        <section id="article3">
          <h2>Webサイトの作り方のまとめ！ブラウザチェック。</h2>
          <figure>
            <img src="//lopan.jp/wp/wp-content/uploads/2013/06/title.jpg">
            <figcaption>
              トップページのコーディングがひと通り完了したので、下層ページのコーディングに移る前に、一旦ブラウザチェックしてみようと思います:)。ブラウザチェックからIEでの表示崩れを整えるまでのまとめです。
              <a
                href="#"
                class="btn"
              >この記事を読む</a>
            </figcaption>
          </figure>
        </section>

        <section id="article4">
          <h2>Photoshopのシェイプでできること。</h2>
          <figure>
            <img src="//lopan.jp/wp/wp-content/uploads/2013/03/title.jpg">
            <figcaption>
              拡大しても劣化しないし、ダブルクリックでカンタンに色を変えられるし、もちろんIllustratorでも使い回せる、そんなPhotoshopの万能シェイプの機能や特長について、個人的なまとめです。
              <a
                href="#"
                class="btn"
              >この記事を読む</a>
            </figcaption>
          </figure>
        </section>

        <section id="article5">
          <h2>CSSだけでスライドショーはつくれるよ。</h2>
          <figure>
            <img src="//lopan.jp/wp/wp-content/uploads/2012/12/title.jpg">
            <figcaption>
              CSS Programming Advent Calendar 2012、22日目のための記事です。前回の記事で作った、グローバルナビの下の大きめの画像のところを、CSSだけで実装してみました。
              <a
                href="#"
                class="btn"
              >この記事を読む</a>
            </figcaption>
          </figure>
        </section>
      </article>

      <footer>
        <p class="copyright">
          <small>© Lopan.jp</small>
        </p>
      </footer>
    </div>
  </div>
</template>

<style scoped>
@charset "utf-8";
/* body */
body {
  margin: 0;
  background: url(/assets/img/bg.jpg);
}
/* contents つまりメニューには効かしていない */
.contents {
  transition: transform 0.6s cubic-bezier(0.215, 0.61, 0.355, 1);
}

#navTgl:checked ~ .contents {
  transform: translateX(250px);
}

/* :::::: toggle button :::::: */
#navTgl {
  display: none;
}

label {
  cursor: pointer;
  position: fixed;
  top: 0;
  left: 0;
}

.open {
  z-index: 2;
  width: 48px;
  height: 48px;
  background: lightSeaGreen;
  transition: background 0.6s,
    transform 0.6s cubic-bezier(0.215, 0.61, 0.355, 1);
}

.open::before,
.open::after {
  content: "";
}
.open span,
.open::before,
.open::after {
  content: "";
  position: absolute;
  top: calc(50% - 1px);
  left: 30%;
  width: 40%;
  border-bottom: 2px solid white;
  transition: transform 0.6s cubic-bezier(0.215, 0.61, 0.355, 1);
}
.open::before {
  transform: translateY(-8px);
}
.open::after {
  transform: translateY(8px);
}
.close {
  z-index: 1;
  width: 100%;
  height: 100%;
  pointer-events: none;
  transition: background 0.6s;
}
#navTgl:checked + .open {
  background: indianRed;
  transform: translateX(250px);
}
#navTgl:checked + .open span {
  transform: scaleX(0);
}
#navTgl:checked + .open::before {
  transform: rotate(45deg);
}
#navTgl:checked + .open::after {
  transform: rotate(-45deg);
}
#navTgl:checked ~ .close {
  pointer-events: auto;
  background: rgba(0, 0, 0, 0.3);
}

/* :::::: drawer menu :::::: */
.menu {
  z-index: 1;
  position: fixed;
  overflow: auto;
  top: 0;
  left: 0;
  width: 250px;
  height: 100%;
  margin: 0;
  padding: 10px;
  box-sizing: border-box;
  background: rgba(0, 0, 0, 0.6);
  transform: translateX(-100%);
  transition: transform 0.6s cubic-bezier(0.215, 0.61, 0.355, 1);
}
.menu h2,
.menu a {
  color: white;
}
.menu h2 {
  text-align: center;
}
.menu ul {
  margin: 0;
  padding: 0;
}
.menu li {
  font-size: 0.8em;
  line-height: 1.4;
}
.menu li:not(:first-child) {
  border-top: 1px solid rgba(255, 255, 255, 0.6);
}
.menu a {
  display: block;
  padding: 1em 2em;
  text-decoration: inherit;
  transition: background 0.6s;
}
.menu a:hover {
  background: black;
}
#navTgl:checked ~ .menu {
  transform: none;
}

/* :::::: header, footer :::::: */
header,
footer {
  box-sizing: border-box;
  text-align: center;
}
header .logo,
footer .copyright {
  margin: 0;
  color: #553969;
  font-family: "Ubuntu Condensed", sans-serif;
  font-weight: 400;
  line-height: 120px;
  letter-spacing: 0.1em;
}
header {
  position: relative;
  margin-bottom: 40px;
}
footer {
  background: rgba(255, 255, 255, 0.6);
}
footer small {
  font-size: 1em;
}

/* :::::: article :::::: */
article {
  width: 100%;
  max-width: 647px;
  margin: 0 auto 100px;
  padding: 0 10px;
  box-sizing: border-box;
}
article h1 {
  width: 7em;
  height: 7em;
  margin: 0 auto;
  font-size: 1em;
  line-height: 7em;
  font-weight: normal;
  text-align: center;
  background: rgba(0, 0, 0, 0.05);
  border-radius: 50%;
}
section {
  margin: 4em 0;
}
section h2 {
  margin: 0 0 0.6em;
}
figure {
  position: relative;
  margin: 0;
  padding-bottom: 3.6em;
}
figure img {
  max-width: calc(100% - 10px);
  margin-bottom: 0.8em;
  padding: 5px;
  vertical-align: middle;
  background: rgba(255, 255, 255, 0.6);
}
figcaption {
  font-size: 0.8em;
}
section .btn {
  display: block;
  position: absolute;
  right: 0;
  bottom: 0;
  padding: 1em 2em;
  color: white;
  background: lightSeaGreen;
  text-align: center;
  text-decoration: inherit;
  transition: background 0.3s;
}
section .btn:hover {
  background: indianRed;
}
</style>

