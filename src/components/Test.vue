 <template>
  <div class="test">
    <!-- <van-field v-model="value" placeholder="请输入用户名" /> -->
    <!-- <div class="box"></div> -->

    <van-row>
      <van-col span="8">
        <van-row>
          <van-col span="12">11</van-col>

          <van-col span="12">
            <van-row>
              <van-col span="12">a</van-col>
              <van-col span="12">b</van-col>
            </van-row>
          </van-col>

        </van-row>
      </van-col>
      <van-col span="8" offset="4">2</van-col>
      <van-col span="4">3</van-col>
    </van-row>

    <button @click="getMusic">获取音乐</button>

    <button @click="addProducts">添加商品</button>

    <button @click="addTypes">添加商品类型</button>
    
    <button @click="addiphone">添加手机</button>

    <van-row class="tabs" type="flex" justify="center" align="center">
      <van-col span="6">首页</van-col>
      <van-col span="6">分类</van-col>
      <van-col span="6">购物车</van-col>
      <van-col span="6">我的</van-col>
    </van-row>
   

  </div>
</template>

<script>

// import { Field } from 'vant'; 

import qs from 'qs'

import products from '../data/data.js'

import types from '../data/types.js'

import iphones from '../data/data2.js'

import xm from '../data/mork.js'

export default {
  name: 'Test',
  data() {
  	return {
  		checked: true,
  		value: 1
  	}
  },

  components: {
  	//局部组件使用vant组件    
  	// [Field.name]: Field 
  },

  methods: {

    getMusic() {

      var params =  {
        "TransCode": "020112",
        "OpenId": "123456789",
        "Body": {
            "SongListId": "141998290"
        }
      };

      var paramsStr = qs.stringify(params);
      console.log('paramsStr ==> ', paramsStr);

      //请求音乐数据
      this.axios({
        method: 'GET',
        url: '../data/data.json',
        data: paramsStr
      }).then(result => {
        console.log('result ==> ', result);
      })

    },


    addProducts() {
     
      localStorage.setItem('products', JSON.stringify(products));
		console.log(products)
    },

    addTypes() {
      localStorage.setItem('types', JSON.stringify(types));
      console.log(types)
    },
    
    addiphone(){
//  	 localStorage.setItem('iphones', JSON.stringify(iphones));
//  	   console.log(iphones)
    	   
    	 localStorage.setItem('xm', JSON.stringify(xm));
    	   console.log(xm)  
    }

  }
}
</script>

<style lang="less" scoped>

	@c: #e4393c;

	.test{

		.title{
			color: @c;
		}
	}

	.box{
		width: 5.333rem;
		height: 5.333rem;
		border: 1PX solid @c;
		letter-spacing: 10px;
		margin: 90px;
		margin-left: 20px;
	}

  .tabs{
    position: fixed;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 1.3866rem;
    background-color: #fafafa;
    text-align: center;
  }

</style>
