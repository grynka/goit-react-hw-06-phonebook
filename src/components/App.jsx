import Filter from "./Filter/Filter";
import ContactForm from './ContactForm/ContactForm';
import ContactList from "./Contactlist/ContactList";
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getContacts, getFilter } from "redux/selectors";
import { deleteContact, addContact } from "redux/contactsSlise";
import { filterContacts } from "redux/filterSlise";



export default function App() { 
const contacts = useSelector(getContacts);
const filter = useSelector(getFilter);
const filteredContacts = contacts.filter(contact =>
contact.name.includes(filter))


console.log(contacts.filter(contact =>
contact.name.includes(filter)))


const dispatch = useDispatch();

useEffect(() => {
if (filter !== "")  {
  console.log(filter)}
}, [filter])

const handleContactsCreate = event => {
  event.preventDefault();
 const from = event.target;
 dispatch(addContact(from.elements.name.value, from.elements.number.value));
 from.reset()
}

 const changeFilter = event => {
  dispatch(filterContacts(event.currentTarget.value))
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
        <ContactList contacts={filteredContacts} onClick={deleteContactId} />
      </>
    );
}


