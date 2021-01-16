<template>
    <div class="swiper-container" :class="swiperclass">
        <div class="swiper-wrapper">
            <slot></slot>
        </div>
    </div>
</template>

<script>
import Swiper from 'swiper/bundle'
import 'swiper/swiper-bundle.min.css'

export default {
  props: {
    presildesNum: {
      type: Number,
      default: 3
    },
    swiperclass: {
      type: String,
      default: 'swiper-container'
    }
  },
  mounted () {
    // 在 .eslintrc.js 中配置 'no-new': 'off'
    new Swiper('.' + this.swiperclass, {
      slidesPerView: this.presildesNum,
      spaceBetween: 30
    })
  }
}
</script>

<style>

</style>
