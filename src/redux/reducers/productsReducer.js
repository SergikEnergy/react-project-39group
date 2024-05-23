import { ERROR_GET_PRODUCTS, PRODUCTS_LOAD, SINGLE_PRODUCT_LOAD, SET_SUGGESTIONS } from '../types';

const initialProductsState = {
  products: [],
  suggestions: [],
  error: null,
  selectedProduct: {}
};

export const productsReducer = (state = initialProductsState, action) => {
  console.log('productsReducer--> ', state, action);

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

    case SET_SUGGESTIONS: {
      if (action.payload && action.payload.length > 0) {
        return { ...state, error: null, suggestions: action.payload };
      }
    }

    case ERROR_GET_PRODUCTS:
      return { ...state, error: action.payload };

    default:
      return state;
  }
};
