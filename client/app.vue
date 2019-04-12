<template>
  <div id="app">
    <div id="cover"></div>
    <Header></Header>
    <router-link to="/app/123">app123</router-link>
    <router-link to="/app/456">app456</router-link>
    <router-link to="/login">login</router-link>
    <!-- <todo></todo> -->
    <transition name="fade">
      <router-view />
    </transition>
    <Footer></Footer>
    <!-- <router-view name="a" /> -->
  </div>
</template>

<script>
import Header from './views/layout/header.vue'
import Footer from './views/layout/footer.jsx'
// import Todo from './views/todo/todo.vue'

export default {
  metaInfo: {
    title: 'app'
  },
  components: {
    Header,
    Footer
    // Todo
  }
}
</script>

<style lang="stylus" scoped>
#app{
  position absolute
  left 0
  right 0
  top 0
  bottom 0
}
#cover{
  position absolute
  left 0
  top 0
  right 0
  bottom 0
  background-color #999
  opacity .9
  z-index -1
}
.fade-enter-active, .fade-leave-active {
  transition: opacity .5s
}
.fade-enter, .fade-leave-to  {
  opacity: 0
}
</style>
