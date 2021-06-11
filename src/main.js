import Vue from 'vue'
import App from './App.vue'
import router from './router'
import Vuex from 'vuex'
import store from './store'
import 'es6-promise/auto'
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'
import anime from 'animejs/lib/anime.es.js';
import jquery from 'vue-jquery'


// Make BootstrapVue available throughout your project
Vue.use(BootstrapVue)
// Optionally install the BootstrapVue icon components plugin
Vue.use(IconsPlugin)

Vue.use(Vuex)

Vue.use(store)

Vue.use(anime)

Vue.use(jquery)


Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
