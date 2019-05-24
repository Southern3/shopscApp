<template>
	<div class="index">
	
	<div class="top" ref="top">
   			
   			<van-search @click="goState({name:'search'})"  class="ss" background="#f2f2f2"  ref='search' placeholder="请输入搜索关键词"  />
   			
   			<div class="logo">
   				<img class="auto-img" src="../assets/timg.jpg"/>
   			</div>
   			<div class="login" @click="goState({name:'MyCenter'})">
   				<van-icon class="manager" name="manager" />
   			</div>
   		</div>

   			
   		<!-- 商品类型标签 -->
		<van-tabs ref="ftabs" class="ftabs" v-model="active" background="#f2f2f2" title-active-color="orange" color="#1989FA" :line-height="2" :swipeable="true" :animated="true">
		  
		   <van-tab title="推荐" class="tebsv">
		  	<van-col span="24" class="col-box" >
		  			<van-swipe class="tjimg" :autoplay='2000'>
						<van-swipe-item v-for="(item,index) in banners2" :key="index">
								<img class="auto-img" :src="item.url" />
						</van-swipe-item>
				</van-swipe>
		  			<div class="icon">
		  				<img class="auto-img" src="http://localhost:8082/images/xiaomi/icon01.webp"  />
		  				<img class="auto-img" src="http://localhost:8082/images/xiaomi/icon02.webp"  />
		  				<img class="auto-img" src="http://localhost:8082/images/xiaomi/icon03.webp"  />
		  				<img class="auto-img" src="http://localhost:8082/images/xiaomi/icon04.png"  />
		  				<img class="auto-img" src="http://localhost:8082/images/xiaomi/icon05.webp"  />
		  			</div>
		  		</van-col>
		  			<van-row>
		  		<van-col  @click.native="goState({name:'Shop',params:{pid:item.goodName}})" span="12" class="col-box" v-for="(item,index) in xmnew" :key="index" >
		  			<div><img class="auto-img" v-lazy="item.goodImg" /></div>
		  			<div class="product-info">
		  				<p class="title">{{item.goodName}}</p>
		  				<p class="price">￥{{item.goodPrice}}元</p>
		  				<p class="buy">立即购买</p>
		  			</div>
		  		</van-col>
		  	</van-row>
		  </van-tab>
		  
		  <van-tab title="手机" class="tebsv">
		  			<div class="banners">
   			<van-swipe :autoplay='2000'>
						<van-swipe-item v-for="(item,index) in banners" :key="index">
								<img class="auto-img" :src="item.url" />
						</van-swipe-item>
				</van-swipe>
   		</div>
		  	
		  	<van-row>
		  		<van-col  @click.native="goState({name:'Shop',params:{pid:item.goodName}})" span="12" class="col-box" v-for="(item,index) in xmsj" :key="index" >
		  			<div><img class="auto-img" v-lazy="item.goodImg" /></div>
		  			<div class="product-info">
		  				<p class="title">{{item.goodName}}</p>
		  				<p class="price">￥{{item.goodPrice}}元</p>
		  				<p class="buy">立即购买</p>
		  			</div>
		  		</van-col>
		  	</van-row>
		  </van-tab>
		  <van-tab title="电脑" class="tebsvdn">
		  	<van-col  @click.native="goState({name:'Shop',params:{pid:item.goodName}})" span="12" class="col-box dn" v-for="(item,index) in xmdn" :key="index">
		  			<div><img class="auto-img" :src="item.goodImg" /></div>
		  			<div class="product-info">
		  				<p class="title">{{item.goodName}}</p>
		  				<p class="price">￥{{item.goodPrice}}元</p>
		  				<p class="buy">立即购买</p>
		  			</div>
		  		</van-col>
		  </van-tab>
		  <van-tab title="电视" class="tebsv">
		  	<van-col @click.native="goState({name:'Shop',params:{pid:item.goodName}})" span="12" class="col-box" v-for="(item,index) in xmds" :key="index">
		  			<div><img class="auto-img" :src="item.goodImg" /></div>
		  			<div class="product-info">
		  				<p class="title">{{item.goodName}}</p>
		  				<p class="price">￥{{item.goodPrice}}元</p>
		  				<p class="buy">立即购买</p>
		  			</div>
		  		</van-col>
		  </van-tab>
		    <van-tab title="平板" class="tebsv">
		  	<van-col @click.native="goState({name:'Shop',params:{pid:item.goodName}})"  span="12" class="col-box" v-for="(item,index) in xmpb" :key="index">
		  			<div><img class="auto-img" :src="item.goodImg" /></div>
		  			<div class="product-info">
		  				<p class="title">{{item.goodName}}</p>
		  				<p class="price">￥{{item.goodPrice}}元</p>
		  				<p class="buy">立即购买</p>
		  			</div>
		  		</van-col>
		  </van-tab>
		  <van-tab title="智能" class="tebsv">
		    	<div class="logo">
   				<img class="auto-img" src="http://localhost:8082/images/xiaomi/xmsh3.jpg"/>
   			</div>
		  	<van-col @click.native="goState({name:'Shop',params:{pid:item.goodName}})"  span="12" class="col-box" v-for="(item,index) in xmzn" :key="index">
		  			<div><img class="auto-img" :src="item.goodImg" /></div>
		  			<div class="product-info">
		  				<p class="title">{{item.goodName}}</p>
		  				<p class="price">￥{{item.goodPrice}}元</p>
		  				<p class="buy">立即购买</p>
		  			</div>
		  		</van-col>
		  </van-tab>
		    <van-tab title="其他" class="tebsv">
		  	<van-col  span="12" class="col-box" v-for="(item,index) in products3" :key="index">
		  			<div><img class="auto-img" :src="item.imgSrc" /></div>
		  			<div class="product-info">
		  				<p class="title">{{item.title}}</p>
		  				<p class="price">￥{{item.price}}元</p>
		  				<p class="buy">立即购买</p>
		  			</div>
		  		</van-col>
		  </van-tab>
		</van-tabs>
	
	</div>
