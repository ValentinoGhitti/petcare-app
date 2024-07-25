import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    isAuthenticated: !!localStorage.getItem('authToken'),
    user: JSON.parse(localStorage.getItem('user')) || null,
    users: JSON.parse(localStorage.getItem('users')) || []
  },
  mutations: {
    SET_AUTHENTICATED(state, isAuthenticated) {
      state.isAuthenticated = isAuthenticated;
    },
    SET_USER(state, user) {
      state.user = user;
    },
    ADD_USER(state, user) {
      state.users.push(user);
      localStorage.setItem('users', JSON.stringify(state.users));
    }
  },
  actions: {
    register({ commit }, user) {
      commit('ADD_USER', user);
    },
    login({ commit, state }, { email, password }) {
      const user = state.users.find(u => u.email === email && u.password === password);
      if (user) {
        const token = 'someRandomToken';  // Generate a token here
        localStorage.setItem('authToken', token);
        localStorage.setItem('user', JSON.stringify(user));
        commit('SET_AUTHENTICATED', true);
        commit('SET_USER', user);
      } else {
        throw new Error('Invalid credentials');
      }
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
