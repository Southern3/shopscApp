<template>
	<div class="order">
		<div class="top">	
			<van-nav-bar
				  title="我的订单"
				  left-text="返回"
				  left-arrow
				  @click-left="back"
				/>
		</div>
		
		<div v-for="(item,index) in products" :key="index">
			<van-card
		  num="1"
		  :price="products[index].goodPrice"
		  :desc="products[index].goodDec"  
		  :title="products[index].goodName"
		  :thumb="products[index].img1"

		>
		  <div slot="footer">
		    <van-button @click="del" size="mini">删除</van-button>
		    <van-button size="mini">付款</van-button>
		  </div>
		</van-card>
		</div>
		
		
	</div>
</template>

<script>
	
	import { NavBar, Button, Card  } from 'vant'
	
	export default{
		name:'Order',
		
		data(){
			return{
				products:[],
				orderproduct:[]
				
			};
		},
		
		methods:{
			
			back(){
				this.$router.go(-1);
			},
			del(){
				var products = this.products;
				console.log('.product',products)
				products.forEach(res => {
//					res.onclick = function(){
						console.log(123)
//					}
				})
				}
		},
		
		components:{
			[NavBar.name]:NavBar,
			[Button.name]: Button,
			[Card .name]:Card 

		},
		
		created(){
			
			var product = JSON.parse(localStorage.getItem('product')) 

			this.products = product
			console.log('this.product',product)
//			localStorage.setItem('orderproduct',JSON.stringify(this.products))
//			this.orderproduct =JSON.parse(localStorage.getItem('orderproduct')) 
//			console.log('this.orderproduct',this.orderproduct)
			
		}
		
	}
</script>

<style lang="less" scoped>

	.top{
		width: 100%;
		position: sticky;
		top: 0;
		z-index: 999;
		/*margin-bottom: 1.4rem;*/
	}

</style>