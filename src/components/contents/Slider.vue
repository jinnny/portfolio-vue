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
    <carousel-3d :perspective="0" :space="340" :width="320" :height="405"
                 :display="7" :border="0" :loop="false" :controlsVisible="true">
      <slide v-for="(slide, i) in slides" :index="i" :key="i">
        <router-link to="" class="portfolio-content">
          <img :src="require('../../assets/images/list/thumnail_' + i+ '.png')" alt="" class="portfolio__thumnail">
          <div class="portfolio--hover" v-on:click="show(slide)">
            <div class="hover-content">
              <button class="portfolio__more-btn btn" >
                <img src="../../assets/images/icon_plus.png" alt="더보기" width="15">
              </button>
              <strong class="portfolio__date">{{slide.date}}</strong>
              <h1 class="portfolio__title">{{slide.title}}</h1>
              <mark class="portfolio__category">{{slide.category}}</mark>
            </div>
          </div>
        </router-link>
      </slide>
    </carousel-3d>
    <Detail :slide="slide" :detailShow.sync="detailShow"></Detail>
  </main>
</template>

<script>
import { Carousel3d, Slide } from 'vue-carousel-3d'
import Detail from './Detail.vue'

export default {
  name: 'Slider',
  components: {
    Detail,
    Carousel3d,
    Slide
  },
  data () {
    return {
      detailShow: false,
      slide: {},
      slides: [
        {
          category: 'Responsive Web',
          title: 'Blockchain explorer',
          path: 'http://block.starcoin.tv',
          date: '2018.11',
          feature1: '웹표준, 반응형',
          feature2: '크로스브라우징(IE11, Safari, Opera, Chrome, Firefox)',
          feature3: 'Sass 사용, Vuetify custom',
          role1: '전 페이지 퍼블리싱',
          role2: '디자인',
          de: 'Vue.js 협업',
          index: '0'
        },
        {
          category: 'Responsive Web',
          title: 'contentdeal IR',
          path: 'http://contentsdeal.net/#/',
          date: '2018.10',
          feature1: '웹표준, 반응형',
          feature2: '크로스브라우징(IE9, Safari, Opera, Chrome, Firefox)',
          feature3: 'Sass 사용, 다국어(한,영,중)',
          role1: '스타일 가이드 및 레이아웃 설계',
          role2: '퍼블리싱(50%) 및 퍼블리싱 총괄',
          de: 'Vue.js 협업',
          index: '1'
        },
        {
          category: 'Responsive Web',
          title: 'KSTAR 티켓몰 홈페이지',
          path: 'https://www.kstar.tv/#!/home',
          date: '2018.05',
          feature1: '웹표준, 반응형',
          feature2: '크로스브라우징(IE1Q, Safari, Opera, Chrome, Firefox)',
          feature3: 'Sass 사용, Semantic UI custom, 다국어(한,영,중,일)',
          role1: '스타일 가이드 설계',
          role2: '퍼블리싱 총괄 및 유지보수',
          de: 'Angular.js 협업',
          index: '2'
        },
        {
          category: 'Responsive Web',
          title: 'STARPAY 홈페이지',
          path: 'https://www.starpay.tv/',
          date: '2018.03',
          feature1: '웹표준, 반응형',
          feature2: '크로스브라우징(IE10, Safari, Opera, Chrome, Firefox, UC brower)',
          feature3: 'Sass 사용, Semantic UI custom, 다국어(한,영,중,일)',
          role1: '스타일 가이드 및 레이아웃 설계',
          role2: '퍼블리싱(30%) 및 퍼블리싱 총괄',
          de: 'JAVA(Spring) 협업',
          index: '3'
        },
        {
          category: 'Responsive Web',
          title: 'STARCOIN 홈페이지',
          path: 'https://www.starcoin.tv/',
          date: '2017.11',
          feature1: '웹표준, 반응형',
          feature2: '크로스브라우징(IE10, Safari, Opera, Chrome, Firefox)',
          feature3: 'Sass 사용, 다국어(한,영,중)',
          role1: '퍼블리싱(70%) 및 퍼블리싱 총괄',
          role2: '사이트 유지보수',
          de: 'JAVA(Spring) 협업',
          index: '4'
        },
        {
          category: 'Responsive Web',
          title: '부산광역시 동구청 홈페이지 (동구청, 문화관광, 보건소, 의회, 도서관, 통합예약, 주민센터, 외국어 포함)',
          path: 'http://www.bsdonggu.go.kr/index.donggu',
          date: '2017.10',
          feature1: '웹표준, 웹접근성, 반응형',
          feature2: '크로스브라우징(IE9, Safari, Opera, Chrome, Firefox)',
          feature3: '',
          role1: '스타일 가이드 및 레이아웃 설계',
          role2: '퍼블리싱(80%) 및 퍼블리싱 총괄',
          de: 'JAVA(Spring) 협업',
          index: '5'
        },
        {
          category: 'Hybrid APP',
          title: '서부산 스탬프투어 앱',
          path: 'https://play.google.com/store/apps/details?id=com.ubitec.stamp&hl=ko',
          date: '2017.08',
          feature1: '웹표준, 웹접근성',
          feature2: '',
          feature3: '',
          role1: '레이아웃 설계 전 페이지 퍼블리싱',
          role2: '서브 페이지 디자인',
          de: 'JAVA(Spring) 협업',
          index: '6'
        },
        {
          category: 'Web',
          title: '부산 문화관광 홈페이지',
          path: 'http://tour.busan.go.kr/index.busan',
          date: '2017.07',
          feature1: '웹표준, 웹접근성',
          feature2: '크로스브라우징(IE9, Safari, Opera, Chrome, Firefox)',
          feature3: '',
          role1: '웹표준/웹접근성 최적화 작업',
          role2: '',
          de: 'JAVA(Spring) 협업',
          index: '7'
        },
        {
          category: 'Responsive Web',
          title: '부산 교육청 홈페이지(교육감, 외국어  포함)',
          path: 'http://www.pen.go.kr/index.pen',
          date: '2017.07',
          feature1: '웹표준, 웹접근성, 반응형',
          feature2: '크로스브라우징(IE9, Safari, Opera, Chrome, Firefox)',
          feature3: '',
          role1: '스타일 가이드 및 레이아웃 설계',
          role2: '퍼블리싱(80%) 및 퍼블리싱 총괄',
          de: 'JAVA(Spring) 협업',
          index: '8'
        },
        {
          category: 'Responsive Web',
          title: '부산광역시 동래구청 홈페이지',
          path: 'http://www.dongnae.go.kr/index.dongnae',
          date: '2017.06',
          feature1: '웹표준, 웹접근성, 반응형',
          feature2: '크로스브라우징(IE9, Safari, Opera, Chrome, Firefox)',
          feature3: '',
          role1: '웹표준/웹접근성 최적화 작업',
          role2: '퍼블리싱(20%)',
          de: 'JAVA(Spring) 협업',
          index: '9'
        },
        {
          category: 'Mobile WEB',
          title: '부산 문화관광 모바일 홈페이지',
          path: 'http://mtour.busan.go.kr/main.htm',
          date: '2017.05',
          feature1: '웹표준, 웹접근성',
          feature2: '',
          feature3: '',
          role1: '기획, 레이아웃 설계',
          role2: '전 페이지 퍼블리싱',
          de: 'JAVA(Spring) 협업',
          index: '10'
        },
        {
          category: 'Responsive Web',
          title: '부산광역시 남구청 홈페이지',
          path: 'http://www.bsnamgu.go.kr/index.namgu',
          date: '2017.04',
          feature1: '웹표준, 웹접근성, 반응형',
          feature2: '크로스브라우징(IE9, Safari, Opera, Chrome, Firefox)',
          feature3: '',
          role1: '웹표준/웹접근성 최적화',
          role2: '팝업 디자인 및 사이트 유지보수',
          de: 'JAVA(Spring) 협업',
          index: '11'
        },
        {
          category: 'Responsive Web',
          title: '프랜차이즈 식당 단물곤물 홈페이지',
          path: 'http://www.xn--46-0c2iv2ruslba.com/',
          date: '2017.01',
          feature1: '웹표준, 반응형',
          feature2: '크로스브라우징(IE10,Safari, Opera, Chrome, Firefox)',
          feature3: 'Bootstrap custom',
          role1: '기획, 레이아웃 설계',
          role2: '전 페이지 퍼블리싱',
          de: 'PHP 협업',
          index: '12'
        },
        {
          category: 'Responsive Web',
          title: '올커넥시온 홈페이지',
          path: 'http://allconnexion.com',
          date: '2016.11',
          feature1: '웹표준, 반응형',
          feature2: '크로스브라우징(IE9, Safari, Opera, Chrome, Firefox), 다국어(한,영)',
          feature3: 'Bootstrap custom',
          role1: '기획, 레이아웃 설계',
          role2: '전 페이지 퍼블리싱',
          de: 'PHP 협업',
          index: '13'
        },
        {
          category: 'Responsive Web',
          title: '베이비파스텔 홈페이지',
          path: 'http://babypastel.com/main.php',
          date: '2016.07',
          feature1: '웹표준, 반응형',
          feature2: '크로스브라우징(IE10, Safari, Opera, Chrome, Firefox)',
          feature3: '그누보드 custom',
          role1: '기획, 레이아웃 설계',
          role2: '전 페이지 퍼블리싱',
          de: 'PHP 협업',
          index: '14'
        }
      ]
    }
  },
  methods: {
    show: function (slide) {
      this.slide = slide
      this.detailShow = true
    }
  }
}
</script>

