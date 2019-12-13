import Vue from 'vue'
import VueRouter from 'vue-router'
import Index from '../views/index.vue'
import Home from './Home/Home'
import Cart from './Cart/Cart'
import Classification from './Classification/Classification'
import Find from './Find/Find'
import My from './My/My'
import search from './search'
import detail from './detail'
Vue.use(VueRouter)


const routes = [{
  path: '/',
  name: 'index',
  component: Index,
  redirect: '/index/Home',
  children: Home.concat(Cart, Classification, Find, My)
}].concat(search,detail)

const router = new VueRouter({
  mode: 'hash',
  // base: process.env.BASE_URL,
  routes
})

export default router