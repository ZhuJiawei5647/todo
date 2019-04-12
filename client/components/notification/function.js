import Vue from 'vue'
import FunNotification from './fun-notification.vue'

const Notification = Vue.extend(FunNotification)

let notifications = []

let removeNotification = (notification) => {
  notifications.splice(notification.num, 1)
  document.body.removeChild(notification.$el)
  notification.$destroy()
  for (let i = notification.num; i < notifications.length; i++) {
    notification.num = i
  }
}

export default (message, time) => {
  let notification = new Notification({
    data: {
      num: notifications.length
    },
    propsData: {
      message: message
    }
  })

  notifications.push(notification)

  notification.$mount()

  document.body.appendChild(notification.$el)

  notification.$on('after-leave', () => {
    console.log('after-leave')
    removeNotification(notification)
  })

  notification.visible = true
}
