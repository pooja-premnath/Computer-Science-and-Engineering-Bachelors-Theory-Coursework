import React from "react";
import Student from "./Student";

const studentArray=[
  {id:"1",name: "pooja", email: "pooja2110152@ssn.edu.in"},
  {id:"2",name: "preetha", email: "preetha2110152@ssn.edu.in"},
  {id:"3",name: "pranav", email: "pranav2110152@ssn.edu.in"},
  {id:"4",name: "premnath", email: "premnath2110152@ssn.edu.in"},
  {id:"5",name: "rita", email: "rita2110152@ssn.edu.in"},
  {id:"6",name: "sita", email: "sita2110152@ssn.edu.in"},
  {id:"7",name: "geetha", email: "geetha2110152@ssn.edu.in"}

]


export default function App(){
  return(
    <Student studentDetails={studentArray}/>
  )
}