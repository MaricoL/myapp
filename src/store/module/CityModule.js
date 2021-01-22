const module = {
  namespaced: true,
  state: {
    cityId: '310100',
    cityName: '上海'
  },
  mutations: {
    changeCityName (state, cityName) {
      state.cityName = cityName
    },
    changeCityId (state, cityId) {
      state.cityId = cityId
    }
  }

}

export default module
