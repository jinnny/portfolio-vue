<template>
  <component :is="iconName" class="y-icon" aria-hidden="true" />
</template>

<script>
export default {
  name: 'YIcon',
  components: {
    IconDelete: () => import('../../assets/svg/delete.svg'),
    ArrowLeft: () => import('../../assets/svg/arrow_left.svg'),
    ArrowRight: () => import('../../assets/svg/arrow_right.svg')
  },
  props: {
    iconName: {
      type: String,
      default: ''
    },
    iconPath: {
      type: String,
      default: '../../assets/svg/'
    }
  }
};
</script>
<style scoped>
.w-icon {
  display: inline-block;
  vertical-align: top;
  fill: currentColor;
}
</style>
