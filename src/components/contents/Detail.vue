<template>
  <article class="content detail-content" :class="{active: detailShow}">
    <h2 class="content-text" style="">
      PORTFIOLIO
    </h2>
    <h1 class="content__title">PORTFIOLIO</h1>
    <article class="detail">
      <strong class="detail__date">{{slide.date}}</strong>
      <h1 class="detail__title">{{slide.title}}</h1>
      <ul class="detail__skills">
        <li class="skills__title">FEATURE</li>
        <li>{{slide.feature1}}</li>
        <li>{{slide.feature2}}</li>
        <li>{{slide.feature3}}</li>
        <li class="skills__title">ROLE</li>
        <li>{{slide.role1}}</li>
        <li>{{slide.role2}}</li>
        <li class="skills__title">DE</li>
        <li>{{slide.de}}</li>
      </ul>
      <a :href="slide.path"  class="go-site__btn" target="_blank">
        GO SITE
      </a>
      <!--<router-link :to="" >GO SITE</router-link>-->
      <div class="detail-img-area">
        <button class="close__btn btn" @click="close()">
          <img src="../../assets/images/icon_plus.png" alt="더보기">
        </button>
        <img :src="require('../../assets/images/detail/detail_bg_'+ slide.index + '.png')" alt="" class="bg">
      </div>
    </article>
  </article>
</template>

<script>

export default {
  name: 'Detail',
  props: [
    'detailShow',
    'slide'
  ],
  methods: {
    close () {
      this.$emit('update:detailShow', false)
    }
  }
}
</script>

<style scoped lang="scss">
  .detail-content {
    transition: all 0.4s ease;
    background: #fff;
    position: absolute;
    top: 0%;
    width: 100%;
    right: -100%;
    opacity: 0;
    overflow: hidden;
    &.active {
      right: 0;
      opacity: 1;
    }
  }
  .detail {
    .detail__date {
      color: $grey;
      font-size: 44px;
      display: block;
      margin: 80px 0 30px;
    }
    .detail__title {
      background: $purple;
      color: $white;
      font-family: $square;
      font-size: 30px;
      padding: 10px;
      width: calc(100% - 740px);
    }
    .detail__skills {
      margin: 40px 0;
      li {
        color: $grey;
        font-family: $square;
        font-weight: 500;
        margin-bottom: 4px;
        padding-left: 3px;
      }
      .skills__title {
        padding-left: 0;
        font-size: 20px;
        font-weight: 600;
        font-family: $mont;
        color: $black;
        margin-bottom: 5px;
        margin-top: 15px;
      }
    }
    .detail-img-area {
      width: 1080px;
      height: 100%;
      position: absolute;
      top: 0;
      right: 0;
      overflow: hidden;
      .close__btn {
        position: absolute;
        right: 1em;
        top: 1em;
        background: #333;
        img {
          transform: rotate(45deg);
        }
      }
    }
    .go-site__btn {
      color: $purple;
      border: 2px solid $purple;
      font-weight: 700;
      padding: 10px 25px;
      border-radius: 8px;
    }
  }
</style>
