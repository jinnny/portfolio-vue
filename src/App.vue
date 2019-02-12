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
    bottom: 9rem;
    color: $white;
    font-family: $square;
    font-size: 1.8rem;
    font-weight: 600;
  }
  .portfolio__logo {
    margin-bottom: 10px;
    display: block;
  }
</style>
