export default {
  updateCountAsync ({ commit }, num) {
    setTimeout(() => {
      commit('updateCount', num)
    }, 1000)
  }
}
