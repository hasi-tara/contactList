import React, { useState } from 'react';

function ContactList({ contacts }) {
  const [searchTerm, setSearchTerm] = useState('');

  // تابع برای جستجو در لیست مخاطبین
  const filteredContacts = contacts.filter((contact) =>
    contact.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  
  return (
    <div>
      <input
        type="text"
        placeholder="Searching based on Name"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      <ul>
        {filteredContacts.map((contact, index) => (
          <li key={index}>
            <span> Name: {contact.name},{' '}</span>
            <span> Phone Number: {contact.phoneNumber},{' '}</span>
            <span> Email: {contact.email}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ContactList;
