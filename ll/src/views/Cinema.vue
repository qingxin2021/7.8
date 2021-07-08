<template>
  <div class="cinema" :style="btStyle">
    <ul>
      <li v-for="data in dataList" :key="data.cinemaId">
        {{data.name}}
        <p style="font-size: 12px;">{{data.address}}</p>
      </li>
    </ul>
  </div>
</template>

<script>
import axios from 'axios'
import BetterScroll from 'better-scroll'
export default {
  data () {
    return {
      dataList: [],
      btStyle: {
        height: '0px'
      }
    }
  },
  mounted () {
    this.btStyle.height = document.documentElement.clientHeight - 50 + 'px'
    axios({
      url: `/mz/gateway?cityId=${this.$store.state.cityId}&ticketFlag=1&k=5440610`,
      headers: {
        'X-Client-Info': '{"a":"3000","ch":"1002","v":"5.0.4","e":"15610855429195524981146"}',
        'X-Host': 'mall.film-ticket.cinema.list'
      }
    }).then(res => {
      this.dataList = res.data.data.cinemas
      // 添加betterscroll
      this.$nextTick(() => {
        /* eslint-disable no-new */
        new BetterScroll('.cinema', {
          pullUpLoad: true,
          scrollbar: true,
          pullDownRefresh: true
        })
      })
    })
  }
}
</script>

<style lang="scss" scoped>
  li {
    height: 50px;
  }
  .cinema {
    position: absolute;
    left: 0;
    top: 0;
    overflow: hidden;
  }
</style>
