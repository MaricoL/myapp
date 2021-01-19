<template>
  <div>
    <van-nav-bar title="标题"   @click-left="onClickLeft">
      <template #left>
        <span style="margin-right: 5px;">上海</span><van-icon name="arrow-down" size="8" color="#000"/>
      </template>
      <template #right>
        <van-icon name="search" size="23" color="#000"/>
      </template>

    </van-nav-bar>

    <div class="cinema" :style="{height:height}">
      <ul>
        <li v-for="(cinema) in cinemaList" :key="cinema.cinemaId">
          <div>{{ cinema.name }}</div>
          <div class="address">{{ cinema.address }}</div>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
// import axios from 'axios'
import http from '@/utils/http'
import BetterScroll from 'better-scroll'
import Vue from 'vue'
import { NavBar, Icon } from 'vant'

Vue.use(NavBar).use(Icon)

export default {
  data () {
    return {
      cinemaList: [],
      height: 0
    }
  },
  mounted () {
    // 配合 scroll-bar 设置 ul 的高度
    this.height = document.documentElement.clientHeight - 100 + 'px'
    http({
      url: 'gateway?cityId=310100&ticketFlag=1&k=7833457',
      headers: {
        'X-Host': 'mall.film-ticket.cinema.list'
      }
    }).then(res => {
      this.cinemaList = res.data.data.cinemas

      this.$nextTick(() => {
        new BetterScroll('.cinema', {
          scrollbar: {
            fade: true
          }
        })
      })
    })
    // 1. 魅力惠
    // 直接请求api，由于 魅力惠服务器 设置了 ccess-Control-Allow-Origin: * ，
    // 所以没有跨域问题
    // axios.get('http://www.mei.com/appapi/panicbuying/intro?timestamp=1610687954545&summary=87edaa0e2a4d01daa7df7e8f2b2c7c8f')
    //   .then(res => {
    //     console.log(res.data)
    //   })

    // 2. 猫眼
    // 直接请求：
    // https://m.maoyan.com/ajax/movieOnInfoList?token=&optimus_uuid=57B3218056EC11EBA5FBB714AFB4EB5E8AA5CEA8B74245F0BF7E7D40F2C0E5D2&optimus_risk_level=71&optimus_code=10
    // 会产生跨域问题，需要在vue.config.js中配置反向代理
    // axios.get('/ajax/movieOnInfoList?token=&optimus_uuid=57B3218056EC11EBA5FBB714AFB4EB5E8AA5CEA8B74245F0BF7E7D40F2C0E5D2&optimus_risk_level=71&optimus_code=10')
    //   .then(res => {
    //     console.log(res.data)
    //   })

    // 3. 卖座
    // 虽然返回 Access-Control-Allow-Origin: *，但是需要携带请求header访问接口
    // https://m.maizuo.com/gateway?cityId=310100&pageNum=1&pageSize=10&type=1&k=5557162
    // axios({
    //   url: 'https://m.maizuo.com/gateway?cityId=310100&pageNum=1&pageSize=10&type=1&k=5557162',
    //   headers: {
    //     'X-Client-Info': '{"a":"3000","ch":"1002","v":"5.0.4","e":"1610686465919458008793089"}',
    //     'X-Host': 'mall.film-ticket.film.list'
    //   }
    // }).then(res => {
    //   console.log(res.data)
    // })
  },
  methods: {
    onClickLeft () {
      this.$router.push('/city')
    }
  }
}
</script>

<style scoped lang="scss">
  // 使用 better-scroll 时，需要加上高度和溢出隐藏
  .cinema{
    height: 400px;
    overflow: hidden;
    position: relative;   // 修正滚动条位置
  }
  ul {
    li {
      padding: 5px;
      .address {
        font-size: 10px;
        color: #999;
      }
    }
  }
</style>
