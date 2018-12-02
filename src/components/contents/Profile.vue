<template>
  <main class="content about-content">
    <h2 class="content-text" style="">
      ABOUT
    </h2>
    <h1 class="content__title">ABOUT</h1>
    <div class="content-info-wrap about-wrap">
      <div class="about-info-top">
        <div class="content-info about-info">
          <strong class="content-info__title about">INTRODUCTION</strong>
          <ul class="about-list">
            <li>양은진</li>
            <li>1992년 03월 (27세)</li>
            <li>010-5752-1440</li>
            <li>jinny920311@gmail.com</li>
            <li>서울시 강남구 역삼동</li>
          </ul>
        </div>
        <div class="content-info about-info career-info">
          <strong class="content-info__title about">CAREER</strong>
          <ul class="about-list">
            <li>STARKST (2017년 11월 ~) 팀장</li>
            <li>유비텍 (2017년 4월 ~ 2017년 11월) 사원</li>
            <li>아이웹소프트 (2016년 6월~ 2017년 4월) 주임</li>
          </ul>
        </div>
      </div>
      <div class="content-info about-info">
        <strong class="content-info__title about">SKILLS</strong>
        <ul class="about-list skill">
          <li>
            <div class="skill-contnet">
              <strong class="skill__title">HTML5 & 웹표준& 웹접근성</strong>
              <ul>
                <li>- W3C HTML5 기술표준명세서 준수</li>
                <li>- 크로스브라우징 이슈 핸들링</li>
                <li><small>( Ie8 / Firefox / Chrome / Opera / Safari )</small></li>
              </ul>
            </div>
            <div class="skill-contnet">
              <strong class="skill__title">CSS/전처리기</strong>
              <ul>
                <li>- CSS3</li>
                <li>- Sass</li>
                <li>- Less</li>
              </ul>
            </div>
            <div class="skill-contnet">
              <strong class="skill__title">Java Script&Jquery& Vue.js</strong>
              <ul>
                <li>- DOM,BOM 제어</li>
                <li>- Vue.js 라우터 사용 및 데이터 바인딩 가능</li>
              </ul>
            </div>
            <div class="skill-contnet">
              <strong class="skill__title">CMS Custom</strong>
              <ul>
                <li>- Xe</li>
                <li>- 그누보드</li>
                <li>- Cafe24</li>
              </ul>
            </div>
          </li>
          <li>
            <div class="skill-contnet">
              <strong class="skill__title">Framework Custom</strong>
              <ul>
                <li>- Bootstrap</li>
                <li>- Semantic UI</li>
                <li>- Material-UI</li>
                <li>- Vuetify</li>
              </ul>
            </div>
            <div class="skill-contnet">
              <strong class="skill__title">Etc</strong>
              <ul>
                <li>- Git, SVN 형상관리</li>
                <li>- 포토샵</li>
                <li>- 일러스트</li>
                <li>- 외국 문서(docs 나 Library 등) 독해 가능</li>
              </ul>
            </div>
          </li>
        </ul>
      </div>
    </div>
  </main>
</template>

<script>
import Slider from './Slider'

export default {
  name: 'Sub2',
  components: {
    Slider
  }
}
</script>

<style scoped lang="scss">
  .content-info {
    margin-top: 3em;
    display: inline-block;
    .content-info__title {
      display: block;
      margin-bottom: 8px;
      font-size: 1.3rem;
      &.about {
        margin-bottom: 20px;
      }
    }
  }
  .about-wrap {
    .about-info-top {
      display: flex;
      flex-direction: column;
    }
    .carrer-info {
      margin-top: 190px;
    }
    .about-list {
      * {
        font-weight: 500;
        font-family: $square;
        color: $grey;
      }
      li {
        margin-bottom: 6px;
        li {
          font-size: 17px;
          &:last-child {
            margin-bottom: 0;
          }
          small {
            font-size: 80%;
            font-family: $mont;
            margin-top: -5px;
            display: block;
          }
        }
      }
      &.skill {
        display: flex;
      }
      .skill__title {
        color: $purple;
        margin-bottom: 10px;
        font-weight: 600;
        display: block;
      }
    }
    .about-info {
      margin-top: 6em;
    }
    .career-info {
      margin-top: 190px;
    }
    .skill-contnet {
      margin-top: 20px;
    }
  }
</style>
