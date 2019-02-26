<template>
  <main class="content about-content">
    <header class="about-info-hd">
      <div class="layout">
        <img src="../../assets/images/main/photo.png" alt="" class="about-photo" data-aos="fade-up">
        <aside data-aos="fade-up">
          <a href="https://jinnny.github.io/blog/" class="about__contact">
            <i class="contact__icon">
              <img src="../../assets/images/icons/icon_blog.png" alt="" width="15">
            </i>
          </a>
          <a href="https://github.com/jinnny" class="about__contact">
            <i class="contact__icon">
              <img src="../../assets/images/icons/icon_github.png" alt="" width="16">
            </i>
          </a>
        </aside>
        <h1 class="about__title" data-aos="fade-up" data-aos-delay="100">UI Developer <strong>양은진</strong></h1>
        <p class="about-hello" data-aos="fade-up" data-aos-delay="200">
          안녕하세요. 1px도 허투루 보지 않는 UI Developer 양은진입니다.
        </p>
      </div>
    </header>
      <div class="skill-info about-info layout">
        <h2 class="content-info__title about" data-aos="fade-in" data-aos-delay="200" data-aos-offset="0">SKILLS</h2>
        <div class="skill-content" data-aos="fade-up" data-aos-delay="50">
          <img src="../../assets/images/icons/icon_html5.png" alt="">
          <strong class="skill__title">HTML5 & 웹표준& 웹접근성</strong>
          <ul>
            <li>W3C HTML5 기술표준명세서 준수</li>
            <li>W3C 웹콘텐츠 접근성 지침 2.0 준수</li>
            <li>크로스브라우징 이슈 핸들링</li>
            <li><small>( Ie8 / Firefox / Chrome / Opera / Safari )</small></li>
          </ul>
        </div>
        <div class="skill-content" data-aos="fade-up" data-aos-delay="100">
          <img src="../../assets/images/icons/icon_css.png" alt="">
          <strong class="skill__title">CSS/전처리기</strong>
          <ul>
            <li>CSS3</li>
            <li>Sass</li>
            <li>Less</li>
          </ul>
        </div>
        <div class="skill-content" data-aos="fade-up" data-aos-delay="150">
          <img src="../../assets/images/icons/icon_javascript.png" alt="">
          <strong class="skill__title">Java Script & Jquery & Vue.js</strong>
          <ul>
            <li>DOM,BOM 제어</li>
            <li>Vue.js 라우터 사용 및 데이터 바인딩 가능</li>
          </ul>
        </div>
        <div class="skill-content" data-aos="fade-up" data-aos-delay="200">
          <img src="../../assets/images/icons/icon_cms.png" alt="">
          <strong class="skill__title">CMS</strong>
          <ul>
            <li>Xe</li>
            <li>그누보드</li>
            <li>Cafe24</li>
          </ul>
        </div>
        <div class="skill-content" data-aos="fade-up" data-aos-delay="250">
          <img src="../../assets/images/icons/icon_bootstrap.png" alt="">
          <strong class="skill__title">UI Framework & Library</strong>
          <ul>
            <li>Bootstrap</li>
            <li>Semantic UI</li>
            <li>Material-UI</li>
            <li>Vuetify</li>
          </ul>
        </div>
        <div class="skill-content" data-aos="fade-up" data-aos-delay="300">
          <img src="../../assets/images/icons/icon_php.png" alt="">
            <strong class="skill__title">협업가능한 개발환경</strong>
          <ul>
            <li>JAVA(Spring)</li>
            <li>PHP</li>
            <li>Vue.js</li>
            <li>Angular.js</li>
          </ul>
        </div>
        <div class="skill-content" data-aos="fade-up" data-aos-delay="350">
          <img src="../../assets/images/icons/icon_git.png" alt="">
          <strong class="skill__title">Etc</strong>
          <ul>
            <li>Git, SVN 형상관리</li>
            <li>포토샵</li>
            <li>일러스트</li>
          </ul>
        </div>
      </div>
  </main>
</template>

<script>
export default {
  name: 'About',
  mounted () {
    window.scrollTo(0, 0)
  }
}
</script>

<style scoped lang="scss">
  .about-content {
    background: #f3f3f3;
    .about-info-hd {
      background: $black;
      padding: 10em 0 4em;
      position: relative;
      text-align: center;
      &:after {
        content: '';
        width: 70%;
        height: 1px;
        background: #313131;
        display: block;
        position: absolute;
        top: 17.5em;
        left: 15%;
      }
    }
    .about__contact {
      padding: 10px 13px;
      display: inline-block;
      border: 1px solid;
      margin: 10px 3px 0;
      &:hover {
        border-bottom: 1px solid $white;
      }
    }
    .about-hello {
      color: $white;
      padding: 2em 0;
      font-family: $square;
    }
    .about-photo {
      border-radius: 50%;
      width: 250px;
      vertical-align: bottom;
      position: relative;
      z-index: 1;
      @media all and (max-width: 500px) {
        width: 50%;
      }
    }
    .about__title {
      color: $yellow;
      display: inline-block;
      font-size: 3rem;
      strong {
        font-family: $square;
        color: inherit;
        font-size: 2rem;
        display: block;
        letter-spacing: 12px;
      }
    }
    .skill-info {
      margin-top: 4em;
      margin-bottom: 2em;
      @include clearfix;
      .content-info__title {
        display: block;
        margin-bottom: 1em;
        font-size: 2rem;
        text-align: center;
      }
      .skill-content {
        text-align: center;
        float: left;
        width: 33.33%;
        padding: 2em;
        &:nth-of-type(4) {
          clear: both;
        }
        * {
          font-family: $square;
        }
        .skill__title {
          display: block;
          margin: 7px 0 5px;
        }
        li {
          font-size: .95rem;
        }
        @media all and (max-width: 600px) {
          width: 50%;
          padding: 2em 1em;
          &:nth-of-type(4) {
            clear: none;
          }
          &:nth-of-type(2n-1) {
            clear: both;
          }
        }
      }
    }
  }
</style>
