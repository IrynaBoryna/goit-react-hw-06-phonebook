import { createSlice } from '@reduxjs/toolkit';

const contactsSlice = createSlice({
  name: 'contacts',
  initialState: [],
  reducers: {
    addContacts(state, action) {
      return state.some(contact => contact.name === action.payload.name)
        ? alert(` ${action.payload.name} is already in contacts`)
        : [...state, action.payload];
    },
    deleteContacts(state, action) {
      return state.filter(contact => contact.id !== action.payload);
    },
  },
});

export const contactsReducer = contactsSlice.reducer;
export const { addContacts, deleteContacts } = contactsSlice.actions;

