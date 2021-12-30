import React, { useState, useEffect } from 'react';
import './App.css'; 
// import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
// import { uuid } from 'uuidv4'
import Header from './Header';
import AddContact from './AddContact';
import ContactList from './ContactList';

const uuid = require('uuid')   

function App() {
  const LOCAL_STORAGE_KEY = "contacts";
  const [contacts, setContacts] = useState([]); 

  const addContactHandler = (contact) => {
    console.log(contact);
    setContacts([...contacts, { id: uuid(), ...contact }]);
  };

  const removeContactHandler = (id) => {
    const newContactList = contacts.filter((contact) => {
      return contact.id !== id;
    });

    setContacts(newContactList);
  }

  useEffect(() => {
  const retrieveContacts = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY));
  if (retrieveContacts) setContacts(retrieveContacts);
  }, []);

  useEffect(() => {
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(contacts));
  }, [contacts]);

  return (
    <div className='ui container'>
      
        <Header/>
        {/* <Route path="/add" component={AddContact} />
        <Route path="/" component={ContactList} /> */}
      <AddContact addContactHandler={addContactHandler}/>
      <ContactList contacts={contacts}  getContactId = {removeContactHandler}/>
     
      
      </div>
  );
}

export default App;
