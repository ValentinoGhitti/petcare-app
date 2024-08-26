<template>
  <v-navigation-drawer permanent app class="sidebar" :width="288">
    <!-- Header Section -->
    <v-list-item class="mb-5 px-8">
      <v-list-item-content>
        <v-row align="center" class="mt-5" no-gutters>
          <v-col class="ml-6" cols="auto">
            <IconCat />
          </v-col>
          <v-col class="ml-3">
            <svg width="76" height="16" viewBox="0 0 76 16" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M0.380005 15V1.00001H5.28001C6.26671 1.00001 7.12 1.15331 7.84 1.46001C8.56 1.76671 9.12 2.22671 9.52 2.84001C9.9333 3.44001 10.14 4.18671 10.14 5.08001C10.14 5.97331 9.9333 6.72671 9.52 7.34001C9.1067 7.95331 8.53331 8.41331 7.80001 8.72001C7.08001 9.01331 6.24001 9.16001 5.28001 9.16001H2.50001V15H0.380005ZM2.50001 7.36001H5.24001C6.24001 7.36001 6.94671 7.16001 7.36001 6.76001C7.77331 6.34671 7.98001 5.78671 7.98001 5.08001C7.98001 4.36001 7.77331 3.80001 7.36001 3.40001C6.94671 2.98671 6.24001 2.78001 5.24001 2.78001H2.50001V7.36001ZM15.8728 15.24C14.8995 15.24 14.0395 15.02 13.2928 14.58C12.5461 14.14 11.9595 13.5267 11.5328 12.74C11.1195 11.9533 10.9128 11.0533 10.9128 10.04C10.9128 8.98671 11.1195 8.07331 11.5328 7.30001C11.9461 6.52671 12.5261 5.92671 13.2728 5.50001C14.0328 5.06001 14.9061 4.84001 15.8928 4.84001C16.8528 4.84001 17.6928 5.05331 18.413 5.48001C19.133 5.89331 19.693 6.46001 20.093 7.18001C20.506 7.90001 20.713 8.72001 20.713 9.64001C20.713 9.82671 20.706 9.98671 20.693 10.12C20.693 10.2533 20.679 10.4133 20.653 10.6H13.0328C13.0728 11.16 13.2128 11.66 13.4528 12.1C13.6928 12.5267 14.0195 12.8667 14.4328 13.12C14.8461 13.36 15.3195 13.48 15.8528 13.48C16.4261 13.48 16.9128 13.3533 17.3128 13.1C17.7261 12.8333 18.033 12.46 18.233 11.98H20.433C20.259 12.58 19.966 13.1267 19.553 13.62C19.153 14.1133 18.646 14.5067 18.033 14.8C17.4195 15.0933 16.6995 15.24 15.8728 15.24ZM13.0528 9.10001H18.553C18.526 8.32671 18.253 7.72001 17.7328 7.28001C17.2128 6.82671 16.5795 6.60001 15.8328 6.60001C15.1661 6.60001 14.5595 6.80671 14.0128 7.22001C13.4661 7.63331 13.1461 8.26001 13.0528 9.10001ZM26.15 15C25.163 15 24.403 14.76 23.87 14.28C23.337 13.8 23.07 13.0133 23.07 11.92V6.86001H21.57V5.08001H23.07V2.68001H25.19V5.08001H27.71V6.86001H25.19V11.92C25.19 12.4267 25.303 12.7667 25.53 12.94C25.757 13.1133 26.11 13.2 26.59 13.2H27.71V15H26.15ZM36.093 15.24C34.666 15.24 33.446 14.9267 32.433 14.3C31.433 13.66 30.666 12.8 30.133 11.72C29.613 10.6267 29.353 9.38671 29.353 8.00001C29.353 6.62671 29.613 5.39331 30.133 4.30001C30.653 3.20671 31.413 2.34671 32.413 1.72001C33.426 1.08001 34.653 0.76001 36.093 0.76001C37.733 0.76001 39.073 1.16001 40.113 1.96001C41.153 2.76001 41.813 3.88001 42.093 5.32001H39.753C39.553 4.50671 39.146 3.86001 38.533 3.38001C37.919 2.90001 37.099 2.66001 36.073 2.66001C35.099 2.66001 34.273 2.88671 33.593 3.34001C32.913 3.79331 32.399 4.42001 32.053 5.22001C31.706 6.02001 31.533 6.94671 31.533 8.00001C31.533 9.06671 31.706 10 32.053 10.8C32.413 11.6 32.933 12.2267 33.613 12.68C34.293 13.12 35.113 13.34 36.073 13.34C37.099 13.34 37.919 13.1133 38.533 12.66C39.146 12.1933 39.553 11.5667 39.753 10.78H42.093C41.813 12.18 41.153 13.2733 40.113 14.06C39.073 14.8467 37.733 15.24 36.093 15.24ZM47.129 15.24C46.489 15.24 45.902 15.1267 45.369 14.9C44.835 14.66 44.409 14.3133 44.089 13.86C43.769 13.4067 43.609 12.86 43.609 12.22C43.609 11.46 43.795 10.8533 44.169 10.4C44.555 9.93331 45.069 9.59331 45.709 9.38001C46.362 9.15331 47.075 9.04001 47.849 9.04001H50.369C50.369 8.46671 50.275 8.00671 50.089 7.66001C49.902 7.30001 49.649 7.04001 49.329 6.88001C49.009 6.70671 48.635 6.62001 48.209 6.62001C47.649 6.62001 47.155 6.75331 46.729 7.02001C46.315 7.27331 46.055 7.68001 45.949 8.24001H43.809C43.875 7.52001 44.115 6.90671 44.529 6.40001C44.955 5.89331 45.495 5.50671 46.149 5.24001C46.802 4.97331 47.495 4.84001 48.229 4.84001C49.189 4.84001 49.982 5.02001 50.609 5.38001C51.249 5.72671 51.722 6.21331 52.029 6.84001C52.349 7.46671 52.509 8.18001 52.509 8.98001V12.02C52.522 12.4067 52.602 12.6933 52.749 12.88C52.909 13.0533 53.189 13.1533 53.589 13.18V15C53.055 15 52.589 14.94 52.189 14.82C51.802 14.7 51.482 14.52 51.229 14.28C50.975 14.0267 50.775 13.7067 50.629 13.32C50.309 13.8533 49.842 14.3067 49.229 14.68C48.615 15.0533 47.915 15.24 47.129 15.24ZM47.629 13.5C48.175 13.5 48.655 13.3667 49.069 13.1C49.482 12.82 49.802 12.46 50.029 12.02C50.255 11.5667 50.369 11.08 50.369 10.56V10.52H48.009C47.622 10.52 47.255 10.5667 46.909 10.66C46.575 10.7533 46.302 10.9133 46.089 11.14C45.889 11.3533 45.789 11.6533 45.789 12.04C45.789 12.5467 45.969 12.92 46.329 13.16C46.689 13.3867 47.122 13.5 47.629 13.5ZM55.218 15V5.08001H57.258L57.318 6.76001C57.651 6.16001 58.105 5.69331 58.678 5.36001C59.265 5.01331 59.951 4.84001 60.738 4.84001V7.06001H60.158C59.211 7.06001 58.505 7.30671 58.038 7.80001C57.571 8.28001 57.338 9.02001 57.338 10.02V15H55.218ZM66.595 15.24C65.622 15.24 64.762 15.02 64.015 14.58C63.269 14.14 62.682 13.5267 62.255 12.74C61.842 11.9533 61.635 11.0533 61.635 10.04C61.635 8.98671 61.842 8.07331 62.255 7.30001C62.669 6.52671 63.249 5.92671 63.995 5.50001C64.755 5.06001 65.629 4.84001 66.615 4.84001C67.575 4.84001 68.415 5.05331 69.135 5.48001C69.855 5.89331 70.415 6.46001 70.815 7.18001C71.229 7.90001 71.435 8.72001 71.435 9.64001C71.435 9.82671 71.429 9.98671 71.415 10.12C71.415 10.2533 71.402 10.4133 71.375 10.6H63.755C63.795 11.16 63.935 11.66 64.175 12.1C64.415 12.5267 64.742 12.8667 65.155 13.12C65.569 13.36 66.042 13.48 66.575 13.48C67.149 13.48 67.635 13.3533 68.035 13.1C68.449 12.8333 68.755 12.46 68.955 11.98H71.155C70.982 12.58 70.689 13.1267 70.275 13.62C69.875 14.1133 69.369 14.5067 68.755 14.8C68.142 15.0933 67.422 15.24 66.595 15.24ZM63.775 9.10001H69.275C69.249 8.32671 68.975 7.72001 68.455 7.28001C67.935 6.82671 67.302 6.60001 66.555 6.60001C65.889 6.60001 65.282 6.80671 64.735 7.22001C64.189 7.63331 63.869 8.26001 63.775 9.10001ZM74.186 15.16C73.786 15.16 73.446 15.0267 73.166 14.76C72.9 14.48 72.766 14.1467 72.766 13.76C72.766 13.3733 72.9 13.0467 73.166 12.78C73.446 12.5 73.786 12.36 74.186 12.36C74.573 12.36 74.9 12.5 75.166 12.78C75.446 13.0467 75.586 13.3733 75.586 13.76C75.586 14.1467 75.446 14.48 75.166 14.76C74.9 15.0267 74.573 15.16 74.186 15.16Z" fill="#0B1C33"/>
            </svg>
          </v-col>
        </v-row>
      </v-list-item-content>
    </v-list-item>

    <!-- Menu Section -->
    <v-list dense nav class="px-7">
      <v-subheader class="text-uppercase ml-5 mb-2 custom-title font-weight-medium">Menu</v-subheader>
      <v-list-item 
        v-for="(item, index) in menuItems"
        :key="item.title"
        link
        :class="{'primary-bg': index === 0}"
      >
        <v-row align="center" no-gutters>
          <v-col cols="auto" class="ml-5 mt-2 py-1">
            <component
              :class="{ 'opacity-70': index === 1 }"
              :is="item.icon"
            />
          </v-col>
          <v-col>
            <v-list-item-title 
              class="ml-2 mt-1"
              :class="{ 'opacity-70': index === 1 }"
            >{{ item.title }}</v-list-item-title>
          </v-col>
        </v-row>
      </v-list-item>
      <v-divider class="small-divider mt-5 custom-divider"></v-divider>
    </v-list>

    <!-- Analytics Section -->
    <v-list dense nav class="px-7">
      <v-subheader class="text-uppercase ml-5 mb-2 custom-title font-weight-medium">Analytics</v-subheader>
      <v-list-item v-for="item in analyticsItems" :key="item.title" link>
        <v-row align="center" no-gutters>
          <v-col cols="auto" class="ml-5 mt-2 py-1">
            <component class="opacity-70" :is="item.icon"></component>
          </v-col>
          <v-col>
            <v-list-item-title
              class="ml-2 mt-1 opacity-70"
            >
              {{ item.title }}
            </v-list-item-title>
          </v-col>
        </v-row>
      </v-list-item>
      <v-divider class="small-divider mt-5 custom-divider"></v-divider>
    </v-list>

    <!-- Schedule Section -->
    <v-list dense nav class="px-7">
      <v-subheader class="text-uppercase ml-5 mb-2 custom-title font-weight-medium">Schedule</v-subheader>
      <v-list-item v-for="item in scheduleItems" :key="item.title" link>
        <v-row align="center" no-gutters>
          <v-col cols="auto" class="ml-5 mt-2 py-1">
            <component class="opacity-70" :is="item.icon"></component>
          </v-col>
          <v-col>
            <v-list-item-title class="ml-2 mt-1 opacity-70">{{ item.title }}</v-list-item-title>
          </v-col>

          <v-col v-if="item.title === 'Chat'">
            <v-container>
              <div class="row">
                <ul>
                  <li>
                    <a href="#" class="avatar" title="Steve Haunch">
                      <img src="../../../public/img/avatars/avatar-one.png" alt="Avatar Steve">
                    </a>
                  </li>
                  <li>
                    <a href="#" class="avatar" title="John Mackinnon">
                      <img src="../../../public/img/avatars/avatar-two.png" alt="Avatar John">
                    </a>
                  </li>
                  <li>
                    <a href="#" class="avatar" title="Caroline Ruse">
                      <img src="../../../public/img/avatars/avatar-three.png" alt="Avatar Caroline">
                    </a>
                  </li>
                </ul>
              </div>
            </v-container>
          </v-col>

          <v-col v-if="item.title === 'Appointments'" cols="auto">
            <v-chip class="notification-chip ml-2 notification-pop" label>2</v-chip>
          </v-col>
        </v-row>
      </v-list-item>
      <v-divider class="small-divider mt-5 custom-divider"></v-divider>
    </v-list>

    <!-- Help Section -->
    <v-list dense nav class="px-7">
      <v-subheader class="text-uppercase ml-5 mb-2 custom-title font-weight-medium">Help</v-subheader>
      <v-list-item v-for="item in helpItems" :key="item.title" link>
        <v-row align="center" no-gutters>
          <v-col cols="auto" class="ml-5 mt-2 py-1">
            <component class="opacity-70" :is="item.icon"></component>
          </v-col>
          <v-col>
            <v-list-item-title class="ml-2 mt-1 opacity-70">{{ item.title }}</v-list-item-title>
          </v-col>
        </v-row>
      </v-list-item>
    </v-list>

    <!-- Logout Section -->
    <template  v-slot:append>
      <v-list dense nav class="d-flex justify-center">
        <v-list-item link @click="handleLogout">
          <v-row align="center" class="ml-9 mb-8" no-gutters>
            <v-col cols="auto">
              <IconLogOut />
            </v-col>
            <v-col>
              <v-list-item-title class="ml-2 mb-2 red--text">Log out</v-list-item-title>
            </v-col>
          </v-row>
        </v-list-item>
      </v-list>
    </template>
  </v-navigation-drawer>
