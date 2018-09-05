import '@babel/polyfill';
import Vue from 'vue';
import './plugins/vuetify';
import App from './App.vue';
import router from './router';
import store from './store';
import './registerServiceWorker';

import Vue2Filters from 'vue2-filters';
import VueMoment from 'vue-moment';
import VueNumeral from 'vue-numeral-filter';

Vue.config.productionTip = false;

Vue.use(Vue2Filters);
Vue.use(VueMoment);
Vue.use(VueNumeral);


new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app');
