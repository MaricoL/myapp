import Vue from 'vue'
import Vuex from 'vuex'
import http from '@/utils/http'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    cityId: '310100',
    cityName: '上海',
    isTabbarShow: true,
    cinemaList: []
  },
  mutations: {
    changeCityName (state, cityName) {
      state.cityName = cityName
    },
    changeCityId (state, cityId) {
      state.cityId = cityId
    },
    hide (state) {
      state.isTabbarShow = false
    },
    show (state) {
      state.isTabbarShow = true
    },
    setCinemaList (state, cinemaList) {
      state.cinemaList = cinemaList
    }
  },
  actions: {
    getCinemaList (store, cityId) {
      return http({
        url: `gateway?cityId=${cityId}&ticketFlag=1&k=7833457`,
        headers: {
          'X-Host': 'mall.film-ticket.cinema.list'
        }
      }).then(res => {
        store.commit('setCinemaList', res.data.data.cinemas)
      })
    }
  },
  modules: {
  }
})
