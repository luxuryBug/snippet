<template>
  <div id="app">
    <h1>07_多页签keep-alive</h1>
    <p>
      <router-link to="/user/1">用户详情1</router-link>
      <router-link to="/user/2">用户详情2</router-link>
      <router-link to="/user/3/profile">用户详情3</router-link>
      <router-link to="/user/3/profile">用户详情3</router-link>
      <router-link to="/user/3/posts">用户详情3</router-link>
      <router-link to="/bar">Go to Bar</router-link>
    </p>
    
    <keep-alive>
    	<router-view></router-view>
    </keep-alive>	
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
