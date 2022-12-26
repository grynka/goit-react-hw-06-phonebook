import React, { useState } from "react"
import { Label, Input, Forms, Button } from './ContactForm.styled';
import PropTypes from 'prop-types';
import { addContact } from "../../redux/contactsSlise"
import { useDispatch } from "react-redux";



export default  function ContactForm({onSubmit}) {
const [name, setName] = useState('');
const [number, setNumber] = useState('');
const dispatch = useDispatch();

const handleChange = event => {
  switch (event.currentTarget.name) {
    case "name": setName(event.currentTarget.value)
    break

    case "number": setNumber(event.currentTarget.value)
    break

    default:
    return
  }

  console.log(name, number)
};

const handleContactsCreate = event => {
    event.preventDefault();
   const from = event.target;
   dispatch(addContact(from.elements.name.value, from.elements.number.value));
   from.reset()
  }


return (
  <Forms onSubmit={handleContactsCreate}>
    <Label>
      Name
      <Input
        value={name}
        type="text"
        name="name"
        onChange={handleChange}
        pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
        title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
        required
      />
    </Label>
    <Label>
      Phone
      <Input
        type="tel"
        name="number"
        value={number}
        onChange={handleChange}
        pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
        title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
        required
      />
    </Label>
    <p>
      <Button type="submit">Add contact</Button>
    </p>
  </Forms>
);
}

   
ContactForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};