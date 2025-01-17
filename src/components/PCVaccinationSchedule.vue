<template>
  <div>
    <!-- Loading Skeleton Loader -->
    <v-skeleton-loader
      v-if="loading"
      :loading="loading"
      type="table"
      height="450px"
      class="mt-9"
    ></v-skeleton-loader>

    <!-- Main Content -->
    <v-card v-else class="custom-card pa-6 mt-8">
      <v-row class="">
        <!-- Title and Search Controls -->
        <v-col cols="8" class="d-flex align-center pt-0">
          <span class="custom-span">VACCINATION SCHEDULE</span>
        </v-col>
        <v-col cols="4" class="d-flex align-center">
          <IconSearch class="ml-7 mb-4" />
          <v-col class="custom-align-center mb-5" cols="9">
            <v-select
              dense
              :items="['All', 'Overdue', 'Core', 'Noncore']"
              outlined
              class="custom-select "
              v-model="selectedType"
              @change="updateSelectedType"
            ></v-select>
          </v-col>
        </v-col>
      </v-row>
      <!-- Data Table -->
      <v-data-table
        :headers="headers"
        :items="filteredVaccinations"
        hide-default-footer
        class="custom-data-table"
      >
        <template v-slot:body="{ items }">
          <tbody>
            <tr height="77px" v-for="item in items" :key="item.name">
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
                <v-menu
                  v-model="item.menu"
                  offset-y
                  transition="scale-transition"
                >
                  <template v-slot:activator="{ on, attrs }">
                    <v-btn
                      v-bind="attrs"
                      v-on="on"
                      class="my-custom-btn"
                      :class="{ 'btn-active': item.veterinarian }"
                      @click="toggleMenu(item.name)"
                    >
                      {{ item.veterinarian || 'Find veterinar' }}
                    </v-btn>
                  </template>
                  <v-list>
                    <v-list-item
                      v-for="vet in veterinarians"
                      :key="vet.name"
                      :disabled="isVeterinarianAssigned(vet.name)"
                      @click="updateVaccinationVeterinarian({ vaccinationName: item.name, veterinarianName: vet.name })"
                    >
                      {{ vet.name }}
                    </v-list-item>
                  </v-list>
                </v-menu>
              </td>
            </tr>
          </tbody>
        </template>
      </v-data-table>
    </v-card>
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex';
import { IconSearch } from '../assets/icons/index';

export default {
  components: {
    IconSearch
  },
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
      ]
    };
  },

  computed: {
    ...mapGetters('dashboard', ['filteredVaccinations', 'veterinarians', 'getAssignedVeterinarians']),
    selectedType: {
      get() {
        return this.$store.state.dashboard.selectedType;
      },
      set(value) {
        this.updateSelectedType(value);
      }
    },
    filteredVaccinations() {
      let vaccinations = this.$store.getters['dashboard/filteredVaccinations'];
      if (this.searchQuery) {
        vaccinations = vaccinations.filter(vaccination =>
          vaccination.name.toLowerCase().includes(this.searchQuery.toLowerCase())
        );
      }
      return vaccinations;
    }
  },

  methods: {
    ...mapActions('dashboard', ['setSelectedType']),
    
    updateSelectedType(type) {
      this.setSelectedType(type);
    },

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
    },

    isVeterinarianAssigned(veterinarianName) {
      return this.getAssignedVeterinarians.includes(veterinarianName);
    },

    toggleMenu(itemName) {
      const item = this.filteredVaccinations.find(v => v.name === itemName);
      if (item) {
        item.menu = !item.menu;
      }
    },

    updateVaccinationVeterinarian({ vaccinationName, veterinarianName }) {
      const vaccination = this.filteredVaccinations.find(v => v.name === vaccinationName);
      if (vaccination) {
        vaccination.veterinarian = veterinarianName;
        vaccination.menu = false;
      }
    }
  }
};
</script>

<style scoped>
.v-card {
  border-radius: 16px;
  border: #DAE3F8 1px solid;
  box-shadow: none !important;
}

