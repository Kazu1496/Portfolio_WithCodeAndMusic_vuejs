// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import VueScrollTo from 'vue-scrollto'
import '@fortawesome/fontawesome-free-webfonts/css/fontawesome.css'
import '@fortawesome/fontawesome-free-webfonts/css/fa-brands.css'
import '@fortawesome/fontawesome-free-webfonts/css/fa-regular.css'
import '@fortawesome/fontawesome-free-webfonts/css/fa-solid.css'

Vue.use(VueScrollTo)
Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  components: { App },
  template: '<App/>'
})
