<template>
  <footer class="ft">
    <a href="mailto:jemajin7@gmail.com" class="ft__contact">
      <i class="contact__icon">
        <img src="../../assets/images/icons/icon_email.png" alt="" width="15">
      </i>
      jemajin7@gmail.com
    </a>
    <a href="tel:010-5752-1440" class="ft__contact">
      <i class="contact__icon">
        <img src="../../assets/images/icons/icon_call.png" alt="" width="15">
      </i>
      010-5752-1440
    </a>
  </footer>
</template>

<script>
export default {
  name: 'Footer'
}
</script>

<style lang="scss" scoped>
.ft {
  background-color: $black;
  padding: 2em 0;
  text-align: center;
  .ft__contact {
    color: $white;
    font-size: .95rem;
    margin: 0 1em;
    &:hover,
    &:active,
    &:focus {
      color: $yellow;
    }
    .contact__icon {
      display: inline-block;
      width: 28px;
      height: 28px;
      border: 1px solid $yellow;
      vertical-align: middle;
      margin-right: 5px;
      img {
        margin-top: 5px;
      }
    }
    @media all and (max-width: 360px) {
      margin: 0 3px;
      .contact__icon {
        width: 24px;
        height: 24px;
        img {
          width: 12px;
        }
      }
    }
  }
}
</style>
