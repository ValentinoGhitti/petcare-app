export default () => ({
  // authentication and user data
  isAuthenticated: !!localStorage.getItem('authToken'),
  user: JSON.parse(localStorage.getItem('user')) || null,
  users: JSON.parse(localStorage.getItem('users')) || []
});