</template>

<script>
	
	import { Search, Swipe, SwipeItem, Tab, Tabs  } from 'vant' 
	
	export default {
  name: 'Index',
  
  data(){
  	return{
  		isShow:true,
  		timer:null,
  		active:0,
  		active2:0,
			products:[],
			products2:[],
			products3:[],
			xmsj:[],
			xmdn:[],
			xmzn:[],
			xmds:[],
			xmpb:[],
			xmnew:[],
					banners: [
					{url: require('../assets/img1/1.jpg')},
					{url: require('../assets/img1/2.jpg')},
					{url: require('../assets/img1/3.jpg')},
					{url: require('../assets/img1/4.jpg')},
					{url: require('../assets/img1/5.jpg')}
				],
				banners2: [
					{url: ('http://localhost:8082/images/xiaomi/redmi7.webp')},
					{url: ('http://localhost:8082/images/xiaomi/8se.webp')},
					{url: ('http://localhost:8082/images/xiaomi/heisha.webp')},
					{url: ('http://localhost:8082/images/xiaomi/redmi2.webp')},
					{url:	('http://localhost:8082/images/xiaomi/mi8se.webp')},
					{url: ('http://localhost:8082/images/xiaomi/xmds.webp')}
				]
			
  		
  	};
  },
  
  components:{
  	[Tab.name]:Tab,
  	[Tabs.name]:Tabs,
  	[Search .name]:Search,
  	[Swipe .name]:Swipe,
  	[SwipeItem .name]:SwipeItem
  	
  },
  //节点渲染完成后
		mounted() {

			var top = this.$refs.top;
			var topHeight = getComputedStyle(top).height;
//			console.log(top)
//			console.log(topHeight)
			
			var ftabs = this.$refs.ftabs.$el.firstChild;
//			console.log(ftabs);
			ftabs.style.position = 'fixed';
			ftabs.style.top = topHeight;
		},
  
methods:{
	
	toggleTbas(item) {

    this.goState(item.path);

  },
	
	goState(path){
		this.$router.push(path);
//		console.log('123');
	}


},

	created(){
		
//		 localStorage.setItem('iphones', JSON.stringify(iphones));
			// 拿到电宝手环较多的那个api
		 var iphones = JSON.parse(localStorage.getItem('iphones'));
//  	   console.log('iphones')
    	   // 拿到小米最新api
     var xm = JSON.parse(localStorage.getItem('xm'));
//  	   console.log('xm')
       xm.goods.forEach(xmsj => {
       	 if(xmsj.goodType == '手机'){
       	 	this.xmsj.push(xmsj);
       	 }		
//    		console.log(xmsj)
      })
       // 拿到全部小米电脑
        xm.goods.forEach(xmdn => {
       	 if(xmdn.goodType == '电脑'){
       	 	this.xmdn.push(xmdn);
       	 }		
//    		console.log(xmdn)
      })
         // 拿到全部小米
        xm.goods.forEach(xmzn => {
       	 if(xmzn.goodType == '智能'){
       	 	this.xmzn.push(xmzn);
       	 }		
//    		console.log(xmzn)
      })
         // 拿到全部小米电脑
        xm.goods.forEach(xmds => {
       	 if(xmds.goodType == '电视'){
       	 	this.xmds.push(xmds);
       	 }		
//    		console.log(xmds)
      })
         // 拿到小米平板
		         xm.goods.forEach(xmpb => {
		       	 if(xmpb.goodType == '平板'){
		       	 	this.xmpb.push(xmpb);
		       	 }		
		//    		console.log(xmds)
		      })
		         xm.goods.forEach(xmnew => {
		     if(xmnew.newproduct == '新品'){
		       	this.xmnew.push(xmnew);
		     	 }		
		//    		console.log(xmds)
		      })
    
//   iphones.newHomeGoods.newHomeGoodsList.forEach(v => {
////			console.log('v',v)
//			this.products3.push(v);
//   })
     
//   iphones.intelligenceGoods.intelligenceGoodsList.forEach( v2 => {
////   	console.log('v2',v2)
//   	this.products3.push(v2);
//   })
     
//    iphones.newGoods.newGoodsList.forEach( v3 => {
////   	console.log('v3',v3)
//   	this.products3.push(v3);
//   })
      
   
      
      
		
	}


}
</script>

