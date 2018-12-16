// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import VueRouter from 'vue-router';
import { routes } from './routes';
import VueScrollTo from 'vue-scrollto';
import store from './store';

Vue.use(VueScrollTo)
Vue.use(VueRouter)
Vue.config.productionTip = false

const router = new VueRouter({
  mode: 'history',
  routes
});
// 規定パス以外のパスにアクセスされたときルートに返す
router.replace({
  path: '',
  redirect: '/'
})

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
