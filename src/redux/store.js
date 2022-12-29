import { configureStore } from "@reduxjs/toolkit";
import { contactsReducer, filterContact } from "./contactsSlise";

export const store = configureStore({
  reducer: {
    contacts: contactsReducer,
    filter: filterContact,
 }
});
