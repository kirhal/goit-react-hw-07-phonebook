export const getContactsList = state => state.contacts.data;
export const getIsLoading = state => state.contacts.isLoading;
export const getError = state => state.contacts.error;

export const selectFilter = state => state.filter;

export const selectContacts = state => state.contacts;
