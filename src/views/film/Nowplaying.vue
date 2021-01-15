<template>
  <div>
    <ul>
      <li v-for="data in dataList" :key="data.filmId" @click="handleClick(data.filmId)">
        <img :src="data.poster">
        {{ data.name }}
      </li>
    </ul>
  </div>
</template>

<script>
import axios from 'axios'

export default {
  data () {
    return {
      dataList: [
        {
          id: 111,
          name: '电影1'
        },
        {
          id: 222,
          name: '电影2'
        },
        {
          id: 333,
          name: '电影3'
        }
      ]
    }
  },
  methods: {
    handleClick (id) {
      // 编程式的导航，1-动态路由
      // this.$router.push(`/detail/${id}`)
      // 编程式的导航，2-命名路由
      // this.$router.push({ name: 'Detail', params: { id: id } })
      // 编程式的导航，3-query方式路由
      this.$router.push(`/detail?id=${id}`)
    }
  },
  mounted () {
    // 3. 卖座
    // 虽然返回 Access-Control-Allow-Origin: *，但是需要携带请求header访问接口
    // https://m.maizuo.com/gateway?cityId=310100&pageNum=1&pageSize=10&type=1&k=5557162
    axios({
      url: 'https://m.maizuo.com/gateway?cityId=310100&pageNum=1&pageSize=10&type=1&k=5557162',
      headers: {
        'X-Client-Info': '{"a":"3000","ch":"1002","v":"5.0.4","e":"1610686465919458008793089"}',
        'X-Host': 'mall.film-ticket.film.list'
      }
    }).then(res => {
      console.log(res.data.data.films)
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
    }
  }
}
</style>
