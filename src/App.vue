<template>
  <div id="app">
    <AppHeader/>
    <PageTop/>
    <router-view></router-view>
  </div>
</template>

<script>
import AppHeader from './components/AppHeader'
import PageTop from './components/PageTop'
export default {
  name: 'App',
  components: {
    AppHeader,
    PageTop
  }
}
</script>

<style lang="scss">
.fade-enter-active, .fade-leave-active {
  transition: opacity .5s;
}
.fade-enter, .fade-leave-to {
  opacity: 0;
}
html, body, p {
  margin: 0;
  overflow-x: hidden;
}

#app {
  font-family: 'Roboto,-apple-system,BlinkMacSystemFont,"Segoe UI","Helvetica Neue",Arial,"Hiragino Kaku Gothic ProN",Meiryo,sans-serif', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
</style>
