<template>
  <div id="app">
    <Header v-if="$route.meta.plainLayout"></Header>
    <router-view/>
    <!--<Footer v-if="$route.meta.plainLayout"></Footer>-->
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
  body {
    background: url("../src/assets/images/bg_pattern.png") 100% 100% no-repeat;
  }
  html, body {
    height: 100%;
  }
  #app {
    height: 100%;
    display: flex;
  }
  .content {
    width: calc(100% - 290px);
    height: 100%;
    position: relative;
    padding: 5em 4em;
    overflow: hidden;
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
    left: 35px;
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
  .btn {
    width: 50px;
    height: 50px;
    line-height: 55px;
    display: block;
    border-radius: 50%;
    text-align: center;
    background-color: $purple;
    box-shadow: 3px 5px 10px 0px rgba(0, 0, 0, 0.18);
    img {
      width: 15px !important;
    }
  }
</style>
