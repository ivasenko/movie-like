import { applyMiddleware, createStore } from 'redux';
import rootReducer from '../reducers';
import dataService from '../services/data-service';

const store = createStore(
  rootReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export default store;
