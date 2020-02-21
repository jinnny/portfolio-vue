<template>
  <footer class="footer">
    <a href="mailto:jemajin7@gmail.com" class="footer__contact">
      <i class="contact__icon">
        <img src="../../assets/images/icons/icon_email.png" alt="" width="15">
      </i>
    </a>
    <a href="tel:010-5752-1440" class="footer__contact">
      <i class="contact__icon">
        <img src="../../assets/images/icons/icon_call.png" alt="" width="15">
      </i>
    </a>
    <p class="footer__copyright">
      COPYRIGHT 2012-2020 STUDIO-JT. ALL RIGHTS RESERVED.
    </p>
  </footer>
</template>

<script>
import { createComponent } from '@vue/composition-api';
export default createComponent({
})
</script>

<style lang="scss" scoped>
.footer {
  background-color: $black;
  padding: 2em 0;
  text-align: center;
  .footer__contact {
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
