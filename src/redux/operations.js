import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

axios.defaults.baseURL = 'https://6463ca5b127ad0b8f8917480.mockapi.io';

export const fetchContacts = createAsyncThunk(
  'contacts/fetchAll',
  async (_, thunkAPI) => {
    try {
      const response = await axios.get('/contacts');
      return response.data;
    } catch (err) {
      return thunkAPI.rejectWithValue(err.message);
    }
  }
);

export const addContact = createAsyncThunk('contacts/addContact', async () => {
  const response = await axios.push('/contacts');
  return response.data;
});

export const deleteContact = createAsyncThunk(
  'contacts/deleteContact',
  async () => {
    const response = await axios.delete('/contacts');
    return response.data;
  }
);
