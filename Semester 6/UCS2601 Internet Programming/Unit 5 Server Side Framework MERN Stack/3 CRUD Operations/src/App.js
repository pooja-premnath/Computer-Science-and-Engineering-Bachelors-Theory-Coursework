// app.js
import React, { useState } from 'react';
import axios from 'axios';

export default function App() {
  const [animalDetails, setAnimalDetails] = useState({
    name: '',
    legs: 0,
    color: '',
    count: 0,
  });

  const handleChanges = (e) => {
    const { name, value } = e.target;
    setAnimalDetails((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const insertRecord = () => {
    axios.post('http://localhost:3001/animalEndPoint/insert', animalDetails)
      .then((response) => {
        setAnimalDetails({ name: '', legs: 0, color: '', count: 0 });
      })
      .catch((err) => {
        console.log(err);
        
      });
  };

  const updateRecord = () => {
    axios.put('http://localhost:3001/animalEndPoint/update', animalDetails)
      .then((response) => {
        setAnimalDetails({ name: '', legs: 0, color: '', count: 0 });
      })
      .catch((err) => {
        console.log(err);
       
      });
  };

  const deleteRecord = () => {
    axios.delete(`http://localhost:3001/animalEndPoint/delete?animalName=${animalDetails.name}`)
      .then((response) => {
        setAnimalDetails({ name: '', legs: 0, color: '', count: 0 });
      })
      .catch((err) => {
        console.log(err);
        
      });
  };

  return (
    <div>
      <h1>Insert, Update and Delete Animal Details</h1>
      <input type="text" name="name" value={animalDetails.name} onChange={handleChanges} placeholder="Enter animal name" />
      <input type="number" name="legs" value={animalDetails.legs} onChange={handleChanges} placeholder="Enter number of legs" />
      <input type="text" name="color" value={animalDetails.color} onChange={handleChanges} placeholder="Enter the color of the animal" />
      <input type="number" name="count" value={animalDetails.count} onChange={handleChanges} placeholder="Enter the number of animals" />
      <button onClick={insertRecord}>Insert Record</button>
      <button onClick={updateRecord}>Update Record</button>
      <button onClick={deleteRecord}>Delete Record</button>
    </div>
  );
}
