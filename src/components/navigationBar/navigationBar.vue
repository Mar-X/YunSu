<template>
  <div>
    <!-- 头栏部分 -->
    <div class="navigationBar">
        <div class="navigationBar-top">
            <!-- logo -->
            <div class="logoLeft">
                <img src="../../assets/image/云宿.png" alt="">
                <i></i>
                <p>民宿用品</p>
            </div>
            <!-- 优点 -->
            <div class="logoCenter">
                <img src="../../assets/image/selectivePreference.png" alt="">
            </div>
            <div class="logoRight">
                <!-- 搜索栏 -->
                <div class="logoRight-input">
                    <input type="text">
                    <a href="javascript:;">
                        <i class="iconfont icon-sousuo1"></i>
                    </a>
                </div>
                <!-- 购物车 -->
                <div class="shopping">
                    <a href="javascript:;">
                        <i class="iconfont icon-gouwuche"></i>
                        <div class="circleNumber">
                            <span>0</span>
                        </div>
                    </a>
                </div>
            </div>
        </div>
        <!-- 导航栏 -->
        <div class="navigationBar-button">
            <ul>
                <li><a @click="go({path:'/home'})">首页</a></li>
                <li class="linenShow" cateid="79" @mouseenter="onShow()"><a @click="go({path:'/products'})">商品列表</a></li>
                <li class="linenShow" cateid="37"><a @click="go({path:'/flagship'})">商品品牌</a></li>
                <li class="linenShow" cateid="27"><a @click="go({path:'/shopdetails'})">云宿旗舰店</a></li>
            </ul>
        </div>
    </div>

    <!-- 商品详情列表 -->
    <div class="detailedList" v-show="detailedListType" @mouseleave="onHide()">
        <div class="detailedList-top">
            <h5>客房布草</h5>
        </div>
        <div class="detailedList-bottom">
            <ul>
                 <li v-for="(item,index) in navigationBarData" :key="index">
                    <!-- 踩坑：拼接超链接href时，用双引号包裹整体，用单引号包裹需要拼接的链接主体，用加号链接数据内容 -->
                    <a :href="'http://test.1yunsu.com'+item.Link">
                        <span style="color:#000">{{item.Name}}</span>
                        <p></p>
                    </a>
                </li>
            </ul>
                <!-- <li>
                    <a href="javascript:;">
                        <span style="color:#000">四件套</span>
                        <p></p>
                    </a>
                </li> -->
        </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'navigationBar',
  data () {
    return {
        navigationBarData:[{
                Name: "首饰",
                Link: "/catalog/categories?cateId=81"
            }, {
                Name: "珠宝",
                Link: "/catalog/categories?cateId=80"
            }],
        detailedListType:false,
    }
  },
  methods:{
      onShow(){
          this.detailedListType = true;
      },
      onHide(){
          this.detailedListType = false;
      },
      go(path){
          this.$router.push(path)
      }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>

</style>
