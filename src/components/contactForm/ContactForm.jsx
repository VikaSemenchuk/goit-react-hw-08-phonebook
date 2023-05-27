import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { nanoid } from '@reduxjs/toolkit';
import { selectContacts } from 'redux/contacts/selectors';
import { addContactRequest } from 'redux/contacts/operations';
import { toast } from 'react-toastify';

import { Input, Label } from 'styles/Form.styled';
import { Button } from 'styles/Button.styled';

export function ContactForm() {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

  const dispatch = useDispatch();
  const contacts = useSelector(selectContacts);

  function handleChange({ currentTarget: { name, value } }) {
    if (name === 'name') setName(value);
    if (name === 'number') setNumber(value);
  }

  function handleSubmit(e) {
    e.preventDefault();

    const isExistContact = contacts.some(
      contact => contact.name.toLowerCase().trim() === name.toLowerCase().trim()
    );

    if (isExistContact) {
      toast.warning(`Contact ${name} is already exists!`);
      return;
    }

    dispatch(addContactRequest({ name: name.trim(), number }));
    toast.success(`Contact ${name} successful existed!`);

    reset();
  }

  function reset() {
    setName('');
    setNumber('');
  }
  const nameId = nanoid();
  const numberId = nanoid();

  return (
    <form onSubmit={handleSubmit}>
      <Label htmlFor={nameId}>Name</Label>
      <Input
        type="text"
        name="name"
        id={nameId}
        pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
        title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
        value={name}
        onChange={handleChange}
        required
      />
      <Label htmlFor={numberId} className="form-label">
        Number
      </Label>
      <Input
        type="tel"
        name="number"
        id={numberId}
        pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,2}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
        title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
        value={number}
        onChange={handleChange}
        required
      />

      <Button type="submit" className="formBtn">
        Add Contact
      </Button>
    </form>
  );
}
