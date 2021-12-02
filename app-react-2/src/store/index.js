import { createStore, combineReducers } from 'redux';
import { authReducer } from './authReducer';
import { productsReducer } from './productsReducer';

const allReducer = combineReducers({
  auth: authReducer,
  products: productsReducer,
});

const store = createStore(
  allReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export default store;
