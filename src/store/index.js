import Vue from 'vue';
import Vuex from 'vuex';
import petcare from '../store/petcare';

Vue.use(Vuex);

const store = new Vuex.Store({
  modules: {
    petcare
  }
});

export default store;
