import { isAnyOf } from '@reduxjs/toolkit';
import { addContactRequest, deleteContactRequest, getContactsRequest } from './operations';
// import { addContact, deleteContact, fetchContacts } from './operations';

const thunks = [addContactRequest, deleteContactRequest, getContactsRequest];
export const getActions = type => isAnyOf(...thunks.map(thunk => thunk[type]));
