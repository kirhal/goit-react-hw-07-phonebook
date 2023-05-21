import axios from 'axios';

import {
  fetchingInProgress,
  fetchingSuccess,
  fetchingError,
} from 'redux/contactsSlice';

axios.defaults.baseURL = 'https://6463ca5b127ad0b8f8917480.mockapi.io';

const fetchContacts = async dispatch => {
  try {
    dispatch(fetchingInProgress());
    const response = await axios.get('/contacts');
    dispatch(fetchingSuccess(response.data));
  } catch (e) {
    dispatch(fetchingError(e.message));
  }
};
