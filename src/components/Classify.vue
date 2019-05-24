<template>
	<div class="classify">
		<div class="top">
			<van-nav-bar
			  title="分类"
			  left-text="返回"
			  left-arrow
			  @click-left="onClickLeft"
			 
			/>
		</div>
		
		
		
		  <el-tabs  :tab-position="tabPosition" v-model="activeName" >
	
			<el-tab-pane  label="新品">	    	
		    	<van-col span="23">
		    		<div class="topimg">
		    			<img class="auto-img" src="http://localhost:8082/images/xiaomi/xmkt.webp" alt="" />
		    		</div>
		    	</van-col>
		    	<van-col class="txt" span="24">
		    		<div >新品</div>
		    	</van-col>
		    	<van-col @click.native="goState({name:'Shop',params:{pid:item.goodName}})" v-for="(item,index) in xmnew" :key="index" class="newsp" span="8">
		    		<div class="simg">
		    			<img class="auto-img" :src="item.goodImg" alt="" />
		    		</div>
		    		<p>{{item.goodName}}</p>
		    	</van-col>		    	
		    </el-tab-pane>
		    
		    <el-tab-pane  label="智能">	    	
		    	<van-col span="23">
		    		<div class="topimg">
		    			<img class="auto-img" src="http://localhost:8082/images/xiaomi/xmzn.webp" alt="" />
		    		</div>
		    	</van-col>
		    	<van-col class="txt" span="24">
		    		<div >智能</div>
		    	</van-col>
		    	<van-col @click.native="goState({name:'Shop',params:{pid:item.goodName}})" v-for="(item,index) in xmzn" :key="index" class="newsp" span="8">
		    		<div class="simg">
		    			<img class="auto-img" :src="item.goodImg" alt="" />
		    		</div>
		    		<p>{{item.goodName}}</p>
		    	</van-col>		    	
		    </el-tab-pane>
		    
		    <el-tab-pane  label="众筹">	    	
		    	<van-col span="23">
		    		<div class="topimg">
		    			<img class="auto-img" src="http://localhost:8082/images/xiaomi/xmzc.webp" alt="" />
		    		</div>
		    	</van-col>
		    	<van-col class="txt" span="24">
		    		<div >众筹</div>
		    	</van-col>
		    	<van-col @click.native="goState({name:'Shop',params:{pid:item.goodName}})" v-for="(item,index) in xmzc" :key="index" class="newsp" span="8">
		    		<div class="simg">
		    			<img class="auto-img" :src="item.goodImg" alt="" />
		    		</div>
		    		<p>{{item.goodName}}</p>
		    	</van-col>		    	
		    </el-tab-pane>
		    
		    <el-tab-pane  label="手机">	    	
		    	<van-col span="23">
		    		<div class="topimg">
		    			<img class="auto-img" src="http://localhost:8082/images/xiaomi/xmsj.webp" alt="" />
		    		</div>
		    	</van-col>
		    	<van-col class="txt" span="24">
		    		<div >手机</div>
		    	</van-col>
		    	<van-col @click.native="goState({name:'Shop',params:{pid:item.goodName}})" v-for="(item,index) in xmsj" :key="index" class="newsp" span="8">
		    		<div class="simg">
		    			<img class="auto-img" :src="item.goodImg" alt="" />
		    		</div>
		    		<p>{{item.goodName}}</p>
		    	</van-col>		    	
		    </el-tab-pane>
		    
		    <el-tab-pane  label="电脑">	    	
		    	<van-col span="23">
		    		<div class="topimg">
		    			<img class="auto-img" src="http://localhost:8082/images/xiaomi/xmdn.webp" alt="" />
		    		</div>
		    	</van-col>
		    	<van-col class="txt" span="24">
		    		<div >电脑</div>
		    	</van-col>
		    	<van-col @click.native="goState({name:'Shop',params:{pid:item.goodName}})" v-for="(item,index) in xmdn" :key="index" class="newsp" span="8">
		    		<div class="simg">
		    			<img class="auto-img" :src="item.goodImg" alt="" />
		    		</div>
		    		<p>{{item.goodName}}</p>
		    	</van-col>		    	
		    </el-tab-pane>
		    
		    <el-tab-pane  label="电视">	    	
		    	<van-col span="23">
		    		<div class="topimg">
		    			<img class="auto-img" src="http://localhost:8082/images/xiaomi/xmds.jpg" alt="" />
		    		</div>
		    	</van-col>
		    	<van-col class="txt" span="24">
		    		<div >电视</div>
		    	</van-col>
		    	<van-col @click.native="goState({name:'Shop',params:{pid:item.goodName}})" v-for="(item,index) in xmds" :key="index" class="newsp" span="8">
		    		<div class="simg">
		    			<img class="auto-img" :src="item.goodImg" alt="" />
		    		</div>
		    		<p>{{item.goodName}}</p>
		    	</van-col>		    	
		    </el-tab-pane>
		    
		    <el-tab-pane  label="平板">	    	
		    	<van-col span="23">
		    		<div class="topimg">
		    			<img class="auto-img" src="http://localhost:8082/images/xiaomi/xmkt.webp" alt="" />
		    		</div>
		    	</van-col>
		    	<van-col class="txt" span="24">
		    		<div >平板</div>
		    	</van-col>
		    	<van-col @click.native="goState({name:'Shop',params:{pid:item.goodName}})" v-for="(item,index) in xmpb" :key="index" class="newsp" span="8">
		    		<div class="simg">
		    			<img class="auto-img" :src="item.goodImg" alt="" />
		    		</div>
		    		<p>{{item.goodName}}</p>
		    	</van-col>		    	
		    </el-tab-pane>
		    
		   
		  </el-tabs>
		
	</div>
