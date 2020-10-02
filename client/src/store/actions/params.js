export const TOGGLE_SORT_DATE = 'TOGGLE_SORT_DATE';
export const SET_PAGE = 'SET_PAGE';
export const SET_SEARCH_TERM = 'SET_SEARCH_TERM';

export const toggleSortDate = () => dispatch => {
  dispatch({type: TOGGLE_SORT_DATE});
};

export const setPage = page => dispatch => {
  dispatch({type: SET_PAGE, payload: page});
};

export const setSearchTerm = searchTerm => dispatch => {
  dispatch({type: SET_SEARCH_TERM, payload: searchTerm});
};
