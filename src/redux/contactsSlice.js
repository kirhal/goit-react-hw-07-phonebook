import { createSlice } from '@reduxjs/toolkit';

export const contactsSlice = createSlice({
  name: 'contacts',
  initialState: {
    data: [
      { id: 1, name: 'Rosie Simpson', number: '459-12-56' },
      { id: 2, name: 'Hermione Kline', number: '443-89-12' },
    ],
  },
  reducers: {
    pushContact(state, action) {
      const contacts = state.data;
      contacts.push(action.payload);
    },
    deleteContact(state, action) {
      const contacts = state.data;
      state.data = contacts.filter(({ id }) => id !== action.payload);
    },
  },
});

export const { pushContact, deleteContact } = contactsSlice.actions;

export default contactsSlice.reducer;
