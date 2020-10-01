import {
  FETCH_SUBMISSIONS,
  SUBMISSIONS_SUCCESS,
  SUBMISSIONS_FAILURE
} from '../actions/submissions';

export const submissions = (state = {data: []}, {type, payload}) => {
  switch(type) {
    case FETCH_SUBMISSIONS:
    return {...state, loading: true};

    case SUBMISSIONS_SUCCESS:
    return {loading: false, data: [...payload, ...state.data]};

    case SUBMISSIONS_FAILURE:
    return {...state, loading: false, error: true};

    default:
      return state;
  }
};
