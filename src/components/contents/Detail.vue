<template>
  <article class="detail-content">
    <section class="detail">
      <router-link to="/" class="close__btn btn">
        <img src="../../assets/images/icons/icon_close.png" alt="닫기" >
      </router-link>
      <article class="detail-slide">
        <img :src="require('../../assets/images/slide/'+ dataJson.slides[current].name +'_slide.png')"  class="portfolio-slider__img" alt="">
        <div class="layout">
          <h1 class="portfolio-slider__title">
            <img :src="require('../../assets/images/logo/'+ dataJson.slides[current].name +'_logo.png')" alt="" class="portfolio__logo" height="32">
            {{dataJson.slides[current].title}}
          </h1>
        </div>
        <button class="detail__btn prev" v-if="this.current !== 0" @click="prev()">
          <img src="../../assets/images/icons/icon_prev.png" alt="이전">
          <strong class="detail__btn__text">PREV</strong>
        </button>
        <button class="detail__btn next" v-if="this.current !== this.dataJson.slides.length - 1"  @click="next()">
          <strong class="detail__btn__text">NEXT</strong>
          <img src="../../assets/images/icons/icon_next.png" alt="다음">
        </button>
      </article>
      <article class="detail-overview">
        <div class="layout">
          <div class="overview-text-area">
            <h1 class="detail__title overview__title" v-bind:style="{color: dataJson.slides[current].color}">Overview</h1>
            <p class="overview__content">
              {{dataJson.slides[current].description1}}<br>
              {{dataJson.slides[current].description2}}
            </p>
          </div>
          <img :src="require('../../assets/images/detail/'+ dataJson.slides[current].name +'_visual1.png')" alt="" class="overview__img">
        </div>
      </article>
      <article class="detail-skill" v-bind:style="{backgroundColor: dataJson.slides[current].color}">
        <div class="layout">
          <img :src="require('../../assets/images/detail/'+ dataJson.slides[current].name +'_visual2.png')" :alt="dataJson.slides[current].title" class="skill__img">
          <div class="skill-content">
            <ul class="skill-lists">
              <li class="skill__title">
                W3C Standard
                <ul>
                  <li>{{dataJson.slides[current].feature1}}</li>
                  <li>{{dataJson.slides[current].feature2}}</li>
                  <li>{{dataJson.slides[current].feature3}}</li>
                </ul>
              </li>
              <li class="skill__title">
                코드의 효율성 향상
                <ul>
                  <li>{{dataJson.slides[current].feature1}}</li>
                  <li>{{dataJson.slides[current].feature2}}</li>
                  <li>{{dataJson.slides[current].feature3}}</li>
                </ul>
              </li>
              <li class="skill__title">
                새로운 기술 활용
                <ul>
                  <li>{{dataJson.slide.feature1}}</li>
                  <li>{{dataJson.slide.feature2}}</li>
                  <li>{{dataJson.slide.feature3}}</li>
                </ul>
              </li>
              <li class="skill__title">
                새로운 기술 활용
                <ul>
                  <li>{{dataJson.slide.feature1}}</li>
                  <li>{{dataJson.slide.feature2}}</li>
                  <li>{{dataJson.slide.feature3}}</li>
                </ul>
              </li>
            </ul>
          </div>
        </div>
      </article>
        <!--<img :src="require('../../assets/images/detail/detail_bg_'+ slide.index + '.png')" alt="" class="bg">-->
      <div class="detail-preview">
        <h1 class="detail__title preview__title">Preview</h1>
        <a :href="dataJson.slide.path"  class="go-site__btn" target="_blank" v-bind:style="{color: dataJson.slides[current].color}">
          GO SITE
        </a>
        <img :src="require('../../assets/images/detail/'+ dataJson.slides[current].name +'_preview1.png')"  alt="" class="preview__img">
        <img :src="require('../../assets/images/detail/'+ dataJson.slides[current].name +'_preview2.png')"  alt="" class="preview__img">
      </div>
    </section>
  </article>
</template>

<script>
import json from '../../../data.json'

