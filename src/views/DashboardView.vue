<template>
  <v-container fluid class="main-content">
    <v-row>
      <!-- Main Content Column -->
      <v-col md="7">
        <!-- Stat Cards -->
        <v-row>
          <v-col class="px-0 mr-0" md="4">
            <PCStatCard 
              label="ACTIVITY"
              color="#E53761"
              :loading="loading"
            />
          </v-col>
          <v-col class="px-0" md="4">
            <PCStatCard
              label="SLEEP"
              color="#27A468"
              :loading="loading"
            />
          </v-col>
          <v-col class="px-0" md="4">
            <PCStatCard
              label="WELNESS"
              class="f-5"
              color="#F2A735" 
              :loading="loading" 
            />
          </v-col>
        </v-row>
        <!-- Health Monitoring Chart -->
        <PCHealthMonitoringChart :loading="loading" />
      </v-col>
      <!-- Side Column -->
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
  name: 'DashboardView',
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
  background: #F2F5FA;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
}
</style>
