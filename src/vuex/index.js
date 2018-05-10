/*
* @Author: 崔铎
* @Date:   2018-04-11 19:04:26
* @Last Modified by:   崔铎
* @Last Modified time: 2018-04-11 19:06:32
*/
import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'
import router from '../router/index.js'
import {baURL} from '../api/url.js'
Vue.use(Vuex)
//var AUTH_TOKEN= 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJleHQiOjE1MjY0NzQwNjMzNzQsImlhdCI6MTUyMzg4MjA2MzM3NCwidXNlck5vIjoiMTAwMDAwMDAyNCJ9.uO4GBLhoLYrEXy1ytrVrcg5RibPuVfd4ePJEnqlnEfA';
//axios.defaults.headers.common['Authorization'] = AUTH_TOKEN;
//axios.defaults.baseURL = 'http://39.106.10.23:80/';

//首先声明一个状态 state
export default new Vuex.Store({
	state:{
		setData:'',
		testDate:''
	},
	// 更新状态
	mutations:{
		saveData(state,payload){
			state.setData=payload
		},
		saveTest(state,payload){
			state.testDate=payload
		}
	},
	//然后给 actions 注册一个事件处理函数，当这个函数被触发时，将状态提交到 mutaions中处理
	actions:{
		getData(context){
			var params = new URLSearchParams();
			params.append('name', 'admin');
			params.append('password', '123456');
			axios.post('http://116.62.105.42/admin/getrole.do',params)
			.then((res)=>{
				// 提交到mutations中处理 
				context.commit('saveData', res.data.data.role[0].operation);
				var str = res.data.data.role[0].operation;
				
				AUTH_TOKEN = '';
				console.log(AUTH_TOKEN);
				if(str==1){router.push('/')}
			})
			.catch((err)=>{
				console.log('err');
			})
		},
		testData(context){
			var paramss = new URLSearchParams();
			paramss.append('email', '1537554356@qq.com');
			paramss.append('userType', '0');	
			paramss.append('password', '123456');	
			axios.post(baURL+'/huanyu-webapp/hySystem/login.do',paramss)
			.then((res)=>{
				context.commit('saveTest', res);
				console.log(res.data.dataMap.result.nickName)
//				var str = res.data.data.role[0].operation
//				console.log(str);
				//if(str==1){router.push('/')}
			})
			.catch((err)=>{
				console.log('err');
			})
		},
	},
})