.v-data-table >>> thead > tr > th > span {
  font-size: 14px;
  color: #0B1C33 !important;
  opacity: 70%;
}

.v-data-table >>> thead > tr > th {
  height: 70px !important;
  line-height: 70px !important;
}

.v-select.v-input--dense >>> .v-select__selection--comma {
  margin: 0;
}

.theme--light.v-select >>> .v-select__selections {
  color: #0B1C33 !important;
  font-size: 14px;
  font-weight: 550;
}

.custom-span {
  opacity: 70% !important;
  font-weight: 500;
  color: #0B1C33 !important;
}

.custom-select {
  font-size: 0.75rem;
  font-weight: bold;
  height: 40px;
  width: 100%;
  line-height: 0.5rem;
  overflow: hidden;
  margin-top: 0.4rem;
}

.custom-card {
  height: 510px !important;
  gap: 0px;
  opacity: 0px;
  position: relative;
}

tr {
  border-radius: 16px;
}

/* Estilos para Chips */
.theme--light .v-chip.chip-overdue {
  background-color: #FCEBEF;
  color: #D03258;
  border: 1px solid #F7C1CE;
  border-radius: 8px !important;
}

.theme--light .v-chip.chip-noncore {
  background-color: #FCF5EB;
  color: #F2A735;
  border: 1px solid #F7E1C1;
  border-radius: 8px !important;
}

.theme--light .v-chip.chip-core {
  background-color: #EAF8F1;
  border: 1px solid #BDE8D3;
  color: #27A468;
  width: 75px;
  text-align: center;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 8px !important;
}

.theme--light .v-chip.chip-default {
  background-color: #E0E0E0;
  color: #757575;
}

.custom-data-table {
  background-color: #F2F5FA;
  border: 1px solid #DAE3F8;
  border-radius: 16px 16px 0px 0px !important;
  height: 382px !important;
  color: white;
  font-weight: bold;
}

tbody {
  background-color: #FEFEFE;
  color: #0B1C33;
  font-weight: 400;
  border: 1px solid #DAE3F8;
}

.theme--light.v-data-table > .v-data-table__wrapper > table > tbody > tr:not(:last-child) > td:not(.v-data-table__mobile-row),
.theme--light.v-data-table > .v-data-table__wrapper > table > tbody > tr:not(:last-child) > th:not(.v-data-table__mobile-row) {
  border-bottom: 1px solid #DAE3F8;
  border-top: 1px solid #DAE3F8;
}

.v-list-item {
  cursor: pointer;
}

.v-list-item:hover {
  background-color: #f0f0f0;
}

.v-list-item[disabled] {
  color: #ccc;
  pointer-events: none;
}

.search-field {
  margin-right: 10px;
}

.custom-align-center {
  display: flex;
}

.v-icon {
  color: #000;
}

.v-icon:hover {
  background: none;
  color: #3788E5;
}

.v-icon::after {
  background-color: transparent;
  opacity: 0;
}

.theme--light .my-custom-btn.v-btn.v-btn--has-bg {
  background-color: #3788E5;
}

.my-custom-btn {
  text-transform: none;
  background-color: #3788E5; 
  color: #FEFEFE;
  width: 124px;
  border-radius: 8px;
  height: 38;
  font-weight: 500;
  font-size: 0.9rem;
  line-height: 22.4px;
  box-shadow: none;
}

.my-custom-btn.btn-active {
  background-color: #FEFEFE !important;
  border-radius: 8px;
  font-size: 0.8rem;
  line-height: 22.4px;
  font-weight: 500;
  color: #0B1C33;
  box-shadow: none;
  border: 1px solid #DAE3F8;
}

/* Select */
.v-text-field--outlined >>> fieldset {
  border: 1px solid #DAE3F8;
  border-radius: 9px !important;
}

.v-text-field--outlined >>> .v-icon {
  color: #3788E5 !important;
}

.v-text-field >>> .v-input__slot::before { 
  border: 1px solid #DAE3F8 !important;
}

.v-text-field >>> .v-input__slot::after { 
  border-color: #DAE3F8 !important; 
}

</style>
