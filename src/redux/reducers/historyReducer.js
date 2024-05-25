import { lastTen } from '@/utils/lastTen';

import { SAVE_TO_HISTORY } from '../types';

const initialHistoryState = { history: [] };

export const historyReducer = (state = initialHistoryState, action) => {
  switch (action.type) {
    case SAVE_TO_HISTORY: {
      localStorage.setItem('history', lastTen(state.history, action.payload));
      return { ...state, history: lastTen(state.history, action.payload) };
    }
    default:
      return state;
  }
};
