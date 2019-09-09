<template>
  <main class="content">
    <carousel :items="1" :autoplay="true" :nav="false" :autoplayTimeout="2000" :animateOut="animateOut" :autoplayHoverPause="true" class="portfolio-slider">
      <article class="portfolio-slider-item"  v-for="(slide, i) in dataJson.slides.slice(0,5)" :index="i" :key="i" >
        <router-link :to="{path: '/detail/'+ i}">
          <div class="layout" >
            <h1 class="portfolio-slider__title" data-aos="fade-in">
              <img :src="require('../../assets/images/logo/'+ slide.name +'_logo.png')" alt="" class="portfolio__logo" height="32">
              {{slide.title}}
            </h1>
          </div>
          <img :src="require('../../assets/images/slide/'+ slide.name +'_slide.png')"  class="portfolio-slider__img" alt="">
        </router-link>
      </article>
    </carousel>
    <!--카테고리탭-->
    <div class="portfolio-tab">
      <button class="tab__btn active">ALL</button>
      <!--<button class="tab__btn">2018</button>-->
      <!--<button class="tab__btn">2017</button>-->
      <!--<button class="tab__btn">2016</button>-->
    </div>
    <!--카테고리탭-->
    <section class="portfolio-lists">
        <article class="portfolio-list" v-for="(slide, i) in dataJson.slides" :index="i" :key="slide.title + i" data-aos="fade-in" data-aos-offset="0">
          <router-link :to="{path: '/detail/'+ i}">
            <img :src="require('../../assets/images/slide/'+ slide.name +'_slide.png')"  class="portfolio__thumnail" alt="">
            <div class="portfolio--hover">
              <div class="hover-content">
                <button class="portfolio__more-btn btn" ></button>
                <strong class="portfolio__date">{{slide.date}}</strong>
                <h1 class="portfolio__title">{{slide.title}}</h1>
                <!--<mark class="portfolio__category">{{slide.category}}</mark>-->
              </div>
            </div>
          </router-link>
        </article>
    </section>
  </main>
</template>

<script>
import carousel from 'vue-owl-carousel'
import json from '../../../data.json'

export default {
  name: 'Main',
  components: {
    carousel
  },
  props: {
  },
  data () {
    return {
      // animateIn: 'slideInDown',
      animateOut: 'fadeOut',
      detailShow: false,
      dataJson: json
    }
  },
  methods: {
    show (slide) {
      this.slide = slide
      this.detailShow = true
    },
    scrollUp () {
      window.scrollTo(0, 0)
    }
  }
}
</script>

<style lang="scss">
.portfolio-slider {
  /*margin-top: 3em;*/
  .owl-carousel .owl-stage {
    height: 700px;
    overflow: hidden;
    @media all and (max-width: 1300px) {
      height: auto;
    }
  }
  .owl-carousel .owl-item {
    height: 100%;
    img {
      width: auto;
    }
    .portfolio-slider__img {
      width: 100%;
    }
  }
  .portfolio-slider-item {
    height: 100%;
  }
  .owl-theme .owl-dots {
    position: absolute;
    bottom: 20px;
    width: 100%;
    .owl-dot {
      &.active span,
      &:hover span {
        opacity: 1;
        background: $white;
      }
    }
    .owl-dot {
      span {
        width: 70px;
        height: 6px;
        border-radius: 0;
        opacity: .6;
        background: $white;
      }
    }
    @media all and (max-width: 500px) {
      bottom: 6px;
      .owl-dot {
        span {
          width: 30px;
          height: 3px;
          margin: 0 4px;
        }
      }
    }
  }
}

