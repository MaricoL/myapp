<template>
  <div>
    <van-index-bar :index-list="computedCitiesList" @select="handleSelect">
      <div v-for="cities in citiesList" :key="cities.type">
        <van-index-anchor  :index="cities.type" />
        <van-cell v-for="(city,index) in cities.list" :key="index" :title="city.name" @click="handleChangePage(city.name,city.cityId)"/>
      </div>
    </van-index-bar>
  </div>
</template>

<script>
import Vue from 'vue'
import http from '@/utils/http'
import { IndexBar, IndexAnchor, Cell, Toast } from 'vant'

Vue.use(IndexBar).use(Cell).use(IndexAnchor).use(Toast)

export default {
  data () {
    return {
      citiesList: []
    }
  },
  computed: {
    computedCitiesList () {
      return this.citiesList.map(cities => cities.type)
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
        this.citiesList = this.resolveCityData(res.data.data.cities)
      })
  },
  methods: {
    resolveCityData (cities) {
      // console.log(cities)
      const indexArr = []
      const citiesArr = []
      for (let i = 65; i <= 90; i++) {
        indexArr.push(String.fromCharCode(i))
      }
      indexArr.forEach(letter => {
        const list = cities.filter(item => item.pinyin.toUpperCase().startsWith(letter))
        if (list.length > 0) {
          citiesArr.push({
            type: letter,
            list: list
          })
        }
      })
      // console.log(citiesArr)
      return citiesArr
    },
    handleSelect (index) {
      Toast({
        message: index
      })
    },
    handleChangePage (cityName, cityId) {
      // 直接改变state不安全
      // this.$store.state.cityName = cityName
      this.$store.commit('changeCityName', cityName)
      this.$store.commit('changeCityId', cityId)
      this.$router.back()
    }
  }
}
</script>

<style>
  .van-toast{
    min-width: unset
  }
</style>
