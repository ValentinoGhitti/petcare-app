export default {
  setAuth(state, isAuthenticated) {
    state.isAuthenticated = isAuthenticated;
  },
  setUser(state, user) {
    state.users.push(user);
    localStorage.setItem('users', JSON.stringify(state.users));
  },
  addUser(state, user) {
    state.users.push(user);
    localStorage.setItem('users', JSON.stringify(state.users));
  },
  updateUserPassword(state, { email, newPassword }) {
    const user = state.users.find(user => user.email === email);
    if (user) {
      user.password = newPassword;
      localStorage.setItem('users', JSON.stringify(state.users));
    }
  },
  setSelectedChart(state, chart) {
    state.selectedChart = chart;
  },
  updateStatCardData(state, { label, value, period }) {
    if (!state.statCardData[label]) {
      state.statCardData[label] = {};
    }
    state.statCardData[label][period] = value;
  }
};
