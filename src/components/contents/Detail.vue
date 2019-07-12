<template>
  <article class="detail-content">
    <section class="detail">
      <router-link to="/" class="close__btn btn">
        <img src="../../assets/images/icons/icon_close.png" alt="닫기" >
      </router-link>
      <article class="detail-slide" :style="{'background-image': 'url(' + require('../../assets/images/slide/'+ dataJson.slides[current].name +'_slide.png')}">
        <div class="layout">
          <h1 class="portfolio-slider__title" data-aos="fade-up" data-aos-delay="100">
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
            <h1 class="detail__title overview__title" v-bind:style="{color: dataJson.slides[current].color}" data-aos="fade-in" >Overview</h1>
            <p class="overview__content" data-aos="fade-up">
              {{dataJson.slides[current].description1}}
            </p>
          </div>
          <img :src="require('../../assets/images/detail/'+ dataJson.slides[current].name +'_visual1.png')" alt="" class="overview__img" data-aos="fade-up">
        </div>
      </article>
      <article class="detail-skill" v-bind:style="{backgroundColor: dataJson.slides[current].color}">
        <div class="layout">
          <img :src="require('../../assets/images/detail/'+ dataJson.slides[current].name +'_visual2.png')" height="500" :alt="dataJson.slides[current].title" class="skill__img" data-aos="slide-up">
          <div class="skill-content">
            <ul class="skill-lists" data-aos="fade-up" data-aos-delay="100">
              <li class="skill__title" >
                ROLE
                <ul class="role__item-lists">
                  <li>{{dataJson.slides[current].role}}</li>
                </ul>
              </li>
              <li class="skill__title">
                WORK
                <ul>
                  <li>{{dataJson.slides[current].feature1}}</li>
                  <li v-if="dataJson.slides[current].feature2 !== ''">{{dataJson.slides[current].feature2}}</li>
                  <li v-if="dataJson.slides[current].feature3 !== ''">{{dataJson.slides[current].feature3}}</li>
                  <li v-if="dataJson.slides[current].feature4 !== ''">{{dataJson.slides[current].feature4}}</li>
                  <li v-if="dataJson.slides[current].feature5 !== ''">{{dataJson.slides[current].feature5}}</li>
                  <li v-if="dataJson.slides[current].feature6 !== ''">{{dataJson.slides[current].feature6}}</li>
                  <li v-if="dataJson.slides[current].feature7 !== ''">{{dataJson.slides[current].feature7}}</li>
                  <li v-if="dataJson.slides[current].feature8 !== ''">{{dataJson.slides[current].feature8}}</li>
                  <li>{{dataJson.slides[current].de}}</li>
                </ul>
              </li>
            </ul>
          </div>
        </div>
      </article>
        <!--<img :src="require('../../assets/images/detail/detail_bg_'+ slide.index + '.png')" alt="" class="bg">-->
      <div class="detail-preview">
        <div class="layout">
          <h1 class="detail__title preview__title">Preview</h1>
          <img :src="require('../../assets/images/detail/'+ dataJson.slides[current].name +'_preview1.png')"  alt="" class="preview__img" data-aos="fade-left" >
          <img :src="require('../../assets/images/detail/'+ dataJson.slides[current].name +'_preview2.png')"  alt="" class="preview__img" data-aos="fade-right" data-aos-delay="100" >
          <div class="preview-btn-area">
            <a :href="dataJson.slides[current].path"  class="go-site__btn" target="_blank" v-bind:style="{color: dataJson.slides[current].color}" data-aos="fade-up" data-aos-delay="100" >
              GO SITE
            </a>
          </div>
        </div>
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
        window.scrollTo(0, 0)
      }
    },
    prev () {
      let prevDetail = parseInt(this.current) - 1
      if (prevDetail >= 0 && prevDetail <= this.dataJson.slides.length) {
        this.current = prevDetail
        this.$router.push('/detail/' + prevDetail)
        window.scrollTo(0, 0)
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
    .detail-slide {
      height: 91vh;
      background-size: cover;
      background-repeat: no-repeat;
      background-position: 50% 50%;
      position: relative;
      @media all and (max-width: 600px) {
        height: 60vh;
      }
    }
    .portfolio-slider__title {
      bottom: 12vh;
      @media all and (max-width: 600px) {
        bottom: 7vh;
      }
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
      @media all and (max-width: 430px) {
        font-size: 3rem;
      }
    }
    .close__btn {
      position: fixed;
      right: 2em;
      top: 2em;
      z-index: 2;
      @media all and (max-width: 600px) {
        right: 1em;
        img {
          width: 20px;
        }
      }
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
        @media all and (min-width: 900px) {
          background-color: rgba(0, 0, 0, 0.5);
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
      @media all and (max-width: 600px) {
        img {
          width: 60px;
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
    background-position: 95% 100%;
    background-repeat: no-repeat;
    background-color: #f8f8f8;
    position: relative;
    min-height: 520px;
    overflow: hidden;
    @include clearfix;
    .overview__content {
      font-family: $square;
      width: 46%;
      line-height: 1.4rem;
      margin-top: 1em;
      word-break: keep-all;
    }
    @media all and (max-width: 1300px) {
      background-image: none;
      height: 600px;
      .overview__content {
        width: 100%;
      }
    }
    @media all and (max-width: 600px) {
      padding: 3em 0;
      height: 480px;
      min-height: auto;
    }
    @media all and (max-width: 430px) {
      height: 400px;
    }
  }
  .overview-text-area {
    display: inline-block;
  }
  .overview__img {
    position: absolute;
    bottom: -160px;
    right: 12rem;
    @media all and (max-width: 1600px) {
      right: 6rem;
    }
    @media all and (max-width: 1300px) {
      right: 1%;
      float: right;
      position: relative;
      bottom: auto;
    }
    @media all and (max-width: 600px) {
      margin-top: 1em;
      width: 60%;
    }
  }
  .overview-img-area {
    float: right;
  }
  //skill
  .detail-skill {
    padding: 6em 0;
    background: #09a7b4;
    display: inline-block;
    width: 100%;
    .layout {
      display: flex;
      justify-content: space-around;
    }
    @media all and (max-width: 1300px) {
      padding: 4em 0 3em;
      .layout {
        flex-direction: column;
        .skill__img {
          height: auto;
          padding: 2em;
          width: 100%;
          @media all and (max-width: 500px) {
            padding: 1em;
          }
        }
      }
    }
  }
  .skill-content {
    float: right;
    width: calc(100% - 800px);
    margin-top: 2em;
    @include clearfix;
    @media all and (max-width: 1300px) {
      width: 100%;
    }
    .skill-lists {
      li {
        color: $white;
        font-family: $square;
        font-weight: 100;
        font-size: 0.95rem;
        line-height: 1.6;
      }
      .skill__title {
        font-weight: 600;
        font-size: 1.1rem;
        opacity: 1;
        margin-bottom: 1rem;
      }
      ul:not(.role__item-lists) li {
        padding-left: 1rem;
        position: relative;
        &:before {
          content: '-';
          position: absolute;
          left: .2rem;
        }
      }
    }
  }
  /*prev(미리보기)*/
  .detail-preview {
    position: relative;
    display: inline-block;
    width: 100%;
    padding: 6em 0;
    overflow: hidden;
    .preview__title {
      margin-bottom: 1.5rem;
    }
    .preview__img {
      width: 49%;
      float: left;
      box-shadow: 0 2px 10px rgba(0,0,0,.15);
      &:nth-child(2) {
        margin-right: 2%;
      }
      @media all and (max-width: 600px) {
        width: 100%;
        &:nth-child(2) {
          margin-right: 0;
          margin-bottom: 2%;
        }
      }
    }
    .preview-btn-area {
      @include clearfix;
      text-align: center;
      float: left;
      width: 100%;
      margin: 2em 0 0;
    }
    .go-site__btn {
      color: $purple;
      border: 2px solid;
      font-weight: 700;
      padding: 10px 25px;
      border-radius: 8px;
      cursor: pointer;
      display: inline-block;
      &:hover {
        background-color: $white;
      }
    }
  }
</style>
