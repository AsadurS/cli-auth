import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import axios from 'axios'

require("@/store/subcriber.js")

Vue.prototype.$http = axios;
axios.defaults.baseURL = "http://127.0.0.1:8000";

Vue.config.productionTip = false
store.dispatch('auth/attempt', localStorage.getItem("token"))
new Vue({
  router,
  store,
 
  render: h => h(App)
}).$mount('#app')
