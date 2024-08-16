export default {
  // register a new user
  register({ commit }, user) {
    commit('addUser', user);
  },

  // log in a user with email & pass
  login({ commit, state }, { email, password }) {
    const user = state.users.find(u => u.email === email && u.password === password);
    if (user) {
      const token = 'someRandomToken';
      localStorage.setItem('authToken', token);
      commit('setAuth', true);
      commit('setUser', user);
    } else {
      throw new Error('Invalid credentials');
    }
  },

  // Log out the current user
  logout({ commit }) {
    localStorage.removeItem('authToken');
    localStorage.removeItem('user');
    commit('setAuth', false);
    commit('setUser', null);
  },

  // reset password for a user
  resetPasswordAction({ commit, state }, { email, newPassword }) {
    const user = state.users.find(user => user.email === email);
    if (user) {
      commit('updateUserPassword', { email, newPassword });
      return true;
    }
    return false;
  },

  //  updates the selected chart data
  updateChart({ commit }, chart) {
    commit('setSelectedChart', chart);
  },

  // Update data of the chart card
  updateChartStat({ commit }, { label, value, period }) {
    commit('updateStatCardData', { label, value, period });
  },

  // sets the selected type for select component
  setSelectedType({ commit}, type) {
    commit('setSelectedType', type)
  }
};
