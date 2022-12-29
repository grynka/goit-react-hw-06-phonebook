import Filter from "./Filter/Filter";
import ContactForm from './ContactForm/ContactForm';
import ContactList from "./Contactlist/ContactList";
import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getContacts } from "redux/selectors";
import { deleteContact, addContact, filterContact } from "redux/contactsSlise";



export default function App() {
const filterContacts = useSelector(getContacts)
const dispatch = useDispatch();




useEffect(() => {
})

const handleContactsCreate = event => {
  event.preventDefault();
 const from = event.target;
 dispatch(addContact(from.elements.name.value, from.elements.number.value));
 from.reset()
}

 const changeFilter = event => {
  dispatch(filterContact(event.currentTarget.value))
  };

 const deleteContactId = contactId => {
  dispatch(deleteContact(contactId));
  };


return (
      <>
        <h2>Phonebook</h2>
        <ContactForm onSubmit={handleContactsCreate} />
        <h2>Contacts</h2>
        <Filter onChange={changeFilter} />
        <ContactList contacts={filterContacts} onClick={deleteContactId} />
      </>
    );
}


