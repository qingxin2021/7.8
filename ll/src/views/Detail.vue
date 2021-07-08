<template>
  <div v-if="filminfo">
    <img :src="filminfo.poster" class="poster"/>
    <h2>{{filminfo.name}} {{filminfo.grade}}</h2>
    <h3>演职人员</h3>
    <swiper class="actorsSwiper" swipername="actorsSwiper" pageSize="4">
      <div class="swiper-slide" v-for="actor in filminfo.actors"
        :key="actor.name">
        <img :src="actor.avatarAddress" />
        <p>{{actor.name}}</p>
      </div>
    </swiper>
    <h3>剧照</h3>
    <swiper class="photosSwiper" swipername="photosSwiper" pageSize="3">
      <div class="swiper-slide" v-for="(data,index) in filminfo.photos"
        :key="index">
        <img :src="data" />
      </div>
    </swiper>
  </div>
</template>

<script>
// import bus from '@/bus'
import axios from 'axios'
import swiper from '@/views/Detail/DetailSwiper'
export default {
  data () {
    return {
      filminfo: null
    }
  },
  components: {
    swiper
  },
  mounted () {
    const id = this.$route.params.id
    axios({
      url: `/mz/gateway?filmId=${id}&k=4359832`,
      headers: {
        'X-Client-Info': '{"a":"3000","ch":"1002","v":"5.0.4","e":"15610855429195524981146"}',
        'X-Host': 'mall.film-ticket.film.info'
      }
    }).then(res => {
      this.filminfo = res.data.data.film
      // console.log(JSON.stringify(this.filminfo))
    })
  },
  beforeMount() {
    this.$store.commit('hide',false)
  },
  beforeDestroy() {
    // bus.$emit("xgBasr",true)
     this.$store.commit('show',true)
  },
}
</script>

<style lang="scss" scoped>
  .poster {
    width: 100%;
  }
</style>
