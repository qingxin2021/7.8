<template>
  <div>
    <film-swiper :key="loopList.length" ref='myswiper'>
      <div class="swiper-slide" v-for="data in loopList"
          :key="data">
        <img :src="data"/>
      </div>
    </film-swiper>
    <film-header :class="isFixed ? 'fixed' : ''"></film-header>
    <router-view />
  </div>
</template>

<script>
import { Indicator } from 'mint-ui';
import filmSwiper from '@/views/Film/FilmSwiper'
import filmHeader from '@/views/Film/FilmHeader'
import axios from 'axios'
export default {
  data () {
    return {
      loopList: [],
      isFixed:false
    }
  },
  components: {
    filmSwiper,
    filmHeader
  },
  mounted () {
    axios.get('/axs/logos')
      .then(res => {
        this.loopList = res.data
      })
      window.onscroll=this.hanleScroll
  },
  beforeDestroy() {
    window.onscroll=null;
  },
  methods: {
       hanleScroll () {
      // 获取鼠标滚动的距离
      let st = document.documentElement.scrollTop
      // console.log('滚动的距离是：' + st)
      // 获取轮播组件的高度
      let oh = this.$refs.myswiper.$el.offsetHeight
      // console.log('轮播组件的高度是：' + oh)
      if (st >= oh) {
        this.isFixed = true
      } else {
        this.isFixed = false
      }
    }
  }
}
</script>

<style>

</style>