import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import logger from 'redux-logger';

const initialState = {
  isLoading: false,
  cityName: null,
  temp: null,
  error: false
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case 'IS_FETCHING':
      return {
        isLoading: true,
        cityName: null,
        temp: null,
        error: false
      };
    case 'FETCH_SUCCESS':
      return {
        isLoading: false,
        cityName: action.cityName,
        temp: action.temp,
        error: false
      };
    case 'FETCH_ERROR':
      return {
        isLoading: false,
        cityName: null,
        temp: null,
        error: true
      };
    default:
      return state;
  }
};

const store = createStore(reducer, applyMiddleware(thunk, logger));

export default store;
