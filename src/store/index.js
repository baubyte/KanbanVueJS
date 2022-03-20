import Vue from 'vue'
import Vuex from 'vuex'
import createLogger from 'vuex/dist/logger'

import state from './state'
import getters from './getters'
import actions from './actions'
import mutations from './mutations'
/**
 * Usamos el plugins vuex
 */
Vue.use(Vuex)
/*
* Para comprobar si estamos en producción
* no mostramos errores.
*/
const debug = process.env.NODE_ENV !== 'production'
/**
 * Creamos el store
 */
export default new Vuex.Store({
  strict: debug,
  plugins: debug ? [createLogger()] : [],
  state,
  getters,
  actions,
  mutations
})
