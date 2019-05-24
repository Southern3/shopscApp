<template>
	<div class="search">
	
			<form class='top'>
				<van-search
				@click="focus"
			  v-model="value"
			  placeholder="请输入搜索关键词"
			  show-action
			  shape="round"
			background="#f2f2f2"
			>
			  <div slot="action" @click="search">搜索</div>
			</van-search>
			</form>
		
		<div class="History">
			<p>搜索历史</p>
			<van-col span="22">
			<span class="span1"></span>
			<span>小米电脑</span>
			<span>小米平板</span>
			<span>小米手机</span>
			<!--<span>小米电视</span>
			<span>小米手机</span>
			<span>智能手表</span>--> 
			</van-col>
		</div>
		
		  	<van-col @click.native="goState({name:'Shop',params:{pid:item.goodName}})"  span="12" class="col-box" v-for="(item,index) in searchproducts" :key="index">
		  			<div><img class="auto-img" :src="item.goodImg" /></div>
		  			<div class="product-info">
		  				<p class="title">{{item.goodName}}</p>
		  				<p class="price">￥{{item.goodPrice}}元</p>
		  				<p class="buy">立即购买</p>
		  			</div>
		  		</van-col>
		
	</div>
</template>

<script>
	
	import { Search } from 'vant'
	
	export default{
		name:'search',
		data(){
			return{
				value:'小米手机',
				searchproducts:[],
			};
		},
		components:{
			[Search.name]:Search
		},
		
		methods:{
			search(){
				
				if( this.value == undefined || this.value == '' ){
					 this.$message('搜索不能为空哦');
					 return;
				}
				this.searchproducts = [];
				 var xm = JSON.parse(localStorage.getItem('xm'));
				xm.goods.forEach(xmproduct => {
		    		 if(xmproduct.goodType == this.value){
		      		 	this.searchproducts.push(xmproduct);
		     			 }		

		     		 })
//					var match = new RegExp('(' + this.keyWord + ')', 'img');
//				
//				productDatas.forEach(v => {
//					if (match.test(v.name)) {
//						this.searchProducts.push(v);
//					}
//				})
//				

//				console.log(this.searchproducts)
//				console.log(this.value)
				var span1 = document.querySelector('.span1');
//				console.log(span1)
				var span = document.createElement('span');
				span.classList.add('span2')
				span.style.marginLeft = 0.4 + 'rem';
//				console.log(span)			
				span.innerHTML = this.value;
				span1.appendChild(span);
			},
			goState(path){
		this.$router.push(path);
			},
			focus(){
				this.value = '';
			}
		},
		
		created(){
			
			 var xm = JSON.parse(localStorage.getItem('xm'));
//			 console.log(xm);
			
		}
		
	}
</script>

<style lang="less" scoped>

	.top{
		position: fixed;
		width: 100%;
		top: 0;
	}

	.History{
		width: 85%;
		height: 3rem;
		/*background: #13CE66;*/
		padding: 0 0.6rem;
		clear: both;
		overflow: hidden;
		p {
			width: 30%;
			height: 0.8rem;
			line-height: 0.8rem;
			text-align: center;
			letter-spacing: 0.1rem;
			font-size: 0.4rem;
			padding-left: 0.2rem;
			background-color: blanchedalmond;
			border-radius: 0.3rem;
		}
		span{
			padding: 0 0.2rem;
			margin-top: 0.2rem;
			margin: 0 0.2rem;
			.span2{
			padding: 0 0.2rem;
			margin-top: 0.2rem;
			margin: 0 0.4rem;
			color: red;
		}
		}
		
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

</style>