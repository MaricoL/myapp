<template>
  <div>
    <ul>
      <li v-for="data in dataList" :key="data.filmId" @click="handleClick(data.filmId)">
        <img :src="data.poster">
        <h3>{{ data.name }}</h3>
        <p style="white-space: nowrap;overflow: hidden;text-overflow: ellipsis;">主演：{{ data.actors | actorFilter }}</p>
        <p>{{data.nation }} | {{ data.runtime }}分钟</p>
      </li>
    </ul>
  </div>
</template>

<script>
import http from '@/utils/http'
import Vue from 'vue'

Vue.filter('actorFilter', (actors) => {
  return actors.map(actor => actor.name).join(' ')
})

export default {
  data () {
    return {
      dataList: []
    }
  },
  methods: {
    handleClick (id) {
      // 编程式的导航，1-动态路由
      // this.$router.push(`/detail/${id}`)
      // 编程式的导航，2-命名路由
      // this.$router.push({ name: 'Detail', params: { id: id } })
      // 编程式的导航，3-query方式路由
      this.$router.push(`/detail/${id}`)
    }
  },
  mounted () {
    // 3. 卖座
    // 虽然返回 Access-Control-Allow-Origin: *，但是需要携带请求header访问接口
    // https://m.maizuo.com/gateway?cityId=310100&pageNum=1&pageSize=10&type=1&k=5557162
    http({
      url: '/gateway?cityId=310100&pageNum=1&pageSize=10&type=1&k=4907295',
      headers: {
        'X-Host': 'mall.film-ticket.film.list'
      }
    }).then(res => {
      // console.log(res.data.data.films)
      this.dataList = res.data.data.films
    })
  }
}
</script>

<style scoped lang="scss">
ul {
  li {
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
