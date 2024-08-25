<template>
  <v-app class=" d-flex flex-row">
    <PCSidebar v-if="!shouldHideSidebarAndTopbar"></PCSidebar>
    <div class="flex-grow-1 d-flex flex-column">
      <PCTopbar v-if="!shouldHideSidebarAndTopbar"></PCTopbar>
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
    shouldHideSidebarAndTopbar() {
      return this.$route.meta.hideSidebarAndTopbar;
    }
  }
};
</script>

<style>
body {
  font-family: "Bungee Tint", sans-serif;

}

h1, 
h2, 
h3, 
h4, 
h5, 
h6, 
span,
tspan,
p, 
small, 
li, 
div, 
a,
v-list-item-title {
  font-family: "Rethink Sans", sans-serif !important;
  font-optical-sizing: auto;
  font-style: normal;
  color: #0B1C33 !important;
}

.v-app {
  display: flex;
  flex-direction: row;
  height: 100vh;
  overflow: hidden;
}

.v-main {
  flex-grow: 1;
  display: flex;
  flex-direction: column;
  overflow-y: auto;
  -ms-overflow-style: none;
  scrollbar-width: none;
}

.v-main::-webkit-scrollbar {
  display: none;
}
</style>