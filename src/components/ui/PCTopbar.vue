<template>
  <v-app-bar app color="white" elevation="3" class="top-bar">
    <v-container fluid class="top-bar">
      <v-row align="center" justify="space-between">
        <v-col cols="auto">
          <v-text-field
            solo
            flat
            hide-details
            placeholder="Search"
            prepend-inner-icon="mdi-magnify"
            class="search-field"
          ></v-text-field>
        </v-col>
        <v-col cols="auto" class="d-none d-lg-flex justify-center align-center">
          <v-btn icon color="primary" class="mr-4">
            <v-icon class="black-icon">mdi-information-outline</v-icon>
          </v-btn>
          <v-btn icon color="primary" class="mr-4">
            <v-icon class="black-icon">mdi-bell-outline</v-icon>
          </v-btn>
          <v-btn color="primary" class="ml-4">
            Add widget
          </v-btn>
        </v-col>
        <v-col cols="auto" class="d-lg-none d-flex justify-center align-center">
          <v-menu offset-y>
            <template v-slot:activator="{ attrs, on }">
              <v-btn
                icon
                border
                outlined
                color="primary"
                class="white--text"
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
      </v-row>
    </v-container>
    <br>
  </v-app-bar>
</template>

<script>
export default {
  name: 'PCTopbar',
  data() {
    return {
      menuItems: ['Information', 'Notifications', 'Add widget'],
    };
  },
};
</script>

<style scoped>
.top-bar {
  padding: 24px;
  border-bottom: 1px solid #DAE3F8;
  min-height: 100px;
}
.search-field {
  width: 500px;
  border: 1px solid #DAE3F8;
  border-radius: 4px;
}
.black-icon {
  color: black !important;
  opacity: 0.7;
}
</style>
