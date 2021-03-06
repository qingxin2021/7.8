// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import './assets/iconfont/iconfont.css'
import store from './store/store'
import mintui from 'mint-ui'
import 'mint-ui/lib/style.css'
Vue.use(mintui)
Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  mintui,
  components: { App },
  template: '<App/>'
  
})
