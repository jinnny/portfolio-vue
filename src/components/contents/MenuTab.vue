<template>
  <div class="portfolio-tab">
    <button
      v-for="(year, index) in yearsData"
      class="tab__button"
      :class="{'is--active' : index === activeIndex}"
    >
      {{ year }}</button>
  </div>
</template>

<script>
import { createComponent, computed, ref } from '@vue/composition-api';
export default createComponent({
  props: {
    yearsData: Array
  },
  setup(_,props){
    const activeIndex = ref(0);

    return {
      activeIndex
    }
  }
});
</script>

<style lang="scss" scoped>
/*tab*/
.portfolio-tab {
  text-align: center;
  margin-top: 100px;
  .tab__button {
    padding: 7px 20px;
    font-weight: 600;
    margin-right: 5px;
    &.is--active,
    &:hover,
    &:active {
      background: $lblack;
      color: $white;
    }
  }
}
</style>
