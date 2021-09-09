import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';

import logger from 'redux-logger';
import contactsReducer from './reducer';
import { errorReducer } from './reducer';

const middleware = [...getDefaultMiddleware(), logger];

const store = configureStore({
  reducer: {
    contacts: contactsReducer,
    error: errorReducer,
  },
  middleware,
  devTools: process.env.NODE_ENV === 'development',
});

export default store;
