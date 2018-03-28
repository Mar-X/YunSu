<template>
  <transition name='slide-fade'>
    <div class="hello" v-show='isShow'>
      <!-- 侧边栏功能 -->
          <div :class="[this.isShow?'sideFunction sideFunctionFixed':'sideFunction']">
              <div>
                  <a href="javascript:;">
                      <i class="iconfont icon-gouwuche"></i>
                      <span>购物车</span>
                  </a>
              </div>
              <div>
                  <a class="countDown" href="javascript:;">
                      <i class="iconfont icon-zaixiankefu"></i>
                      <span>在线客服</span>
                  </a>
              </div>
              <div>
                  <a href="javascript:;" @click='getTop'>
                      <i class="iconfont icon-arw-top"></i>
                      <span>返回顶部</span>
                  </a>
              </div>
          </div>
    </div>
  </transition>
</template>



<script>

export default {
  name: 'sideFunction',
  props: {
    scrollmyself: {
      type: Boolean,  // 这是选择滚动对象的props值，如果滚动的对象是当前组件的父元素，就设置scrollObj为true.如果没有设置就默认为window对象
      default: false
    }
  },
  data () {
    return {
      isShow: false,
      target:'',
      scroll:''
    }
  },
  methods: {
    showIcon () {
  //  根据scrollTop的值来判断是否显示返回顶部的icon
    this.scroll = document.documentElement.scrollTop || document.body.scrollTop;
      if (this.scroll > 400) {
        this.isShow = true
      } else if (this.scroll < 400) {
        this.isShow = false
      }
    },
    getTop () {
// 点击icon之后自动返回顶部的函数
      let timer = setInterval(() => {
        let top = this.scroll
        let speed = Math.ceil(top / 5)
        document.body.scrollTop = top - speed
        if (this.scroll === 0) {
          clearInterval(timer)
        }
      }, 20)
    }
  },
  mounted () {
    // 通过这个target来判断当前的滚动监听对象是谁
    if (this.scrollmyself) {
      this.target = this.$el.parentNode
    } else {
      this.target = window
    }
    this.target.addEventListener('scroll', this.showIcon)
  },
  beforeDestroy () {
   //  组件销毁的时候，需要删除scroll的监听事件。
    this.target.removeEventListener('scroll', this.showIcon)
  }
}
</script>


