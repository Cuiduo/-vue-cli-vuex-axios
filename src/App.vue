<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App',
  mounted(){
	this.$router.afterEach((to, from) => {
		if(to.name == 'Home' || to.name == 'Message' || to.name == 'PersonalCenter'){
			this.isButtonNavShow =true;
		}else{
			this.isButtonNavShow =false;
		}			
	})
  },
}
</script>

<style>

</style>
