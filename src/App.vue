<template>
  <div class="app" id="app">
   	
   		<router-view ></router-view>
  </div>
</template>

<script>


export default {
  name: 'app'
  
 
  

}
</script>

<style lang="less">

body,html{
	margin: 0;
	padding: 0;
}

#app{
	width: 100%;
	height: 100%;
}
.app{
	max-width: 640PX;
	margin: 0 auto;
}
.auto-img{
	width: 100%;
	display: block;
}

</style>
