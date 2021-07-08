// src/store.js
import axios from 'axios'
import Vue from 'vue'
import Vuex from 'vuex'
// 启用vuex
Vue.use(Vuex)
const store = new Vuex.Store({
  state: {
    isShowBar: true,
    comingList: [],
    cityId: localStorage.getItem('cityId')
  },
  mutations: {
    // s就是state
    hideBar (s, data) {
      s.isShowBar = data
    },
    showBar (s, data) {
      s.isShowBar = data
    },
    comingListMt (s, data) {
      s.comingList = data
    }
  },
  actions: {// 异步数据的请求必须放在actions中
    getComingListAc (store) {
      axios({
        url: `/mz/gateway?cityId=${store.state.cityId}&pageNum=1&pageSize=10&type=2&k=7410232`,
        headers: {
          'X-Client-Info': '{"a":"3000","ch":"1002","v":"5.0.4","e":"15610855429195524981146"}',
          'X-Host': 'mall.film-ticket.film.list'
        }
      }).then(res => {
        // console.log(res.data.data.films)
        store.commit('comingListMt', res.data.data.films)
      })
    }
  },
  getters: {}
})
export default store
