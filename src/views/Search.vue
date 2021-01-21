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
        <van-cell v-for="(cinema) in cinemaList" :key="cinema.cinemaId">
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

Vue.use(Search).use(List).use(Cell)

export default {
  data () {
    return {
      value: '',
      height: 0,
      cinemaList: [],
      bs: null
    }
  },
  mounted () {
    this.height = document.documentElement.clientHeight - 100 + 'px'
    if (this.$store.state.cinemaList.length === 0) {
      this.$store.dispatch('getCinemaList', this.$store.state.cityId)
        .then(res => {
          this.cinemaList = this.$store.state.cinemaList
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
      this.cinemaList = this.$store.state.cinemaList
      this.$nextTick(() => {
        this.bs = new BetterScroll('.cinema', {
          scrollbar: {
            fade: true
          }
        })
      })
    }
  },
  computed: {
    // computedCinemaList () {
    //   return this.$store.state.cinemaList.filter(cinema =>
    //     cinema.name.toUpperCase().includes(this.value.toUpperCase()) || cinema.address.toUpperCase().includes(this.value.toUpperCase()))
    // }
  },
  methods: {
    onSearch () {
      this.cinemaList = this.$store.state.cinemaList.filter(cinema =>
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