<style lang="less" scoped>
	.index{
		width: 100%;
		height: 100%;
	}
	.tjimg{
			width: 100%;
			height: 4rem;
			overflow: hidden;
		}
	.top{
		width: 100%;
		height: 1.42rem;
		overflow: hidden;
		position: fixed;
		top: 0;
		
		z-index: 500;
		background: #f2f2f2;
		max-width: 640PX;
		margin: 0 auto;
		.logo{
		width: 10%;
		height: 1.42rem;
		position: absolute;
		top: 0.2rem;
		left: 0.2rem;
		overflow: hidden;
	}
		.ss{
		width: 85%;
		position: absolute;
		left: 10%;
		height: 1.42rem;
				}
	.login{
		width:10%;
		height: 1.22rem;
		position: absolute;
		right: 0.1rem;
		background-color: #f2f2f2;
		padding-top: 0.2rem;
		text-align: right;
				.manager{
					width: 100%;
					height: 1.42rem;
					font-size: 0.8rem;
				}
			}
	
	}
	.van-tabs .van-tab__pane{
		width: 100%;
		height: 100%;
		max-width: 640PX;
		margin: 0 auto;
	}
	.van-tabs--line{
 	padding-top: 2.4rem;
 		
 		.icon{
 			width: 100%;
 			height: 2rem;
 			background: white;
 			img{
 				display: block;
 				float: left;
 				width: 20%;
 				height: 100%;
 				cursor: pointer;
 			}
 		}
			.banners{
		width:100%;
		height: 3.4rem;
		overflow: hidden;
	}
	.col-box{
		margin: 0.2rem 0;
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
		
	}
	
	
	
		
	
</style>