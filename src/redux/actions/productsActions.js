import { prepareHeaders, REST_API_BASE_URL } from '../api.data';
import { ERROR_GET_PRODUCTS, PRODUCTS_LOAD } from '../types';

export const getProducts = (keyword = 'a', category = 'aps') => {
  return async (dispatch) => {
    try {
      const data = await fetch(
        `${REST_API_BASE_URL}/products/search?keyword=${keyword}&category=${category}`,
        {
          headers: prepareHeaders(),
          method: 'GET',
        },
      );
      const response = await data.json();
      dispatch({
        type: PRODUCTS_LOAD,
        payload: response,
      });
    } catch (err) {
      dispatch({
        type: ERROR_GET_PRODUCTS,
        payload: err.message,
      });
    }
  };
};
