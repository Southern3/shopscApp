<template>
	<div class="mycenter">
		<!--<div class="navbar">
			<van-nav-bar
				  title="个人中心"
				  left-text="返回"	
				  left-arrow
				  title-arrow
				  right-arrow
				  @click-left="onClickLeft"
				  @click-title="onClickRight({name:'Register'})"
				   @click-right="onClickRight({name:'Register'})"
				/>
			
		</div>-->

		<div class="topImg">			
			<van-uploader class="upimg" :after-read="onRead" >				
			   <img class="auto-img smallimg" src="../assets/img1/jd.jpg" ref="goodsImg"/>
			</van-uploader>
			<div class="information">
					<span>手机号：{{useriphone}}</span>
			</div>
			
			<!--<div class="logreg">-->
				<!--<span v-show="isShow" @click="goState({name:'Login'})">登录</span>-->
				<!--<span v-show="isShowlogin" @click="goState({name:'Login'})">切换用户</span>-->
				<!--<span v-show="isShow">/</span>-->
				<!--<span v-show="isShow" @click="goState({name:'Register'})">注册</span>-->
				<!--<span v-show="isShowlogin" @click="over">退出登录</span>-->
			<!--</div>-->	
		</div>
		
		
			<div class="myOrder">
				<span class="oder1">我的订单</span>
				<span class="oder2" @click="ordergo">全部订单<van-icon name="arrow" /></span>
			</div>
			
			<div class="goods">
				<van-col class="vcol" span="8">
						<van-icon name="refund-o" />		
					<p>待付款</p>
				</van-col>
				<van-col class="vcol" span="8">
						<van-icon name="logistics" />
					<p>待收货</p>
				</van-col>
				<van-col class="vcol" span="8">
						<van-icon name="exchange" />
					<p>退还修</p>
				</van-col>
			</div>
			
			
			
			<el-collapse v-model="activeNames" @change="handleChange">
			  <el-collapse-item title="收货地址 " name="1" class="identical">
			    <div>广东省   广州市   天河区</div>
			    <div>广东省   广州市   黄埔区</div>
			    <div><i class="el-icon-circle-plus-outline"></i></div>
			  </el-collapse-item>
			  <!--<el-collapse-item title="会员中心" name="2" class="identical">
			    <div>控制反馈：</div>
			    <div>页面反馈：</div>
			  </el-collapse-item>
			  <el-collapse-item title="小米之家" name="3" class="identical">
			    <div>简化流程：</div>
			    <div>清晰明确：</div>
			    <div>帮助用户识别：</div>
			  </el-collapse-item>-->
			  <!--<el-collapse-item title="设置"  class="identical">
			   
			  </el-collapse-item>-->
			</el-collapse>
			
			<div class="Member">
				<p><span class="lf"><van-icon name="vip-card-o" /></span>会员中心<span class="rt"><van-icon name="arrow" /></span></p>
				<p><span class="lf"><van-icon name="send-gift-o" /></span>我的优惠<span class="rt"><van-icon name="arrow" /></span></p>
			</div>
			
			<!--<div class="home">
				<p><span class="lf"><van-icon name="like-o" /></span>服务中心<span class="rt"><van-icon name="arrow" /></span></p>
				<p><span class="lf"><van-icon name="wap-home" /></span>小米之家<span class="rt"><van-icon name="arrow" /></span></p>
			</div>-->

			<div class="setting">
				<p><span class="lf"><van-icon name="location-o" /></span>设置<span class="rt"><van-icon name="arrow" /></span></p>
			</div>
			
			 <el-button v-show="isShow" @click="goState({name:'Login'})" class="dl" type="success">立即登录</el-button>	
			
			<el-button v-show="isShowlogin"  @click="over" class="out" type="danger">{{text}}</el-button>
			
		
		
	</div>
</template>

