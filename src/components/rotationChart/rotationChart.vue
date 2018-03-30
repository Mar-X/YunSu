<template>
  <div class="hello">
        <!-- 轮播图 -->
    <div class="rotationChart">
        <div class="swiper-container">
            <div class="swiper-wrapper">
                <div class="swiper-slide">Slide 1</div>
                <div class="swiper-slide">Slide 2</div>
                <div class="swiper-slide">Slide 3</div>
                <div class="swiper-slide">Slide 4</div>
                <div class="swiper-slide">Slide 5</div>
            </div>
            <!-- Add Pagination -->
            <div class="swiper-pagination"></div>
        </div>
    </div>
  </div>
</template>

<script>
  import Swiper from 'swiper';
  import 'swiper/dist/css/swiper.min.css';

  export default {
      props: ['listImg'],
      mounted() {
          // console.log('mounted', this)
          var swiper = new Swiper('.swiper-container', {
              // 开启自动轮播效果
              autoplay:true,
              // 开启无限轮播模式
              loop: true,
              // 打开分页器
              pagination: {
                el: '.swiper-pagination',
              },
              // 移动轮播速度
              speed: 2000,
              // 更改样式时初始化swiper
              observer: true,
              observeParents: true,
              // 触碰轮播图后不会停止自动轮播
              autoplayDisableOnInteraction: false,
              onTouchEnd: function() {
                  swiper.startAutoplay()
              }
          });
      }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
