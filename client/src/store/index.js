import {configureStore} from '@reduxjs/toolkit';
import {submissions} from './reducers/submissions';
import {total} from './reducers/total';

export default configureStore({
  reducer: {submissions, total},
  devTools: process.env.NODE_ENV !== 'production',
});
