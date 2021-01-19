import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import axios from 'axios'

require("@/store/subcriber.js")

Vue.prototype.$http = axios;
axios.defaults.baseURL = "http://localhost:8000";

Vue.config.productionTip = false
store.dispatch('auth/attempt', localStorage.getItem("token")).then(()=>{
  new Vue({
    router,
    store,
   
    render: h => h(App)
  }).$mount('#app')
})

