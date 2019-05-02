import Vue from 'vue'
import Vuex from 'vuex'
import { getPriority } from 'os';
import productsStore from './productsStore'
import cartStore from './cartStore'
import noticeMessageBoxStore from './noticeMessageBox'
import userStore from './userStore'
import messageStore from './messageStore'
import flashStore from './flashStore'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    cM: cartStore,
    nM: noticeMessageBoxStore,
    uM: userStore,
    pM: productsStore,
    mM: messageStore,
    fM: flashStore
  }
})
