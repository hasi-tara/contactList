

function ContactForm({handleEmailChange,handleNameChange,handlePhoneNumberChange,name,email,phoneNumber,submitForm }) {


  return (
    <form onSubmit={submitForm}>
      <input
        type="text"
        placeholder="Enter Contact Name"
        value={name}
        onChange={handleNameChange}
        required
      />
      <input
        type="tel"
        placeholder="Enter Contact Phone Number"
        value={phoneNumber}
        onChange={handlePhoneNumberChange}
        required
      />
      <input
        type="email"
        placeholder="Enter Contact Email"
        value={email}
        onChange={handleEmailChange}
        required
      />
      <button type="submit">Add New Contact</button>
    </form>
  );
}

export default ContactForm;
