import { ERROR_GET_PRODUCTS, PRODUCTS_LOAD } from '../types';

const initialProductsState = {
  products: [],
  isLoadingProducts: false,
  error: null,
};

export const productsReducer = (state = initialProductsState, action) => {
  console.log(state, action);

  switch (action.type) {
    case PRODUCTS_LOAD:
      return { isLoadingProducts: false, error: null, products: [...action.payload] };

    case ERROR_GET_PRODUCTS:
      return { ...state, isLoadingProducts: false, error: action.payload };

    default:
      return state;
  }
};
