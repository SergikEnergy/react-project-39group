const initialHistoryState = { historyQueries: [] };

export const historyReducer = (state = initialHistoryState, action) => {
  console.log('historyReducer-->', state, action);

  switch (action.type) {
    default:
      return state;
  }
};
