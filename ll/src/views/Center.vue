<template>
    <div class="center-view" >
        <div class="avatar">
          <router-link to="/login" tag="button" >
          立即登录
          </router-link>
          
          <router-view></router-view>
        </div>
        <ul class="my-order-tab">
          <li>
            <img src="../assets/d.png">
            <div>电影订单</div></li>
          <li>
            <img src="../assets/e.png">
            <div>商品订单</div></li>
        </ul>
    </div>
    
</template>

<script>
export default {
  // 局部路由守卫（有三个钩子函数）
  // beforeRouteEnter (to, from, next) {
  //   // 这个方法中不能使用this关键字
  //   console.log('安全验证')
  //   // 允许访问
  //   // next()
  //   // 强制跳转到登录页面
  //   next('/login')
  // }
}
</script>

<style scoped>
  body{
    margin: 0;
    overflow: hidden;
    background-color:gainsboro;
    height: 100%;
   
  }
  div {
    -webkit-box-sizing: border-box;
    box-sizing: border-box;
  }
  .center-view {
    position: relative;
    top: 0;
    right: 0;
    left: 0;
    font-size: 15px;
    background:rgb(198, 210, 221);
    margin-bottom: 59px;
  }
  ul {
    display: block;
    list-style-type: disc;
    margin-block-start: 1em;
    margin-block-end: 1em;
    margin-inline-start: 0px;
    margin-inline-end: 0px;
    padding-inline-start: 40px;
  }
  li, ul {
     list-style: none; 
     padding: 0; 
     margin: 0; 
  }
  .center-view .avatar {
    text-align: center;
    margin-top: -44px;
    height: 200px;
    padding-left: 110px;
    padding-top: 175px;
    background: url(../assets/c.jpg);
    background-size: cover;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
    color: lightslategray;
 
}
.center-view .my-order-tab {
    width: 100%;
    margin: 0 auto;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    text-align: center;
    font-size: 13px;
    padding: 0;
    height: 79px;
    background:lightyellow;
    margin-bottom: 10px;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
}
.center-view .my-order-tab li {
    position: relative;
    -webkit-box-flex: 1;
    -ms-flex: 1;
    flex: 1;
    list-style: none;
}
::-webkit-scrollbar {
    display: none;
}
</style>
