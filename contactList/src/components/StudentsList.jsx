
/* eslint-disable react/jsx-key */
import StudentItem from "./StudentItem";

/* eslint-disable react/prop-types */
const StudentList = ({ students, searchTerm }) => {
  return (
    <ul>
      {students
        .filter(({ name }) => name.includes(searchTerm))
        .map(({ id, name, email, phoneNumber }) => (
          <StudentItem
            key={id}
            id={id}
            name={name}
            searchTerm={searchTerm}
            email={email}
            phoneNumber={phoneNumber}
          />
        ))}
    </ul>
  );
};

export default StudentList;
