import Vue from 'vue'
import VueRouter from 'vue-router'
import Center from '../views/Center.vue'
import Cinema from '../views/Cinema.vue'
import Film from '../views/Film.vue'
import Nowplaying from '../views/film/Nowplaying.vue'
import Comingsoon from '../views/film/Comingsoon.vue'
import Detail from '../views/Detail.vue'
import City from '../views/City.vue'
// import Login from '../views/Login.vue'

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
  // 1-动态路由
  {
    path: '/detail/:filmId',
    name: 'Detail',
    component: Detail
  },
  // 2-命名路由
  // {
  //   path: '/detail/:id',
  //   name: 'Detail',
  //   component: Detail
  // },
  // 3-query方式路由
  // {
  //   path: '/detail',
  //   component: Detail
  // },
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
    path: '/city',
    name: 'City',
    component: City
  },
  // {
  //   path: '/login',
  //   name: 'Login',
  //   component: Login
  // },

  // 路由懒加载
  {
    path: '/login',
    name: 'Login',
    component: () => import('../views/Login.vue')
  },
  {
    // 重定向功能，防止用户错乱的url
    path: '*',
    redirect: '/film'
  }

]

const router = new VueRouter({
  routes,
  // 默认模式为 Hash模式，地址栏有 #警号
  // 可以切换为 H5 Histhory模式，地址栏没有 #警号
  mode: 'history'
})

// 全局路由守卫
router.beforeEach((to, from, next) => {
  const auth = ['/center', '/order', 'money', '/card']
  if (auth.includes(to.fullPath)) {
    // 如果当前访问当前路径的时候没有 token，则路由到 /login
    if (!localStorage.getItem('token')) {
      next('/login')
      return
    }
  }
  // 如果不用 auth，则直接跳转
  next()
})

export default router
