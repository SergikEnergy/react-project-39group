import {
  ERROR_GET_PRODUCTS,
  ERROR_GET_SINGLE_PRODUCT,
  PRODUCTS_LOAD,
  SET_SUGGESTIONS,
  SINGLE_PRODUCT_LOAD,
} from '../types';

const initialProductsState = {
  products: [],
  suggestions: [],
  error: null,
  selectedProduct: {},
};

export const productsReducer = (state = initialProductsState, action) => {
  switch (action.type) {
    case PRODUCTS_LOAD:
      return { ...state, error: null, products: [...action.payload] };

    case SINGLE_PRODUCT_LOAD: {
      if (action.payload && action.payload.id) {
        return { ...state, error: null, selectedProduct: action.payload };
      }
      return state;
    }

    case SET_SUGGESTIONS: {
      if (action.payload && action.payload.length > 0) {
        return { ...state, error: null, suggestions: action.payload };
      }
      return state;
    }

    case ERROR_GET_PRODUCTS:
      return { ...state, error: action.payload };

    case ERROR_GET_SINGLE_PRODUCT:
      return { ...state, error: action.payload };

    default:
      return state;
  }
};
