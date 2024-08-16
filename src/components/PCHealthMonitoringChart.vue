<template>
  <v-card>
    <v-skeleton-loader
      v-if="loading"
      :loading="loading"
      type="table-heading, list-item-two-line, image"
      height="450px"
    ></v-skeleton-loader>
    <div v-else>
      <v-row class="d-flex justify-center">
        <v-col lg="8" class="d-flex align-center px-0 mb-6">
          <v-card-text>HEALTH MONITORING</v-card-text>
        </v-col>
        <v-col lg="3">
          <v-select
            dense
            class="px-0 mr-5 mr-sm-5 mr-lg-5 mr-xl-5 mr-xs-5"
            :items="['Daily', 'Weekly', 'Monthly']"
            outlined
            v-model="selectedRange"
            @change="updateChartRange"
          ></v-select>
        </v-col>
      </v-row>

      <v-row class="d-flex justify-center mb-1">
        <v-col lg="11" class="box-toggle d-flex justify-center justify-space-between text-center">
          <v-chip
            class="ma-2 toggle-active"
            :color="activeButton === 'stressLevel' ? '#3788E5' : 'transparent'"
            :text-color="activeButton === 'stressLevel' ? 'white' : '#0B1C33'"
            label
            @click="setActiveButton('stressLevel')"
          >
            <v-icon left>mdi-heart-flash</v-icon>
            Stress level
          </v-chip>
          <v-chip
            class="ma-2 toggle-active"
            :color="activeButton === 'pulse' ? '#3788E5' : 'transparent'"
            :text-color="activeButton === 'pulse' ? 'white' : '#0B1C33'"
            label
            @click="setActiveButton('pulse')"
          >
            <v-icon left>mdi-pulse</v-icon>
            Pulse
          </v-chip>
          <v-chip
            class="ma-2 toggle-active"
            :color="activeButton === 'temperature' ? '#3788E5' : 'transparent'"
            :text-color="activeButton === 'temperature' ? 'white' : '#0B1C33'"
            label
            @click="setActiveButton('temperature')"
          >
            <v-icon left>mdi-thermometer</v-icon>
            Temperature
          </v-chip>
          <v-chip
            class="ma-2 toggle-active"
            :color="activeButton === 'caloriesBurned' ? '#3788E5' : 'transparent'"
            :text-color="activeButton === 'caloriesBurned' ? 'white' : '#0B1C33'"
            label
            @click="setActiveButton('caloriesBurned')"
          >
            <v-icon left>mdi-fire</v-icon>
            Calories burned
          </v-chip>
        </v-col>
      </v-row>

      <v-row>
        <v-col lg="12" class="chart-container">
          <apexchart
            ref="chart"
            type="area"
            height="300"
            :options="chartOptions"
            :series="[{ name: 'Activity', data: series }]">
          </apexchart>
        </v-col>
      </v-row>
    </div>
  </v-card>
</template>

<script>
import VueApexCharts from 'vue-apexcharts';
import { mapGetters, mapActions } from 'vuex';

export default {
  props: {
    loading: Boolean
  },
  components: {
    apexchart: VueApexCharts,
  },
  data() {
    return {
      activeButton: 'stressLevel',
      selectedRange: 'Monthly',
      chartOptions: {
        chart: {
          type: 'area',
          height: 350,
          zoom: {
            enabled: false
          },
          toolbar: {
            show: false
          },
          background: '#FFFFFF'
        },
        title: {
          text: '',
        },
        subtitle: {
          text: '',
        },
        dataLabels: {
          enabled: false
        },
        stroke: {
          curve: 'smooth'
        },
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
        xaxis: {
          categories: this.getCategoriesForRange('Monthly'),
          labels: {
            rotate: -45,
            align: 'right',
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
        legend: {
          horizontalAlign: 'left'
        }
      },
    };
  },
  computed: {
    ...mapGetters('petcare', ['chartDataForRange']),
    series() {
      return this.chartDataForRange(this.activeButton, this.selectedRange);
    }
  },
  methods: {
    ...mapActions('petcare', ['updateChart']),
    setActiveButton(button) {
      this.activeButton = button;
      this.updateChart(button);
      this.updateChartRange();
    },
    updateChartRange() {
      const newCategories = this.getCategoriesForRange(this.selectedRange);
      this.chartOptions.xaxis.categories = newCategories;
      this.$refs.chart.updateOptions({
        xaxis: {
          categories: newCategories
        }
      });
      this.$refs.chart.updateSeries([{ name: 'Activity', data: this.series }]);
    },
    getCategoriesForRange(range) {
      switch (range) {
        case 'Daily':
          return [
            'Monday', '',
            'Wednesday', '',
            'Friday', '', '',
            'Sunday', '',
          ];
        case 'Weekly':
          return [
            'Week 1', '', '', '', 
            'Week 2', '', '', '', '',
            'Week 3', '', '', '', '',
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
  min-height: 350px;
}

.box-toggle {
  border: 2px solid #DAE3F8;
  border-radius: 20px !important;
}

.buttons-border {
  border: 1px solid #DAE3F8;
  border-radius: 8px;
  padding: 2px;
  padding-left: 1px;
  padding-right: 1px;
}

.theme--light.v-card{
  color: #0B1C33 !important;
}
</style>
