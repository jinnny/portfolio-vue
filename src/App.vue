<template>
  <div id="app">
    <Header v-if="$route.meta.plainLayout"></Header>
    <router-view/>
    <Footer v-if="$route.meta.plainLayout"></Footer>
  </div>
</template>

<script>
import Header from './components/layout/Header'
import Footer from './components/layout/Footer'

export default {
  name: 'App',
  components: {
    Header,
    Footer
  }
}
</script>

<style lang="scss">
  @import "assets/style/base/_reset.scss";
  @import "assets/style/base/_fonts.scss";
  @import "assets/style/vendors/animate.css";
  ::selection {
    background: $black;
    color: $white;
  }
  ::-moz-selection {
    background: $black;
    color: $white;
  }
  html, body {
    height: 100%;
  }
  #app {
    /*height: 100%;*/
  }
  .layout {
    width: 1280px;
    margin: 0 auto;
    @media all and (max-width: 1300px) {
      width: 100%;
      padding: 0 1em;
    }
  }
  .content {
    width: 100%;
    height: 100%;
    /*position: relative;*/
    /*overflow: hidden;*/
    .content__title {
      font-size: 60px;
    }
  }
  .content-text {
    writing-mode: tb-rl;
    font-size: 100px;
    font-weight: 700;
    opacity: .04;
    transform: rotate(180deg);
    top: -30px;
    position: absolute;
    left: 120px;
    cursor: default;
  }
  .content-info-wrap {
    display: flex;
    justify-content: space-between;
    padding-right: 14em;
  }
  .content-info {
    margin-top: 3em;
    display: inline-block;
    .content-info__title {
      display: block;
      margin-bottom: 8px;
      font-size: 1.3rem;
    }
  }

  .portfolio-slider__title {
    position: absolute;
    bottom: 6rem;
    color: $white;
    font-family: $square;
    font-size: 1.8rem;
    font-weight: 600;
    text-shadow: 0 0 10px #252525;
    @media all and (max-width: 1300px) {
      left: 4rem;
      bottom: 4rem;
      font-size: 1.5rem;
    }
    @media all and (max-width: 500px) {
      left: 3rem;
      bottom: 3rem;
      font-size: 1.2rem;
    }
  }
  .portfolio__logo {
    margin-bottom: 10px;
    display: block;
    @media all and (max-width: 1300px) {
      height: 22px;
    }
    @media all and (max-width: 500px) {
      margin-bottom: 4px;
    }
  }
</style>
