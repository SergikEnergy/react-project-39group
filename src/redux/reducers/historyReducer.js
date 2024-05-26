import { lastTen } from '@/utils/lastTen';

import { SAVE_TO_HISTORY } from '../types';

const initialHistoryState = { history: [] };

export const historyReducer = (state = initialHistoryState, action) => {
  switch (action.type) {
    case SAVE_TO_HISTORY: {
      let history = state.history;
      let lastTenArr = lastTen(history, action.payload);
      localStorage.setItem('history', lastTenArr);
      return { ...state, history: lastTenArr };
    }
    default:
      return state;
  }
};
