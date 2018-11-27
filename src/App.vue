<template>
  <div id="app">
    <Header v-if="$route.meta.plainLayout"></Header>
    <router-view/>
    <Footer v-if="$route.meta.plainLayout"></Footer>
  </div>
</template>

<script>
  import Header from './components/layout/Header'
  import Footer from './components/layout/Footer'

  export default {
    name: 'App',
    components: {
      Header,
      Footer
    }
  }
</script>

<style lang="scss">
  @import "assets/style/base/_reset.scss";

</style>
