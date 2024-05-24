import { ERROR_GET_PRODUCTS, PRODUCTS_LOAD, SINGLE_PRODUCT_LOAD } from '../types';

const initialProductsState = {
  products: [],
  selectedProduct: {},
  error: null,
};

export const productsReducer = (state = initialProductsState, action) => {
  switch (action.type) {
    case PRODUCTS_LOAD:
      return { ...state, error: null, products: [...action.payload] };

    case SINGLE_PRODUCT_LOAD: {
      if (action.payload && action.payload.id) {
        return { ...state, error: null, selectedProduct: action.payload };
      } else {
        return state;
      }
    }

    case ERROR_GET_PRODUCTS:
      return { ...state, error: action.payload };

    default:
      return state;
  }
};
