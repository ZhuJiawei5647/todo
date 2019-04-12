import Vue from 'vue'

const app = new Vue({
  el: '#root',
  template: '<div ref="div">{{text}}</div>',
  data () {
    return {
      text: 0
    }
  }
})

setInterval(() => {
  app.text += 1
  app.text += 1
  app.text += 1
  app.text += 1
  app.text += 1
}, 1000)

// console.log(app.$data)
// console.log(app.$props)
// console.log(app.$el)
// console.log(app.$options)
// app.$options.render = (h) => {
//   return h('div', {}, 'new render function')
// }
// console.log(app.$root === app) // true
// console.log(app.$children)
// console.log(app.$slots)
// console.log(app.$scopedSlots)
// console.log(app.$refs.div)
// console.log(app.$isServer) // 服务端渲染判断
// const unWatch = app.$watch('text', (newText, oldText) => {
//   console.log(newText)
//   console.log(oldText)
// })
// setTimeout(() => {
//   unWatch()
// }, 2000)
// app.$on('test', (a) => {
//   console.log('test emited', a)
// })
// app.$emit('test', 1)
// app.$forceUpdate() // 强制重新渲染
// app.$nextTick()
