<template>
  <mt-index-list>
    <mt-index-section v-for="group in dicCitys"
        :index="group.ch" :key="group.ch">
        <div v-for="city in group.list" @click="saveCity(city.cityId)"
          :key="city.name">
          <mt-cell :title="city.name">
          </mt-cell>
        </div>
    </mt-index-section>
  </mt-index-list>
</template>

<script>
import axios from 'axios'
export default {
  data () {
    return {
      dataList: []
    }
  },
  mounted () {
    axios({
      url: '/mz/gateway?k=9502566',
      headers: {
        'X-Client-Info': '{"a":"3000","ch":"1002","v":"5.0.4","e":"15610855429195524981146"}',
        'X-Host': 'mall.film-ticket.city.list'
      }
    }).then(res => {
      // [{"cityId":110100,"name":"北京","pinyin":"beijing","isHot":1}]
      // console.log(JSON.stringify(res.data.data.cities))
      this.dataList = res.data.data.cities
    })
  },
  computed: {
    dicCitys () {
      let o = {}
      for (let i = 65; i < 92; i++) {
        o[String.fromCharCode(i)] = []
      }
      this.dataList.reduce(function (obj, city) {
        // 获取城市拼音的首字母,并转换成大写字母
        let c = city.pinyin.charAt(0).toUpperCase()
        obj[c].push(city)
        return o
      }, o)
      let ny = []
      for (let attr in o) {
        if (o[attr].length > 0) {
          let group = {
            'ch': attr,
            'list': o[attr]
          }
          ny.push(group)
        }
      }
      //   return [{'ch': 'A', list: [{name: '安徽', pinyin: 'anhui'}]},
      //     {'ch': 'B', list: [{name: '北京', pinyin: 'beijing'}]},
      //     {'ch': 'C', list: [{name: '长沙', pinyin: 'changsha'}]}]
      return ny
    }
  },
  methods: {
    saveCity (cid) {
      // console.log('保存城市Id' + cid)
      // 将选中的城市的id保存在本地
      localStorage.setItem('cityId', cid)
      this.$router.push(`/cinema`)
      window.location.reload();
    }
  }
}
</script>

<style>

</style>
