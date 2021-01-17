<template>
  <div>
    <van-list
        v-model="loading"
        :finished="finished"
        finished-text="我是有底线的 ！！！"
        @load="onLoad"
        :immediate-check="false"
      >
      <van-cell v-for="data in dataList" :key="data.filmId" @click="handleClick(data.filmId)">
        <img :src="data.poster">
        <h3>{{ data.name }}</h3>
        <p style="white-space: nowrap;overflow: hidden;text-overflow: ellipsis;">主演：{{ data.actors | actorFilter }}</p>
        <p>{{data.nation }} | {{ data.runtime }}分钟</p>
      </van-cell>
    </van-list>
  </div>
</template>

<script>
import http from '@/utils/http'
import Vue from 'vue'

import { List, Cell } from 'vant'
Vue.use(List).use(Cell)

Vue.filter('actorFilter', (actors) => {
  if (actors === undefined) return '暂无主演'
  return actors.map(actor => actor.name).join(' ')
})

export default {
  data () {
    return {
      dataList: [],
      loading: false,
      finished: false,
      currentPage: 1,
      total: 0
    }
  },
  mounted () {
    // 3. 卖座
    // 虽然返回 Access-Control-Allow-Origin: *，但是需要携带请求header访问接口
    // https://m.maizuo.com/gateway?cityId=310100&pageNum=1&pageSize=10&type=1&k=5557162
    http({
      url: `/gateway?cityId=310100&pageNum=${this.currentPage}&pageSize=10&type=1&k=4907295`,
      headers: {
        'X-Host': 'mall.film-ticket.film.list'
      }
    }).then(res => {
      // console.log(res.data.data.films)
      this.dataList = res.data.data.films
      // 获取总长度
      this.total = res.data.data.total
    })
  },
  methods: {
    handleClick (id) {
      // 编程式的导航，1-动态路由
      // this.$router.push(`/detail/${id}`)
      // 编程式的导航，2-命名路由
      // this.$router.push({ name: 'Detail', params: { id: id } })
      // 编程式的导航，3-query方式路由
      this.$router.push(`/detail/${id}`)
    },
    onLoad () {
      if (this.dataList.length === this.total) {
        this.finished = true
        return
      }
      console.log('到底了。。。')
      this.currentPage++
      http({
        url: `/gateway?cityId=310100&pageNum=${this.currentPage}&pageSize=10&type=1&k=4907295`,
        headers: {
          'X-Host': 'mall.film-ticket.film.list'
        }
      }).then(res => {
        // console.log(res.data.data.films)
        this.dataList = [...this.dataList, ...res.data.data.films]
        // 最后将 loading 设置为 false，即当此数据加载完毕
        this.loading = false
      })
    }
  }
}
</script>

<style scoped lang="scss">
.van-list {
  .van-cell {
    overflow: hidden;
    padding: 10px;
    img {
      float: left;
      width: 100px;
      margin-right: 10px;
    }
  }
}
</style>
