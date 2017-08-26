import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    showContents: true,
  },
  getters: {
    showContents(state) {
      return state.showContents;
    },
  },
  mutations: { // Must be synchronous. Async work goes in actions
    toggleContents(state) {
      state.showContents = !state.showContents;
    },
  },
  actions: { // Do asynchronous work here before commiting to mutation
    toggleContents(context) {
      context.commit('toggleContents');
    },
  },
});
