import { allProductsUrl, productsWithSearchUrl, singleProductUrl } from '../api.data';
import {
  ERROR_GET_PRODUCTS,
  ERROR_GET_SINGLE_PRODUCT,
  PRODUCTS_LOAD,
  SET_SUGGESTIONS,
  SINGLE_PRODUCT_LOAD,
} from '../types';

import { startLoading, stopLoading } from './loaderActions';

export const getProductsWithSearch = (keyword = '') => {
  return async (dispatch) => {
    try {
      dispatch(startLoading());
      const data = await fetch(`${productsWithSearchUrl}&q=${keyword}`, {
        method: 'GET',
      });
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
    } finally {
      dispatch(stopLoading());
    }
  };
};

export const getProductById = (id) => {
  return async (dispatch) => {
    try {
      dispatch(startLoading());
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
    } finally {
      dispatch(stopLoading());
    }
  };
};

export const updateSuggestions = (suggestion) => {
  return {
    type: SET_SUGGESTIONS,
    payload: suggestion,
  };
};

export const getInitialProducts = () => {
  return async (dispatch) => {
    try {
      dispatch(startLoading());
      const data = await fetch(`${allProductsUrl}`, {
        method: 'GET',
      });
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
        const titles = response.products.map((item) => ({
          label: item.title,
          id: item.id,
        }));
        dispatch(updateSuggestions(titles));
      }
    } catch (err) {
      dispatch({
        type: ERROR_GET_PRODUCTS,
        payload: err.message,
      });
    } finally {
      dispatch(stopLoading());
    }
  };
};
