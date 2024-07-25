<template>
  <v-container>
    <v-skeleton-loader
      v-if="loading"
      :loading="loading"
      type="card"
      class="my-8"
    ></v-skeleton-loader>
    <v-card class="mt-8" v-else>
      <v-card-text class="text-center">
        <v-row>
          <v-col class="d-flex align-center mb-6">
            <span>ACTIVITY</span>
          </v-col>
          <v-col  >
            <v-select
              dense
              label="Select"
              :items="['Daily', 'Weekly', 'Monthly']"
              outlined
            ></v-select>
          </v-col>
        </v-row>
        <apexchart type="radialBar" height="300" :options="chartOptions" :series="series"></apexchart>
      </v-card-text>
    </v-card>
  
  </v-container>

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
      series: [70],
      chartOptions: {
        chart: {
          height: 300,
          type: 'radialBar',
        },
        plotOptions: {
          radialBar: {
            hollow: {
              size: '70%',
            },
            track: {
              background: '#e0e0e0',
              strokeWidth: '100%',
              margin: 1,
            },
            dataLabels: {
              show: true,
              name: {
                show: false,
              },
              value: {
                fontSize: '30px',
              },
              total: {
                show: true,
                label: 'Total',
              },
            },
          },
        },
      },
    };
  },
};
</script>
