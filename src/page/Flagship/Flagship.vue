<template>
  <div class="hello">
    <!-- 顶栏 -->
    <top-bar></top-bar>
    <naviga-tionBar></naviga-tionBar>
    <h1>商品品牌</h1>
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
