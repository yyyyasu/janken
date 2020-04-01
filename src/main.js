import 'babel-polyfill'
import Vue from 'vue'
import store from './store.js'
import router from './router.js'
import App from './App.vue'



new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App)
})
