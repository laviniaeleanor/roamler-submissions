import {
  TOGGLE_SORT_DATE,
  SET_PAGE,
  SET_SEARCH_TERM,
  SET_FROM_DATE,
  SET_TO_DATE
} from '../actions/params';

const initialState = {
  page: 1,
  order: 'desc',
  searchTerm: '',
  fromDate: new Date('01-01-2014').toISOString(),
  toDate: new Date().toISOString()
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

    case SET_FROM_DATE:
    return {
      ...state,
      fromDate: payload
    }

    case SET_TO_DATE:
    return {
      ...state,
      toDate: payload 
    }

    default:
    return state;
  }
};
