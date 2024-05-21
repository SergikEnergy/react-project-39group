import { PRODUCTS_LOADING } from '../types';
import { REST_API_KEY,REST_API_BASE_URL,REST_API_HOST, prepareHeaders } from '../api.data';

export const PRODUCTS_LOAD = (limit = undefined) => {
  return async (dispatch) => {
     await response=fetch(`${REST_API_BASE_URL}/products/`);
  };
};
