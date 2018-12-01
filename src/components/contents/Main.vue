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
    <carousel-3d :perspective="0" :space="400" :width="360" :height="465" :display="5" :border="0" :controlsVisible="true">
      <slide v-for="(slide, i) in slides" :index="i" :key="i">
        <router-link to="" class="portfolio-content">
          <img :src="require('../../assets/images/thumnail_' + i+ '.png')" alt="" class="portfolio__thumnail">
          <div class="portfolio--hover">
            <div class="hover-content">
              <i class="portfolio__more-btn btn">
                <img src="../../assets/images/icon_plus.png" alt="더보기">
              </i>
              <h1 class="portfolio__title">{{slide.title}}</h1>
              <mark class="portfolio__category">{{slide.category}}</mark>
            </div>
          </div>
        </router-link>
        <!--<img :src="images.url"  />-->
      </slide>
    </carousel-3d>
  </main>
</template>

<script>
import { Carousel3d, Slide } from 'vue-carousel-3d'

export default {
  name: 'Main',
  data () {
    return {
      slides: [
        {
          category: 'RESPONSIVE WEB',
          title: 'Blockchain explorer',
          path: ''
        },
        {
          category: 'RESPONSIVE WEB',
          title: 'contentdeal IR'
        },
        {
          category: 'RESPONSIVE WEB',
          title: 'KSTAR 티켓몰 홈페이지'
        },
        {
          category: 'RESPONSIVE WEB',
          title: 'STARPAY 홈페이지'
        },
        {
          category: 'RESPONSIVE WEB',
          title: 'STARCOIN 홈페이지'
        },
        {
          category: 'RESPONSIVE WEB',
          title: '부산광역시 동구청 홈페이지'
        },
        {
          category: 'Hybrid APP',
          title: '서부산 스탬프투어 앱'
        },
        {
          category: 'Web',
          title: '부산광역시 문화관광 홈페이지'
        }
      ]
    }
  },
  components: {
    Carousel3d,
    Slide
  }
}
</script>

<style scoped lang="scss">
.portfolio-content {
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
  .portfolio__title {
    color: $white;
    font-size: 24px;
    margin-top: 10px;
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
</style>
