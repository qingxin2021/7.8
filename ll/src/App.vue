<template>
  <div id="app">
    <tabbar v-show="$store.state.isShowBar"/>
    <!-- <img src="http://127.0.0.1:9001/public/a1.png" /> -->
    <!-- <his>
      <label>Hello world</label>
      <p slot="footer">页脚的内容</p>
      <label slot="header">页眉的内容</label>
    </his> -->
    <router-view/>
  </div>
</template>

<script>
// import my from '@/components/My'
import tabbar from '@/components/Tabbar'
// import his from '@/components/His'
//当引入的对象是index.js 可以省略
// import bus from '@/bus'
export default {
  name: 'App',
  data() {
    return {
      // isShowBar:true
    }
  },
  components: {
    // my,
    // his,
    tabbar
  },
  mounted() {
    // bus.$on('xgBar',data=>{
    //   this.isShowBar=data
    // })
  },
}
</script>

<style lang="scss">
  * {
    margin: 0;
    padding: 0;
  }
  html {
    height: 100%;
  }
  li {
    list-style: none;
  }
</style>
