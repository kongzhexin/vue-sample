<template>
  <div id="app">
 
    <h1>Shopping Cart Example</h1>
    <hr>
    <div class= "main">
      <div class="product">
        <h2>Products</h2>
        <product-list></product-list>
      </div>
   
      <cart></cart>
   
    </div>
    <hr>
    <div>
      <h3>Movie</h3>
      <Movie></Movie>
    </div>
     <p>
        <router-link to="/foo">Go to Foo</router-link>
        <router-link to="/bar">Go to Bar</router-link>
    </p>
      <router-view></router-view>
      <div>
        <loading v-show="showloading"></loading>
      </div>
  </div>
  
</template>

<script>

import {mapGetters} from 'vuex'
import ProductList from './components/ProductList.vue'
import Cart from './components/Cart.vue'
import Movie from './components/Movie.vue'
import loading from './components/loading.vue'

export default {
  name: 'app',
  components: {ProductList,Cart ,Movie,loading},
  data () {
    return {
      msg: 'Welcome to Kongzx Vue.js App'
     
    }
  },
  computed:{
      ...mapGetters({
        showloading:'showloading'
      })
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
