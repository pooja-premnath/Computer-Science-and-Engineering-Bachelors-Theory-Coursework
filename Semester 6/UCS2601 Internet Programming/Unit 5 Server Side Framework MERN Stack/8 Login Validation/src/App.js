import {useState} from 'react';
import axios from 'axios';

export default function App(){


  const [name, setName]= useState('');
  const [password, setPassword]=useState('');
  const [message, setMessage]=useState('')



  const validateCredentials = () =>{
    axios.get(`http://localhost:3001/userEndPoint?name=${name}&password=${password}`)
    .then((response) => {
      if (response.data ==="Not Found"){
        setMessage("Incorrect Credentials/Not Found")
        setPassword('')
      }

      else{
        setMessage("Correct Credentials")
        setPassword(response.data)
      }
    })
    .catch((err)=>{console.log(err)})
  }


  return(
    <div>
      <input type= "text" placeholder='Enter name' onChange= { (e) => {setName(e.target.value)}}/>
      <input type= "text" placeholder="Enter password" onChange= { (e) => {setPassword(e.target.value)}}/>
      <button onClick={validateCredentials}>Submit</button>
      <p>{message}</p>
    </div>
  )
}