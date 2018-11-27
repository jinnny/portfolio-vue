<template>
  <header class="hd">
    <h1 class="logo">
      Y
    </h1>
    <nav class="menu">
      <ul>
        <li><router-link to="/" >MAIN</router-link></li>
        <li><router-link to="/sub2">PORTFOLIO</router-link></li>
        <li><router-link to="/profile">PROFILE</router-link></li>
      </ul>
    </nav>
  </header>
</template>

<script>
export default {
  name: 'Header'
}
</script>

<style scoped lang="scss">
  .hd {
    border-right: 1px solid #f3f3f3;
    width: 260px;
    height: 100vh;
    .logo {
      color: $white;
      background: $purple;
      font-weight: 600;
      width: 61px;
      height: 61px;
      text-align: center;
      font-size: 30px;
      line-height: 61px;
      margin-left: auto;
      margin-right: auto;
      margin-top: 84px;
      margin-bottom: 84px;
    }
    .menu {
      li {
        margin-bottom: 15px;
      }
      a {
        color: $lgrey;
        font-weight: 500;
        display: block;
        padding: 10px 75px;
        position: relative;
        overflow: hidden;
        &:after {
          -webkit-transition: all 0.2s ease;
          -moz-transition: all 0.2s ease;
          -o-transition: all 0.2s ease;
          transition: all 0.2s ease;
          content: '';
          position: absolute;
          left: -54px;
        }
        &.router-link-exact-active,
        &:hover {
          color: #363636;
          &:after {
            content: '';
            width: 54px;
            height: 3px;
            background: $purple;
            display: inline-block;
            position: absolute;
            left: 0;
            top: 19px;
          }
        }
      }
    }
  }
</style>
