import '@babel/polyfill'
import Vue from 'vue'
import './plugins'
import App from './App.vue'
import router from './router'
import store from './store'
import './registerServiceWorker'
import { firebaseListener } from './config/firebaseConfig';

Vue.config.productionTip = false

firebaseListener(authStatusChange);

new Vue({
    router,
    store,
    render: h => h(App)
}).$mount('#app')

function authStatusChange(loggedIn, user) {

    if (store) {
        store.dispatch('authStatusChange', user);
    }

}
