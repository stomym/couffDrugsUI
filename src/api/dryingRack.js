/* eslint-disable import/no-cycle */
import { createRequest, successHandler, errorHandler } from './api';

const ws = createRequest();

// eslint-disable-next-line import/prefer-default-export
export function getDryingRackInfo(sqlId) {
  const params = { id: sqlId };
  return ws.post('getDryingRackInfo', params).then(successHandler).catch(errorHandler);
}

export function recoverDryingRack(sqlId) {
  const params = { id: sqlId };
  return ws.post('recoverDryingRack', params).then(successHandler).catch(errorHandler);
}
