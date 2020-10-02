import {
  TOGGLE_SORT_DATE,
  SET_PAGE
} from '../actions/params';

const initialState = {
  page: {num : 1, isFirst: true},
  order: 'desc'
};

export const params = (state = initialState, {type, payload}) => {
  switch (type) {
    case TOGGLE_SORT_DATE:
    return {
      ...state, 
      order: state.order === 'asc' ? 'desc' : 'asc',
      page: initialState.page
    }

    case SET_PAGE: 
    return {
      ...state,
      page: payload
    }

    default:
    return state;
  }
};
