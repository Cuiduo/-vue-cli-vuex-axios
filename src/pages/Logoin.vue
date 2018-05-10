<template>
  <div id="container">
    <!--<h1>{{this.$store.state.data}}</h1>-->
    <x-header :left-options="{backText: ''}">登入账号</x-header>
    <x-button type="primary" @click.native='handleClick'>submit</x-button>
    <x-button mini @click.native='login'>确认登入</x-button>
    <x-button mini @click.native='postit'>axios请求</x-button>
    <x-button mini @click.native='handleClick'>测试axios</x-button>
    <toast v-model="isToastShow" type="success" width='4rem'>{{texts}}</toast>
  </div>
</template>



<script>
import { XButton,Toast,Drawer  } from 'vux'
import {baURL} from '../api/url.js'
import qs from 'qs'
import axios from 'axios'
//import { XHeader } from 'vux'
export default {
  name: 'Login',
  data(){
    return{
      isToastShow:false,
      texts:'vux'
    }
  },
  components: {
    XButton,
    Toast,
//  XHeader,
    Drawer 
  },
  methods:{
    handleClick(){
        this.isToastShow=true
    },
    login(){    	
    	this.$store.dispatch('getData');
    	
    },
    test(){    	
    	this.$store.dispatch('testData');
    	
    },
    postit(){
				var qs = require('qs');
				var data = qs.stringify({ 
				    	"email": "1537554356@qq.com",
							"userType": "0",
							"password": "123456" 
				})
				axios.post(baURL+'/huanyu-webapp/hySystem/login.do',data)
				.then((res)=>{
					//context.commit('saveTest', res);
					console.log(res.data.dataMap.result.nickName);
					this.texts = res.data.dataMap.result.nickName
	//				var str = res.data.data.role[0].operation
	//				console.log(str);
					//if(str==1){router.push('/')}
				})
				.catch((err)=>{
					console.log('err');
				})
    }
  }
}
</script>

<style>
    h1{
      display: flex;
      /*padding: 0.5rem;*/
      font-size: 0.4rem;
      justify-content: center;
      align-items: center;
    }
</style>