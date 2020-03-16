import Vue from 'vue'
import Vuex from 'vuex'
import mutations from './mutations'
import getters from './getters'
import actions from './actions'


Vue.use(Vuex)

const state = {
  pass_token:'',
  userName_token:'',
};
export default new Vuex.Store({
  state: state,
  actions:actions,
  mutations:mutations,
  getters:getters
})
