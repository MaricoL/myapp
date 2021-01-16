<template>
    <div v-if="filmInfo">
      <detail-header v-top :title="filmInfo.name"></detail-header>
      <div :style="{ backgroundImage: `url(${filmInfo.poster})`}" style="height: 200px;background-position: center;background-size: cover;"></div>
      <div class="info">
        <h3>{{ filmInfo.name }}</h3><span>{{ filmInfo.filmType.name }}</span>
        <div>{{ filmInfo.category }}</div>
        <div>{{ filmInfo.premiereAt | dataFilter}}</div>
        <div>{{ filmInfo.nation}} | {{ filmInfo.runtime }}分钟</div>
        <div :class=" isShow ? 'synopsis run' : 'synopsis'">{{ filmInfo.synopsis }}</div>
        <div style="text-align:center;" @click=" isShow = !isShow"><i class="iconfont" :class=" isShow ? 'icon-less' : 'icon-moreunfold'"></i></div>
      </div>

      <div class="actors">
        <h3>演职人员</h3>
        <detail-swiper :presildesNum="3" swiperclass="swiper-actors">
          <div class="swiper-slide" v-for="(actor,index) in filmInfo.actors" :key="index">
            <img :src="actor.avatarAddress">
            <div style="text-align:center;font-size:12px">
              <div>{{ actor.name }}</div>
              <div>{{ actor.role }}</div>
            </div>
          </div>
        </detail-swiper>
      </div>

      <div class="photos">
        <h3>剧照</h3>
        <detail-swiper :presildesNum="2" swiperclass="swiper-photos">
          <div class="swiper-slide" v-for="(photo,index) in filmInfo.photos" :key="index">
            <img :src="photo">
          </div>
        </detail-swiper>
      </div>
    </div>
</template>

<script>
// @ 表示 src目录
import http from '@/utils/http'
import moment from 'moment'
import Vue from 'vue'
import detailSwiper from '@/views/DetailSwiper.vue'
import detailHeader from '@/views/DetailHeader.vue'

Vue.directive('top', {
  inserted (el) {
    el.style.display = 'none'
    window.onscroll = () => {
      if ((document.body.scrollTop || document.documentElement.scrollTop) > 1) {
        el.style.display = 'block'
      } else {
        el.style.display = 'none'
      }
    }
  },
  // 退出页面时，需要解绑事件
  unbind () {
    window.onscroll = null
  }
}
)

Vue.filter('dataFilter', (dataStr) => {
  // dataStr 为秒数，需要 *1000 转换为毫秒
  return moment(new Date(dataStr * 1000)).format('YYYY-MM-DD')
})

export default {
  data () {
    return {
      filmInfo: null,
      isShow: false
    }
  },
  mounted () {
    http({
      url: `/gateway?filmId=${this.$route.params.filmId}&k=1074795`,
      headers: {
        'X-Host': 'mall.film-ticket.film.info'
      }
    }).then(res => {
      console.log(res.data.data.film)
      this.filmInfo = res.data.data.film
    })
    // console.log('获取动态路由传递过来的参数：', this.$route.params.filmId)
    // console.log('获取命名路由传递过来的参数：', this.$route.params.id)
    // console.log('获取query方式路由传递过来的参数：', this.$route.query.id)
  },
  components: {
    detailSwiper,
    detailHeader
  }
}
</script>

<style lang="scss" scoped>
  .info {
    padding: 10px;
    font-size: 13px;
    color: #888;
    h3 {
      display: inline-block;
      font-size: 20px;
      color: #000;
    }
    span {
      display: inline-block;
      margin-bottom: 5px;
      font-size: 10px;
      width: 22px;
      height: 16px;
      background-color: #ccc;
      border-radius: 10%;
      text-align: center;
      line-height: 16px;
      margin-left: 5px;
      color: #fff;
    }
    .synopsis {
      max-height: 50px;
      overflow: hidden;
      transition: all 1s;
    }
    .run {
      max-height: 200px;
    }

  }
  .actors , .photos{
    padding: 10px;
    img {
      width: 100%;
    }
  }
</style>
