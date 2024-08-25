<template>
  <v-app-bar app elevation="3" class="top-bar">
    <!-- Search Field -->
    <v-col cols="col-6">
      <v-text-field
        solo
        flat
        hide-details
        placeholder="Search"
        class="search-field"
      >
        <template v-slot:prepend-inner>
          <IconSearch />
        </template>
      </v-text-field>
    </v-col>

    <!-- Desktop Actions -->
    <v-col cols="col-3" class="d-none d-lg-flex justify-end align-center">
      <v-btn icon color="primary" class="mr-4">
        <IconHelp />
      </v-btn>
      <v-btn icon color="primary" class="mr-4">
        <IconNotification />
      </v-btn>
      <v-btn class="ml-4 custom-btn">
        Add widget
      </v-btn>
    </v-col>

    <!-- Mobile Menu -->
    <v-col cols="col-3" class="d-lg-none d-flex justify-center align-center">
      <v-menu offset-y>
        <template v-slot:activator="{ attrs, on }">
          <v-btn
            icon
            border
            outlined
            v-bind="attrs"
            v-on="on"
            rounded
          >
            <v-icon class="black-icon">mdi-dots-vertical</v-icon>
          </v-btn>
        </template>
        <v-list>
          <v-list-item v-for="item in menuItems" :key="item" link>
            <v-list-item-title v-text="item"></v-list-item-title>
          </v-list-item>
        </v-list>
      </v-menu>
    </v-col>
  </v-app-bar>
</template>

<script>
import {
  IconHelp,
  IconNotification,
  IconSearch
} from '../../assets/icons/index';

export default {
  name: 'PCTopbar',
  components: {
    IconHelp,
    IconNotification,
    IconSearch
  },
  data() {
    return {
      menuItems: ['Information', 'Notifications', 'Add widget'],
    };
  },
};
</script>

<style scoped>
.top-bar {
  background-color: #FEFEFE !important;
  border-left: 1px solid #FEFEFE !important;
  border-right: 1px solid #FEFEFE !important;
  border-bottom: 2px solid #DAE3F8 !important;
  border-top: #DAE3F8 1px solid;
  padding-top: 10px;
  padding-bottom: 90px;
  box-shadow: none !important;
}

.custom-btn {
  background-color: #3788E5 !important;
  color: #FEFEFE;
  box-shadow: none;
  text-transform: none !important;
}

.search-field {
  width: 600px;
  border: 1px solid #DAE3F8;
  border-radius: 10px !important;
}

.black-icon {
  color: black !important;
  opacity: 0.7;
}
</style>
