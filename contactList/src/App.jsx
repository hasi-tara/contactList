import React, { useState } from 'react';
import ContactForm from './components/ContactForm';
import ContactList from './components/ContactList';
import './styles/styles.css'
function App() {
  const [contacts, setContacts] = useState([]);
  const [name, setName] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [email, setEmail] = useState('');
  
  const addContact = (newContact) => {
    setContacts([...contacts, newContact]);
  };
  const handleNameChange = (e) => {
    setName(e.target.value);
  };

  const handlePhoneNumberChange = (e) => {
    setPhoneNumber(e.target.value);
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const submitForm = (e) => {
    e.preventDefault();
    if (name !== '' && phoneNumber !== '' && email !== '') {
      const newContact = {
        name,
        phoneNumber,
        email
      };
      addContact(newContact);
      setName('');
      setPhoneNumber('');
      setEmail('');
    }
  };
  
  return (
    <div>
      <h1>Contact List</h1>
      <ContactForm 
      submitForm={submitForm}
      handleEmailChange={handleEmailChange}
      handleNameChange={handleNameChange}
      handlePhoneNumberChange={handlePhoneNumberChange}
      addContact={addContact} />
      <ContactList contacts={contacts} />
    </div>
  );
}


export default App;
