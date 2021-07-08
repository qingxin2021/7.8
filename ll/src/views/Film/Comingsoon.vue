<template>
  <div>
    <ul>
      <li v-for="data in $store.state.comingList" :key="data.filmId"
          @click="handleClick(data.isPresale,data.filmId)">
        <img :src="data.poster"/>
        <h3>{{data.name}}</h3>
        <p>观众评分{{data.grade}}</p>
        <p v-if="data.actors">主演:{{data.actors | actorsfilter}}</p>
        <p v-else>暂无主演</p>
      </li>
    </ul>
  </div>
</template>

<script>
import { MessageBox } from 'mint-ui';
import Vue from 'vue'
// 定义一个处理data.actors数组的过滤函数actorsfilter
Vue.filter('actorsfilter', function (data) {
  // let str = ''
  // for(let actor of data) {
  //   str += actor.name
  //   str += ' '
  // }
  // return str
  return data.map(actor => actor.name).join(' ')
})
export default {
  mounted () {
    // 判断comlingList中是否有数据，如果没有，就调用action
    // 如果有，直接拿store中的comingList就可以了
    if (this.$store.state.comingList.length === 0) {
      this.$store.dispatch('getComingListAc')
    }
  },
  methods: {
     handleClick (isPresale, id) {
      if (!isPresale) {
        MessageBox({
        title: '提示',
        message: '没有排期看看其他电影吧',
        showCancelButton: true
      }).then(res=>{
        if(res==='comfirm'){
          this.$router.push(`/film/nowplaying`)
        }
      });
        this.$router.push(`/film/nowplaying`)
      } else {
        this.$router.push({name: 'dl', params: {id}})
      }
    }
  }
  
}
</script>

<style lang="scss" scoped>
  ul{
    li{
        padding:10px;
        overflow: hidden;
      img{
        float:left;
        width:100px;
      }
    }
  }
</style>
