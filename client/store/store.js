import Vuex from 'vuex'
import state from './state/state'
import getters from './getters/getters'
import mutations from './mutations/mutations'
import actions from './actions/actions'

const isDev = process.env.NODE_ENV === 'development'

export default () => {
  const store = new Vuex.Store({
    strict: isDev,
    state,
    getters,
    mutations,
    actions,
    plugins: [
      (store) => {
        console.log('my plugin invoked')
      }
    ]
  })

  if (module.hot) {
    module.hot.accept([
      './state/state.js',
      './mutations/mutations.js',
      './getters/getters.js',
      './actions/actions.js'
    ], () => {
      const newState = require('./state/state').default
      const newMutations = require('./mutations/mutations').default
      const newGetters = require('./getters/getters').default
      const newActions = require('./actions/actions').default

      store.hotUpdate({
        state: newState,
        mutations: newMutations,
        getters: newGetters,
        actions: newActions
      })
    })
  }

  return store
}
