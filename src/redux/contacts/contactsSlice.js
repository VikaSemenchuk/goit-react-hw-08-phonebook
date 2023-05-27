import { createSlice } from '@reduxjs/toolkit';
import { initialState } from 'redux/state';
import { getActions } from './getActionsThunk';
import { fulfilledHandler, fulfilledHandlerAdd, fulfilledHandlerDelete, fulfilledHandlerGet, pendingHandler, rejectHandler } from './handlerFunctions';

import {
  addContactRequest,
  deleteContactRequest,
  getContactsRequest,
} from './operations';

import { STATUS_HANDLER } from './statusHandler';

const contactsSlice = createSlice({
  name: 'contacts',

  initialState,

  reducers: {
    handleFilter: (state, { payload }) => {
      state.filter = payload;
    },
  },

  extraReducers: builder => {
    const { PENDING, FULFILLED, REJECTED } = STATUS_HANDLER
      builder
      // ----- Get Contacts -----

      // .addCase(getContactsRequest.pending, pendingHandler)
      .addCase(getContactsRequest.fulfilled, fulfilledHandlerGet)
      // .addCase(getContactsRequest.rejected, rejectHandler)

      // ----- Add Contact -----

      // .addCase(addContactRequest.pending, pendingHandler)
      .addCase(addContactRequest.fulfilled, fulfilledHandlerAdd)
      // .addCase(addContactRequest.rejected, rejectHandler)

      // ----- Delete Contact -----

      // .addCase(deleteContactRequest.pending, pendingHandler)
      .addCase(deleteContactRequest.fulfilled, fulfilledHandlerDelete)
      // .addCase(deleteContactRequest.rejected, rejectHandler),
      .addMatcher(getActions(PENDING), pendingHandler)
      .addMatcher(getActions(FULFILLED), fulfilledHandler)
      .addMatcher(getActions(REJECTED), rejectHandler)
    }
});

export const contactsReducer = contactsSlice.reducer;
export const { handleFilter } = contactsSlice.actions;
