import { createSlice } from '@reduxjs/toolkit';
import { initialState } from 'redux/state';
import { getActions } from './getActionsThunk';
import {
  fulfilledHandler,
  fulfilledHandlerAdd,
  fulfilledHandlerDelete,
  fulfilledHandlerGet,
  pendingHandler,
  rejectHandler,
} from './handlerFunctions';

import {
  addContactRequest,
  deleteContactRequest,
  getContactsRequest,
} from './operations';

import { STATUS_HANDLER } from '../statusHandler';

const contactsSlice = createSlice({
  name: 'contacts',

  initialState,

  reducers: {
    handleFilter: (state, { payload }) => {
      state.filter = payload;
    },
  },

  extraReducers: builder => {
    const { PENDING, FULFILLED, REJECTED } = STATUS_HANDLER;
    builder
      .addCase(getContactsRequest.fulfilled, fulfilledHandlerGet)
      .addCase(addContactRequest.fulfilled, fulfilledHandlerAdd)
      .addCase(deleteContactRequest.fulfilled, fulfilledHandlerDelete)
      .addMatcher(getActions(PENDING), pendingHandler)
      .addMatcher(getActions(FULFILLED), fulfilledHandler)
      .addMatcher(getActions(REJECTED), rejectHandler);
  },
});

export const contactsReducer = contactsSlice.reducer;
export const { handleFilter } = contactsSlice.actions;
