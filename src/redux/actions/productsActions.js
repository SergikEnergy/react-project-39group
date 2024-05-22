import { allProductsUrl, productsWithSearchUrl, singleProductUrl } from '../api.data';
import {
  ERROR_GET_PRODUCTS,
  ERROR_GET_SINGLE_PRODUCT,
  PRODUCTS_LOAD,
  SINGLE_PRODUCT_LOAD,
} from '../types';

export const getProducts = (keyword = '') => {
  return async (dispatch) => {
    try {
      const data = await fetch(
        `${keyword ? productsWithSearchUrl + `q=${keyword}` : allProductsUrl}`,
        {
          method: 'GET',
        },
      );
      if (!data.ok) {
        dispatch({
          type: ERROR_GET_PRODUCTS,
          payload: 'Ошибка получения данных от сервера',
        });
      } else {
        const response = await data.json();
        dispatch({
          type: PRODUCTS_LOAD,
          payload: response.products,
        });
      }
    } catch (err) {
      dispatch({
        type: ERROR_GET_PRODUCTS,
        payload: err.message,
      });
    }
  };
};

export const getProductById = (id) => {
  return async (dispatch) => {
    try {
      const data = await fetch(`${singleProductUrl}/${id}`, {
        method: 'GET',
      });
      if (!data.ok) {
        dispatch({
          type: ERROR_GET_SINGLE_PRODUCT,
          payload: 'Ошибка получения сведений о товаре',
        });
      } else {
        const response = await data.json();
        dispatch({
          type: SINGLE_PRODUCT_LOAD,
          payload: response,
        });
      }
    } catch (err) {
      dispatch({
        type: ERROR_GET_SINGLE_PRODUCT,
        payload: err.message,
      });
    }
  };
};
