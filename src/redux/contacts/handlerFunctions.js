function pendingHandler(state) {
  state.error = null;
  state.status = 'pending';
}
function fulfilledHandler(state) {
  state.status = 'fulfilled';
}
function fulfilledHandlerGet(state, { payload }) {
  state.status = 'resolved';
        state.contacts = payload;
}
function fulfilledHandlerAdd(state, { payload }) {
  state.status = 'resolved';
  state.contacts = [...state.contacts, payload];
}
function fulfilledHandlerDelete(state, { payload }) {
  state.status = 'resolved';
  state.contacts = state.contacts.filter(
    contact => contact.id !== payload.id
  );
}

function rejectHandler(state, { payload }) {
  state.status = 'rejected';
  state.error = payload;
}

export {
  pendingHandler,
  fulfilledHandler,
  fulfilledHandlerGet,
  fulfilledHandlerAdd,
  fulfilledHandlerDelete,
  rejectHandler,
};
