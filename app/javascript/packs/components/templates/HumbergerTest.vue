<template>
  <div id="wrapper">
    <nav class="menu">
      <ul>
        <li>
          <a href="#">メニュー1</a>
        </li>
        <li>
          <a href="#">メニュー2</a>
        </li>
        <li>
          <a href="#">メニュー3</a>
        </li>
        <li>
          <a href="#">メニュー4</a>
        </li>
        <li>
          <a href="#">メニュー5</a>
        </li>
      </ul>
    </nav>

    <button type="button" id="nav-btn" class="hamburger">
      <span class="bdr"></span>
      <span class="bdr"></span>
      <span class="bdr"></span>
    </button>

    <div id="contents">横幅が768pxになるとハンバーガーメニューが表示されます</div>
  </div>
  <!-- wrapper -->
</template>

<style lang="scss" scoped>
@mixin mobile {
  @media screen and (max-width: 768px) {
    @content;
  }
}

@mixin pc {
  @media screen and (min-width: 769px) {
    @content;
  }
}

* {
  margin: 0;
  padding: 0;
}

li {
  list-style: none;
}

a {
  color: #000;
  text-decoration: none;
}

//CSS共通
#wrapper {
  font-size: 1.2rem;
  font-weight: 900;
  width: 100%;
  text-align: center;
}

#contents {
  display: flex;
  width: 100%;
  justify-content: center;
  align-items: center;
  transform: translateX(0);
  transition: 0.4s transform;
}

#contents {
  height: 1000px;
  background-color: #ddd;
}

#nav-btn {
  display: none;
  outline: none;
}

.menu {
  ul {
    display: flex;
    justify-content: flex-end;
    align-items: center;
    height: 70px;
    background: #ffc400;
    li {
      padding: 0 20px;
      transition: all 0.5s;
      a {
        position: relative;
        display: inline-block;
        text-decoration: none;
        &:after {
          position: absolute;
          bottom: -4px;
          left: 0;
          content: "";
          width: 100%;
          height: 2px;
          background: #333;
          transform: scale(0, 1);
          transform-origin: left top;
          transition: transform 0.3s;
        }
        &:hover::after {
          transform: scale(1, 1);
        }
      }
    }
  }
}

@include mobile {
  #nav-btn {
    display: block;
    position: fixed;
    z-index: 11;
    top: 10px;
    right: 10px;
    background: transparent;
    border: none;
  }

  //ハンバーガーボタン
  .hamburger {
    position: relative;
    display: block;
    width: 50px;
    height: 44px;
    .bdr {
      position: absolute;
      left: 0;
      width: 100%;
      height: 4px;
      border-radius: 4px;
      background: #000;
      transition: all 0.5s;
      &:nth-child(1) {
        top: 0;
      }
      &:nth-child(2) {
        top: 20px;
      }
      &:nth-child(3) {
        bottom: 0;
      }
    }
    &.is-active {
      .bdr {
        background: #000;
        &:nth-child(1) {
          transform: translateY(20px) rotate(-45deg);
        }
        &:nth-child(2) {
          opacity: 0;
        }
        &:nth-child(3) {
          transform: translateY(-20px) rotate(45deg);
        }
      }
    }
  }
  .menu {
    position: fixed;
    top: 0;
    right: 0;
    width: 150px;
    height: 100%;
    padding-top: 70px;
    text-align: left;
    font-size: 13px;
    background: #ffc400;
    z-index: 1;
    transform: translateX(150px);
    transition: 0.4s all;
    ul {
      display: block;
      width: 150px;
      line-height: 70px;
      background: none;
      color: #000;
      text-align: center;
      li {
        transition: all 0.5s;
        &:hover {
          background: #fff;
        }
        a {
          &:after {
            display: none;
          }
        }
      }
    }
  }
  .nav-open {
    .menu {
      transform: translateX(0);
    }
    #contents {
      transform: translateX(-150px);
    }
  }
}
</style>

<script>
export default {
  function() {
    //ハンバーガーボタンクリック時の関数
    //querySelector：CSSセレクタで要素を取得
    const $hamburger = document.querySelector(".hamburger");
    //addEventListener：イベント処理（click）
    $hamburger.addEventListener("click", function() {
      //ON時はis-activeクラス付与、OFF時はis-activeクラス削除
      $hamburger.classList.toggle("is-active");
    });

    //全体を囲む要素をid[#wrapper]で指定
    const $wrapper = document.getElementById("wrapper");
    //メニューオープン・クローズのボタン要素をid[nav-btn]で指定
    const $navBtn = document.getElementById("nav-btn");

    //クリックしたら navToggle関数実行
    $navBtn.addEventListener("click", navToggle);

    //navToggleの関数
    function navToggle() {
      //contains:文字列が引数に指定した文字列を含まれているかどうか[nav-open]
      if ($wrapper.classList.contains("nav-open")) {
        //メニュークローズ時
        navCloseFunc();
      } else {
        //メニューオープン時
        navOpenFunc();
      }
    }

    //メニューオープン時の関数
    function navOpenFunc() {
      //wrapperのclass[nav-open]付与
      $wrapper.classList.add("nav-open");
    }
    //メニュークローズ時の関数
    function navCloseFunc() {
      //wrapperのclass[nav-open]削除
      $wrapper.classList.remove("nav-open");
    }
  }
};
</script>

