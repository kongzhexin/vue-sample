<template>
  <div id="app">
    <mt-tabbar v-model="selected">
      <mt-tab-item id="shop">
        <img slot="icon" src="./assets/logo.png">
        <router-link to="/shop" >购物</router-link>
      </mt-tab-item>
      <mt-tab-item id="movie">
        <img slot="icon" src="./assets/logo.png">
        <router-link to="/movie" >电影</router-link>
      </mt-tab-item>
      <mt-tab-item id="movieDetail">
        <img slot="icon" src="./assets/logo.png">
        详情
      </mt-tab-item>
      <mt-tab-item id="mine">
        <img slot="icon" src="./assets/logo.png">
        我的
      </mt-tab-item>
    </mt-tabbar>
    <mt-tab-container v-model="selected">
      <mt-tab-container-item id="mine">
        <mine></mine>
      </mt-tab-container-item>
    </mt-tab-container>
    <div class= "shop">
      <router-view name='product'></router-view>
      <router-view name='cart'></router-view>
    </div>
    <div class='movie'>
      <router-view name='movie'></router-view>
    </div>
    <div>
     <loading ></loading>
    </div>
  </div>
</template>

<script>

import loading from './components/Loading.vue'
import mine from './components/Mine.vue'

export default {
  name: 'app',
  components: {loading,mine},
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
