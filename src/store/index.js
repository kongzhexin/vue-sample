import Vue from 'vue'
import Vuex from 'vuex'
import * as actions from './actions'
import * as getters from './getters'
import cart from './modules/cart'
import products from './modules/products'
import loading from './modules/loading'
import app from './modules/app'


Vue.use(Vuex)



export default new Vuex.Store({
  actions,
  getters,
  modules: {
    app,
    cart,
    products,
    loading
  }

})
