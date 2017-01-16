import Vue from 'vue'
import VueRouter from 'vueRouter'
import VueTap from 'v-tap'
import fetch from 'whatwg-fetch'

require('../component/helper');

import Home from './home.vue'
import LandPage from './landPage.vue'
import History from './history.vue'

Vue.use(VueRouter)
Vue.use(VueTap)

const routes = [
  { path: '/', component: Home },
  { path: '/landPage/:lid', component: LandPage },
  { path: '/history/:hid', component: History }
]

const router = new VueRouter({
  routes // （缩写）相当于 routes: routes
})

const app = new Vue({
  router
}).$mount('#app')



