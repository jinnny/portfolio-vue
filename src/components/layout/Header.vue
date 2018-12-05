<template>
  <header class="hd">
    <h1 class="logo">
      Y
    </h1>
    <nav class="menu">
      <ul>
        <li><router-link to="/" class="menu__link">PORTFOLIO</router-link></li>
        <li><router-link to="/about" class="menu__link">ABOUT</router-link></li>
        <!--<li><router-link to="/slider" class="menu__link">Slider2</router-link></li>-->
      </ul>
      <p class="contact">
        <a href="mailto:jinny920311@gmail.com">
          <img src="../../assets/images/icon_email.png" alt="">
        </a>
        <a href="tel:01057521440">
          <img src="../../assets/images/icon_call.png" alt="">
        </a>
      </p>
    </nav>
    <div class="notification" v-if="notify">
      이 페이지는
      <a href="https://www.microsoft.com/en-us/windows/microsoft-edge">Microsoft Edge</a>나
      <a href="https://www.google.com/chrome/">Google Chrome,</a>
      <a href="https://mozilla.org/firefox/">Firefox</a>
      에 최적화 되어있습니다.
    </div>
  </header>
</template>

<script>
import { detect } from 'detect-browser'
const browser = detect()

export default {
  name: 'Header',
  data () {
    return {
      notify: false
    }
  },
  methods: {
    notifyShow: function () {
      this.notify = true
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
    position: relative;
    border-right: 1px solid #f3f3f3;
    width: 15%;
    height: 100vh;
    padding-top: 84px;
    background: rgba(255, 255, 255, 0.6);
    .logo {
      color: $white;
      background: $purple;
      font-weight: 600;
      width: 61px;
      height: 61px;
      text-align: center;
      font-size: 30px;
      line-height: 61px;
      margin-left: auto;
      margin-right: auto;
      margin-bottom: 84px;
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
          content: '';
          position: absolute;
          left: -54px;
        }
        &.router-link-exact-active,
        &:hover {
          color: #363636;
          font-weight: 500;
          &:after {
            content: '';
            width: 54px;
            height: 3px;
            background: $purple;
            display: inline-block;
            position: absolute;
            left: 0;
            top: 19px;
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
