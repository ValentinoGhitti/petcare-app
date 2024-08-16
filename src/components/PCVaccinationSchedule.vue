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
        <v-col lg="5" class="d-flex align-center mb-6">
          <span class="text-gray">VACCINATION SCHEDULE</span>
        </v-col>
        <v-col lg="7" class="d-flex align-center">
          <v-col class="d-flex align-center">
            <v-text-field
              v-if="searchVisible"
              v-model="searchQuery"
              label="Search"
              dense
              hide-details
              class="custom-align-center test "
            ></v-text-field>
          </v-col>
          <v-icon class="custom-align-center" left @click="toggleSearch">
            mdi-magnify
          </v-icon>
          <v-col>
            <v-select
              dense
              label="By type"
              :items="['All', 'Overdue', 'Core', 'Noncore']"
              outlined
              v-model="selectedType"
              @change="updateSelectedType"
            ></v-select>
          </v-col>
        </v-col>
      </v-row>
      <v-data-table
        :headers="headers"
        :items="filteredVaccinations"
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
                <v-menu
                  v-model="item.menu"
                  offset-y
                  transition="scale-transition"
                >
                  <template v-slot:activator="{ on, attrs }">
                    <v-btn
                      v-bind="attrs"
                      v-on="on"
                      class="a"
                      :class="{ 'btn-active': item.veterinarian }"
                      @click="toggleMenu(item.name)"
                    >
                      {{ item.veterinarian || 'Select Veterinarian' }}
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
  </v-container>
</template>

<script>
import { mapActions, mapGetters } from 'vuex';

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
      searchVisible: false,
      searchQuery: ''
    };
  },

  computed: {
    ...mapGetters('petcare', ['filteredVaccinations', 'veterinarians', 'getAssignedVeterinarians']),
    selectedType: {
      get() {
        return this.$store.state.petcare.selectedType;
      },
      set(value) {
        this.updateSelectedType(value);
      }
    },
    filteredVaccinations() {
      let vaccinations = this.$store.getters['petcare/filteredVaccinations'];
      if (this.searchQuery) {
        vaccinations = vaccinations.filter(vaccination =>
          vaccination.name.toLowerCase().includes(this.searchQuery.toLowerCase())
        );
      }
      return vaccinations;
    }
  },

  methods: {
    ...mapActions('petcare', ['setSelectedType']),
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
    toggleSearch() {
      this.searchVisible = !this.searchVisible;
      if (!this.searchVisible) {
        this.searchQuery = '';
      }
    }
  }
};
</script>

<style>
.chip-overdue {
  background-color: #FFCDD2;
  color: #C62828;
}

.chip-noncore {
  background-color: #C5E1A5;
  color: #2E7D32;
}

.chip-core {
  background-color: #BBDEFB;
  color: #1565C0;
}

.chip-default {
  background-color: #E0E0E0;
  color: #757575;
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

</style>
