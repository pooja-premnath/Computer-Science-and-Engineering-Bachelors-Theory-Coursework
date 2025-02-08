import {useState, useEffect} from 'react';
import axios from 'axios';


export default function App(){
  const [userList, userState]=useState([]);
  useEffect(()=>{
    axios.get("http://localhost:3001/userEndPoint")
    .then((response)=>{userState(response.data)})
    .catch((err)=>{console.log(err)})

  },[])



  return(
    <div>
    <h1>Basic MVC Connectivity</h1>{
    userList.map(mapVar=>{
      return <div>
          <h1>{mapVar.name}</h1>
          <h1>{mapVar.rno}</h1>
      </div>
    })}
    </div>
  );

}