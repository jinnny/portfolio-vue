<template>
  <header class="hd">
    <h1 class="logo">
      <router-link to="/">
        Y
      </router-link>
    </h1>
    <nav class="hd-menu">
      <ul>
        <!--<li  v-on:click="menuOpen(false)">-->
          <!--<router-link to="/"  class="menu__link">Home</router-link>-->
        <!--</li>-->
        <li class="hd-menu__list">
          <router-link to="/about" class="hd-menu__item">About</router-link>
        </li>
        <li class="hd-menu__list">
          <router-link to="/" class="hd-menu__item">Portfolio</router-link>
        </li>
      </ul>
    </nav>
    <!--<button class="hd-menu__btn" @click="menuOpen()">-->
      <!--<i class="hd-menu__btn-line"></i>-->
    <!--</button>-->
    <!--<div class="area-menu" v-bind:class="{ active: menu }">-->
      <!--<nav class="menu">-->
        <!--<ul>-->
          <!--<li  v-on:click="menuOpen(false)">-->
            <!--<router-link to="/"  class="menu__link">home</router-link>-->
          <!--</li>-->
          <!--<li  v-on:click="menuOpen(false)">-->
            <!--<router-link to="/about" class="menu__link">ABOUT</router-link>-->
          <!--</li>-->
          <!--<li  v-on:click="menuOpen(false)">-->
            <!--<router-link to="/" class="menu__link">portfolio</router-link>-->
          <!--</li>-->
        <!--</ul>-->
        <!--<div class="area-menu-links">-->
          <!--<a href="mailto:jinny920311@gmail.com" class="menu__links">-->
           <!--<img src="../../assets/images/icon_email.png" alt="메일 보내기" width="20">-->
          <!--</a>-->
          <!--<a href="tel:01057521440"  class="menu__links">-->
           <!--<img src="../../assets/images/icon_call.png" alt="전화 하기" width="18">-->
          <!--</a>-->
          <!--&lt;!&ndash;<a href="https://jemajin.blogspot.kr/" class="menu__links">&ndash;&gt;-->
            <!--&lt;!&ndash;<img src="images/icon_blog.svg" alt="블로그바로가기" width="15" height="15">&ndash;&gt;-->
          <!--&lt;!&ndash;</a>&ndash;&gt;-->
        <!--</div>-->
      <!--</nav>-->
    <!--</div>-->
    <!--<nav class="menu">-->
    <!--<ul>-->
    <!--<li><router-link to="/" class="menu__link">PORTFOLIO</router-link></li>-->
    <!--<li><router-link to="/about" class="menu__link">ABOUT</router-link></li>-->
    <!--&lt;!&ndash;<li><router-link to="/slider" class="menu__link">Slider2</router-link></li>&ndash;&gt;-->
    <!--</ul>-->
    <!--<p class="contact">-->
    <!--<a href="mailto:jinny920311@gmail.com">-->
    <!--<img src="../../assets/images/icon_email.png" alt="">-->
    <!--</a>-->
    <!--<a href="tel:01057521440">-->
    <!--<img src="../../assets/images/icon_call.png" alt="">-->
    <!--</a>-->
    <!--</p>-->
    <!--</nav>-->
    <!--<div class="notification" v-if="notify">-->
      <!--이 페이지는-->
      <!--<a href="https://www.microsoft.com/en-us/windows/microsoft-edge">Microsoft Edge</a>나-->
      <!--<a href="https://www.google.com/chrome/">Google Chrome,</a>-->
      <!--<a href="https://mozilla.org/firefox/">Firefox</a>-->
      <!--에 최적화 되어있습니다.-->
    <!--</div>-->
  </header>
</template>

<script>
import {detect} from 'detect-browser'

const browser = detect()

export default {
  name: 'Header',
  data () {
    return {
      notify: false,
      menu: false
    }
  },
  methods: {
    notifyShow: function () {
      this.notify = true
    },
    menuOpen: function () {
      this.menu = !this.menu
    },
    closeMenu: function () {
      this.menu = false
    }
  },
  created () {
    if (browser && browser.name === 'ie') {
      this.notify = true
    } else {
      this.notify = false
    }
  }
}
</script>

