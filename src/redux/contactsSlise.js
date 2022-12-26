import { createSlice, nanoid } from "@reduxjs/toolkit";

const contactsInitialState = [];

const contactsSlice = createSlice({
  name: "contacts",
  initialState: contactsInitialState,
  reducers: {
    addContact: {
      reducer(state, action) {
        state.push(action.payload);
      },
      prepare(name, number) {
        const contactsName = (this.reducer().map(contact => contact.name))
        if (contactsName.includes(name)) {
      alert(name + ' is allready in contact');
    } else
        return {
          payload: {
        name: name,
        number: number,
        id: nanoid(),
          },
        };
      },
    },
    deleteContact(state, action) {
      const index = state.filter(contact => contact.id !== action.payload);
      state.splice(index, 1);
    },
    filterContact(state, action) {
        const index = state.filter(contact =>
contact.name.toLowerCase().includes(action.payload))
      state.splice(index, 1);
    },
  },
});
// Експортуємо генератори екшенів та редюсер
export const { addContact, deleteContact, filterContact } = contactsSlice.actions;
export const contactsReducer = contactsSlice.reducer;