import Vue from 'vue'
import VueRouter from 'vue-router'

// 1.定义（路由）组件
const User = {
	template: '<div>用户：{{detail}}</div>',
	data: function(){
		return {
			detail: ''
		}
	},
	watch: {
		'$route'(to,from){
			console.log(to);
			this.detail = to.params.id;
		}
	}
}
const Bar = {
	template: '<div>Bar !!!</div>'
}

// 2.定义路由
var routes = [
	{
		path: '/user/:id',
		component: User
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