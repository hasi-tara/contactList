
/* eslint-disable react/prop-types */
const StudentItem = ({ id, name, searchTerm, email, phoneNumber }) => {
  const index = name.indexOf(searchTerm);

  return (
    <li key={id}>
      {index === -1 ? (
        name
      ) : (
        <p>
          <span>{name.slice(0, index)}</span>
          <span style={{ backgroundColor: "yellow" }}>
            {name.slice(index, index + searchTerm.length)}
          </span>
          <span>{name.slice(index + searchTerm.length)}</span>
        </p>
      )}
      <p>Email: {email}</p>
      <p>Phone Number: {phoneNumber}</p>
    </li>
  );
};

export default StudentItem;


