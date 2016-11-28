<template>
	<div class="cart">
		<h2>Your Cart</h2>
		<p v-show="!products.length"><i>Please add some products to cart.</i></p>
		<ul>
			<li v-for="p in products">
				{{ p.title }} - {{ p.price | currency }} x {{ p.quantity }}
			</li>
		</ul>
		<p>Total: {{ total | currency }}</p>
		<p><button :disabled="!products.length" @click="checkout(products)">Checkout</button></p>
		<p v-show="checkoutStatus">Checkout {{ checkoutStatus }}.</p>
	</div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  computed: {
    ...mapGetters({
      products: 'cartProducts',
      checkoutStatus: 'checkoutStatus'
    }),
    total () {
      return this.products.reduce((total, p) => {
        return total + p.price * p.quantity
      }, 0)
    }
  },
  methods: {
    checkout (products) {
      //this.$store.dispatch('checkout', products)
      debugger
      this.$http.post('http://127.0.0.1:8888/api',{projectId:'fc0eef07-94d9-4321-b1ff-f93e1d5216a8'},{emulateJSON :true})
      .then(function(response){
        console.log(response.body)
      },function(response){
        console.log(response.statusText)
      });
    }
  }
}

</script>
<style>
   div.cart{
    display:inline-block; 
    width:auto

  }
</style>