export default {
  isAuthenticated: state => state.isAuthenticated,
  currentChartData: state => state.chartData[state.selectedChart],
  currentChartDataStat: state => (label, period) => {
    return state.statCardData[label] ? state.statCardData[label][period] : 0;
  },
};
