import Vue from 'vue'
import Vuex from 'vuex'
import TabbarModule from './module/TabbarModule'
import CinemaModule from './module/CinemaModule'
import CityModule from './module/CityModule'
import createPersistedState from 'vuex-persistedstate'

Vue.use(Vuex)

export default new Vuex.Store({
  plugins: [createPersistedState()],
  state: {

  },
  mutations: {

  },
  actions: {

  },
  modules: {
    TabbarModule,
    CinemaModule,
    CityModule
  }
})
