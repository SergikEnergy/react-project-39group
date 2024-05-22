import { applyMiddleware, combineReducers, createStore } from 'redux';
import { thunk } from 'redux-thunk';
import { composeWithDevTools } from '@redux-devtools/extension';

import { favoritesReducer, historyReducer, loaderReducer, productsReducer } from '../reducers';

const rootReducer = combineReducers({
  favorites: favoritesReducer,
  history: historyReducer,
  products: productsReducer,
  loading: loaderReducer,
});

const configureStore = (preloadedState) => {
  const middlewares = [thunk];
  const middlewareEnhancer = applyMiddleware(...middlewares);
  const enhancers = [middlewareEnhancer];

  const composeEnhancers = composeWithDevTools(...enhancers);

  const store = createStore(rootReducer, preloadedState, composeEnhancers);
  return store;
};

export const store = configureStore();
