import {ADD_TO_FAVORITES, REMOVE_FROM_FAVORITES} from '../types';

export const addToFavorits = (card) => {
  
  return {
    type: ADD_TO_FAVORITES,
    payLoad: card  
  }
}

export const removeFromFavorits = (id) => {
  return {
    type: REMOVE_FROM_FAVORITES,
    payLoad: id  
  }
}