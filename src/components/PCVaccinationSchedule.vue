<template>
  <v-container>
    <v-skeleton-loader
      v-if="loading"
      :loading="loading"
      type="table"
      height="450px"
      class="mt-9"
    ></v-skeleton-loader>
    <v-card v-else height="420px" class="pa-4 mt-8">
      <v-row class="d-flex justify-center">
        <v-col lg="7" class="d-flex align-center mb-6">
          <span class="text-gray">VACCINATION SCHEDULE</span>
        </v-col>
        <v-col lg="5" class="d-flex">
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
                  label
                  :class="['chip-fixed-size', getStatusClass(item.type)]"
                  text-color="dark"
                >{{ item.type }}</v-chip>
              </td>
              <td>{{ item.date }}</td>
              <td>
                <v-chip
                  label
                  :color="item.veterinarian === 'Find veterinarian' ? 'blue' : 'transparent'"
                  :text-color="item.veterinarian === 'Find veterinarian' ? 'white' : 'black'"
                  class="chip-fixed-size pl-1"
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
.v-card .v-sheet {
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
  border-radius: 12px;
}

.v-text-field--outlined fieldset  {
  border: 1px solid #DAE3F8 !important;
  border-radius: 4px;
}

.chip-overdue {
  background-color: #F7C1CE !important;
  color: #D03258 !important;
}

.chip-noncore {
  background-color: #F7E1C1 !important;
  color: #F2A735 !important;
}

.chip-core {
  background-color: #BDE8D3 !important;
  color: #27A468 !important;
}

</style>
