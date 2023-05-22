import { createSelector } from '@reduxjs/toolkit';

export const getContactsList = state => state.contacts.data;
export const getIsLoading = state => state.contacts.isLoading;
export const getError = state => state.contacts.error;

export const selectFilter = state => state.filter;

export const selectContacts = state => state.contacts;

const selectContactsData = state => state.contacts.data;

// export const selectFilteredContacts = createSelector(
//   [selectContactsData],
//   data => {
//     console.log('Calculating task count. Now memoized!');
//     if (data.length > 0) {
//       return data.filter(({ name }) =>
//         name.toLowerCase().includes(selectFilter)
//       );
//     }
//   }
// );
