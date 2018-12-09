import Vue from 'vue'
import Vuex from 'vuex'
import VueRouter from 'vue-router';

Vue.use(Vuex)

const Type = {
  namespaced: true,
  state: {
    type: "Engineer"
  },
  mutations: {},
  actions: {},
  getter: {
    getType: () => {
      if (state.type == "Engineer"){
        return state.type = "Artist";
      }
      return state.type;
    }
  }
}

export default new Vuex.Store({
  modules: {
    Type
  }
})