</template>

<script>
	
	import { TreeSelect } from 'vant'
	
	export default{
		name:'Classify',
		
		data(){
			return{
				  activeName:'3',
				  // 左侧高亮元素的index
			      mainActiveIndex: 0,
			      // 被选中元素的id
			      activeId: 1,
			       tabPosition: 'left',
			       xmsj:[],
			       xmdn:[],
				   xmzn:[],
				   xmds:[],
				   xmpb:[],
				   xmzc:[],
				   xmnew:[],	      
			     
			};
		},
		
		components:{
			[TreeSelect.name]:TreeSelect
		},
	
		methods:{
			handleClick(tab,event){
				
			},
			goState(path){
				this.$router.push(path);
			},
			onClickLeft(){
				this.$router.go(-1);
			},
			 onNavClick(index) {
			      this.mainActiveIndex = index;
			    },
			    onItemClick(data) {
			      this.activeId = data.id;
			    }
		},
		
		created(){
			
			var xm = JSON.parse(localStorage.getItem('xm'));
//			console.log(xm);
			 xm.goods.forEach(xmsj => {
		       	 if(xmsj.goodType == '手机'){
		       	 	this.xmsj.push(xmsj);
		       	 }		
//		    		console.log(xmsj)
		      })
			 // 拿到全部小米电脑
		        xm.goods.forEach(xmdn => {
		       	 if(xmdn.goodType == '电脑'){
		       	 	this.xmdn.push(xmdn);
		       	 }		
		//    		console.log(xmdn)
		      })
		         // 拿到全部小米智能
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
		        // 拿到全部小米平板
		         xm.goods.forEach(xmpb => {
		       	 if(xmpb.goodType == '平板'){
		       	 	this.xmpb.push(xmpb);
		       	 }		
		//    		console.log(xmds)
		      })
		          // 拿到全部小米众筹
		         xm.goods.forEach(xmzc => {
		       	 if(xmzc.goodType == '众筹'){
		       	 	this.xmzc.push(xmzc);
		       	 }		
		//    		console.log(xmds)
		      })
		          xm.goods.forEach(xmnew => {
		       	 if(xmnew.newproduct == '新品'){
		       	 	this.xmnew.push(xmnew);
		       	 }		
		//    		console.log(xmds)
		      })
			
		}
		
	}
</script>

<style lang="less" scoped>

	.txt{
		width: 100%;
		text-align: center;
		padding: 1.4rem 0;
		font-size: 0.5rem;
		color: orange;
		letter-spacing: 0.2rem;
	}

	.newsp{
		margin: 0.2rem auto ;
		padding: 0.2rem;
		p{
			width: 100%;
			text-align: center;

		}
	}
	.el-tabs{
		height: 600PX;
		overflow: auto;
	
	}
	

</style>