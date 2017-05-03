import Vue from 'vue'
import VueRouter from 'vue-router'
import App from './App.vue'

Vue.use(VueRouter)

// 1.定义（路由）组件
const Foo = {
	template: '<div>Foo !!!</div>'
}
const Bar = {
	template: '<div>Bar !!!</div>'
}

// 2.定义路由
var routes = [
	{
		path: '/foo',
		component: Foo
	},
	{
		path: '/bar',
		component: Bar
	}
]

// 3.创建router实例
var router = new VueRouter({
	routes
})

// 4.创建和挂载根实例
// 
new Vue({
  el: '#app',
  template: '<App/>',
  components: {App},
  router: router
})
