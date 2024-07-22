<template>
  <v-app class="d-flex flex-row">
    <PCSidebar></PCSidebar>
    <PCTopbar></PCTopbar>
    <v-app>
      <router-view />
    </v-app>
  </v-app>
</template>

<script>
import PCSidebar from '../src/components/ui/PCSidebar.vue'
import PCTopbar from '../src/components/ui/PCTopbar.vue'

export default {
  name: 'App',
  components: {
    PCSidebar,
    PCTopbar,
  },
};
</script>
<style scoped>
.v-app {
  display: flex;
  flex-direction: row;
}

.main-content {
  padding: 16px;
  flex-grow: 1;
  background: #f9f9f9;
  height: calc(100vh - 67.5px);
}
</style>
