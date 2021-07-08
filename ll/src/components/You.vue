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
                axios.get('/axs/query').then(res=>{
                    this.msg=res.data.content
                })
                
        }
    },
}
</script>

<style>

</style>