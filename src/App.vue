<template>
  <v-app class="d-flex flex-row">
    <PCSidebar v-if="!isLoginPage"></PCSidebar>
    <div class="flex-grow-1 d-flex flex-column">
      <PCTopbar v-if="!isLoginPage"></PCTopbar>
      <v-main>
        <router-view />
      </v-main>
    </div>
  </v-app>
</template>

<script>
import PCSidebar from '../src/components/ui/PCSidebar.vue';
import PCTopbar from '../src/components/ui/PCTopbar.vue';

export default {
  name: 'App',
  components: {
    PCSidebar,
    PCTopbar,
  },
  computed: {
    isLoginPage() {
      return this.$route.path === '/login';
    }
  }
};
</script>

<style scoped>
.v-app {
  display: flex;
  flex-direction: row;
  height: 100vh;
}

.v-main {
  flex-grow: 1;
  display: flex;
  flex-direction: column;
}
</style>
