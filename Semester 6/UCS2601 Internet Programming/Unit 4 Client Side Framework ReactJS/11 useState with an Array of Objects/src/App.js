import React, { useState } from 'react';

export default function App() {
  const initialStudentDetails = [
    { id: 1, name: 'pooja' },
    { id: 2, name: 'rita' },
    { id: 3, name: 'pranav' }
  ];

  const [studentDetails, setStudentDetails] = useState(initialStudentDetails);
  const [student, updateStudent] = useState({ id: '', name: '' });

  const handleChanges = (e) => {
    const { name, value } = e.target;
    updateStudent((prevState) => ({
      ...prevState,
      [name]: value
    }));
  };

  const updateStudentDetails = () => {
    setStudentDetails((prevDetails) =>
      prevDetails.map((studentDetail) =>
        studentDetail.id === parseInt(student.id) ? { ...studentDetail, name: student.name } : studentDetail
      )
    );
  };

  return (
    <div>
      <h1>Student Details</h1>
      <input
        type="text"
        name="id"
        placeholder="Enter student id"
        onChange={handleChanges}
        value={student.id}
      />
      <input
        type="text"
        name="name"
        placeholder="Enter student name"
        onChange={handleChanges}
        value={student.name}
      />
      <button type="submit" onClick={updateStudentDetails}>
        Update Details
      </button>

      <br />
      <br />
      <br />

      <h1>Display Details</h1>
      {studentDetails.map((mapVar) => (
        <ul key={mapVar.id}>
          <li>Id: {mapVar.id}</li>
          <li>Name: {mapVar.name}</li>
        </ul>
      ))}
    </div>
  );
}
