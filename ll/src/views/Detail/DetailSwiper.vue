<template>
  <div class="swiper-container">
    <div class="swiper-wrapper">
        <slot></slot>
    </div>
  </div>
</template>

<script>
import Swiper from 'swiper'
import 'swiper/css/swiper.min.css'
export default {
  // swipername属性表示要对哪个元素进行渲染
  props: ['swipername', 'pageSize'],
  mounted () {
    /* eslint-disable no-new */
    new Swiper('.' + this.swipername, {
      slidesPerView: this.pageSize,
      spaceBetween: 5,
      freeMode: true,
      observer: true
    })
  }
}
</script>

<style lang="scss" scoped>
  .swiper-wrapper {
      img{
        width: 100%;
        height: 120px;
      }
  }
</style>
