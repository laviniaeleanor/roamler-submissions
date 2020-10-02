import {
  TOGGLE_SORT_DATE,
  SET_PAGE,
  SET_SEARCH_TERM
} from '../actions/params';

const initialState = {
  page: 1,
  order: 'desc',
  searchTerm: ''
};

export const params = (state = initialState, {type, payload}) => {
  switch (type) {
    case TOGGLE_SORT_DATE:
    return {
      ...state, 
      order: state.order === 'asc' ? 'desc' : 'asc',
      page: 1
    }

    case SET_PAGE: 
    return {
      ...state,
      page: payload
    }

    case SET_SEARCH_TERM: 
    return {
      ...state,
      page: 1,
      searchTerm: payload
    }

    default:
    return state;
  }
};
