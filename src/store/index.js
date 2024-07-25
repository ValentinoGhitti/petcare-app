import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    isAuthenticated: !!localStorage.getItem('authToken'),
    user: JSON.parse(localStorage.getItem('user')) || null
  },
  mutations: {
    SET_AUTHENTICATED(state, isAuthenticated) {
      state.isAuthenticated = isAuthenticated;
    },
    SET_USER(state, user) {
      state.user = user;
    }
  },
  actions: {
    login({ commit }, { token, user }) {
      localStorage.setItem('authToken', token);
      localStorage.setItem('user', JSON.stringify(user));
      commit('SET_AUTHENTICATED', true);
      commit('SET_USER', user);
    },
    logout({ commit }) {
      localStorage.removeItem('authToken');
      localStorage.removeItem('user');
      commit('SET_AUTHENTICATED', false);
      commit('SET_USER', null);
    }
  },
  getters: {
    isAuthenticated: state => state.isAuthenticated,
    user: state => state.user
  }
});
