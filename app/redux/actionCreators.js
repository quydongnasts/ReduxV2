import fetchURL from './../components/fetchURL';

export function isFetchingReducer() {
  return { type: 'IS_FETCHING' };
}

export function fetchSuccessReducer(cityName, temp) {
  return { type: 'FETCH_SUCCESS', cityName, temp };
}

export function fetchErrorReducer() {
  return { type: 'FETCH_ERROR' };
}

export function fetchDataWithReduxThunk(cityName) {
    return dispatch => {
        dispatch(isFetchingReducer());
        fetchURL(cityName)
        .then(temp => dispatch(fetchSuccessReducer(cityName, temp)))
        .catch(() => dispatch(fetchErrorReducer()));
    };
}
