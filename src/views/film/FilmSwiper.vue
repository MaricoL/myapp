<template>
  <div class="swiper-container">
      <div class="swiper-wrapper">
          <slot></slot>
      </div>
      <div class="swiper-pagination"></div>
  </div>
</template>

<script>
// import Swiper from 'swiper'
import Swiper from 'swiper/bundle'
import 'swiper/swiper-bundle.min.css'

export default {
  mounted () {
    // 在 .eslintrc.js 中配置 'no-new': 'off'
    new Swiper('.swiper-container', {
      pagination: {
        el: '.swiper-pagination'
      }
    })
  }
}
</script>

<style>

</style>
