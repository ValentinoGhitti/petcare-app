<template>
  <v-card >
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
        <v-col lg="11" class="d-flex justify-center justify-between text-center twitter-buttons-border">
          <v-chip class="ma-2" color="blue" label text-color="white">
            <v-icon left>mdi-heart-flash</v-icon>
            Stress level
          </v-chip>
          <v-chip class="ma-2" color="transparent" label text-color="grey-lighten-5">
            <v-icon left>mdi-pulse</v-icon>
            Pulse
          </v-chip>
          <v-chip class="ma-2" color="transparent" label text-color="grey-lighten-5">
            <v-icon left>mdi-thermometer</v-icon>
            Temperature
          </v-chip>
          <v-chip class="ma-2" color="transparent" label text-color="grey-lighten-5">
            <v-icon left>mdi-fire</v-icon>
            Calories burned
          </v-chip>
        </v-col>
    </v-row>


    <v-row>
      <v-col lg="12" class="chart-container">
        <apexchart type="area" height="300" :options="chartOptions" :series="series"></apexchart>
      </v-col>
    </v-row>
    
    
    </div>

  </v-card>
</template>

<script>
import VueApexCharts from 'vue-apexcharts';

export default {
  props: {
    loading: Boolean
  },
  components: {
    apexchart: VueApexCharts,
  },
  data() {
    return {
      series: [{
        name: "Activity",
        data: [1, 1.5, 2.2, 1.6, 2.8, 2.5, 2.9, 1.9, 1.9, 1.9, 2, 2.4, 3.5, 2.6, 3.9, 5, 6, 5, 4.2, 4, 3.4, 2.9, 1.8, 2, 2.4, 3.3]
      }],
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
            'December', '', '', '', '', '', '', '',
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

.twitter-buttons-border {
  border: 1px solid #DAE3F8;
  border-radius: 8px;
  padding: 2px;
  padding-left: 1px;
  padding-right: 1px;
}
</style>