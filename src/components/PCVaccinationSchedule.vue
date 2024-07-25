<template>
  <v-container>
    <v-skeleton-loader
      v-if="loading"
      :loading="loading"
      type="table"
      height="450px"
    ></v-skeleton-loader>
    <v-card v-else height="409px" class="pa-4 mt-8">
      <v-row class="d-flex justify-center">
        <v-col lg="5" class="d-flex align-center mb-6">
          <span>ACTIVITY</span>
        </v-col>
        <v-col lg="7" class="d-flex">
          <v-col>
            <v-icon left>
              mdi-magnify
            </v-icon>
          </v-col>

          <v-select
            dense
            label="By type"
            :items="['Daily', 'Weekly', 'Monthly']"
            outlined
          ></v-select>
        </v-col>
      </v-row>
      <v-data-table
        :headers="headers"
        :items="vaccinations"
        hide-default-footer
        class="custom-data-table"
      >
        <template v-slot:body="{ items }">
          <tbody>
            <tr height="65px" v-for="item in items" :key="item.name">
              <td>{{ item.name }}</td>
              <td>
                <v-chip
                  :class="['chip-fixed-size', getStatusClass(item.type)]"
                  text-color="dark"
                >{{ item.type }}</v-chip>
              </td>
              <td>{{ item.date }}</td>
              <td>
                <v-chip
                  :color="item.veterinarian === 'Find veterinarian' ? 'primary' : 'white'"
                  :text-color="item.veterinarian === 'Find veterinarian' ? 'white' : 'black'"
                  outlined
                  class="chip-fixed-size"
                >{{ item.veterinarian }}</v-chip>
              </td>
            </tr>
          </tbody>
        </template>
      </v-data-table>
    </v-card>
  </v-container>
</template>

<script>
export default {
  props: {
    loading: Boolean
  },
  data() {
    return {
      headers: [
        { text: 'Name', value: 'name' },
        { text: 'Type', value: 'type' },
        { text: 'Date', value: 'date' },
        { text: 'Veterinarian', value: 'veterinarian' }
      ],
      vaccinations: [
        { name: 'Rabies', type: 'Overdue', date: '01 Dec 2023', veterinarian: 'Find veterinarian' },
        { name: 'Bordetella', type: 'Noncore', date: '11 Dec 2024', veterinarian: 'James Grey' },
        { name: 'Distemper', type: 'Core', date: '27 Jun 2024', veterinarian: 'Jim Brown' },
        { name: 'Calicivirus', type: 'Core', date: '16 Sep 2024', veterinarian: 'Helen Brooks' }
      ]
    };
  },
  methods: {
    getStatusClass(status) {
      switch (status) {
        case 'Overdue':
          return 'chip-overdue';
        case 'Noncore':
          return 'chip-noncore';
        case 'Core':
          return 'chip-core';
        default:
          return 'chip-default';
      }
    }
  }
};
</script>

<style>
.v-card {
  margin: 16px;
  border-radius: 16px;
  padding-bottom: 0px ;
}

td {
  padding: 10px;
}

.custom-data-table .v-data-table-header {
  background-color: #DAE3F8 !important;
  border: 1px solid #DAE3F8 !important;
}

.custom-data-table .v-data-table-header th {
  color: #333;
  border: 1px solid #DAE3F8 !important;
}

.custom-data-table .v-data-table-header th,
.custom-data-table .v-data-table-header td {
  background-color: #DAE3F8 !important;
  border: 1px solid #DAE3F8 !important;
}

.custom-data-table {
  border: 1px solid #DAE3F8 !important;
}

.chip-fixed-size {
  height: 24px;
  width: 90px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 14px;
}

.chip-overdue {
  background-color: #F44336 !important;
  color: white !important;
}

.chip-noncore {
  background-color: #FFEB3B !important;
  color: black !important;
}

.chip-core {
  background-color: #4CAF50 !important;
  color: white !important;
}

.chip-default {
  background-color: #E0E0E0 !important;
  color: black !important;
}
</style>
