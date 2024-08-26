<template>
  <div>
    <!-- Loading Skeleton Loader -->
    <v-skeleton-loader
      v-if="loading"
      :loading="loading"
      type="table-heading, list-item-two-line, image"
      height="450px"
    ></v-skeleton-loader>

    <!-- Main Content -->
    <v-card class=" mx-0 custom-card" v-else>
      <v-row class="mb-2">
        <v-col col="1" class="d-flex align-center mt-6">
          <span class="custom-span ml-7 mt-4">HEALTH MONITORING</span>
        </v-col>
        <v-col col="2" md="2" xl="2" class="mr-7 mt-2 mr-sm-1 mr-xl-7 mr-xs-1">
          <v-select
            dense
            hide-details
            :items="['Daily', 'Weekly', 'Monthly']"
            outlined
            class="mr-5 mt-6 custom-select"
            v-model="selectedRange"
            @change="updateChartRange"
          ></v-select>
        </v-col>
      </v-row>

      <v-row class="d-flex justify-center">
        <v-col lg="11" class="box-toggle d-flex justify-center justify-space-between text-center">
          <v-chip
            class="ma-2 toggle-active"
            :color="activeButton === 'stressLevel' ? '#3788E5' : 'transparent'"
            :text-color="activeButton === 'stressLevel' ? 'white' : '#0B1C33'"
            label
            @click="setActiveButton('stressLevel')"
          >
            <IconStress class="mr-2" />
            Stress level
          </v-chip>
          <v-chip
            class="ma-2 toggle-active"
            :color="activeButton === 'pulse' ? '#3788E5' : 'transparent'"
            :text-color="activeButton === 'pulse' ? 'white' : '#0B1C33'"
            label
            @click="setActiveButton('pulse')"
          >
            <IconPulse class="mr-2" />
            Pulse
          </v-chip>
          <v-chip
            class="ma-2 toggle-active"
            :color="activeButton === 'temperature' ? '#3788E5' : 'transparent'"
            :text-color="activeButton === 'temperature' ? 'white' : '#0B1C33'"
            label
            @click="setActiveButton('temperature')"
          >
            <IconTemp class="mr-2" />
            Temperature
          </v-chip>
          <v-chip
            class="ma-2 toggle-active"
            :color="activeButton === 'caloriesBurned' ? '#3788E5' : 'transparent'"
            :text-color="activeButton === 'caloriesBurned' ? 'white' : '#0B1C33'"
            label
            @click="setActiveButton('caloriesBurned')"
          >
            <IconCalories class="mr-2" />
            Calories burned
          </v-chip>
        </v-col>
      </v-row>

      <v-row>
        <v-col lg="12" class="chart-container d-flex justify-center">
          <apexchart
            ref="chart"
            type="area"
            height="367"
            width="805"
            :options="chartOptions"
            :series="[{ name: 'Activity', data: series }]">
          </apexchart>
        </v-col>
      </v-row>
    </v-card>
  </div>
</template>

<script>
import VueApexCharts from 'vue-apexcharts';
import { mapGetters, mapActions } from 'vuex';
import {
  IconCalories,
  IconPulse,
  IconStress,
  IconTemp
} from '../assets/icons/index';

