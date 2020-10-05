export const TOGGLE_SORT_DATE = 'TOGGLE_SORT_DATE';
export const SET_PAGE = 'SET_PAGE';
export const SET_SEARCH_TERM = 'SET_SEARCH_TERM';
export const SET_FROM_DATE = 'SET_FROM_DATE';
export const SET_TO_DATE = 'SET_TO_DATE';

export const toggleSortDate = () => dispatch => {
  dispatch({type: TOGGLE_SORT_DATE});
};

export const setPage = page => dispatch => {
  dispatch({type: SET_PAGE, payload: page});
};

export const setSearchTerm = searchTerm => dispatch => {
  dispatch({type: SET_SEARCH_TERM, payload: searchTerm});
};

export const setFromDate = fromDate => dispatch => {
  if (Date.parse(fromDate)) {
    dispatch({type: SET_FROM_DATE, payload: new Date(fromDate).toISOString()});
  } else if (!fromDate) {
    dispatch({type: SET_FROM_DATE, payload: null});
  }
};

export const setToDate = toDate => dispatch => {
  if (Date.parse(toDate)) {
    dispatch({type: SET_TO_DATE, payload: new Date(toDate).toISOString()});
  } else if (!toDate) {
    dispatch({type: SET_TO_DATE, payload: null});
  }
};
