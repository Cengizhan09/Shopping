import Vue from 'vue'
import Vuex from 'vuex'
import user from "./user";
import products from './products'
import order from './order'

Vue.use(Vuex);

export default new Vuex.Store({
  state: {},
  mutations: {},
  actions: {},
  modules: {
    user,
    products,
    order
  }
});
