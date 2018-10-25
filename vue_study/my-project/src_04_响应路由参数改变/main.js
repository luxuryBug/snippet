import Vue from 'vue'
import VueRouter from 'vue-router'
import App from './App.vue'
import router from './router.js'

Vue.use(VueRouter)



// 4.创建和挂载根实例

new Vue({
  el: '#app',
  template: '<App/>',
  components: {App},
  router: router
})
