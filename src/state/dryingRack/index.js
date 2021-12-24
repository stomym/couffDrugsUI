/* eslint-disable import/no-cycle */
// eslint-disable-next-line object-curly-newline
import { getDryingRackInfo, recoverDryingRack } from '../../api/dryingRack';

export const namespaced = true;

export const state = {
  dryingRackInfo: {},
};

export const mutations = {
  setDryingRackInfo(state, data) {
    state.dryingRackInfo = data.data;
  },
};

export const actions = {
  async fetchDryingRackInfo({ commit }, sqlId) {
    return commit('setDryingRackInfo', await getDryingRackInfo(sqlId));
  },
  async recoverDryingRack(context, sqlId) {
    return recoverDryingRack(sqlId);
  },
};
