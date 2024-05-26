import { getlastTen } from '@/utils/lastTen';

import { SAVE_TO_HISTORY } from '../types';

const initialHistoryState = { history: [] };

export const historyReducer = (state = initialHistoryState, action) => {
  switch (action.type) {
    case SAVE_TO_HISTORY: {
      const histories = state.history;
      histories.push(action.payload);
      const filtered = getlastTen(histories);
      localStorage.setItem('history', filtered);
      return { ...state, history: filtered };
    }
    default:
      return state;
  }
};
