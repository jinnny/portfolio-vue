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
      <!--<div class="detail-btns">-->
        <!--<button class="btn prev" v-if="slide.index != '0'">-->
          <!--<img src="../../assets/images/icon_prev.png" alt="이전" width="14">-->
        <!--</button>-->
        <!--<button class="btn next" v-if="slide.index != '14'"  @click="next()">-->
          <!--<img src="../../assets/images/icon_next.png" alt="다음" width="14">-->
        <!--</button>-->
      <!--</div>-->
      <!--<router-link :to="" >GO SITE</router-link>-->
      <div class="detail-img-area">
        <button class="close__btn btn" @click="close()">
          <img src="../../assets/images/icon_plus.png" alt="더보기" width="15">
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
    },
    next () {
      // this.index = i
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
    z-index: 2;
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
        z-index: 2;
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
    .detail-btns {
      margin-top: 30px;
      .btn {
        background: #e4e4e4;
        box-shadow: 2px 2px 10px 0px rgba(0, 0, 0, 0.18);
        &.prev {
          margin-right: 10px;
        }
      }
    }
  }
</style>
