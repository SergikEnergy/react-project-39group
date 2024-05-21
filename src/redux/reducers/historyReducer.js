const initialHistoryState = { historyQueries: [] };

export const historyReducer = (state = initialHistoryState, action) => {
  console.log(state, action);

  switch (action.type) {
    default:
      return state;
  }
};
