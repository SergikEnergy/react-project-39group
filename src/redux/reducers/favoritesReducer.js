const initialFavoritesState = {
  favoritesProducts: [],
  isLoadingProducts: false,
  error: null,
};

export const favoritesReducer = (state = initialFavoritesState, action) => {
  console.log(state, action);

  switch (action.type) {
    default:
      return state;
  }
};
