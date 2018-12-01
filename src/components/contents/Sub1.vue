<template>
  <main class="content">
    <h2 class="content-text" style="">
      PORTFIOLIO
    </h2>
    <h1 class="content__title">PORTFIOLIO</h1>
    <div class="content-info-wrap">
      <p class="content-info">
        <strong class="content-info__title">Latest work</strong>
        2016~2018
      </p>
      <p class="content-info">
        <strong class="content-info__title">Term</strong>
        2016~2018
      </p>
    </div>
    <vue-glide>
      <vue-glide-slide v-for="i in 10" :key="i" >
        <img src="../../assets/images/thumnail_{{i}}.png" alt="">
      </vue-glide-slide>
      <template slot="control">
        <button data-glide-dir="<">prev</button>
        <button data-glide-dir=">">next</button>
      </template>
    </vue-glide>
  </main>
</template>

<script>
import Slider from './Slider'

export default {
  name: 'Sub1',
  components: {
    Slider
  }
}
</script>

<style scoped lang="scss">
  .content {
    width: calc(100% - 290px);
    height: 100%;
    position: relative;
    padding: 5em 4em;
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
</style>
