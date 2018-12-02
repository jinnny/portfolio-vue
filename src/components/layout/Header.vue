<template>
  <header class="hd">
    <h1 class="logo">
      Y
    </h1>
    <nav class="menu">
      <ul>
        <li><router-link to="/" class="menu__link">PORTFOLIO</router-link></li>
        <li><router-link to="/about" class="menu__link">ABOUT</router-link></li>
      </ul>
      <p class="contact">
        <a href="mailto:jinny920311@gmail.com">
          <img src="../../assets/images/icon_email.png" alt="">
        </a>
        <a href="tel:01057521440">
          <img src="../../assets/images/icon_call.png" alt="">
        </a>
      </p>
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
    position: relative;
    border-right: 1px solid #f3f3f3;
    width: 290px;
    height: 100vh;
    padding-top: 84px;
    background: rgba(255, 255, 255, 0.6);
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
      margin-bottom: 84px;
    }
    .menu {
      li {
        margin-bottom: 15px;
      }
      .menu__link {
        color: $lgrey;
        display: block;
        padding: 10px 75px;
        position: relative;
        overflow: hidden;
        &:after {
          transition: all 0.2s ease;
          content: '';
          position: absolute;
          left: -54px;
        }
        &.router-link-exact-active,
        &:hover {
          color: #363636;
          font-weight: 500;
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
    .contact {
      position: absolute;
      bottom: 80px;
      width: 100%;
      text-align: center;
      a {
        display: inline-block;
        padding: 10px 20px;
        opacity: .9;
        filter: grayscale(40);
        transition: all 0.2s ease;
        &:hover {
          opacity: 1;
          filter: grayscale(0);
        }
      }
    }
  }
</style>
