<template>
  <v-app-bar app elevation="3" class="top-bar">
    <!-- Search Field -->
    <v-col cols="col-8">
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
    <v-col cols="col-2" class="d-none d-lg-flex justify-end align-center">
      <v-btn icon color="primary" class="mr-3">
        <IconHelp />
      </v-btn>
      <v-btn icon color="primary" class="mr-3">
        <IconNotification />
      </v-btn>
      <a class="ml-4 custom-btn">
        Add widget
      </a>
    </v-col>

    <!-- Mobile Menu -->
    <v-col cols="col-2" class="d-lg-none d-flex justify-center align-center">
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
  padding-top: 14px;
  padding-bottom: 79px;
  box-shadow: none !important;
}

.custom-btn {
  background-color: #3788E5 !important;
  color: #FEFEFE !important;
  padding: 10px 15px;
  border-radius: 10px;
  box-shadow: none;
  margin-right: 20px;
  text-transform: none !important;
  font-size: 1rem;
  font-weight: 500;
  box-sizing: border-box;
}

.search-field {
  width: 895px;
  border: 1px solid #DAE3F8;
  border-radius: 10px !important;
}

.theme--light.v-input >>> input,
.theme--light.v-input >>> textarea {
  font-size: 15px;
  font-weight: 600;
  margin-left: 15px;
  margin-top: 3px;
}

.theme--light.v-input >>> input::placeholder,
.theme--light.v-input >>> textarea::placeholder {
  color: #0B1C33 !important;
  opacity: 70%;
}

.black-icon {
  color: black !important;
  opacity: 0.7;
}
</style>
