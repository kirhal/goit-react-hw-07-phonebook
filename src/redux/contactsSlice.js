import { createSlice } from '@reduxjs/toolkit';
import { fetchContacts, addContact, deleteContact } from 'redux/operations';

export const contactsSlice = createSlice({
  name: 'contacts',
  initialState: {
    data: [
      { id: 1, name: 'Rosie Simpson', number: '459-12-56' },
      { id: 2, name: 'Hermione Kline', number: '443-89-12' },
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
    [fetchContacts.pending](state) {
      state.isLoading = true;
    },
    [fetchContacts.fulfilled](state, action) {
      state.isLoading = false;
      state.error = null;
      state.data = action.payload;
    },
    [fetchContacts.rejected](state, action) {
      state.isLoading = false;
      state.error = action.payload;
    },
  },
});

export const contactsReducer = contactsSlice.reducer;

// export const { pushContact, deleteContact } = contactsSlice.actions;

export default contactsSlice.reducer;
