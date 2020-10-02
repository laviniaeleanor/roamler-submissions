import * as request from 'superagent';

const baseUrl = 'http://localhost:4000';

export const FETCH_SUBMISSIONS = 'FETCH_SUBMISSIONS';
export const SUBMISSIONS_SUCCESS = 'SUBMISSIONS_SUCCESS';
export const SUBMISSIONS_FAILURE = 'SUBMISSIONS_FAILURE';

export const getSubmissions = ({params}) => dispatch => {
  dispatch({type: FETCH_SUBMISSIONS});
  request
    .get(`${baseUrl}/submissions`)
    .query({params})
    .set('accept', 'json')
    .then(res => {
      dispatch({
        type: SUBMISSIONS_SUCCESS,
        payload: res.body
      });

    })
    .catch(err => {
      console.error(err);
      dispatch({type: SUBMISSIONS_FAILURE});
    })
};
