<template>
    <div>
      <!-- 底栏 -->
    <div class="bottomRail">
        <div class="bottomRailBox">
            <div class="bottomRailTop">
                <div class="bottomRailTop-left">
                    <div>
                        <i class="iconfont icon-anquan"></i>
                    </div>
                    <span>15天无忧退换</span>
                </div>
                <div class="bottomRailTop-center">
                    <div>
                        <i class="iconfont icon-express"></i>
                    </div>
                    <span>满额包邮</span>
                </div>
                <div class="bottomRailTop-right">
                    <div>
                        <i class="iconfont icon-zhiliangguanli"></i>
                    </div>
                    <span>品质保证</span>
                </div>
            </div>
            <div class="bottomRailBotton">
                <div>
                    <ul>
                        <li v-for="(item,index) in bottomRailBottonDate" :key="index">
                            <a href="javascript:;">{{item}}</a>            
                            <i v-show="(bottomRailBottonDate.length-1) !== index"></i>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    </div>
    </div>
</template>

<script>

export default {
  name: 'bottomRail',
  data () {
    return {
      bottomRailBottonDate:['关于我们','帮助中心','售后服务','配送与验收','商务合作'],
      bottomRailBottonDateType:false
    }
  },
  computed:{

  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
