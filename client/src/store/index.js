import {configureStore} from '@reduxjs/toolkit';
import {submissions} from './reducers/submissions';
import {total} from './reducers/total';
import {params} from './reducers/params';

export default configureStore({
  reducer: {submissions, total, params},
  devTools: process.env.NODE_ENV !== 'production',
});