<style lang="scss" scoped>
  /*.portfolio-content {
    display: block;
    position: relative;
    .portfolio__thumnail {
      transition: all 0.4s ease;
    }
    .portfolio--hover {
      position: absolute;
      top: -100%;
      left: 0;
      height: 100%;
      width: 100%;
      background: rgba(0, 0, 0, 0.42);
      padding: 1em;
      .hover-content {
        position: absolute;
        bottom: 5em;
        left: 2em;
      }
    }
    &:hover {
      .portfolio__thumnail {
        transform: scale(1.1);
      }
      .portfolio--hover {
        left: 0;
        top: 0;
        transition: all 0.4s ease;
      }
    }
    .portfolio__date {
      color: $white;
      margin-top: 10px;
      display: block;
      font-weight: 500;
      opacity: .8;
    }
    .portfolio__title {
      color: $white;
      font-size: 24px;
      margin-top: 7px;
      margin-bottom: 6px;
      font-family: $square;
      text-transform: uppercase;
    }
    .portfolio__category {
      background: none;
      color: $lgrey;
      font-family: $square;
      font-weight: 600;
    }
  }
  .current {
    .portfolio__thumnail {
      transform: scale(1.1);
    }
    .portfolio--hover {
      left: 0;
      top: 0;
      transition: all 0.4s ease;
    }
  }
  .carousel-3d-controls {
    height: 55px !important;
    top: auto !important;
    bottom: 0;
    .next,
    .prev {
      line-height: 20px !important;
      text-align: center !important;
      border: 1px solid $lgrey;
      span {
        color: $lgrey;
        font-size: 24px;
      }
    }
    .prev {
      left: 0;
      border-right: 0;
    }
    .next {
      right: auto;
      left: 50px;
    }
  }*/
</style>
