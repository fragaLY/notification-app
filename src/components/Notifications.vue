<template>
  <v-container fluid>
    <v-data-table v-if="events.length !== 0" :headers="headers" :items="events" class="elevation-3"/>
  </v-container>
</template>

<script>
    import {mapState} from "vuex";

    export default {
        name: 'Notifications',
        data: () => {
            return {
                headers: [
                    {text: 'Event Id', value: 'id'},
                    {text: 'Notification Id', value: 'notification.id'},
                    {text: 'From', value: 'notification.from'},
                    {text: 'To', value: 'notification.to'}
                ]
            };
        },
        metaInfo: () => {
            return {
                meta: [
                    {name: '_csrf', content: ''},
                    {name: '_csrf_header', content: ''},
                ]
            }
        },
        computed: {
            ...mapState(['events'])
        },
    }
</script>

<style scoped>
</style>
