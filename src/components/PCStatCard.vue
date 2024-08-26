<template>
  <div>
    <!-- Loading Skeleton Loader -->
    <v-skeleton-loader
      v-if="loading"
      :loading="loading"
      type="card"
      class="my-8"
    ></v-skeleton-loader>

    <!-- Main Content -->
    <v-card class="mt-8 px-0 mx-0 mb-5 custom-card" v-else>
      <v-row>
        <v-col col="1" class="d-flex align-center">
          <span class="custom-span ml-7 mt-4">{{ label }}</span>
        </v-col>
        <v-col col="5" md="5" xl="5" class="mr-7 mt-2 mr-sm-1 mr-xl-7 mr-xs-1">
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
        width="400"
        class="chart"
        :options="chartOptions"
        :series="[currentValue]"
      ></apexchart>
    </v-card>
  </div>
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
          height: 700,
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
              name: { show: false },
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
    ...mapGetters('dashboard', ['currentChartDataStat']),
    currentValue() {
      const value = this.currentChartDataStat(this.label, this.selectedPeriod);
      return value || this.value;
    }
  },
  methods: {
    ...mapActions('dashboard', ['updateChartStat']),
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
  border: #DAE3F8 1px solid;
  box-shadow: none !important;
}

.container {
  padding: 0px !important;
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

span {
  opacity: 70% !important;
  font-weight: 500;
}

.chart {
  position: absolute;
  left: -65px;
  top: 50px;
}

.custom-card {
  width: 277.33px;
  height: 330px;
  gap: 0px;
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

.custom-span {
  font-size: 15px;
}

.v-text-field--outlined >>> fieldset {
  border: 1px solid #DAE3F8;
  border-radius: 9px !important;
}

.v-text-field--outlined >>> .v-icon {
  color: #3788E5 !important;
}

.theme--light.v-card {
  color: #0B1C33 !important;
}
</style>
