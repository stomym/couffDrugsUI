/* eslint-disable import/no-cycle */
import axios from 'axios';

export function createRequest() {
  const request = axios.create({
    baseURL: process.env.VUE_APP_ROOT_API,
  });
  return request;
}

export class APIError extends Error {
  constructor(exception) {
    super(exception.exceptionMessage);
    this.code = exception.code;
    this.message = exception.exceptionMessage;
  }
}

export function errorHandler(error) {
  throw error;
}

export function successHandler(res) {
  if (res.status !== 200 || ('success' in res.data && !res.data.success)) {
    return Promise.reject(new APIError(res.data));
  }
  return res.data;
}
