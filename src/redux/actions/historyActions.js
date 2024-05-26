import { SAVE_TO_HISTORY } from '../types';

export const saveToHistory = (elem) => {
  return {
    type: SAVE_TO_HISTORY,
    payload: elem,
  };
};
