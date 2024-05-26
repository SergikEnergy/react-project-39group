import { ADD_TO_FAVORITES, REMOVE_FROM_FAVORITES } from '../types';
import { KEYFAVORITS } from '../../data/localStorage';

const favoritsObj = localStorage.getItem(KEYFAVORITS);
const favoritProducts = favoritsObj ? JSON.parse(favoritsObj) : [];

const initialFavoritesState = {
  favoritesProducts: favoritProducts,
};

export const favoritesReducer = (state = initialFavoritesState, action) => {
  switch (action.type) {
    case ADD_TO_FAVORITES: {
      const products = state.favoritesProducts;
      products.push(action.payLoad);
      localStorage.setItem(KEYFAVORITS, JSON.stringify(products));
      return { ...state, favoritesProducts: products };
    }
    case REMOVE_FROM_FAVORITES: {
      const products = state.favoritesProducts;
      const index = products.findIndex((item) => item.id === action.payLoad);
      if (index === -1) {
        return state;
      }
      const newProducts = [...products.slice(0, index), ...products.slice(index + 1)];
      localStorage.setItem(KEYFAVORITS, JSON.stringify(newProducts));
      return { ...state, favoritesProducts: newProducts };
    }
    default:
      return state;
  }
};
