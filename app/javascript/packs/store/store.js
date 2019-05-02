import Vue from 'vue'
import Vuex from 'vuex'
import { getPriority } from 'os';
import productsStore from './productsStore'
import cartStore from './cartStore'
import noticeMessageBoxStore from './noticeMessageBox'
import userStore from './userStore'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    cM: cartStore,
    nM: noticeMessageBoxStore,
    uM: userStore,
    pM: productsStore,
  }
})
