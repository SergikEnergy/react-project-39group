const initialProductsState = {
  products: [],
  isLoadingProducts: false,
  error: null,
};

export const productsReducer = (state = initialProductsState, action) => {
  console.log(state, action);

  switch (action.type) {
    default:
      return state;
  }
};
