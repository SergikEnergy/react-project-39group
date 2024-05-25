import { LAST_TEN_HISTORY, SAVE_HISTORY_TO_LOCALE_STORAGE, SAVE_TO_HISTORY } from '../types';

function saveToHistory(elem) {
  return {
    type: SAVE_TO_HISTORY,
    payload: elem,
  };
}
function lastTenHistory() {
  return {
    type: LAST_TEN_HISTORY,
  };
}

function saveHistoryToLocaleStorage() {
  return {
    type: SAVE_HISTORY_TO_LOCALE_STORAGE,
  };
}
