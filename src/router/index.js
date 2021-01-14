import Vue from 'vue'
import VueRouter from 'vue-router'
import Center from '../views/Center.vue'
import Cinema from '../views/Cinema.vue'
import Film from '../views/Film.vue'

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
    path: '/film',
    name: 'Film',
    component: Film
  }

]

const router = new VueRouter({
  routes
})

export default router