export default {
  props: {
    loading: Boolean
  },
  components: {
    apexchart: VueApexCharts,
    IconCalories,
    IconPulse,
    IconStress,
    IconTemp
  },
  data() {
    return {
      activeButton: 'stressLevel',
      selectedRange: 'Monthly',
      chartOptions: {
        chart: {
          type: 'area',
          height: 387,
          zoom: { enabled: false },
          toolbar: { show: false },
          background: '#FFFFFF'
        },
        title: { text: '' },
        subtitle: { text: '' },
        dataLabels: { enabled: false },
        stroke: { curve: 'smooth' },
        fill: {
          type: 'gradient',
          gradient: {
            shadeIntensity: 1,
            gradientToColors: ['#B3E5FC'],
            inverseColors: false,
            opacityFrom: 0.9,
            opacityTo: 0.2,
            stops: [0, 100]
          }
        },
        colors: ['#0288D1'],
        grid: {
          strokeDashArray: 4,
          borderColor: '#DAE3F8',
        },
        xaxis: {
          categories: this.getCategoriesForRange('Monthly'),
          labels: { rotate: -45, align: 'right' },
          crosshairs: {
            show: false
          }
        },
        yaxis: {
          min: 1,
          max: 10,
          tickAmount: 9,
          labels: {
            formatter: function (value) {
              return Math.floor(value);
            }
          }
        },
        legend: { horizontalAlign: 'left' }
      }
    };
  },
  computed: {
    ...mapGetters('dashboard', ['chartDataForRange']),
    series() {
      return this.chartDataForRange(this.activeButton, this.selectedRange);
    }
  },
  methods: {
    ...mapActions('dashboard', ['updateChart']),
    setActiveButton(button) {
      this.activeButton = button;
      this.updateChart(button);
      this.updateChartRange();
    },
    updateChartRange() {
      const newCategories = this.getCategoriesForRange(this.selectedRange);
      this.chartOptions.xaxis.categories = newCategories;
      this.$refs.chart.updateOptions({
        xaxis: { categories: newCategories }
      });
      this.$refs.chart.updateSeries([{ name: 'Activity', data: this.series }]);
    },
    getCategoriesForRange(range) {
      switch (range) {
        case 'Daily':
        return [
            '', 'Monday','',
            'Wednesday', '',
            'Friday', '', 
            'Sunday', '',
          ];
        case 'Weekly':
          return [
            '', 'Week 1', '', '', 
            'Week 2', '', '', '', 
            'Week 3', '', '', '', 
            'Week 4', '', '', '',
          ];
        case 'Monthly':
          return [
            '', 'September', '', '', '', '', '', '',
            'November', '', '', '', '', '', '', '','December',
            '','','','','','','','January'
          ];
        default:
          return [];
      }
    }
  },
  mounted() {
    this.$nextTick(() => {
      window.dispatchEvent(new Event('resize'));
    });
  }
}
</script>

<style scoped>
.v-card {
  border-radius: 16px;
  border: #DAE3F8 1px solid;
  box-shadow: none !important;
}

.v-select >>> .v-select__selection--comma {
  overflow: visible !important;
}

.v-select.v-input--dense >>> .v-select__selection--comma {
  margin: 0;
}

.theme--light.v-select >>> .v-select__selections {
  color: #0B1C33 !important;
  font-size: 14px;
  font-weight: 550;
}

.custom-span {
  color: #0B1C33 !important;
  opacity: 70% !important;
  font-weight: 500;
}

.custom-card {
  width: 910px;
  height: 577px;
  gap: 0px;
  opacity: 0px;
  position: relative;
}

.custom-select {
  font-size: 0.75rem;
  font-weight: bold;
  height: 40px;
  width: 100%;
  line-height: 0.5rem;
  overflow: hidden;
  margin-top: 0.4rem;
}

.toggle-active {
  padding: 20px;
  width: 200px;
  display: flex;
  justify-content: center;
  border-radius: 0.7rem !important;
}

.v-text-field--outlined >>> fieldset {
  border: 2px solid #DAE3F8;
  border-radius: 9px !important;
}

.v-text-field--outlined >>> .v-icon {
  color: #3788E5 !important;
}

.chart-container {
  width: 100%;
  height: 100%;
  padding-top: 0;
  min-height: 350px;
}

.box-toggle {
  border: 1px solid #DAE3F8;
  border-radius: 15px !important;
  padding: 0;
}

.buttons-border {
  border: 1px solid #DAE3F8;
  border-radius: 8px;
  padding: 2px;
  padding-left: 1px;
  padding-right: 1px;
}

.theme--light.v-card {
  color: #0B1C33 !important;
}
</style>
