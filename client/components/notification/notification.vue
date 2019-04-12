<template>
  <transition name="fade" @after-leave="afterLeave">
    <div class="notification" v-show="visible" :style="style">
      <div class="close" @click="close">关闭</div>
      <div class="info">{{message}}</div>
    </div>
  </transition>
</template>

<script>
export default {
  name: 'notification',
  props: ['message'],
  data: function () {
    return {
      visible: false
    }
  },
  computed: {
    style () {
      return {}
    }
  },
  methods: {
    close () {
      this.visible = false
      this.$emit('close')
    },
    afterLeave () {
      this.$emit('after-leave')
    }
  }
}
</script>

<style lang="stylus" scoped>
.notification
  position fixed
  padding 20px
  width 200px
  background-color #000
  color #fff
  .info
    padding-right 40px
  .close
    float right
    width 40px
    color red
.fade-enter-active, .fade-leave-active
  transition opacity .5s
.fade-enter, .fade-leave-to
  opacity 0
</style>