export default {
  name: 'Detail',
  data () {
    return {
      dataJson: json,
      current: parseInt(this.$route.params.index)
    }
  },
  watch: {
    current: function (newVal) {
      this.current = newVal
    }
  },
  mounted () {
    window.scrollTo(0, 0)
  },
  methods: {
    close () {
      this.$router.go(-1)
      // this.$emit('update:detailShow', false)
    },
    next () {
      let nextDetail = parseInt(this.current) + 1
      if (nextDetail > 0 && nextDetail <= this.dataJson.slides.length) {
        this.current = nextDetail
        this.$router.push('/detail/' + nextDetail)
      }
    },
    prev () {
      let prevDetail = parseInt(this.current) - 1
      if (prevDetail >= 0 && prevDetail <= this.dataJson.slides.length) {
        this.current = prevDetail
        this.$router.push('/detail/' + prevDetail)
      }
    }
  }
}
</script>

<style scoped lang="scss">
  .detail-content {
    transition: all 0.4s ease;
    background: #fff;
  }
  /*첫번째 섹션*/
  .detail {
    position: relative;
    .portfolio-slider__title {
      top: 38rem;
      bottom: auto;
    }
    .detail__date {
      color: $grey;
      font-size: 44px;
      display: block;
      margin: 80px 0 30px;
    }
    .detail__title {
      color: $black;
      font-weight: 100;
      font-size: 4rem;
    }
    .close__btn {
      position: fixed;
      right: 2em;
      top: 2em;
      z-index: 2;
    }
    .detail__btn {
      transition: all 0.2s ease;
      position: fixed;
      z-index: 100;
      top: 36em;
      text-align: left;
      display: flex;
      align-items: center;
      &:focus {
        outline: none;
      }
      &.next {
        right: 0;
        padding-left: 0px;
      }
      &.prev {
        left: 0;
        padding-right: 0px;
      }
      &:hover {
        background-color: rgba(0,0,0,0.5);
        &.next {
          padding-left: 40px;
        }
        &.prev {
          padding-right: 40px;
        }
        .detail__btn__text {
          display: block;
          opacity: 1;
          transition: all 0.2s ease;
        }
      }
    }
    .detail__btn__text {
      display: none;
      opacity: 0;
      font-size: 2rem;
      color: $yellow;
      font-weight: 700;
    }
  }
  //Overview
  .detail-overview {
    padding: 4em 0;
    background-image: url('../../assets/images/main/overview_bg.png');
    background-position: 80% 100%;
    background-repeat: no-repeat;
    background-color: #f8f8f8;
    position: relative;
    min-height: 520px;
    overflow: hidden;
    @include clearfix;
    .overview__content {
      font-family: $square;
    }
  }
  .overview-text-area {
    display: inline-block;
  }
  .overview__img {
    position: absolute;
    bottom: -160px;
    right: 15rem;
  }
  .overview-img-area {
    float: right;
  }
  //skill
  .detail-skill {
    padding: 6em 0;
    background: #09a7b4;
  }
  .skill-content {
    float: right;
    width: calc(100% - 800px);
    @include clearfix;
    .skill-lists {
      li {
        color: $white;
        font-family: $square;
        font-weight: 100;
        font-size: 0.95rem;
        opacity: .8;
        line-height: 1.6;
      }
      .skill__title {
        font-weight: 600;
        font-size: 1.1rem;
        opacity: 1;
        margin-bottom: 1rem;
      }
    }
  }
  /*prev(미리보기)*/
  .detail-preview {
    position: relative;
    display: inline-block;
    width: 100%;
    padding: 6em 15em;
    .preview__title {
      margin-bottom: 1.5rem;
    }
    .preview__img {
      width: 49%;
      float: left;
      box-shadow: 0 2px 10px rgba(0,0,0,.15);
      &:nth-child(3) {
        margin-right: 2%;
      }
    }
    .go-site__btn {
      color: $purple;
      border: 2px solid;
      font-weight: 700;
      padding: 10px 25px;
      border-radius: 8px;
      position: absolute;
      top: 50%;
      left: 50%;
      margin-left: -61px;
      margin-top: -23px;
      cursor: pointer;
      &:hover {
        background-color: $white;
      }
    }
  }
</style>
