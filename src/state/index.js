/* eslint-disable import/no-cycle */
import Vue from 'vue';
import Vuex from 'vuex';
import * as plants from './plants';

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    plants,
  },
});
