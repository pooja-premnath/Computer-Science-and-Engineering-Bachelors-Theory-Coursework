import {useState, useEffect} from 'react';

import Student from "./Student";



export default function App(){

  const [message, setMessage]= useState([]);

  useEffect( () =>{
    fetch("http://localhost:3001/endPoint")
    .then((res) =>res.json())
    .then((data) => setMessage(data.message))
  },[])


  return(
    <div>
      <h1> Student Details</h1>
      <Student studentDetails={message}/>
    </div>
  )
}