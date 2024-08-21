export default {
  setAuth(state, isAuthenticated) {
    state.isAuthenticated = isAuthenticated;
  },
  setUser(state, user) {
    state.user = user;
    localStorage.setItem('user', JSON.stringify(user));
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
  }
};
