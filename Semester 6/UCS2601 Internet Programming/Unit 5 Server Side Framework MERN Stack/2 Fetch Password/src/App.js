import {useState} from 'react';
import axios from 'axios';


export default function App(){

  const [name, setUserName]=useState('');
  const [rollno, setRollNumber]=useState('');

  const handleNameChange=(e) =>{
      setUserName(e.target.value);
  }

  const fetchRollNumber=()=>{
    axios.get(`http://localhost:3001/userEndPoint?name=${name}`)
    .then((responseRoll) => setRollNumber(responseRoll.data))
    .catch((err) =>{console.log(err)})
  }


  return(

    <div>
      <h1>Fetch Roll Number Details</h1>
      <input type="text" value={name} onChange={handleNameChange} placeholder='Enter name'/>
      <button onClick={fetchRollNumber}>Fetch Roll Number</button>
      {rollno ? <h2>{name}'s Roll Number: {rollno}</h2> : null}
    </div>
  )


}