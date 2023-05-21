import { createSlice } from '@reduxjs/toolkit';

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
  reducers: {
    pushContact(state, action) {
      const contacts = state.data;
      contacts.push(action.payload);
    },
    deleteContact(state, action) {
      const contacts = state.data;
      state.data = contacts.filter(({ id }) => id !== action.payload);
    },
    fetchingInProgress(state) {
      state.isLoading = true;
    },
    fetchingSuccess(state, action) {
      state.isLoading = false;
      state.error = null;
      state.data = action.payload;
    },
    fetchingError(state, action) {
      state.isLoading = false;
      state.error = action.payload;
    },
  },
});

export const {
  pushContact,
  deleteContact,
  fetchingInProgress,
  fetchingSuccess,
  fetchingError,
} = contactsSlice.actions;

export default contactsSlice.reducer;
