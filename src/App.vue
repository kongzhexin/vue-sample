<template>
  <div id="app">
 
    <router-link to="/" >Shopping Cart Example</router-link>
    <hr>
    <div class= "main">
      <div class="product">
       <!-- <product-list></product-list>-->
        <router-view name='product'></router-view>
        <router-view name='cart'></router-view>
      </div>
   
     <!-- <cart></cart>-->
   
    </div>
    <router-link to="/movie" >Movie</router-link>
    <div class='movie'>
     <!-- <Movie></Movie>-->
      <router-view name='movie'></router-view>
    </div>
   
    <div>
     <loading ></loading>
    </div>
  </div>
  
</template>

<script>


import ProductList from './components/ProductList.vue'
// import Cart from './components/Cart.vue'
// import Movie from './components/Movie.vue'
// import loading from './components/loading.vue'
import Vue from  'vue'

export default {
  name: 'app',
  components: {loading},
  data () {
    return {
      msg: 'Welcome to Kongzx Vue.js App'
     
    }
  },
  mounted :function (){
    
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
