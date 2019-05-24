<template>
	<div class="shopcart">
		<!--顶部导航-->
		<div class="top">	
			<van-nav-bar
				  title="购物车"
				  left-text="返回"
				  left-arrow
				  @click-left="back"
				/>
		</div>
		
		<!-- 登录 -->
		<div class="login" @click="goState({name:'Login'})" v-show="isShow">
			<span class="left">登录后享受更多优惠</span>
			<span class="right">去登录></span>
		</div>
		
		<!--购物车空的-->		
		<div class="nullcart" @click="goState({name:'Index'})">
			<p><van-icon name="shopping-cart" />购物车空空如也，去逛逛吧</p>
		</div>
		
		<!--猜你喜欢-->
		<div class="like" v-show="isShow">
			<div class="likeshop" >
				<p class="clike">猜你喜欢</p>
				<p class="tjlike">实时推荐你的心心念念</p>
			</div>
			
			
		  	<van-col @click.native="goState({name:'Shop',params:{pid:item.goodName}})"  span="12" class="col-box" v-for="(item,index) in xmzn" :key="index">
		  			<div><img class="auto-img" :src="item.goodImg" /></div>
		  			<div class="product-info">
		  				<p class="title">{{item.goodName}}</p>
		  				<p class="price">￥{{item.goodPrice}}元</p>
		  				<p class="buy">立即购买</p>
		  			</div>
		  		</van-col>

		</div>
		
		
	</div>
</template>

<script>
	
	import {Tab, Swipe, SwipeItem, GoodsAction, GoodsActionBigBtn, Sku, NavBar, Button } from 'vant'
	
	export default{
		name:'Shopcart',
		data(){
			return{
				isShow:true,
				xmzn:[],
			}
		},
		components:{
			[NavBar.name]:NavBar,
			[Tab.name]:Tab,
		  	[Swipe .name]:Swipe,
		  	[SwipeItem .name]:SwipeItem
		},
		
		
		methods:{
			
			back(){
				if( this.active == 1 ){
					this.$router.push({name:'Index',query:{active:this.active}})
				}else{
					this.$router.go(-1);
				}
				
			},
			
			goState(path){
				this.$router.push(path);
			},
			 open2() {
		        this.$notify({
		          title: '提示',
		          message: '亲，你还没有登录账号呢',
		          duration: 0
		        });
		      }
			
		},
		
		created(){
					
			var xm = JSON.parse(localStorage.getItem('xm'));
			     xm.goods.forEach(xmzn => {
			       	 if(xmzn.goodType == '智能'){
			       	 	this.xmzn.push(xmzn);
			       	 }		
			//    		console.log(xmzn)
			     })	
			// 判断是否登录，登录的话就消失登录模块
			var userLogin = JSON.parse(localStorage.getItem("userLogin"));
//			console.log('userLogin =>', userLogin);
			if (userLogin) {
				this.isShow = false;
			}else{
				this.isSow = true;
//				this.$message('你还没有登录喔');
				this.$notify({
		          title: '提示',
		          message: '亲，你还没有登录账号呢',
		          duration: 0
		        });
			}
			
			var xmproduct = localStorage.getItem('xmproduct');
			console.log("xmproduct",xmproduct);
			
		}
		
	}
</script>

<style lang="less" scoped>
	.shopcart{
		padding-top: 1.6rem;
		z-index: 999;
	}
	.top{
		width: 100%;
		position: fixed;
		top: 0;
	}
	
	.login{
		width: 100%;
		height: 1.6rem;
		background-color: #F2F3F5;
		line-height: 1.6rem;
		span{
			padding:0 0.3rem;
		}
		.left{
			font-size: 0.48rem;
			float: left;
		}
		.right{
			font-size: 0.36rem;
			float: right;
		}
	}
	
	.nullcart{
		width: 100%;
		height: 1.4rem;
		line-height: 1.4rem;
		font-size: 0.4rem;
		text-align: center;
		background-color: #EBEBEB;
		p{
			color:#C8C9CC;
		}
	}
	
	.like{
		text-align: center;
		/*background: #EBEDF0;*/
		.likeshop{
			p{
				margin: 0.2rem;
			}
			.clike{
				color: orange;
				font-size: 0.4rem;
			}
			.tjlike{
				font-size: 0.3rem;
			}
		}
	}
	
		.product-info{
			width: 100%;
			margin: 0 auto;
			text-align: center;
			.title{
				font-size: 0.4rem;
			}
			.price{
				color:red;
			}
			.buy{
				width: 40%;
				height:100%;
				margin: 0 auto;
				background: red;
				font-size: 0.4rem;
				padding: 0.1rem;
				color: #FFFFFF;
				border-radius: 0.2rem;
			}
		}
	
</style>