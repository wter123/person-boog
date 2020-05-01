import Vue from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import store from './store/store.js'
import 'jquery'
import 'font-awesome/css/font-awesome.min.css'
import 'bootstrapvalidator/dist/css/bootstrapValidator.min.css'
// import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrapvalidator/dist/js/bootstrapValidator.min.js'
import 'bootstrap/dist/js/bootstrap.bundle.min.js'
import 'bootstrap/dist/js/bootstrap.min.js'


import axios from 'axios'
import VueResource from 'vue-resource'

Vue.config.productionTip = false

Vue.prototype.axios = axios
Vue.use(VueResource)
new Vue({
    router,
    store,
    render: function(h) { return h(App) }
}).$mount('#app')