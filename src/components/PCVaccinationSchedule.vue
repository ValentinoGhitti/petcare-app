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
            :disabled="selectedType !== 'Overdue'"
            v-model="selectedType"
            @change="setSelectedType"
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
import { mapState, mapMutations, mapGetters } from 'vuex';

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
      ]
    };
  },
  computed: {
    ...mapState('petcare', ['vaccinations', 'veterinarians']),
    ...mapGetters('petcare', ['getSelectedType', 'getAssignedVeterinarians']),
    selectedType: {
      get() {
        return this.getSelectedType;
      },
      set(value) {
        this.setSelectedType(value);
      }
    }
  },
  methods: {
    ...mapMutations('petcare', ['setSelectedType', 'updateVaccinationVeterinarian', 'toggleMenu']),
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
    }
  }
};
</script>

<style>
.chip-overdue {
  background-color: #FFCDD2; /* Rojo claro */
  color: #C62828; /* Rojo oscuro */
}

.chip-noncore {
  background-color: #C5E1A5; /* Verde claro */
  color: #2E7D32; /* Verde oscuro */
}

.chip-core {
  background-color: #BBDEFB; /* Azul claro */
  color: #1565C0; /* Azul oscuro */
}

.chip-default {
  background-color: #E0E0E0; /* Gris */
  color: #757575; /* Gris oscuro */
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
