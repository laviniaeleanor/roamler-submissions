import {
  FETCH_SUBMISSIONS,
  SUBMISSIONS_SUCCESS,
  SUBMISSIONS_FAILURE
} from '../actions/submissions';

const initialState = {loading : true};

export const submissions = (state = initialState, {type, payload}) => {
  switch(type) {
    case FETCH_SUBMISSIONS:
    return {...state, loading: true};

    case SUBMISSIONS_SUCCESS:
    return {loading: false, data: [...payload.rows]};

    case SUBMISSIONS_FAILURE:
    return {...state, loading: false, error: true};

    default:
      return state;
  }
};
