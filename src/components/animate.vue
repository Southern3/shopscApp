<template>
	<div  >
		<div class="dh" @click="go({name:'Main'})"></div>
	</div>
</template>

<script>
	export default{
		
		name:'animate',
//		
		methods:{
//			created(){
//				setTimeout(function(){
//					this.$router.push({name:'Main'})
//				},1000)
//			}
			go(path){
				
					this.$router.push(path)
			}
//			
		}
//		
	}
</script>

<style lang="less" scoped>

	.dh{
		width: 100%;
		height: 17rem;
		background: url(../assets/img1/jd.jpg);
		background-size: 100% 100%;
	}

</style>