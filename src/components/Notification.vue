<template>
  <v-container fluid>
    <v-card-text>
      <v-text-field ref="event-key" v-model="event.key" label="Event Key" required autofocus clearable/>
      <v-text-field ref="notification-id" v-model="event.notification.id" label="Notification Id" required autofocus
                    clearable/>
      <v-text-field ref="sender" v-model="event.notification.sender" label="Sender" required clearable/>
      <v-text-field ref="receiver" v-model="event.notification.receiver" label="Receiver" required clearable/>
    </v-card-text>
    <v-divider/>
    <v-card-actions>
      <v-btn color="green" text @click.prevent="create(event)">
        Create Notification
      </v-btn>
      <v-spacer/>
      <v-btn color="blue" text @click.prevent="update(event)">
        Update Notification
      </v-btn>
    </v-card-actions>
  </v-container>
</template>


<script>
    import NotificationService from "../service/NotificationService";

    export default {
        name: "Notification",
        data: () => {
            return {
                event: {
                    key: '',
                    notification: {
                        id: '',
                        sender: '',
                        receiver: ''
                    }
                }
            };
        },
        methods: {
            create(event) {
                NotificationService.create(event);
            },
            update(event) {
                NotificationService.update(event);
            }
        }
    }
</script>

<style scoped>

</style>