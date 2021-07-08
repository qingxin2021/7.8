<template>
  <div class="swiper-container filmswiper">
    <div class="swiper-wrapper">
        <slot></slot>
    </div>
    <div class="swiper-pagination myswiper-pagination" ></div>
  </div>
</template>

<script>
import Swiper from 'swiper'
import 'swiper/css/swiper.min.css'
export default {
  mounted () {
    // 初始化swiper组件
    // 注解避免lint时，报no-new的错误
    /* eslint-disable no-new */
    new Swiper('.filmswiper', {
      loop: true,
      autoplay: {
        delay: 2000
      },
      pagination: {
        el: '.swiper-pagination'
      },
      // 保证异步加载的图片能够轮播自动播放
      observer: true
    })
  }
}
</script>

<style lang="scss" scoped>
    .swiper-wrapper{
        text-align: center;
        img {
            width: 100%;
        }
    }
    .myswiper-pagination{
        text-align: right;
    }
</style>
