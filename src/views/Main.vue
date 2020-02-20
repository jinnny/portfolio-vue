<template>
  <main class="content">
    <header class="content-header">
      <h1 class="content__title">PORTFOLIO</h1>
      <!--카테고리탭-->
      <menu-tab :years-data="years"/>
      <!--카테고리탭-->
    </header>
    <section class="portfolio-lists">
        <article class="portfolio-list" v-for="(slide, i) in slideList"  :index="i" :key="slide.title + i">
          <router-link :to="{path: '/detail/'+ i}" :slide="slide">
            <img :src="require('../assets/images/slide/'+ slide.name +'_slide.png')"  class="portfolio__thumnail" alt="">
            <div class="portfolio--hover">
              <div class="hover-content">
                <button class="portfolio__more-button button" ></button>
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
import { createComponent, computed } from '@vue/composition-api'
import MenuTab from '../components/contents/MenuTab';

export default createComponent({
  components: {
    MenuTab
  },
 setup(_, { root }){
   const slideList = computed(() =>
     root.$store.getters.slideList
   );
   const years = computed(() =>
     root.$store.state.years
   );
   return {
     slideList,
     years
   }
 }
})
</script>

<style lang="scss" scoped>
.content {
  padding-top: 50px;
}
.content-header {
  text-align: center;
}
.content__title {
  display: inline-block;
  padding: 7px 20px;
  font-weight: 600;
  color: $lblack;
  border-bottom: 1px solid $lblack;
  font-size: 1rem;
}

/*포폴 list*/
.portfolio-lists {
  overflow: hidden;
  padding: 1em;
  max-width: 1500px;
  margin: 3rem auto;
}
.portfolio-list {
  display: block;
  overflow: hidden;
  /*height: 290px;*/
  position: relative;
  width: 33.33%;
  height: 30rem;
  float: left;
  .portfolio__thumnail {
    transition: all 0.4s ease;
    height: 100%;
    object-fit: cover;
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
    .portfolio__more-button {
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
    width: 50%;
  }
  @media all and (max-width: 500px) {
    width: 100%;
    height: 200px;
    &:nth-child(2n-1) {
      margin-right: 0;
    }
  }
}

.portfolio__more-button {
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


</style>
