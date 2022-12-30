import { createSlice, nanoid } from "@reduxjs/toolkit";

const contactsInitialState = [
  {name: 'Ihor Kozhemyakin', number: '+48146818484', id: '2FiIoQ4O9Qg7DTxqw5AS0'},
  {name: 'Ihor Kozhemyaki', number: '+48146818484', id: '2FiIoQ4O9Qg7DTxqw5AS1'}
];

const contactsSlice = createSlice({
  name: "contacts",
  initialState: contactsInitialState,
  reducers: {
    addContact: {
      
      reducer(state, action) {
      const contactsName = (state.map(contact => contact.name))
      if (contactsName.includes(action.payload.name))
      {
       alert(contactsName + ' allready exist')
       return
      }
       else
        state.push(action.payload);
      },
      prepare(name, number) {
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
      const index = state.filter(contact => contact.id !== action.payload.id);
      state.splice(index, 1);
    },
   
  },
});
export const { addContact, deleteContact } = contactsSlice.actions;
export const contactsReducer = contactsSlice.reducer;