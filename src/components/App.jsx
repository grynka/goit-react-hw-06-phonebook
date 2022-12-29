import Filter from "./Filter/Filter";
import ContactForm from './ContactForm/ContactForm';
import ContactList from "./Contactlist/ContactList";
import { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { getContacts } from "redux/selectors";
import { deleteContact } from "redux/contactsSlise";

export default function App() {
const [contacts, setContacts] = useState(() => {
  const savedContacts = localStorage.getItem('contacts');
    if (savedContacts !== null) {
      return JSON.parse(localStorage.getItem('contacts'))
      }
      return []
})
const [filter, setFilter] = useState('')
const filterContacts = useSelector(getContacts)



useEffect(() => {
  localStorage.setItem('contacts', JSON.stringify(contacts))
}, [contacts])

const formSubmitHandler = data => {
    setContacts( state => [...state, data] );
    }

 const changeFilter = event => {
    setFilter(event.currentTarget.value)
  };

 const deleteContact = contactId => {
    setContacts(
     contacts.filter(contact => contact.id !== contactId)
    )
  };


return (
      <>
        <h2>Phonebook</h2>
        <ContactForm onSubmit={formSubmitHandler} />
        <h2>Contacts</h2>
        <Filter value={filter} onChange={changeFilter} />
        <ContactList contacts={filterContacts} onClick={deleteContact} />
      </>
    );
}


