export default {
  addActions (context, n = 0) {
    console.log(context)
    return context.commit('addCount', n)

  },

  inActions ({commit}, n = 0) {
    console.log(commit)
    return commit('inCount', n)

  }
}
