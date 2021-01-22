<template>
  <div>
    <van-search
      v-model="value"
      show-action
      placeholder="请输入搜索关键词"
      @search="onSearch"
      @cancel="onCancel"
    />

    <div class="cinema" :style="{height:height}">
      <van-list>
        <van-cell v-for="(cinema) in currCinemaList" :key="cinema.cinemaId">
          <div>{{ cinema.name }}</div>
          <div class="address">{{ cinema.address }}</div>
        </van-cell>
      </van-list>
    </div>

  </div>
</template>

<script>
import Vue from 'vue'
import { Search, List, Cell } from 'vant'
import BetterScroll from 'better-scroll'
import { mapState, mapActions } from 'vuex'

Vue.use(Search).use(List).use(Cell)

export default {
  data () {
    return {
      value: '',
      height: 0,
      currCinemaList: [],
      bs: null
    }
  },
  computed: {
    ...mapState('CityModule', ['cityName', 'cityId']),
    ...mapState('CinemaModule', ['cinemaList'])
  },
  mounted () {
    this.height = document.documentElement.clientHeight - 100 + 'px'
    if (this.cinemaList.length === 0) {
      this.getCinemaList(this.cityId)
        .then(res => {
          this.currCinemaList = this.cinemaList
          this.$nextTick(() => {
            this.bs = new BetterScroll('.cinema', {
              scrollbar: {
                fade: true
              }
            })
          })
        })
    } else {
      console.log('缓存')
      this.$nextTick(() => {
        this.bs = new BetterScroll('.cinema', {
          scrollbar: {
            fade: true
          }
        })
      })
    }
  },
  methods: {
    ...mapActions('CinemaModule', ['getCinemaList']),
    onSearch () {
      this.currCinemaList = this.cinemaList.filter(cinema =>
        cinema.name.toUpperCase().includes(this.value.toUpperCase()) || cinema.address.toUpperCase().includes(this.value.toUpperCase()))
      this.$nextTick(() => {
        this.bs.refresh()
      })
    },
    onCancel () {
      this.$router.replace('/cinema')
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
