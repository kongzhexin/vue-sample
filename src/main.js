import Vue from 'vue'
import Vuex from 'vuex'
import VueResource from 'vue-resource'
import VueRouter from 'vue-router'

import App from './App.vue'
import ProductList from './components/ProductList.vue'
import Movie from './components/Movie.vue'
import Cart from './components/Cart.vue'
import Mine from './components/Mine.vue'

import store from './store'
import { currency } from './currency'
import * as types from './store/mutation-types.js'

// import { Tabbar, TabItem } from 'mint-ui'
// import { Field } from 'mint-ui';
import MintUI from 'mint-ui'

Vue.filter('currency', currency)
Vue.use(VueResource);
Vue.use(VueRouter)
Vue.use(Vuex)

//引用mint-ui插件
// Vue.component(Tabbar.name,Tabbar)
// Vue.component(TabItem.name,TabItem)
// Vue.component(Field.name, Field);
Vue.use(MintUI)
//  定义路由
// 每个路由应该映射一个组件。 其中"component" 可以是
// 或者，只是一个组件配置对象。
const routes = [
  { path: '/movie', components: { movie: Movie }, alias: '/douban' },
  {
    path: '/shop',
    components: {
      product: ProductList,
      cart: Cart
    }
  },
  {
    path:'/mine',
    components:{
      mine:Mine
    }
  }
]

// 3. 创建 router 实例，然后传 `routes` 配置
// 你还可以传别的配置参数，不过先这么简单着吧。
const router = new VueRouter({
  routes // （缩写）相当于 routes: routes
})
//

// 4. 创建和挂载根实例。
// 记得要通过 router 配置参数注入路由，
// 从而让整个应用都有路由功能
const vm = new Vue({
  el: '#app',
  data() {
    return { name: "kongzx" }
  },
  store,
  router,
  render: h => h(App)
})
Vue.http.interceptors.push((request, next) => {

  vm.$store.commit(types.SHOW_LOADING)
  next((response) => {
    if (!response.ok) { }
    vm.$store.commit(types.SHOW_LOADING)
    return response;
  })
});    