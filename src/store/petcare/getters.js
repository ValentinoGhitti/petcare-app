export default {
  isAuthenticated: state => state.isAuthenticated,
  currentChartData: state => state.chartData[state.selectedChart],
  currentChartDataStat: state => (label, period) => {
    return state.statCardData[label] ? state.statCardData[label][period] : 0;
  },
  getVaccinations: state => state.vaccinations,
  getSelectedType: state => state.selectedType,
  getVeterinarians: state => state.veterinarians,
  getAssignedVeterinarians: state => {
    return state.vaccinations.map(v => v.veterinarian).filter(Boolean);
  }
};