/*tab*/
.portfolio-tab {
  text-align: center;
  margin-top: 2em;
  .tab__btn {
    padding: 7px 20px;
    font-weight: 600;
    margin-right: 5px;
    &.active,
    &:hover,
    &:active {
      background: $black;
      color: $white;
    }
  }
}
/*포폴 list*/
.portfolio-lists {
  margin-top: 2em;
  overflow: hidden;
  padding: 1em;
}
.portfolio-list {
  display: block;
  overflow: hidden;
  height: 290px;
  position: relative;
  width: 32.67%;
  float: left;
  margin-right: 0.99%;
  margin-bottom: 18px;
  &:nth-child(3n) {
    margin-right: 0;
  }
  .portfolio__thumnail {
    transition: all 0.4s ease;
    width: 100%;
    height: 100%;
  }
  .portfolio__date {
    color: $white;
    margin-top: 10px;
    display: block;
    font-weight: 500;
    opacity: .5;
  }
  .portfolio__title {
    color: $white;
    font-size: 1.22rem;
    margin-top: 7px;
    letter-spacing: -.3px;
    margin-bottom: 6px;
    font-family: $square;
    text-transform: uppercase;
  }
  .portfolio--hover {
    position: absolute;
    top: 0%;
    left: 0;
    height: 100%;
    width: 100%;
    padding: 1em;
    .hover-content {
      position: absolute;
      bottom: 5em;
      left: 1em;
      display: none;
      text-align: center;
      width: 94%;
    }
    .portfolio__more-btn {
      img {
        display: inline-block;
      }
    }
    &:before,
    &:after {
      display: block;
      opacity: 0;
      position: absolute;
      top: 20px;
      right: 20px;
      left: 20px;
      bottom: 20px;
      content: '';
    }
    &:before {
      border-bottom: 1px solid $white;
      border-top: 1px solid $white;
      transform: scale(0, 1);
      transition: opacity 0.45s, transform 0.5s;
    }
    &:after {
      border-left: 1px solid $white;
      border-right: 1px solid $white;
      transform: scale(1, 0);
      transition: opacity 0.35s, transform 0.5s;
    }
    &:hover,
    &:focus,
    &:active {
      &:before,
      &:after {
        opacity: 1;
        transform: scale(1);
        transition: opacity 0.45s, transform 0.5s;
      }
    }
  }
  &:hover,
  &:focus,
  &:active {
    .portfolio__thumnail {
      transform: scale(1.1);
    }
    .portfolio--hover {
      background: rgba(0,0,0,.7);
      left: 0;
      top: 0;
      transition: all 0.4s ease;
      cursor: pointer;
      .hover-content {
        display: block;
      }
    }
  }
  @media all and (max-width: 1300px) {
    width: 49.5%;
    margin-right: 0;
    margin-bottom: 12px;
    &:nth-child(2n) {
      margin-right: 0;
    }
    &:nth-child(2n-1) {
      margin-right: 1%;
    }
  }
  @media all and (max-width: 500px) {
    width: 100%;
    height: 200px;
    &:nth-child(2n-1) {
      margin-right: 0;
    }
  }
}

.portfolio__more-btn {
  width: 2px;
  height: 20px;
  background: $white;
  position: relative;
  overflow: visible;
  &:after {
    content: "";
    left: -9px;
    top: 9px;
    position: absolute;
    width: 21px;
    height: 2px;
    background: #ffffff;
    display: block;
    transition: all 0.3s ease-in-out;
  }
}
.slide-wrap {
  overflow: hidden;
}
.portfolio-slider {
  .owl-nav [class*='owl-'] {
    height: 45px;
    width: 45px;
    margin-top: 8px;
    border-radius: 0;
    &.owl-prev,
    &.owl-next {
      line-height: 30px !important;
      text-align: center !important;
      border: 1px solid #bbbbbb;
      background: #fff;
      opacity: .55;
      color: #bbbbbb;
      text-transform: uppercase;
      text-indent: -9999px;
      background-repeat: no-repeat;
      background-position: 50% 50%;
      &:hover {
        background-color: #fff;
        border-color: #b1b1b1;
        opacity: 1;
      }
    }
    &.owl-prev {
      background-image: url('../../assets/images/icons/icon_prev.png');
    }
    &.owl-next {
      background-image: url('../../assets/images/icons/icon_next.png');
    }
    &.prev {
      border-right: 0;
      margin-left: 10px;
    }
    &.next {
      margin-left: -6px;
    }
  }
}

</style>
