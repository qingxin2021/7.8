<template>
  <div>
      <h1>{{msg}}</h1>
      <input type="button" value="请求数据" @click="loadData"/>
  </div>
</template>

<script>
import axios from 'axios'
export default {
    data(){
        return{
            msg:''
        }
    },
    methods: {
        loadData(){
                axios.get('http://127.0.0.1:9001/query').then(res=>{
                    console.log(res.data)
                })
        }
    },
}
</script>

<style>

</style>