<script>
	
	import { NavBar, Uploader, Icon } from 'vant'
	
	export default{
		name:'MyCenter',
		data(){
			return{
				activeNames: ['1'],
				username:'',
				useriphone:'',
				users:null,
				isShow : true,
				isShowlogin : false,
				text:'退出登录',
				sets:[
					{title:"我的购物车",icon:'cart',info:9},
					{title:"我的钱包",icon:'gold-coin'},
					{title:"我的收藏",icon:'like',info:99},
					{title:"我的支付宝",icon:'alipay'},
					{title:"小米之家",icon:'wap-home'},
					{title:"设置",icon:'setting'}
				]
			}
		},
		components:{
			[NavBar.name]:NavBar,
			[Uploader.name]:Uploader,
			[Icon.name]:Icon
		},
		
		methods:{
			  handleChange(val) {
//		        console.log(val);
		     },
			// 返回上一级
			onClickLeft(){
				this.$router.go(-1);
			},
			// 点击跳转路由
			goState(path){
				this.$router.push(path)
			},
			// 点击进入订单页面
			ordergo(){
				var userLogin = JSON.parse(localStorage.getItem('userLogin'))
				if(userLogin == null){
					this.$message('登录账号才能看订单哦');
				}else{
					this.$router.push({name:'Order'})
				}
			},
			// 点击切换组件页面
			toggleTbas(item) {		
			    this.goState(item.path);
			
			  },
			// 点击删除登录数据
			over(){
				localStorage.removeItem('userLogin');
				this.$router.push({name:'Login'})
			},
			// 上传头像，更换头像
			onRead(file) {
		       console.log(file);
		       //将原图片显示为选择的图片
		       this.$refs.goodsImg.src = file.content;
		       this.$refs.goodsImg2.src = file.content;
		 }

		},   
		
		created(){
		  	// 获取登录信息显示页面上
		  	var userLogin = JSON.parse(localStorage.getItem('userLogin'))
//		  	console.log('userLogin',userLogin);
			if(userLogin == null){
				this.useriphone = "";
			}else{
				this.useriphone = userLogin.userId;
				this.isShow = false;
				this.isShowlogin = true;
				this.text = "退出/切换用户";
			}
		  	
			
		}
		
		
	}
		
</script>

<style lang="less" scoped>

	.mycenter{
		width: 100%;
		background: #F0F0F0;
		}
	.topImg{
		width: 100%;
		height: 2rem;
		position: relative;
		background: #f37d0f;
		.upimg {
			width: 2rem;
			height: 2rem;
			.smallimg {
				width: 1.6rem;
				height: 1.6rem;
				margin: 0.2rem;
				border-radius: 50%;
			}
		}
		.information{
			position: absolute;
			bottom: 5%;
			right:30%;
			color: #FFFFFF;
		}
		.logreg{
			position: absolute;
			top: 10%;
			right: 5%;
			color: #FFFFFF;
			font-size: 0.4rem;
		}
	}
	.myOrder{
		width: 100%;
		height: 1.2rem;
		line-height: 1.2rem;
		background: #FFFFFF;
		margin-top: 0.1rem;
		.oder1{
			float: left;
			margin-left: 5%;
			font-size: 0.4rem;
		}
		.oder2{
			float: right;
			margin-right: 5%;
			font-size: 0.4rem;
		}
	}
	.goods{
		width: 100%;
		height: 1.8rem;
		background: #FFFFFF;
		margin-top: 0.1rem;
		.vcol{
			width: 33%;
			height: 100%;
			text-align: center;		
			font-size: 0.4rem;	
			.van-icon{
				padding-top: 0.4rem;
				font-size: 0.6rem;
			}
			p{
					margin: 0;
					padding: 0;
			}
		}
		
	}	
	.Member,.home,.setting{
		width: 100%;
		height: 2.4rem;
		overflow: hidden;
		background: #FFFFFF;
		margin-top: 0.2rem;
		p{
			width: 100%;
			height: 0.8rem;
			line-height: 0.5rem;
			padding: 0 0.4rem;
			font-size: 0.44rem;
			border-bottom: 0.1rem solid #CCCCCC;
			.van-icon{
				font-size: 0.5rem;
				/*line-height: 1rem;*/
			}
		}
		.lf{
			margin-right: 0.6rem;
			
		}
		.rt{
			float: right;
			margin-right: 1rem;
		}
	}
	.dl{
		width: 100%;
	}
	.out{
		width: 100%;	
		height: 1rem;
		padding: 0;
		margin: 0;	
	}
	.identical{
		/*margin-left: 0.4rem;*/
		font-size: 0.6rem;
		font-weight: bold;
		>div{
			font-size: 0.6rem;
			margin: 0.2rem ;
			.el-icon-circle-plus-outline {
				font-size: 0.8rem;
				float: right;
				margin-right: 1rem;
			}
		}
	}
			
</style>