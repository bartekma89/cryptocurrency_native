import {
  FETCHING_COIN_DATA,
  FETCHING_COIN_DATA_SUCCESS,
  FETCHING_COIN_DATA_FAIL
} from "../actions/actionTypes";

const initialState = {
  isFetching: true,
  data: [],
  hasError: false,
  errorMessage: null
};

export default (state = initialState, action) => {
  switch (action.type) {
    case FETCHING_COIN_DATA:
      return {
        ...state,
        isFetching: true,
        data: [],
        hasError: false,
        errorMessage: null
      };
    case FETCHING_COIN_DATA_SUCCESS:
      return {
        ...state,
        isFetching: false,
        data: action.payload,
        hasError: false,
        errorMessage: null
      };
    case FETCHING_COIN_DATA_FAIL:
      return {
        ...state,
        isFetching: false,
        data: null,
        hasError: true,
        errorMessage: action.payload
      };
    default:
      return state;
  }
};
