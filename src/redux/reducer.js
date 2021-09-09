import { combineReducers } from 'redux';
import { createReducer } from '@reduxjs/toolkit';
import * as actions from './actions';

const itemsReducer = createReducer([], {
  [actions.getContactsSuccess]: (_, { payload }) => payload,
  [actions.addContactsSuccess]: (state, { payload }) => [...state, payload],
  [actions.deleteContactsSuccess]: (state, { payload }) =>
    state.filter(contact => contact.id !== payload),
});

const filterReducer = createReducer('', {
  [actions.changeFilter]: (_, { payload }) => payload,
});

const contactsReducer = combineReducers({
  items: itemsReducer,
  filter: filterReducer,
});

const setError = (_, { payload }) => payload;
const resetError = () => null;

export const errorReducer = createReducer(null, {
  [actions.getContactsReguests]: resetError,
  [actions.getContactsError]: setError,
  [actions.addContactsReguests]: resetError,
  [actions.addContactsError]: setError,
  [actions.deleteContactsReguests]: resetError,
  [actions.deleteContactsError]: setError,
});

export default contactsReducer;

/////////////////// redux
// import { combineReducers } from 'redux';
// import actionsTypes from './types';

// const itemsReducer = (state = [], { type, payload }) => {
//   switch (type) {
//     case actionsTypes.DELETE:
//       return state.filter(contact => contact.id !== payload);

//     case actionsTypes.ADD:
//       return [...state, payload];

//     default:
//       return state;
//   }
// };

// const filterReducer = (state = '', { type, payload }) => {
//   switch (type) {
//     case actionsTypes.FILTER:
//       return payload;

//     default:
//       return state;
//   }
// };

// const contactsReducer = combineReducers({
//   items: itemsReducer,
//   filter: filterReducer,
// });

// export default contactsReducer;
