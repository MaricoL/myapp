import Vue from 'vue'
import VueRouter from 'vue-router'
import Center from '../views/Center.vue'
import Cinema from '../views/Cinema.vue'
import Film from '../views/Film.vue'
import Nowplaying from '../views/film/Nowplaying.vue'
import Comingsoon from '../views/film/Comingsoon.vue'
import Detail from '../views/detail.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/center',
    name: 'Center',
    component: Center
  },
  {
    path: '/cinema',
    name: 'Cinema',
    component: Cinema
  },
  {
    path: '/detail/:filmId',
    name: 'Detail',
    component: Detail
  },
  {
    path: '/film',
    name: 'Film',
    component: Film,
    // 嵌套路由
    children: [
      {
        // path简写形式，相当于 /film/nowplaying
        path: 'nowplaying',
        name: 'Nowplaying',
        component: Nowplaying
      },
      {
        path: 'comingsoon',
        name: 'Comingsoon',
        component: Comingsoon
      },
      {
        path: '',
        redirect: 'nowplaying'
      }
    ]
  },
  {
    // 重定向功能，防止用户错乱的url
    path: '*',
    redirect: '/film'
  }

]

const router = new VueRouter({
  routes
})

export default router
