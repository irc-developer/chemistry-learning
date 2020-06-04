import Vue from 'vue'
import Vuex from 'vuex'
import BootstrapVue from 'bootstrap-vue' 
import App from './App.vue' 
import routers from "./routes.js"
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import 'es6-promise/auto'

Vue.use(Vuex) 
Vue.use(BootstrapVue);

Vue.config.productionTip = false

new Vue({
  routers,
  render: h => h(App),
}).$mount('#app')
