import { START_PRODUCTS_LOADING, STOP_PRODUCTS_LOADING } from '../types';

export const startLoading = () => {
  return {
    type: START_PRODUCTS_LOADING,
  };
};

export const stopLoading = () => {
  return {
    type: STOP_PRODUCTS_LOADING,
  };
};
