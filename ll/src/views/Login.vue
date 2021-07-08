<template>
  <div>
      <img src="../assets/f.jpeg" height="80" width="80" >
      <form>
          <mt-field label="手机号" placeholder="请输入手机号" type="tel" v-model="phone"></mt-field>
          <mt-field label="验证码" placeholder="请输入验证码" type="number" v-model="yzm"></mt-field>
          <mt-button size="large" type="danger" plain @click="login(phone)">登录</mt-button>
      </form>
  </div>
</template>

<script>
import { Field ,Button,MessageBox } from 'mint-ui';
import Vue from 'vue'
Vue.component(Field.name, Field);
Vue.component(Button.name, Button);
export default {
    data() {
        return {
          phone:'',
          yzm:''
      }
    },  
    methods: {
      login(){
        let regEx = /^\d{8}-\d{1,9}$|^\d{11}-\d{1,9}$|^\d{8}$|^\d{11}$/
        if(!regEx.test(this.phone)){
          MessageBox('提示', '你的手机号格式不对');
        }else if(this.yzm.length>6||this.yzm.length<6){
          MessageBox('提示', '验证码必须为6位');
          
        }else{
          this.$router.push(`/center`)
        }
      }
    },
}
</script>

<style scoped>
  div{
    text-align: center;
  }
  body{
    background-color:rgb(240, 254, 255);
  }

</style>
