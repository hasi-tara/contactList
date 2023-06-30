
import { useState } from "react";
import Form from "./components/Form";
import StudentList from "./components/StudentsList";

function App() {
  const [value, setValue] = useState("");
  const [email, setEmail] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [students, setStudents] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  const inputChangeHandler = (value) => {
    setValue(value);
  };

  const emailChangeHandler = (email) => {
    setEmail(email);
  };

  const phoneNumberChangeHandler = (phoneNumber) => {
    setPhoneNumber(phoneNumber);
  };

  const submitFormHandler = (e) => {
    e.preventDefault();
    if (value.trim()) {
      setStudents([
        ...students,
        { id: students.length + 1, name: value, email, phoneNumber },
      ]);
      setValue("");
      setEmail("");
      setPhoneNumber("");
    } else {
      alert("Please enter a name");
    }
  };

  const searchHandler = (e) => {
    setSearchTerm(e.target.value);
  };

  return (
    <div>
      <Form
        submitFormHandler={submitFormHandler}
        inputChangeHandler={inputChangeHandler}
        emailChangeHandler={emailChangeHandler}
        phoneNumberChangeHandler={phoneNumberChangeHandler}
        value={value}
        email={email}
        phoneNumber={phoneNumber}
        searchHandler={searchHandler}
        searchTerm={searchTerm}
      />
      <StudentList students={students} searchTerm={searchTerm} />
    </div>
  );
}

export default App;
