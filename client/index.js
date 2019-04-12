import Vue from 'vue'
import VueRouter from 'vue-router'
import Vuex from 'vuex'
import App from './app.vue'

import './assets/styles/global.styl'
import createRouter from './config/router'
import createStore from './store/store'

Vue.use(VueRouter)
Vue.use(Vuex)

const router = createRouter()
const store = createStore()

// store.registerModule('c', {
//   state: {
//     count: 0
//   }
// })

// store.watch(state => state.count + 1, (newCount) => {
//   console.log('new count watch', newCount)
// })

// store.subscribe((mutation, state) => {
//   console.log(mutation.type)
//   console.log(mutation.payload)
// })

// store.subscribeAction((action, state) => {
//   console.log(action.type)
//   console.log(action.payload)
// })

router.beforeEach((to, from, next) => {
  console.log('before each invoked')
  next()
})

router.beforeResolve((to, from, next) => {
  console.log('before resolve invoked')
  next()
})

router.afterEach((to, from) => {
  console.log('afger each invoked')
})

const root = document.createElement('div')
document.body.appendChild(root)

new Vue({
  router,
  store,
  render: (h) => h(App)
}).$mount(root)
