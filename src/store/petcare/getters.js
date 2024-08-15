export default {
  isAuthenticated: state => state.isAuthenticated,
  currentChartData: state => state.chartData[state.selectedChart]
};
