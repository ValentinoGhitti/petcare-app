export default {
  // ChartStat
  setSelectedChart(state, chartType) {
    state.selectedChart = chartType;
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
