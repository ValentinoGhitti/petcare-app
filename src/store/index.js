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
    },
    UPDATE_USER_PASSWORD(state, { email, newPassword }) {
      const user = state.users.find(user => user.email === email);
      if (user) {
        user.password = newPassword;
        localStorage.setItem('users', JSON.stringify(state.users));
      }
    }
  },
  actions: {
    register({ commit }, user) {
      commit('ADD_USER', user);
    },
    login({ commit, state }, { email, password }) {
      const user = state.users.find(u => u.email === email && u.password === password);
      if (user) {
        const token = 'someRandomToken';
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
    },
    resetPasswordAction({ commit, state }, { email, newPassword }) {
      const userExists = state.users.some(user => user.email === email);
      if (userExists) {
        commit('UPDATE_USER_PASSWORD', { email, newPassword });
        console.log('Password updated successfully');
      } else {
        console.log('Email not found');
      }
    }
  },
  getters: {
    isAuthenticated: state => state.isAuthenticated,
    user: state => state.user
  }
});
