import { createAction } from '@reduxjs/toolkit';
import { v1 as uuidv1 } from 'uuid';

export const addContactsReguests = createAction('contacts/addRequests');
export const addContactsSuccess = createAction('contacts/addSuccess');
export const addContactsError = createAction('contacts/addError');

export const getContactsReguests = createAction('contacts/getRequests');
export const getContactsSuccess = createAction('contacts/getSuccess');
export const getContactsError = createAction('contacts/getError');

///////////////////

export const addContact = createAction('contacts/ADD', ({ name, number }) => {
  return {
    payload: {
      id: uuidv1(),
      name,
      number,
    },
  };
});

export const deleteContact = createAction('contacts/DELETE');
export const changeFilter = createAction('contacts/FILTER');

/////////////////////// redux
// import actionsTypes from './types';
// import { v1 as uuidv1 } from 'uuid';

// export const addContact = ({ name, number }) => ({
//   type: actionsTypes.ADD,
//   payload: {
//     id: uuidv1(),
//     name,
//     number,
//   },
// });

// export const deleteContact = contactId => ({
//   type: actionsTypes.DELETE,
//   payload: contactId,
// });

// export const changeFilter = value => ({
//   type: actionsTypes.FILTER,
//   payload: value,
// });
