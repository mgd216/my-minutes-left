import Vuex from 'vuex'
import Vue from 'vue'
import layout from './modules/layout'
import profile from './modules/profile'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    layout,
    profile
  }
})
