import {
  FETCH_SUBMISSIONS,
  SUBMISSIONS_SUCCESS,
  SUBMISSIONS_FAILURE
} from '../actions/submissions';

export const total = (state = {count: 0}, {type, payload}) => {
  switch(type) {
    case FETCH_SUBMISSIONS:
    return {...state, loading: true};

    case SUBMISSIONS_SUCCESS:
    return {loading: false, count: payload.count};

    case SUBMISSIONS_FAILURE:
    return {...state, loading: false, error: true};

    default:
      return state;
  }
};
