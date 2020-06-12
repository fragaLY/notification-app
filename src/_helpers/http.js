import axios from "axios";
import store from "../_store";

const instance = axios.create({
    withCredentials: false,
    timeout: 10000
});

instance.interceptors.response.use(response => {
    return response;
}, error => {
    if (error.response.status !== 201) {
        store.dispatch('updateMessages', ['Something went wrong...']).then();
    }
    return Promise.reject(error);
});

instance.interceptors.request.use(request => {
    return request
}, error => Promise.reject(error));

export default instance;