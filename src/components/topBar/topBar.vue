<template>
  <div>
        <!-- 顶栏部分 -->
    <div class="topBar">
        <div class="topBarLeft">
            <span><a href="javascript:;">民俗用品精选商城</a></span>
        </div>
        <div class="topBarRight">
            <ul>
              <li v-for="(item,index) in items" :key="index"><a :class="[item.active?activeClass:'']" @click="activeClassClick(items,index)" href="javascript:;">{{item.text}}</a></li>
            </ul>
        </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data () {
    return {
      items: [
              {
              text: "登录",
              active: true
              },
              {
              text: "注册",
              active: false
              },
              {
              text: "我的订单",
              active: false
              },
              {
              text: "店铺管理",
              active: false
              }
            ],
      activeClass:'active',

    }
  },
  methods:{
    activeClassClick(items,index){
        items.map((ui)=>{
          ui.active = false;
        });
        // console.log(items[index])
        items[index].active = true;
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

  .active{
    color:skyblue;
  }

</style>
