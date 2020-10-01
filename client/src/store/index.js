import {configureStore} from '@reduxjs/toolkit';
import {submissions} from './reducers/submissions';

export default configureStore({
  reducer: {submissions},
  devTools: process.env.NODE_ENV !== 'production',
});
