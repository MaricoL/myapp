const module = {
  namespaced: true,
  state: {
    isTabbarShow: true
  },
  mutations: {
    hide (state) {
      state.isTabbarShow = false
    },
    show (state) {
      state.isTabbarShow = true
    }
  }

}

export default module
