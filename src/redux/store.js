import { combineReducers, createStore } from 'redux';
import initialState from './initialState';

import cartReducer from './cartRedux';
import categoriesReducer from './categoriesRedux';
import productsReducer from './productsRedux';
import layoutReducer from './layoutRedux';
import productsToCompareReducer from './compareRedux.js';
import feedbacksReducer from './feedbackRedux.js';
// define reducers
const reducers = {
  feedbacks: feedbacksReducer,
  cart: cartReducer,
  categories: categoriesReducer,
  products: productsReducer,
  layout: layoutReducer,
  productsToCompare: productsToCompareReducer,
};

// add blank reducers for initial state properties without reducers
Object.keys(initialState).forEach(item => {
  if (typeof reducers[item] == 'undefined') {
    reducers[item] = (statePart = null) => statePart;
  }
});

const combinedReducers = combineReducers(reducers);

// create store
const store = createStore(
  combinedReducers,
  initialState,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export default store;
