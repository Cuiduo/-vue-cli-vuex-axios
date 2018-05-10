<template>
	<ul>
	  <li v-for="item in items">
	    <router-link tag="a" :to="{path:'/lujing',query:{table:item} }">
	      <div class="mui-navigate-right">
	        <span>{{item.id}}</span>
	        <span>{{item.name}}</span>
	      </div>
	    </router-link>
	  </li>
	</ul>
</template>

<script>
	//这个是写在uldetail里面的
	export default {
	    data() {
	      return {
	        itemData:'',
	      }
	    },
	     created() {
	     //将前面query带过来的table参数赋值给该组件定义的itemData值
	      this.itemData= this.$route.query.table;
	    },
	}
</script>

<style>
</style>