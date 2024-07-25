<template>
  <v-container fluid>
    <v-skeleton-loader
      v-if="loading"
      :loading="loading"
      type="card"
      class="my-8"
    ></v-skeleton-loader>
    <v-card class="mt-11 mx-0 mb-5" v-else>
      <v-row class="d-flex justify-space-between">
        <v-col class="d-flex align-center">
          <v-card-text>{{ label }}</v-card-text>
        </v-col>
        <v-col cols="12" md="5" xl="5" class="pr-2"> 
          <v-select
            dense
            label="Select"
            hide-details
            :items="['Daily', 'Weekly', 'Monthly']"
            outlined
            class="mr-5"
          ></v-select>
        </v-col>
      </v-row>
      <apexchart type="radialBar" height="400" :options="chartOptions" :series="[value]"></apexchart>
    </v-card>
  </v-container>
</template>

<script>
import VueApexCharts from 'vue-apexcharts';

export default {
  props: {
    label: String,
    value: Number,
    color: String,
    loading: Boolean,
  },
  components: {
    apexchart: VueApexCharts,
  },
  data() {
    return {
      chartOptions: {
        chart: {
          height: 400,
          type: 'radialBar',
        },
        stroke: {
          lineCap: 'round'
        },
        plotOptions: {
          radialBar: {
            hollow: {
              size: '65%',
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
            track: {
              background: '#e7e7e7',
            },
          },
        },
        colors: [this.color],
      },
    };
  },
  watch: {
    color(newColor) {
      this.chartOptions.colors = [newColor];
    },
  },
};
</script>
