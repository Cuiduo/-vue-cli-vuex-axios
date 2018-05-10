<template>
	<div class="index">
		<x-header>
	      <span>overwrite-left</span>
	      <x-icon slot="overwrite-left" @click="sidebar" v-model="showSide" type="navicon" size="35" style="fill:#fff;position:relative;top:-8px;left:-3px;"></x-icon>
	    </x-header>
	    <div v-transfer-dom>
	      <popup v-model="showSide" position="left">
	        <div class="sidebar">
	        	 <x-button @click.native="goLogin" mini>{{user}}</x-button>
	        </div>
	      </popup>
	    </div>
    </div>
</template>

<script>
	import {XButton, TransferDom, Popup , XSwitch} from 'vux'
	export default {
	    name: 'Index',
	    directives: {
		    TransferDom
		},
	    data () {
		    return {		      
		      showSide: false,	
		      user:'登入'
		    }
	    },
	    created(){
	    	if(this.setData){
	    		this.user=this.setData
	    	}
	    },
	    components: {
		    Popup,		     
    		XSwitch,
    		XButton
		},
		computed:{
	    	setData(){
	    		return this.$store.state.setData
	    	}
	    },
		methods:{
		    sidebar(){
		        this.showSide=true
		    },
		    goLogin(){
		    	this.$router.push('/Logoin')
		    }
		}
	}
</script>

<style>
	.sidebar{
		width: 5rem;
		height: 100%;
	}
	.index .vux-header{
		background-color: red;
	}
</style>