</template>

<script>
import { mapActions } from 'vuex';
import {
  IconCat,
  IconDashboard,
  IconPaw,
  IconHealth,
  IconVacc,
  IconChat,
  IconCalendar,
  IconSettings,
  IconDoc,
  IconLogOut
} from '@/assets/icons/index';

export default {
  name: 'PCSidebar',
  components: {
    IconCat,
    IconLogOut
  },
  data() {
    return {
      menuItems: [
        { title: 'Dashboard', icon: IconDashboard },
        { title: 'Pet profile', icon: IconPaw },
      ],
      analyticsItems: [
        { title: 'Health monitoring', icon: IconHealth },
        { title: 'Vaccination schedule', icon: IconVacc },
      ],
      scheduleItems: [
        { title: 'Chat', icon: IconChat },
        { title: 'Appointments', icon: IconCalendar },
      ],
      helpItems: [
        { title: 'Settings', icon: IconSettings },
        { title: 'Documentation', icon: IconDoc },
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
div {
  font-family: "Rethink Sans", sans-serif !important;
}

ul {
  display: inline-flex;
  flex-direction: row;
  list-style: none;
  padding: 0;
  margin: 0;
}

ul > li {
  width: 26px;
  height: 26px;
  position: relative;
  left: 32px;
  z-index: 2;
}

ul > li img {
  max-width: 100%;
  border-radius: 25%;
  border: 2px solid #FEFEFE;
}

ul > li:not(:first-child) {
  margin-left: -13px;
}

.opacity-70 {
  opacity: 70% !important;
}

.primary-bg  {
  color: #FEFEFE !important;
  background-color: #3788E5 !important;
  border-radius: 14px;
  opacity: 100% ;
}

.notification-pop {
  color: #FEFEFE !important;
}

.sidebar {
  height: 100vh;
  border-right: 1px solid #DAE3F8;
  background-color: #FEFEFE;
  display: flex;
  flex-direction: column;
}

.custom-divider {
  border: 1px solid #DAE3F8 !important;
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

</style>
