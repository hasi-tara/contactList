const Form = ({ submitFormHandler, inputChangeHandler, searchHandler, value, email, phoneNumber }) => {
  const handleInputChange = (e) => {
    if (e.target.name === 'value') {
      inputChangeHandler(e.target.value);
    } else if (e.target.name === 'email') {
      emailChangeHandler(e.target.value);
    } else if (e.target.name === 'phoneNumber') {
      phoneNumberChangeHandler(e.target.value);
    }
  };

  return (
    <form onSubmit={submitFormHandler}>
      <input
        placeholder="Enter Student Name"
        name="value"
        value={value}
        onChange={handleInputChange}
      />
      <input
        placeholder="Enter Email"
        name="email"
        value={email}
        onChange={handleInputChange}
      />
      <input
        placeholder="Enter Phone Number"
        name="phoneNumber"
        value={phoneNumber}
        onChange={handleInputChange}
      />
      <button type="submit" style={{ margin: 10 }}>
        Add
      </button>
      <div>
        <input
          placeholder="Search"
          name="searchTerm"
          value={searchTerm}
          onChange={searchHandler}
        />
      </div>
    </form>
  );
};

export default Form;

