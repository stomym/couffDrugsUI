import '@babel/polyfill';
import Vue from 'vue';
import App from './App.vue';
import i18n from './plugins/i18n';
import vuetify from './plugins/vuetify';
import store from './state';
import '@mdi/font/css/materialdesignicons.css';

Vue.config.productionTip = false;

new Vue({
  store,
  vuetify,
  i18n,
  render: (h) => h(App),
}).$mount('#app');
