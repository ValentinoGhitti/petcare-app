<template>
  <v-navigation-drawer permanent app class="sidebar">
    <!-- Header Section -->
    <v-list-item class="mb-5 px-6">
      <v-list-item-content>
        <v-row align="center" no-gutters>
          <v-col cols="auto">
            <v-icon class="text-h4 primary--text">mdi-cat</v-icon>
          </v-col>
          <v-col>
            <v-list-item-title class="text-h6 ml-2">Petcare.</v-list-item-title>
          </v-col>
        </v-row>
      </v-list-item-content>
    </v-list-item>

    <!-- Menu Section -->
    <v-list dense nav class="px-6">
      <v-subheader class="text-uppercase">Menu</v-subheader>
      <v-list-item
        v-for="(item, index) in menuItems"
        :key="item.title"
        link
        :class="{'primary-bg': index === 0}"
      >
        <v-row align="center" no-gutters>
          <v-col cols="auto">
            <v-icon class="primary-icon">{{ item.icon }}</v-icon>
          </v-col>
          <v-col>
            <v-list-item-title class="ml-2">{{ item.title }}</v-list-item-title>
          </v-col>
        </v-row>
      </v-list-item>
      <v-divider class="small-divider mt-5 custom-divider"></v-divider>
    </v-list>

    <!-- Analytics Section -->
    <v-list dense nav class="px-6">
      <v-subheader class="text-uppercase">Analytics</v-subheader>
      <v-list-item v-for="item in analyticsItems" :key="item.title" link>
        <v-row align="center" no-gutters>
          <v-col cols="auto">
            <v-icon>{{ item.icon }}</v-icon>
          </v-col>
          <v-col>
            <v-list-item-title class="ml-2">{{ item.title }}</v-list-item-title>
          </v-col>
        </v-row>
      </v-list-item>
      <v-divider class="small-divider mt-5 custom-divider"></v-divider>
    </v-list>

    <!-- Schedule Section -->
    <v-list dense nav class="px-6">
      <v-subheader class="text-uppercase">Schedule</v-subheader>
      <v-list-item v-for="item in scheduleItems" :key="item.title" link>
        <v-row align="center" no-gutters>
          <v-col cols="auto">
            <v-icon>{{ item.icon }}</v-icon>
          </v-col>
          <v-col>
            <v-list-item-title class="ml-2">{{ item.title }}</v-list-item-title>
          </v-col>
          <v-col v-if="item.title === 'Appointments'" cols="auto">
            <v-chip class="notification-chip ml-2" label>2</v-chip>
          </v-col>
        </v-row>
      </v-list-item>
      <v-divider class="small-divider mt-5 custom-divider"></v-divider>
    </v-list>

    <!-- Help Section -->
    <v-list dense nav class="px-6">
      <v-subheader class="text-uppercase">Help</v-subheader>
      <v-list-item v-for="item in helpItems" :key="item.title" link>
        <v-row align="center" no-gutters>
          <v-col cols="auto">
            <v-icon>{{ item.icon }}</v-icon>
          </v-col>
          <v-col>
            <v-list-item-title class="ml-2">{{ item.title }}</v-list-item-title>
          </v-col>
        </v-row>
      </v-list-item>
    </v-list>

    <!-- Logout Section -->
    <v-list dense nav class="mt-15 px-6">
      <v-list-item link @click="handleLogout">
        <v-row align="center" no-gutters>
          <v-col cols="auto">
            <v-icon class="red--text">mdi-logout</v-icon>
          </v-col>
          <v-col>
            <v-list-item-title class="ml-2 red--text">Log out</v-list-item-title>
          </v-col>
        </v-row>
      </v-list-item>
    </v-list>
  </v-navigation-drawer>
</template>

<script>
import { mapActions } from 'vuex';

export default {
  name: 'PCSidebar',
  data() {
    return {
      menuItems: [
        { title: 'Dashboard', icon: 'mdi-view-dashboard' },
        { title: 'Pet profile', icon: 'mdi-paw-outline' },
      ],
      analyticsItems: [
        { title: 'Health monitoring', icon: 'mdi-heart-box-outline' },
        { title: 'Vaccination schedule', icon: 'mdi-needle' },
      ],
      scheduleItems: [
        { title: 'Chat', icon: 'mdi-message-text' },
        { title: 'Appointments', icon: 'mdi-calendar-text-outline' },
      ],
      helpItems: [
        { title: 'Settings', icon: 'mdi-cog' },
        { title: 'Documentation', icon: 'mdi-file-document-outline' },
      ],
    };
  },
  methods: {
    ...mapActions('auth', ['logout']),
    async handleLogout() {
      await this.logout();
      localStorage.removeItem('authToken');
      this.$router.push({ name: 'login' });
    }
  }
};
</script>

<style scoped>
.sidebar {
  height: 100vh;
  border-right: 1px solid #DAE3F8;
  background-color: #FEFEFE;
}

.custom-divider {
  border-color: #DAE3F8 !important;
  border: 1px solid;
}

.v-list-item-title .v-subheader {
  color: #0B1C33;
}

.notification-chip {
  background-color: #E53761 !important;
  color: #FEFEFE !important;
  border-radius: 16px;
  font-size: 12px;
  height: 20px;
  min-width: 20px;
  padding: 0 6px;
  display: flex;
  align-items: center;
  justify-content: center;
}

.primary-bg {
  background-color: #3788E5 !important;
  color: #FEFEFE !important;
  border-radius: 11px;
}

.primary-bg .primary-icon {
  color: #FEFEFE !important;
}
</style>
