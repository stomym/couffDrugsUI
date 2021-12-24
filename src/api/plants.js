/* eslint-disable import/no-cycle */
import { createRequest, successHandler, errorHandler } from './api';

const ws = createRequest();

// eslint-disable-next-line import/prefer-default-export
export function getPlantInfo(sqlId) {
  const params = { id: sqlId };
  return ws.post('getPlantInfo', params).then(successHandler).catch(errorHandler);
}

export function feedPlant(sqlId) {
  const params = { id: sqlId };
  return ws.post('feedPlant', params).then(successHandler).catch(errorHandler);
}

export function fillPlant(sqlId) {
  const params = { id: sqlId };
  return ws.post('fillPlant', params).then(successHandler).catch(errorHandler);
}

export function destroyPlant(sqlId) {
  const params = { id: sqlId };
  return ws.post('destroyPlant', params).then(successHandler).catch(errorHandler);
}

export function harvestPlant(sqlId) {
  const params = { id: sqlId };
  return ws.post('harvestPlant', params).then(successHandler).catch(errorHandler);
}
