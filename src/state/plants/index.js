/* eslint-disable import/no-cycle */
// eslint-disable-next-line object-curly-newline
import { getPlantInfo, feedPlant, fillPlant, destroyPlant, harvestPlant } from '../../api/plants';

export const namespaced = true;

export const state = {
  plantInfo: {},
};

export const mutations = {
  setPlantInfo(state, data) {
    state.plantInfo = data.data;
  },
};

export const actions = {
  async fetchPlantInfo({ commit }, sqlId) {
    return commit('setPlantInfo', await getPlantInfo(sqlId));
  },
  async fetchFeedPlant(context, sqlId) {
    return feedPlant(sqlId);
  },
  async fetchFillPlant(context, sqlId) {
    return fillPlant(sqlId);
  },
  async fetchDestroyPlant(context, sqlId) {
    return destroyPlant(sqlId);
  },
  async fetchHarvestPlant(context, sqlId) {
    return harvestPlant(sqlId);
  },
};
