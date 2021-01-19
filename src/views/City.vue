<template>
  <div>
    <van-index-bar>
      <div v-for="cities in cityList" :key="cities.type">
        <van-index-anchor  :index="cities.type" />
        <van-cell v-for="(city,index) in cities.list" :key="index" :title="city.name" />
      </div>
    </van-index-bar>
  </div>
</template>

<script>
import Vue from 'vue'
import http from '@/utils/http'
import { IndexBar, IndexAnchor, Cell } from 'vant'

Vue.use(IndexBar).use(Cell).use(IndexAnchor)

export default {
  data () {
    return {
      cityList: []
    }
  },
  mounted () {
    http({
      url: '/gateway?k=5583210',
      headers: {
        'X-Host': 'mall.film-ticket.city.list'
      }
    })
      .then(res => {
        this.cityList = res.data.data.cities
        this.resolveCityData(res.data.data.cities)
      })
  },
  methods: {
    resolveCityData (cities) {
      console.log(cities)
      const indexArr = []
      const cityArr = []
      for (let i = 65; i <= 90; i++) {
        indexArr.push(String.fromCharCode(i))
      }
      indexArr.forEach(letter => {
        const list = cities.filter(item => item.pinyin.toUpperCase().startsWith(letter))
        if (list.length > 0) {
          cityArr.push({
            type: letter,
            list: list
          })
        }
      })
      console.log(cityArr)
      return cityArr
    }
  }
}
</script>

<style>

</style>
