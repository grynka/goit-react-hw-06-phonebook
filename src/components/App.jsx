import Filter from "./Filter/Filter";
import ContactForm from './ContactForm/ContactForm';
import ContactList from "./Contactlist/ContactList";
import { useState, useEffect } from "react";
import { useSelector } from "react-redux";


export default function App() {
const [contacts, setContacts] = useState(() => {
  const savedContacts = localStorage.getItem('contacts');
    if (savedContacts !== null) {
      return JSON.parse(localStorage.getItem('contacts'))
      }
      return []
})
const [filter, setFilter] = useState('')
const normalizedFilter = filter.toLowerCase();
const filterContacts = contacts.filter(contact =>
contact.name.toLowerCase().includes(normalizedFilter))



useEffect(() => {
  localStorage.setItem('contacts', JSON.stringify(contacts))
}, [contacts])

const formSubmitHandler = data => {
    const contactsName = (contacts.map(contact => contact.name))
    if (contactsName.includes(data.name)) {
      alert(data.name + ' is allready in contact');
    } else
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


