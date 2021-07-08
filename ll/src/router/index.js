import Vue from 'vue'
import Router from 'vue-router'
import You from '@/components/You'
import Film from '@/views/Film'
import Nowplaying from '@/views/Film/Nowplaying'
import Comingsoon from '@/views/Film/Comingsoon'
import Cinema from '@/views/Cinema'
import Center from '@/views/Center'
import City from '@/views/City'
import Detail from '@/views/Detail'
import Login from '@/views/Login'

Vue.use(Router)

const router = new Router({
  mode: 'history',
  routes: [
    {// http://localhost:8080/#/you
      path: '/you',
      component: You
    }, {// http://localhost:8080/#/film
      path: '/film',
      component: Film,
      children: [// 二级路由
        {// http://localhost:8080/#/film/nowplaying
          // path: '/film/nowplaying',
          path: 'nowplaying',
          component: Nowplaying
        },
        {// http://localhost:8080/#/film/comingsoon
          path: '/film/comingsoon',
          component: Comingsoon
        },
        {// 当在浏览器地址栏输入http://localhost:8080/#/film，默认显示/film/nowplaying对应的组件
          path: '',
          redirect: '/film/nowplaying'
        }
      ]
    }, {// http://localhost:8080/#/cinema
      path: '/cinema',
      component: Cinema
    }, {// http://localhost:8080/#/center
      path: '/center',
      component: Center
    }, {
      path: '/detail/:n',
      name: 'dl',
      component: Detail
    }, {
      path: '/login',
      component: Login
    },{
      path:'/cy',
      component:City
    },
    {// 如果跟上面所有的path都没有匹配，就默认显示/film组件
      path: '*',
      redirect: '/cy'
    }
  ]
})
// 全局路由守卫实现安全验证
// router.beforeEach((to, from, next) => {
//   if (to.path === '/center') {
//     console.log('进行安全验证')
//     // 如果验证成功，就允许跳转到center页面去
//     // next();
//     // 如果验证不成功，就强制跳转到登录页面
//     next('/login')
//   } else {
//     next()
//   }
// })
export default router
