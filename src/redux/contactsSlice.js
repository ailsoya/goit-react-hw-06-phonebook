import { createSlice, nanoid } from "@reduxjs/toolkit";

const contactsInitialState = []

const contactsSlice = createSlice({
  name: "contacts",
  initialState: contactsInitialState,
  reducers: {
    addContact: {
      reducer(state, action) {
        state.push(action.payload)
      },
      prepare(name, number) {
        return {
          payload: {
            id: nanoid(),
            name: name,
            number: number,
          },
        }
      },
    },
    deleteContact(state, action) {
      const index = state.findIndex(contact => contact.id === action.payload)
      state.splice(index, 1)
    },
  },
})

export const { addContact, deleteContact } = contactsSlice.actions
export const contactsReducer = contactsSlice.reducer
