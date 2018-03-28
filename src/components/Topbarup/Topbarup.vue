<template>
  <div>
    <!-- 顶栏固定部分 -->
    <div class="topBarUp" v-show="isShow">
        <div class='topBarUp-left'>
            <img src="../../assets/image/云宿.png" alt="">
            <ul>
                <li><a href="javascript:;">首页</a></li>
                <li class="linenShow" cateid="79"><a href="javascript:;" style="color:#000">客房布草</a></li>
                <li class="linenShow" cateid="80"><a href="javascript:;">客房一次性用品</a></li>
                <li><a href="javascript:;">云宿旗舰店</a></li>
            </ul>
        </div>
        <div class="topBarUp-right">
            <p><a href="javascript:;">登录</a></p>
            <p><a href="javascript:;">注册</a></p>
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
  </div>
</template>

<script>

export default {
  name: 'topBarUp',
  data () {
    return {
      isShow: false,
      target:'',
      scroll:''
    }
  },
  methods:{
    showIcon () {
     //  根据scrollTop的值来判断是否显示返回顶部的icon
    this.scroll = document.documentElement.scrollTop || document.body.scrollTop;
      if (this.scroll >= 40) {
        this.isShow = true
      } else if (this.scroll < 40) {
        this.isShow = false
      }
    }
  },
  mounted(){
    this.target = window
    this.target.addEventListener('scroll', this.showIcon)
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
