<template>
    <v-container fluid class="main-content">
      <v-row>
        <v-col md="7">
            <v-row>
              <v-col class="px-0" md="4">
                <PCStatCard label="Activity" :value="25" color="primary" :loading="loading" />
              </v-col>
              <v-col class="px-0" md="4">
                <PCStatCard label="Sleep" :value="79" color="success" :loading="loading" />
              </v-col>
              <v-col class="px-0" md="4">
                <PCStatCard label="Wellness" :value="52" color="warning" :loading="loading" />
              </v-col>
            </v-row>
            <PCHealthMonitoringChart :loading="loading" />
        </v-col>
        <v-col md="5">
          <PCVaccinationSchedule :loading="loading" />
          <PCChat :loading="loading" />
        </v-col>
      </v-row>
    </v-container>
</template>

<script>
import PCStatCard from '../components/PCStatCard.vue';
import PCHealthMonitoringChart from '../components/PCHealthMonitoringChart.vue';
import PCVaccinationSchedule from '../components/PCVaccinationSchedule.vue';
import PCChat from '../components/PCChat.vue';

export default {
  name: 'HomeView',
  components: {
    PCStatCard,
    PCHealthMonitoringChart,
    PCVaccinationSchedule,
    PCChat
  },
  data() {
    return {
      loading: true
    };
  },
  mounted() {
    this.$nextTick(() => {
      setTimeout(() => {
        this.loading = false;
        window.dispatchEvent(new Event('resize'));
      }, 1000);
    });
  }
}
</script>

<style scoped>
.main-content {
  padding: 16px;
  flex-grow: 1;
  background: #f9f9f9;
  min-height: 100vh; /* Asegura que el contenedor ocupe al menos la altura del viewport */
  display: flex;
  flex-direction: column;
}
</style>
