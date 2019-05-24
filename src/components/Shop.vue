<template>
	<div class="shop">
		
		<div class="top">	
			<van-nav-bar
				  title="商品详情"
				  left-text="返回"
				  left-arrow
				  @click-left="back"
				/>
		</div>
		
		
				
				<van-swipe class="vswipe" @change="onChange">
					  <van-swipe-item><img class="auto-img" :src="currentProduct.img1"  /></van-swipe-item>
					  <van-swipe-item><img class="auto-img" :src="currentProduct.img2"  /></van-swipe-item>
					  <van-swipe-item><img class="auto-img" :src="currentProduct.img3"  /></van-swipe-item>
					  <van-swipe-item><img class="auto-img" :src="currentProduct.img4"  /></van-swipe-item>
					
					  <div class="custom-indicator" slot="indicator">
					    {{ current + 1 }}/4
					  </div>
					</van-swipe>
				
		
		<div class="details">
					<p class="title">{{currentProduct.goodName}}</p>
					<p>{{currentProduct.goodDec}}</p>
					<p class="price">￥{{currentProduct.goodPrice}}元</p>
				</div>
		
		<van-goods-action> 
		  <van-goods-action-big-btn
		    text="加入购物车"
		    @click="onClickBigBtn"
		  />
		  <van-goods-action-big-btn
		    primary
		    text="立即购买"
		    @click="onClickBigBtn"
		  />
		</van-goods-action>
		
			<van-sku
          v-model="showBase"
          :sku="skuData.sku"
          :goods="skuData.goods_info"
          :hide-stock="skuData.sku.hide_stock"
          reset-stepper-on-hide
          reset-selected-sku-on-hide
           :quota="skuData.quota"
          :quota-used="skuData.quota_used"
          disable-stepper-input
          :show-add-cart-btn="false"
          :close-on-click-overlay="closeOnClickOverlay"
          @buy-clicked="onBuyClicked"
        >
        <!-- 自定义 sku actions -->
        <template slot="sku-actions" slot-scope="props">
          <div class="van-sku-actions">
             <!--直接触发 sku 内部事件，通过内部事件执行 onBuyClicked 回调--> 
            <van-button type="primary" bottom-action @click="props.skuEventBus.$emit('sku:buy')">{{text == 0 ? '加入购物车' : '立即购买'}}</van-button>
          </div>
        </template>
     </van-sku>
		
	</div>
</template>

<script>
	import skuData from '../data/vdata.js'
	
	import {Swipe, SwipeItem, GoodsAction, GoodsActionBigBtn, Sku, NavBar, Button } from 'vant'
	
	export default{
		name:'Shop',
		
		data(){
			this.skuData = skuData;
			return{
				// 用户登录状态
				userLoginStatus:null,
				current:0,
				userLoginState:null,
				closeOnClickOverlay: true,
				showBase:false,
				text:1,
				imgs:[],
				product:[],
			};
		},
		
		components:{
			[GoodsAction.name]:GoodsAction,
			[GoodsActionBigBtn.name]:GoodsActionBigBtn,
			[Sku.name]:Sku,
			[NavBar.name]:NavBar,
			[Button.name]: Button,
			[Swipe.name]:Swipe,
			[SwipeItem.name]:SwipeItem
		},
		
		
		methods:{
			back(){
				if( this.active == 1 ){
					this.$router.push({name:'Index',query:{active:this.active}})
				}else{
					this.$router.go(-1);
				}
				
			},
			onClickBigBtn(){
				this.showBase = true;
				
			},
			onChange(index){
				this.current = index;
			},
			
			//添加购物车或者购买
    	addOrBuy() {

    		console.log(this.userLoginStatus);
			
    		if (!this.userLoginStatus) {
    			//如果未登录, 提示用户登录
    			this.$toast('您尚未登录');
    			this.showBase = false;
    		} else if (this.userLoginStatus.loginStatus) {

    			//显示sku面板
    			this.showBase = true;
    			
    		}

    	},

		onBuyClicked() {   	
	      	this.showBase = false;
	      
	      var product = localStorage.getItem('product')
	      console.log('product',product)
	      product = product == undefined ? [] : JSON.parse(product)
	      console.log('product',product)
	      
	      var info = {
	      	goodName: this.currentProduct.goodName,
	      	goodPrice: this.currentProduct.goodPrice,
	      	goodDec: this.currentProduct.goodDec,
	      	img1: this.currentProduct.img1
	      }
	      
//	     	this.product.push(this.currentProduct.goodName)
//			this.product.push(this.currentProduct.goodPrice)
//			this.product.push(this.currentProduct.goodDec)
			product.push(info )
			this.product = product;
//			console.log('this.product',product)
			localStorage.setItem('product',JSON.stringify(this.product))
//			this.product = JSON.parse(localStorage.getItem('product')) 
//			console.log('this.product',this.product)
			this.$router.push({name:'Order',params:{product:this.product}})

	     
    	}
//			
			
		},
		
		created(){
			console.log(this.$route.params.pid);
			// 拿到缓存数据
			var xm = JSON.parse(localStorage.getItem('xm'));
			for (var i = 0; i < xm.goods.length; i++) {
				if (this.$route.params.pid == xm.goods[i].goodName) {
					this.currentProduct = xm.goods[i];
					break;
				}
			}
			
			this.skuData.goods_info = {
				picture:this.currentProduct.goodImg,
				title:this.currentProduct.goodName
			}
			this.skuData.sku.list[0].goods_id = this.currentProduct.id;
			this.skuData.sku.list[0].price = this.currentProduct.goodPrice * 100;
			
			// 获取用户登录状态
			var userLogin = localStorage.getItem('userLogin');
			this.userLoginStatus = userLogin == undefined ? null : JSON.parse(userLogin);

		}
		
	}
</script>

<style lang="less" scoped>

	.shop{
		width: 100%;
		height: 100%;

		
		.vswipe {
			width: 100%;
			height:100%;
			overflow: hidden;
			position: relative;
			top:0;
			.custom-indicator{
				width: 100%;
				height: 0.3rem;
				font-size: 0.4rem;
				position: absolute;
				left: 0.3rem;
				top: 0.5rem;
				
			}
		}
		.details{
				width: 100%;
				height: 100%;
				text-align: center;
				background: rgba(0,0,0,0.3);
				/*position: absolute;
				bottom: 10%;*/
				p{
					font-size: 0.4rem;
				}
				.title{
					font-weight: bold;
				}
				.price{
					color: red;
				}
			}
	}

</style>