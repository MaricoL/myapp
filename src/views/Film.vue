<template>
  <div>
    <film-swiper>
        <div class="swiper-slide" v-for="(img,index) in imgList" :key="index">
          <div :style="{ backgroundImage: `url(${img})`}"
          style="height:200px;background-size:cover;"></div>
        </div>
    </film-swiper>
    <film-header style="position:sticky;top:0;background:#fff;"></film-header>

    <router-view></router-view>
  </div>
</template>

<script>
import filmHeader from './film/FilmHeader'
import filmSwiper from './film/FilmSwiper'

export default {
  data () {
    return {
      imgList: [
        'https://pic.maizuo.com/usr/movie/e91c49fcf37ea913d47a4f8321e6d6f0.jpg',
        'https://pic.maizuo.com/usr/movie/c3a32bd973128a58d969836ea8e0120e.jpg',
        'https://pic.maizuo.com/usr/movie/4a2bec5290b94f7eb597913727b21df6.jpg'
      ]
    }
  },
  components: {
    filmHeader,
    filmSwiper
  }
}
</script>

<style lang="scss" scoped>

</style>
