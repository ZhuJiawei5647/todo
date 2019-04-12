// import Notification from './notification.vue'
import notify from './function'

export default (Vue) => {
  Vue.prototype.$notify = notify
  // Vue.component(Notification.name, Notification)
}
