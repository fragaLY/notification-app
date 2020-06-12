import http from "../_helpers/http";
import store from "../_store";
import {helper} from '../_helpers/helper'

const NOTIFICATIONS = "/api/notifications"

class NotificationService {

    create(event) {
        return http
            .post(`${NOTIFICATIONS}`, event, {
                headers: {'X-CSRF-TOKEN': 'e2c96294-5a05-4dbb-b72c-87fd61eebe5e'} //todo: replace with real csrf token
            })
            .then(response => {
                if (response.status === 204) {
                    store.dispatch('updateMessages', ['Notification successfully created']).then();
                    store.dispatch('addEvent', event).then();
                }
            })
            .catch(reason => store.dispatch('updateMessages', helper.messages.get(reason)).then());
    }

    update(event) {
        return http
            .put(`${NOTIFICATIONS}`, event, {
                headers: {'X-CSRF-TOKEN': 'e2c96294-5a05-4dbb-b72c-87fd61eebe5e'} //todo: replace with real csrf token
            })
            .then(response => {
                if (response.status === 204) {
                    store.dispatch('updateMessages', ['Notification successfully updated']).then();
                    store.dispatch('updateEvent', event).then();
                }
            })
            .catch(reason => store.dispatch('updateMessages', helper.messages.get(reason)).then());
    }
}

export default new NotificationService();