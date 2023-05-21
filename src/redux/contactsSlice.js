import { createSlice } from '@reduxjs/toolkit';
import { fetchContacts, postContact, deleteContact } from 'redux/operations';

const handlePending = state => {
  state.isLoading = true;
};
const handleRejected = (state, action) => {
  state.isLoading = false;
  state.error = action.payload;
};

export const contactsSlice = createSlice({
  name: 'contacts',
  initialState: {
    data: [
      { id: 666, name: 'Rosie Simpson', number: '459-12-56' },
      { id: 777, name: 'Hermione Kline', number: '443-89-12' },
    ],
    isLoading: false,
    error: null,
  },
  // reducers: {
  // pushContact(state, action) {
  //   const contacts = state.data;
  //   contacts.push(action.payload);
  // },
  // deleteContact(state, action) {
  //   const contacts = state.data;
  //   state.data = contacts.filter(({ id }) => id !== action.payload);
  // },
  // },
  extraReducers: {
    [fetchContacts.pending]: handlePending,
    [postContact.pending]: handlePending,
    [deleteContact.pending]: handlePending,

    [fetchContacts.rejected]: handleRejected,
    [postContact.rejected]: handleRejected,
    [deleteContact.rejected]: handleRejected,

    [fetchContacts.fulfilled](state, action) {
      state.isLoading = false;
      state.error = null;
      state.data = action.payload;
    },
    [postContact.fulfilled](state, action) {
      state.isLoading = false;
      state.error = null;
      state.data.push(action.payload);
    },
    [deleteContact.fulfilled](state, action) {
      state.isLoading = false;
      state.error = null;
      const contacts = state.data;
      state.data = contacts.filter(({ id }) => id !== action.payload.id);
    },
  },
});

export const contactsReducer = contactsSlice.reducer;

// export const { pushContact, deleteContact } = contactsSlice.actions;

export default contactsSlice.reducer;
