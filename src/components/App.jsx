// import React from 'react';
// import { nanoid } from 'nanoid';
import { Form } from './Form';
import { ContactList } from './ContactList/ContactList';
import { Filter } from './Filter/Filter';
// import { useEffect } from 'react';
// import { useDispatch, useSelector } from 'react-redux';
// import { getContacts, removeContact } from './redux/contactsSlice';
// import { setStatusFilter } from './redux/filtersSlice';

export function App() {
  // console.log(contacts);

  // const changeFilter = filter => {
  //   () => dispatch(setStatusFilter(filter));
  // };

  // const removeContact = contactId => {
  //   setContacts(contacts.filter(({ id }) => id !== contactId));
  // };

  // useEffect(() => {
  //   const contactsList = localStorage.getItem('contacts');
  //   const parsedContacts = JSON.parse(contactsList);

  //   if (parsedContacts) {
  //     store.dispatch(setContacts(parsedContacts));
  //   }
  // }, []);

  // useEffect(() => {
  //   localStorage.setItem('contacts', JSON.stringify(contacts));
  // }, [contacts]);

  return (
    <div
      style={{
        height: '100vh',
        display: 'block',
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: 40,
        color: '#010101',
      }}
    >
      <h1>Phonebook</h1>
      <>
        <Form
        // onSubmit={formSubmitHandler}
        />
        <h2>Contacts</h2>
        {
          <Filter
          // value={filters}
          // onChangeFilter={e => dispatch(setStatusFilter(filters))}
          />
        }
        {
          // visibleContacts.length > 0 && (
          <ContactList
          // contacts={visibleContacts}
          // onRemoveContact={() => dispatch(removeContact())}
          />
          // )
        }
      </>
    </div>
  );
}
