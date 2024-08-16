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
  // ChartStat
  setSelectedChart(state, chart) {
    state.selectedChart = chart;
  },
  updateStatCardData(state, { label, value, period }) {
    if (!state.statCardData[label]) {
      state.statCardData[label] = {};
    }
    state.statCardData[label][period] = value;
  },
  // Table Vaccination
  setSelectedType(state, type) {
    state.selectedType = type;
  },
  updateVaccinationVeterinarian(state, { vaccinationName, veterinarianName }) {
    const vaccination = state.vaccinations.find(v => v.name === vaccinationName);
    if (vaccination) {
      vaccination.veterinarian = veterinarianName;
    }
  },
  toggleMenu(state, vaccinationName) {
    const vaccination = state.vaccinations.find(v => v.name === vaccinationName);
    if (vaccination) {
      vaccination.menu = !vaccination.menu;
    }
  }
};
