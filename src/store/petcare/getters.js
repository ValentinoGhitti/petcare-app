export default {
  isAuthenticated: state => state.isAuthenticated,
  currentChartData: state => state.chartData[state.selectedChart],
  currentChartDataStat: state => (label, period) => {
    return state.statCardData[label] ? state.statCardData[label][period] : 0;
  },
  // Table
  getVaccinations: state => state.vaccinations,
  getSelectedType: state => state.selectedType,
  getVeterinarians: state => state.veterinarians,
  getAssignedVeterinarians: state => {
    return state.vaccinations.map(v => v.veterinarian).filter(Boolean) || [];
  },
  filteredVaccinations: (state) => {
    if (state.selectedType === 'All') return state.vaccinations;

    const priority = ['Overdue', 'Core', 'Noncore'];
    return state.vaccinations
      .slice()
      .filter(v => v.type === state.selectedType)
      .sort((a, b) => priority.indexOf(a.type) - priority.indexOf(b.type));
  },
  veterinarians: (state) => state.veterinarians
};
