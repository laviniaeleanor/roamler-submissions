export const TOGGLE_SORT_DATE = 'TOGGLE_SORT_DATE';
export const SET_PAGE = 'SET_PAGE';

export const toggleSortDate = () => dispatch => {
  dispatch({type: TOGGLE_SORT_DATE});
};

export const setPage = page => dispatch => {
  dispatch({type: SET_PAGE, payload: page});
};
