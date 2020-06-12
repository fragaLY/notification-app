import Vue from 'vue'

export const helper = {};

helper.messages = {
    get(reason) {
        if (reason && reason.response && reason.response.data) {
            return (reason.response.data.message ? reason.response.data.message : reason.response.data).split(',');
        } else if (reason && reason.response){
            return (reason.response.data ? reason.response.data : reason.response).split(',');
        } else if (reason) {
            return [reason];
        }
    }
};

Vue.directive('back', (el) => {
    el.onclick = () => window.history.go(-1)
});
