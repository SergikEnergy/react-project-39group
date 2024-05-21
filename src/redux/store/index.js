import { applyMiddleware, combineReducers, createStore } from 'redux';
import thunkMiddleWare from 'redux-thunk';
import { composeWithDevTools } from '@redux-devtools/extension';

import { favoritesReducer, historyReducer, productsReducer } from '../reducers';

const rootReducer = combineReducers({
  favorites: favoritesReducer,
  history: historyReducer,
  products: productsReducer,
});

const configureStore = (preloadedState) => {
  const middlewares = [thunkMiddleWare];
  const middlewareEnhancer = applyMiddleware(...middlewares);
  const enhancers = [middlewareEnhancer];

  const composeEnhancers = composeWithDevTools(...enhancers);

  const store = createStore(rootReducer, preloadedState, composeEnhancers);
  return store;
};

export const store = configureStore();
