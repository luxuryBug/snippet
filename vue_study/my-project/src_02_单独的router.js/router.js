import Vue from 'vue'
import VueRouter from 'vue-router'

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

// 输出一个叫做default的变量或方法
export default router