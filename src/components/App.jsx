import { useState, useEffect } from "react";
import { nanoid } from 'nanoid'

import { ContactForm } from "./ContactForm/ContactForm";
import { Filter } from "./Filter/Filter";
import { ContactList } from "./ContactList/ContactList";

import css from './App.module.css'

export function App () {
  const [contacts, setContacts] = useState(() => getContactsFromLocalStorage());
  const [filter, setFilter] = useState('');

  function getContactsFromLocalStorage () {
    const savedContacts = JSON.parse(localStorage.getItem('contacts'))
    if (savedContacts) {
      return savedContacts
    } else {
      return []
    }
  }

  useEffect(() => {
    localStorage.setItem('contacts', JSON.stringify(contacts)) 
  }, [contacts])
  
  const handleSubmit = (e) => {
    const form = e.currentTarget;
    e.preventDefault();
  
    const newContact = {
      id: nanoid(),
      name: form.elements.name.value,
      number: form.elements.number.value, 
    };

    if(contacts.find(({name}) => name === newContact.name)) {
      alert (`${newContact.name} is already in contacts`)

    } else {setContacts((prevState) => [...prevState, newContact])}

    form.reset()
  }

 const handleChange = (e) => {
    const {value} = e.target;
    setFilter(value);
  }

  const handleDeleteButton = (id) => {
    setContacts(prevState => {
      const updatedContacts = prevState.filter(contact => contact.id !== id);
      return updatedContacts
    })
  }

  return (
    <div className={css.container}>
  <h1 className={css.main_title}>Phonebook</h1>
  <ContactForm  
    handleSubmit={handleSubmit}
  />

  <h2 className={css.title}>Contacts</h2>
  <Filter  handleChange={handleChange}/>
  <ContactList 
    contacts={contacts} 
    filter={filter}
    handleDeleteButton={handleDeleteButton}/>
</div>
    )
}