<style scoped lang="scss">
  .hd {
    position: absolute;
    width: 95%;
    padding: 1.6em 0em 1.6em 4em;
    z-index: 10;
    &.about {
      background: #1b1b1b;
      width: 100%;
      padding: 1.6em 4em;
    }
    .logo {
      color: $white;
      background: $black;
      font-weight: 600;
      width: 50px;
      height: 50px;
      text-align: center;
      font-size: 30px;
      line-height: 50px;
      display: inline-block;
      * {
        color: inherit;
        font: inherit;
        display: block;
      }
    }
    @media all and (max-width: 500px) {
      padding: 1.2em 0em 1.2em 1.2em;
      width: 90%;
      .logo {
        width: 40px;
        height: 40px;
        font-size: 20px;
        line-height: 40px;
      }
    }
    /*메뉴*/
    .hd-menu {
      float: right;
      .hd-menu__list {
        float: left;
        .hd-menu__item {
          padding: 12px;
          font-weight: 600;
          font-size: 1.2rem;
          display: block;
          color: $white;
          margin-right: 18px;
          &:active,
          &:hover {
            color: $black;
            background-color: $yellow;
          }
          @media all and (max-width: 500px) {
            margin-right: 0;
          }
        }
      }
    }
    .hd-menu__btn {
      width: 44px;
      height: 44px;
      display: block;
      float: right;
      position: relative;
      z-index: 100;
      transition: all 0.2s ease;
      text-transform: uppercase;
      letter-spacing: -1px;
      background: transparent;
      border: 0;
      text-align: center;
      .hd-menu__btn-line {
        width: 83%;
        height: 2px;
        margin: 0 auto;
        background: #3d4268;
        display: block;
        -webkit-transition: all 0.3s ease-in-out;
        -moz-transition: all 0.3s ease-in-out;
        -o-transition: all 0.3s ease-in-out;
        transition: all 0.3s ease-in-out;
        -webkit-border-radius: 3px;
        -moz-border-radius: 3px;
        border-radius: 3px;
        &:before,
        &:after {
          width: 100%;
          height: 2px;
          background: inherit;
          display: block;
          -webkit-transition: all 0.3s ease-in-out;
          -moz-transition: all 0.3s ease-in-out;
          -o-transition: all 0.3s ease-in-out;
          transition: all 0.3s ease-in-out;
          content: "";
          position: absolute;
          -webkit-border-radius: 3px;
          -moz-border-radius: 3px;
          border-radius: 3px;
        }
        &:before {
          top: 10px;
        }
        &:after {
          top: 32px;
          width: 65%;
        }
      }
    }
    .area-menu {
      background: #0a0919;
      padding: 1%;
      position: fixed;
      top: -100%;
      left: 0%;
      width: 100%;
      height: 0;
      bottom: 0;
      z-index: 10;
      transition: all 0.4s;
      &.active {
        height: 100%;
        top: 0;
      }
      .menu {
        border: 1px solid rgba(255, 255, 255, .3);
        text-align: center;
        text-transform: capitalize;
        height: 100%;
        ul {
          margin-top: 14%;
          margin-bottom: 11%;
          li a {
            color: $white;
            font-size: 3.5rem;
            transition: all 0.2s;
            font-weight: 600;
            &:hover {
              color: $purple;
            }
          }
        }
      }
      .area-menu-links {
        .menu__links {
          opacity: 0.4;
          border: 1px solid #dddddd;
          vertical-align: middle;
          width: 40px;
          height: 38px;
          display: inline-block;
          line-height: 44px;
          margin: 0 5px 0 0;
          img {
            margin: 0 auto;
          }
          &:first-child {
            line-height: 46px;
            &:hover {
              background-color: #FF9800;
              border-color: #FF9800;
            }
          }
          &:hover {
            background-color: #CDDC39;
            border-color: #CDDC39;
          }
        }
      }
    }
    .menu {
      li {
        margin-bottom: 15px;
      }
      .menu__link {
        color: $lgrey;
        display: block;
        padding: 10px 75px;
        position: relative;
        overflow: hidden;
        &:after {
          transition: all 0.2s ease;
        }
        &.router-link-exact-active,
        &:hover {
          color: $purple;
          font-weight: 500;
          &:after {
          }
        }
      }
    }
    .contact {
      position: absolute;
      bottom: 80px;
      width: 100%;
      text-align: center;
      a {
        display: inline-block;
        padding: 10px 20px;
        opacity: .9;
        filter: grayscale(40);
        transition: all 0.2s ease;
        &:hover {
          opacity: 1;
          filter: grayscale(0);
        }
      }
    }
    .notification {
      position: fixed;
      top: 25px;
      left: 0;
      width: 100%;
      text-align: center;
      font-size: 17px;
      z-index: 1;
      a {
        color: $purple;
      }
    }
  }
</style>
