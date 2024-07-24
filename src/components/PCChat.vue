<template>
  
  <v-card class="pa-4">
    <v-card-title class="headline">Chat</v-card-title>
    <v-list>
      <v-list-item v-for="chat in chats" :key="chat.name">
        <v-badge :color="chat.color" class="mx-5 py-3" left dot></v-badge>
        <v-list-item-content>
          <v-list-item-title>{{ chat.name }}</v-list-item-title>
          <v-list-item-subtitle>{{ chat.message }}</v-list-item-subtitle>
        </v-list-item-content>
        <v-list-item-action>
          <span>{{ chat.time }}</span>
          <v-chip
            v-if="chat.unread"
            class="notification-chip ml-2"
            label
          >{{ chat.unread }}</v-chip>
        </v-list-item-action>
      </v-list-item>
    </v-list>
  </v-card>
</template>

<script>
export default {
  data() {
    return {
      chats: [
        { name: 'Helen Brooks', message: 'Luna has been scratching her ears a lot lately...', time: '15:56', color: 'green' },
        { name: 'Kathryn Murphy', message: 'The best way to treat an ear infection is to visit your local vet clinic...', time: 'Wed', color: 'red', unread: 2 },
        { name: 'James Grey', message: 'You should follow the instructions on the ear drops label, but usually y...', time: 'Tue', color: 'red' },
        { name: 'Jim Brown', message: 'Hi, I have a question about my cat.', time: 'Tue', color: 'red' }
      ]
    };
  }
};
</script>

<style scoped>
.v-card {
  margin: 16px;
  border-radius: 16px;
}
.v-list-item-title {
  font-weight: bold;
}
.v-list-item-subtitle {
  color: grey;
}
.notification-chip {
  background-color: #E53761 !important;
  color: white !important;
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
