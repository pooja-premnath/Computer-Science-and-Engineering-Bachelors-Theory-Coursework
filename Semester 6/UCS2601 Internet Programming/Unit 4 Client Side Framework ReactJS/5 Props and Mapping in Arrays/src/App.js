import React from 'react';
import Student from './Student';


const details=[
  {id: "2110152",
  name: "pooja"
},

{id:"2110153",
name: "pranav"},

{id: "2110154",
name: "premnath"}



]
export default function App(){
  return(
    <Student studentDetails={details}/>
  )
}