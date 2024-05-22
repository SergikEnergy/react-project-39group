import { START_PRODUCTS_LOADING, STOP_PRODUCTS_LOADING } from '../types';

const initialState = { isLoading: false };

export const loaderReducer = (state = initialState, action) => {
  switch (action.type) {
    case START_PRODUCTS_LOADING:
      return { ...state, isLoading: true };

    case STOP_PRODUCTS_LOADING:
      return { ...state, isLoading: true };

    default:
      return state;
  }
};
