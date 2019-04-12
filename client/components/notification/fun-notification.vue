<script>
import Notification from './notification.vue'

export default {
  extends: Notification,
  data () {
    return {
      num: 0
    }
  },
  computed: {
    style () {
      console.log(this.num)
      return {
        position: 'fixed',
        right: '20px',
        bottom: this.num * 80 + 16 + 'px'
      }
    }
  }
}
</script>
