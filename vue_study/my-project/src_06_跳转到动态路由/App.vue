<template>
  <div id="app">
    <h1>01_练习vue-router</h1>
    <p>
      <router-link to="/user/1">用户详情1</router-link>
      <router-link to="/user/2">用户详情2</router-link>
      <router-link to="/user/3/profile">用户详情3</router-link>
      <router-link to="/user/3/profile">用户详情3</router-link>
      <router-link to="/user/3/posts">用户详情3</router-link>
      <router-link to="/bar">Go to Bar</router-link>
    </p>
    <p>
    	<span>跳转到路由路径：</span>
    	<input v-model="path">
    	<span>参数：</span>
    	<input v-model="params">
    	<button @click="jumpPage">跳转</button>
    </p>
    <router-view></router-view>
  </div>
</template>

<script>
import Vue from 'vue'
import VueRouter from 'vue-router'
import router from './router.js'

export default {
	name: 'app',
	data: function(){
		return {
			path: '',
			params: ''
		}
	},
	methods: {
		jumpPage(){
			debugger
			router.push({path: this.path});
		}
	}
}
</script>
