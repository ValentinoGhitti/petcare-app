<template>
  <div>
    <!-- Loading Skeleton Loader -->
    <v-skeleton-loader
      v-if="loading"
      :loading="loading"
      type="table-heading, list-item-avatar, list-item-avatar, list-item-avatar, list-item-avatar"
      class="my-4"
    ></v-skeleton-loader>

    <!-- Chat Content -->
    <v-card v-else class="pa-5 mt-4 custom-card">
      <span class="custom-span ml-4">CHAT</span>
      <v-list>
        <v-list-item class="mb-4 mt-4" v-for="chat in chats" :key="chat.name">
          <v-badge :color="chat.color" class="test mr-6 py-1" right dot>
            <v-img :src="chat.avatar" class="square-avatar"></v-img>
          </v-badge>
          <v-list-item-content>
            <v-list-item-title class="span-title">{{ chat.name }}</v-list-item-title>
            <v-list-item-subtitle class="span-subtitle">{{ chat.message }}</v-list-item-subtitle>
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
  </div>
</template>

<script>
export default {
  props: {
    loading: Boolean
  },
  data() {
    return {
      chats: [
        { name: 'Helen Brooks', message: 'Luna has been scratching her ears a lot lately...', time: '15:56', color: 'green', avatar: require('../../public/img/avatars/avatar-three.png'), unread: 0 },
        { name: 'Kathryn Murphy', message: 'The best way to treat an ear infection is to visit your local vet clinic...', time: 'Wed', color: 'green', avatar: require('../../public/img/avatars/avatar-two.png'), unread: 2 },
        { name: 'James Grey', message: 'You should follow the instructions on the ear drops label, but usually y...', time: 'Tue', color: 'red', avatar: require('../../public/img/avatars/avatar-one.png'), unread: 0 },
        { name: 'Jim Brown', message: 'Hi, I have a question about my cat.', time: 'Tue', color: 'red', avatar: require('../../public/img/avatars/avatar-four.png'), unread: 0 }
      ]
    };
  }
};
</script>

<style scoped>
.v-card {
  border-radius: 16px;
  border: #DAE3F8 1px solid;
  box-shadow: none !important;
}

.span-title {
  color: #0B1C33 !important;
  font-weight: 500;
}

.span-subtitle {
  color: #0B1C33 !important;
  font-weight: 200;
  opacity: 70%;
}

.custom-span {
  color: #0B1C33 !important;
  opacity: 70% !important;
  font-weight: 500;
}

.custom-card {
  width: 877px;
  height: 400px;
  gap: 0px;
  opacity: 0px;
  position: relative;
}

.v-badge >>> .v-badge__badge,
.v-badge >>> .v-badge__wrapper {
  width: 12px;
  height: 12px;
  position: absolute;
  top: 12px;
  left: 29px;
}

.v-badge >>> .v-badge__badge {
  border: 2px solid #FEFEFE !important;

}

.v-list-item-title {
  font-weight: bold;
}

.theme--light.v-card > .v-card__text,
.theme--light.v-card > .v-card__subtitle {
  color: #0B1C33 !important;
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

.square-avatar {
  border-radius: 15px;
  object-fit: cover;
  width: 48px;
  height: 48px;
}

</style>
