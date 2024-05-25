import { LAST_TEN_HISTORY, SAVE_HISTORY_TO_LOCALE_STORAGE, SAVE_TO_HISTORY } from '../types';

export const saveToHistory = (elem) => {
  return {
    type: SAVE_TO_HISTORY,
    payload: elem,
  };
};
export const lastTenHistory = () => {
  return {
    type: LAST_TEN_HISTORY,
  };
};

export const saveHistoryToLocaleStorage = () => {
  return {
    type: SAVE_HISTORY_TO_LOCALE_STORAGE,
  };
};
