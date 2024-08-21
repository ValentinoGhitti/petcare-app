export default {
  // get mock data for a specific label and period
  currentChartDataStat: state => (label, period) => {
    return state.statCardData[label] ? state.statCardData[label][period] : 0;
  },

  /* Table getters */

  getVaccinations: state => state.vaccinations,
  getSelectedType: state => state.selectedType,
  getVeterinarians: state => state.veterinarians,

  // get list of assigned vets from vaccinations
  getAssignedVeterinarians: state => {
    return state.vaccinations.map(v => v.veterinarian).filter(Boolean) || [];
  },

  // filter vaccinations based on the selected type 
  filteredVaccinations: (state) => {
    if (state.selectedType === 'All') return state.vaccinations;
    const priority = ['Overdue', 'Core', 'Noncore'];
    return state.vaccinations
      .slice()
      .filter(v => v.type === state.selectedType)
      .sort((a, b) => priority.indexOf(a.type) - priority.indexOf(b.type));
  },
  veterinarians: (state) => state.veterinarians,

  // get chart data for a specific range based on the toggled btn
  chartDataForRange: (state) => (activeButton, range) => {
    const data = state.chartData[activeButton] || [];
    switch (range) {
      case 'Daily':
        return data.slice(0, 8);
      case 'Weekly':
        return data.slice(0, 15);
      case 'Monthly':
        return data;
      default:
        return [];
    }
  }
};
