export default {
  register({ commit }, user) {
    commit('addUser', user);
  },
  login({ commit, state }, { email, password }) {
    const user = state.users.find(u => u.email === email && u.password === password);
    if (user) {
      const token = 'someRandomToken';
      localStorage.setItem('authToken', token);
      localStorage.setItem('user', JSON.stringify(user));
      commit('setAuth', true);
      commit('setUser', user);
    } else {
      throw new Error('Invalid credentials');
    }
  },
  logout({ commit }) {
    localStorage.removeItem('authToken');
    localStorage.removeItem('user');
    commit('setAuth', false);
    commit('setUser', null);
  },
  resetPasswordAction({ commit, state }, { email, newPassword }) {
    const userExists = state.users.some(user => user.email === email);
    if (userExists) {
      commit('updateUserPassword', { email, newPassword });
      return true;
    } else {
      return false;
    }
  },
  updateChart({ commit }, chart) {
    commit('setSelectedChart', chart);
  }
};
