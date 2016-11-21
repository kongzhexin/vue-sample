<template>
  <div id="app">
    <mt-tabbar v-model="selected" :fixed="true">
      <mt-tab-item id="shop">
        <img slot="icon" src="./assets/logo.png">
        <!--<router-link to="/shop" >购物</router-link>-->
        购物
      </mt-tab-item>
      <mt-tab-item id="movie">
        <img slot="icon" src="./assets/logo.png">
        <!--<router-link to="/movie" >电影</router-link>-->
        电影
      </mt-tab-item>
      <mt-tab-item id="register">
        <img slot="icon" src="./assets/logo.png">
        注册
      </mt-tab-item>
      <mt-tab-item id="mine">
        <img slot="icon" src="./assets/logo.png">
        我的
      </mt-tab-item>
    </mt-tabbar>
    <mt-tab-container v-model="selected">
      <mt-tab-container-item id="shop">
        <product></product>
        <cart></cart>
      </mt-tab-container-item>
       <mt-tab-container-item id="movie">
        <movie></movie>
      </mt-tab-container-item>
       <mt-tab-container-item id="register">
        <register></register>
      </mt-tab-container-item>
       <mt-tab-container-item id="mine">
        <mine></mine>
      </mt-tab-container-item>
    </mt-tab-container>
    <!--<div class= "shop">
      <router-view name='product'></router-view>
      <router-view name='cart'></router-view>
    </div>-->
    <!--<div class='movie'>
      <router-view name='movie'></router-view>
    </div>-->
    <div>
     <loading ></loading>
    </div>
    <!--<check></check>-->
  </div>
</template>

<script>

import loading from './components/Loading.vue'
import mine from './components/Mine.vue'
import register from './components/Register.vue'
import product from './components/ProductList.vue'
import movie from './components/Movie.vue'
import cart from './components/Cart.vue'
// import check from './components/Check.vue'


export default {
  name: 'app',
  components: {loading,mine,register,product,cart,movie},
  data () {
    return {
      msg: 'Welcome to Kongzx Vue.js App',
      selected:"shop"
    }
  },
  watch:{
     '$route': 'change'
    },
  methods:{
      change () {
        this.msg=this.$route.fullPath
      }

    }
}
</script>

<style scoped>
  
  div.product{
    display:inline-block;
    width:50%
  }
 
</style>
