import Vue from 'vue'
import Vuex from 'vuex'
import VueRouter from 'vue-router';

Vue.use(Vuex)

const state = {
  type: "Engineer"
}

const actions = {
  typeToggle(type){
    type.commit('typeToggle')
  }
}

const getters = {
  getType(state){
    return state.type
  }
}

const mutations = {
  typeToggle(state){
    if (state.type == "Engineer"){
      state.type = "Artist";
    } else {
      state.type = "Engineer";
    }
  }
}

export default new Vuex.Store({
  state,
  actions,
  getters,
  mutations
})
