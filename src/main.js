// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import './static/mobile.js'
import './static/reset.css'
import store from './vuex/index.js'
import fastclick from 'fastclick'
import { XHeader,Drawer,Popup } from 'vux'

Vue.component('popup', Popup)
Vue.component('drawer', Drawer)
Vue.component('x-header', XHeader)
Vue.config.productionTip = false
fastclick.attach(document.body)
Vue.use(store)
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
