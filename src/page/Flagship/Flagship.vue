<template>
  <div class="hello">
    <!-- 顶栏 -->
    <top-bar></top-bar>
    <naviga-tionBar></naviga-tionBar>
        <!-- 最外层容器 -->
    <div class="suCloudBox">
        <!-- 旗舰店 -->
        <div class="flagshipShop">
            <ul>
                <li>
                    <a href="javascript:;"><img src="../../assets/image/云宿.png" alt=""></a>
                </li>
            </ul>
        </div>
      </div>
    <!-- 底栏 -->
    <bottom-rail></bottom-rail>
  </div>
</template>

<script>

import TopBar from '@/components/topBar/topBar';
import NavigaTionBar from '@/components/navigationBar/navigationBar'
import BottomRail from '@/components/bottomRail/bottomRail'

export default {
  name: 'home',
  data () {
    return {
      
    }
  },
  components:{
      TopBar,
      NavigaTionBar,
      BottomRail
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
