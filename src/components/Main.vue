<template>
  <div class="main">
  	<div>
  		<!--二级路由-->
  		<router-view></router-view>
  	</div>
   		<!--<div class="animate" v-show="isShow" @click="createds"></div>-->
   		
   			
   		<!--标签导航-->
			<van-tabbar v-model="active" class="vtabs">
			  <van-tabbar-item v-for="(item,index) in tabs" :key="index" :icon="item.icon" @click="toggleTbas(item)">
			  	{{item.title}}
			  </van-tabbar-item>	 
			</van-tabbar>
   			
  </div>
</template>

<script>

import {  Tabbar, TabbarItem  } from 'vant' 


export default {
  name: 'Main',
  
  data(){
  	return{

  		active:0,
  		
  		tabs:[
					{title:'首页',icon:'home-o',path:'/Index'},
					{title:'分类',icon:'coupon-o',path:"/Classify"},
					{title:'购物车',icon:'coupon-o',path:'/Shopcart'},
					{title:'我的',icon:'manager-o',path:'/MyCenter'}
				]
  		
  	};
  },
  
  components:{

  	[Tabbar .name]:Tabbar,
  		[TabbarItem .name]:TabbarItem 
  	
  },

methods:{
	
	toggleTbas(item) {

    this.goState(item.path);

  },
	
	goState(path){
		this.$router.push(path);
//		console.log('123');
	},
	
	

}

}
</script>

<style lang="less" scoped>

	.main{
		width: 100%;
		height: 100%;
		/*overflow: auto;*/
		padding-bottom: 1.6rem ;
		
		
	}
	.vtabs{
		/*position: fixed;*/
		/*bottom: 0;*/
		margin: 0 auto;
		max-width: 640PX;
	}
	


	
</style>
