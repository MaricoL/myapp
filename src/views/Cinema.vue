<template>
  <div>
    <van-nav-bar title="标题" @click-left="onClickLeft" @click-right="onClickRight">
      <template #left>
        <span style="margin-right: 5px;">{{ cityName }}</span><van-icon name="arrow-down" size="8" color="#000"/>
      </template>
      <template #right>
        <van-icon name="search" size="23" color="#000"/>
      </template>

    </van-nav-bar>

    <div class="cinema" :style="{height:height}">
      <van-list>
        <van-cell v-for="(cinema) in cinemaList" :key="cinema.cinemaId">
          <div>{{ cinema.name }}</div>
          <div class="address">{{ cinema.address }}</div>
        </van-cell>
      </van-list>
    </div>
  </div>
</template>

<script>
// import axios from 'axios'
import BetterScroll from 'better-scroll'
import Vue from 'vue'
import { NavBar, Icon, List, Cell } from 'vant'
import { mapState, mapMutations, mapActions } from 'vuex'

Vue.use(NavBar).use(Icon).use(List).use(Cell)

export default {
  data () {
    return {
      height: 0
    }
  },
  computed: {
    ...mapState('CityModule', ['cityName', 'cityId']),
    ...mapState('CinemaModule', ['cinemaList'])
  },

  mounted () {
    // console.log(mapState('CityModule', ['cityName']))
    // 配合 scroll-bar 设置 ul 的高度
    this.height = document.documentElement.clientHeight - 100 + 'px'
    // 将电影院列表请求交给vuex管理
    if (this.cinemaList.length === 0) {
      this.getCinemaList(this.cityId)
        .then(res => {
          this.$nextTick(() => {
            new BetterScroll('.cinema', {
              scrollbar: {
                fade: true
              }
            })
          })
        })
    } else {
      console.log('缓存')
      this.$nextTick(() => {
        new BetterScroll('.cinema', {
          scrollbar: {
            fade: true
          }
        })
      })
    }
  },

  methods: {
    ...mapMutations('CinemaModule', ['clearCinemaList']),
    ...mapActions('CinemaModule', ['getCinemaList']),

    onClickLeft () {
      // 清空CinemaList
      this.clearCinemaList()
      this.$router.push('/city')
    },
    onClickRight () {
      this.$router.push('/cinema/search')
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
