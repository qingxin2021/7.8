<template>
  <div>
    <nav>
      <ul>
          <!-- <li><a href="#/film">电影</a></li>
          <li><a href="#/cinema">影院</a></li>
          <li><a href="#/center">个人中心</a></li> -->
        <router-link to="/film" tag="li" active-class="highlight"><i class="iconfont icon-video"></i>电影</router-link>
        <router-link to="/cinema" tag="li" active-class="highlight"><i class="iconfont icon-RFQ"></i>影院</router-link>
        <router-link to="/center" tag="li" active-class="highlight"><i class="iconfont icon-accountfilling"></i>个人中心</router-link>
      </ul>
    </nav>
  </div>
</template>

<script>
export default {

}
</script>
// scoped 局部样式
<style lang="scss" scoped>
  $pc: red;
  .highlight {
      font-weight: 1000;
      color: red;
  }
  nav{
    position: fixed;
    left:0;
    bottom:0;
    width: 100%;
    height:50px;
    background-color:rgb(240, 146, 146);
    ul{
      display: flex;
      li{
          flex:1;
          line-height:50px;
          text-align: center;
      }
    }
  }
</style>
