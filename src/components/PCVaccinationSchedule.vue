<template>
  <v-card class="pa-4">
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
          <tr v-for="item in items" :key="item.name">
            <td>{{ item.name }}</td>
            <td>{{ item.type }}</td>
            <td>{{ item.date }}</td>
            <td>{{ item.veterinarian }}</td>
          </tr>
        </tbody>
      </template>
    </v-data-table>
  </v-card>
</template>

<script>
export default {
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
        { name: 'Distemper', type: 'Core', date: '27 Jan 2026', veterinarian: 'Jim Brown' },
        { name: 'Calicivirus', type: 'Core', date: '18 Sep 2026', veterinarian: 'Helen Brooks' }
      ]
    };
  },
  methods: {
    getStatusColor(status) {
      switch (status) {
        case 'Overdue':
          return 'red';
        case 'Noncore':
          return 'yellow';
        case 'Core':
          return 'green';
        default:
          return 'grey';
      }
    }
  }
};
</script>

<style>
.v-card {
  margin: 16px;
  border-radius: 16px;
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
</style>
