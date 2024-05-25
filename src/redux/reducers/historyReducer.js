import { LAST_TEN_HISTORY, SAVE_HISTORY_TO_LOCALE_STORAGE, SAVE_TO_HISTORY } from '../types';

const initialHistoryState = { historyQueries: [] };

export const historyReducer = (state = initialHistoryState, action) => {
  switch (action.type) {
    case SAVE_HISTORY_TO_LOCALE_STORAGE: {
      return {};
    }
    case SAVE_TO_HISTORY:
      return { ...state, historyQueries: state.historyQueries.push(action.payload) };
    case LAST_TEN_HISTORY:
      return {};
    default:
      return state;
  }
};
