<template>
  <div id="app">
    <AppHeader/>
    <router-link to ="/">
      engineer
    </router-link>
    <router-link to ="/artist">
      artist
    </router-link>
    <PageTop/>
    <PageAbout/>
    <PagePortfolio/>
    <router-view></router-view>
    <AppFooter/>
  </div>
</template>

<script>
import AppHeader from './components/AppHeader'
import PageTop from './components/PageTop'
import PageAbout from './components/PageAbout'
import PagePortfolio from './components/PagePortfolio'
import AppFooter from './components/AppFooter'

export default {
  name: 'App',
  components: {
    AppHeader,
    PageTop,
    PageAbout,
    PagePortfolio,
    AppFooter
  }
}
</script>

<style lang="scss">
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
