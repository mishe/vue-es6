import Vue from 'vue'
import VueRouter from 'vueRouter'
import Home from './home.vue'
import Detail from './detail.vue'

Vue.use(VueRouter)

const routes = [
  { path: '/home', component: Home },
  { path: '/detail', component: Detail }
]

const router = new VueRouter({
  routes // （缩写）相当于 routes: routes
})

const app = new Vue({
  router
}).$mount('#app')



