export default {
  //  updates the selected chart data
  updateChart({ commit }, chart) {
    commit('setSelectedChart', chart);
  },

  // Update data of the chart card
  updateChartStat({ commit }, { label, value, period }) {
    commit('updateStatCardData', { label, value, period });
  },

  // sets the selected type for select component
  setSelectedType({ commit}, type) {
    commit('setSelectedType', type)
  }
};
