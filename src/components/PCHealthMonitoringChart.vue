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
            label="Select"
            class="px-0"
            :items="['Daily', 'Weekly', 'Monthly']"
            outlined
          ></v-select>
        </v-col>
      </v-row>

      <v-row class="d-flex justify-center mb-1">
        <v-col lg="11" class="d-flex justify-center justify-space-between text-center buttons-border">
          <v-chip
            class="ma-2"
            :color="activeButton === 'stressLevel' ? 'blue' : 'transparent'"
            :text-color="activeButton === 'stressLevel' ? 'white' : 'grey-lighten-5'"
            label
            @click="setActiveButton('stressLevel')"
          >
            <v-icon left>mdi-heart-flash</v-icon>
            Stress level
          </v-chip>
          <v-chip
            class="ma-2"
            :color="activeButton === 'pulse' ? 'blue' : 'transparent'"
            :text-color="activeButton === 'pulse' ? 'white' : 'grey-lighten-5'"
            label
            @click="setActiveButton('pulse')"
          >
            <v-icon left>mdi-pulse</v-icon>
            Pulse
          </v-chip>
          <v-chip
            class="ma-2"
            :color="activeButton === 'temperature' ? 'blue' : 'transparent'"
            :text-color="activeButton === 'temperature' ? 'white' : 'grey-lighten-5'"
            label
            @click="setActiveButton('temperature')"
          >
            <v-icon left>mdi-thermometer</v-icon>
            Temperature
          </v-chip>
          <v-chip
            class="ma-2"
            :color="activeButton === 'caloriesBurned' ? 'blue' : 'transparent'"
            :text-color="activeButton === 'caloriesBurned' ? 'white' : 'grey-lighten-5'"
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
          <apexchart type="area" height="300" :options="chartOptions" :series="[{ name: 'Activity', data: series }]"></apexchart>
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
      activeButton: 'stressLevel', // Valor por defecto
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
          curve: 'straight'
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
          categories: [
            '', 'September', '', '', '', '', '', '',
            'November', '', '', '', '', '', '', '',
            'December',
            'January'
          ],
          labels: {
            formatter: function(value) {
              const monthsToShow = ['September', 'November', 'December', 'January'];
              if (monthsToShow.includes(value)) {
                return value;
              } else {
                return '';
              }
            },
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
      }
    };
  },
  computed: {
    ...mapGetters('petcare', ['currentChartData']),
    series() {
      return this.currentChartData;
    }
  },
  methods: {
    ...mapActions('petcare', ['updateChart']),
    setActiveButton(button) {
      this.activeButton = button;
      this.updateChart(button);
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
.chart-container {
  width: 100%;
  height: 100%;
  min-height: 350px;
}

.buttons-border {
  border: 1px solid #DAE3F8;
  border-radius: 8px;
  padding: 2px;
  padding-left: 1px;
  padding-right: 1px;
}
</style>
