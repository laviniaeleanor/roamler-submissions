import {
  FETCH_SUBMISSIONS,
  SUBMISSIONS_SUCCESS,
  SUBMISSIONS_FAILURE
} from '../actions/submissions';

const initialState = {count: 0};

export const total = (state = initialState, {type, payload}) => {
  switch(type) {
    case FETCH_SUBMISSIONS:
    return {...state, loading: true};

    case SUBMISSIONS_SUCCESS:
    return {
      loading: false,
      count: payload.count,
      pages: Math.ceil(payload.count / 10)
    };

    case SUBMISSIONS_FAILURE:
    return {
      ...state,
      loading: false,
      error: true
    };

    default:
      return state;
  }
};
