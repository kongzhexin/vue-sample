<template>
  <ul>
    <li v-for="p in products">
      {{ p.title }} - {{ p.price | currency }}
      
      <button
        :disabled="!p.inventory"
        @click="addToCart(p)" >
        Add
      </button>
    </li>
  </ul>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'

export default {
  computed: mapGetters({
    products: 'allProducts'
  }),
  methods: mapActions([
    'addToCart'
  ]),
  created () {
    this.$store.dispatch('getAllProducts')
  }
}
</script>
<style scoped>
  button{
    height:1.2em;
    float:right;
  }
</style>