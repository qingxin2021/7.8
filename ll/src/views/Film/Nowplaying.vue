<template>
  <div>
    <h1></h1>
    <ul v-infinite-scroll="loadMore" 
        infinite-scroll-disabled="loading"
        infinite-scroll-distance="40"
        infinite-scroll-immediate-check="false"
        >
      <li v-for="data in dataList" :key="data.filmId" @click="viewDetail(data.filmId)">
        <img :src="data.poster">
        <h3>{{data.name}}</h3>
        <p>评分:{{data.grade}}</p>
        <p v-if="data.actors">主演:{{data.actors |actorfilter}}</p>
        <p v-else>暂无主演</p>
      </li>
    </ul>
  </div>
</template>

<script>
import { Indicator,Toast } from 'mint-ui';
import axios from 'axios'
import Vue from 'vue'
Vue.filter('actorfilter',function(data){
   return data.map(actor=>actor.name).join(' ')
})

export default {
  data () {
    return {
      dataList: [],
      loading:false,
      pageNum:1
    }
  },
  mounted() {
    Indicator.open('加载中');
   axios({
      url: `/mz/gateway?cityId=${this.$store.state.cityId}&pageNum=1&pageSize=10&type=1&k=4271989`,
      headers: {
        'X-Client-Info': '{"a":"3000","ch":"1002","v":"5.0.4","e":"15610855429195524981146"}',
        'X-Host': 'mall.film-ticket.film.list'
      }
    }).then(res => {
       //console.log(JSON.stringify(res.data.data.films))
      this.dataList = res.data.data.films
      this.total= res.data.data.total
      Indicator.close();
    })
  },
 
  methods: {
    viewDetail (id) {
      // console.log('显示' + name + '的详情')
      // 配置路由动态绑定
      // this.$router.push(`/detail/${name}`)
      // 路由配置的name属性传参
      this.$router.push({
        name: 'dl',
        params: {
          id,
        }
      })
    },
    loadMore(){
     
    this.loading = true;
    this.pageNum++
      if(this.dataList.length===this.total){
        Toast('加载完成了');
        return
      }
      Indicator.open('加载中');
   axios({
      url: `/mz/gateway?cityId=430100&pageNum=${this.pageNum}&pageSize=10&type=1&k=4271989`,
      headers: {
        'X-Client-Info': '{"a":"3000","ch":"1002","v":"5.0.4","e":"15610855429195524981146"}',
        'X-Host': 'mall.film-ticket.film.list'
      }
    }).then(res => {
       //console.log(JSON.stringify(res.data.data.films))
      this.dataList = [...this.dataList,...res.data.data.films]
      
      this.loading=false
      Indicator.close();
    })
    }
  }
}
</script>

<style lang="scss" scoped>
  ul {
    
    li {
      padding: 10px;
      overflow: hidden;
      
      img {
        float: left;
        width: 100px;
      }
    }
    div {
    -webkit-box-sizing: border-box;
    box-sizing: border-box;
  }
  }
</style>