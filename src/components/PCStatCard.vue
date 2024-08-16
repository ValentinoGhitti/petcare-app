<template>
  <v-container fluid>
    <v-skeleton-loader
      v-if="loading"
      :loading="loading"
      type="card"
      class="my-8"
    ></v-skeleton-loader>
    <v-card class="mt-11 mx-0 mb-5 test" v-else>
      <v-row>
        <v-col col="1" class="d-flex align-center">
          <v-card-text>{{ label }}</v-card-text>
        </v-col>
        <v-col col="5" md="5" xl="5" class="mr-5 mr-sm-1 mr-xl-5 mr-xs-1"> 
          <v-select
            dense
            hide-details
            :items="['Daily', 'Weekly', 'Monthly']"
            outlined
            class="mr-5 custom-select"
            v-model="selectedPeriod"
            @change="updateChartStat"
          ></v-select>
        </v-col>
      </v-row>
      <apexchart 
        type="radialBar" 
        height="400"
        :options="chartOptions" 
        :series="[currentValue]"
      ></apexchart>
    </v-card>
  </v-container>
</template>

<script>
import VueApexCharts from 'vue-apexcharts';
import { mapGetters, mapActions } from 'vuex';

export default {
  props: {
    label: String,
    value: {
      type: Number,
      default: 30
    },
    color: String,
    loading: Boolean,
  },
  components: {
    apexchart: VueApexCharts,
  },
  data() {
    return {
      selectedPeriod: 'Daily',
      lastUpdate: null,
      chartOptions: {
        chart: {
          height: 400,
          type: 'radialBar',
        },
        stroke: {
          lineCap: 'round',
          width: 10
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
                fontSize: '36px',
                fontWeight: 'bold'
              },
              total: {
                show: true,
                label: 'Total',
                fontSize: '20px',
                fontWeight: 'bold'
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
  computed: {
    ...mapGetters('petcare', ['currentChartDataStat']),
    currentValue() {
      const value = this.currentChartDataStat(this.label, this.selectedPeriod);
      return value || this.value;
    }
  },
  methods: {
    ...mapActions('petcare', ['updateChartStat']),
    updateChartStat() {
      const updatePayload = {
        label: this.label,
        value: this.currentValue,
        period: this.selectedPeriod
      };

      if (JSON.stringify(updatePayload) !== JSON.stringify(this.lastUpdate)) {
        this.lastUpdate = updatePayload;
        this.updateChartStat(updatePayload);
      }
    }
  },
  watch: {
    color(newColor) {
      this.chartOptions.colors = [newColor];
    },
  },
};
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
.v-text-field--outlined >>> fieldset {
  border: 2px solid #DAE3F8;
  border-radius: 9px !important;
}
.v-text-field--outlined >>> .v-icon {
  color: #3788E5 !important;
}
.theme--light.v-card{
  color: #0B1C33 !important;
}
</style>