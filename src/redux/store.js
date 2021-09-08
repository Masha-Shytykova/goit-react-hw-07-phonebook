import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';

// import {
//   persistStore,
//   persistReducer,
//   FLUSH,
//   REHYDRATE,
//   PAUSE,
//   PERSIST,
//   PURGE,
//   REGISTER,
// } from 'redux-persist';
// import storage from 'redux-persist/lib/storage';
import logger from 'redux-logger';
import contactsReducer from './reducer';

const middleware = [...getDefaultMiddleware(), logger];

// const contactsPersistConfig = {
//   key: 'contacts',
//   storage,
//   blacklist: ['filter'],
// };

const store = configureStore({
  reducer: { contacts: contactsReducer },
  middleware,
  devTools: process.env.NODE_ENV === 'development',
});

// const persistor = persistStore(store);

// eslint-disable-next-line import/no-anonymous-default-export
export default store;

//////////////////////// redux
// import { createStore, combineReducers } from 'redux';
// import { composeWithDevTools } from 'redux-devtools-extension';
// import contactsReducer from './reducer';

// const rootReducer = combineReducers({ contacts: contactsReducer });

// const store = createStore(rootReducer, composeWithDevTools());

// export default store;
