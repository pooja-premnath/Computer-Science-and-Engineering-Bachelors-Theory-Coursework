import React from "react";
import {useState} from "react";

const student={id: 1, name: "pooja"};




export default function App(){

  const [student1,updateStudentState]=useState(student);

function updateDetails(){
  const newId=document.getElementById("studId").value;
  const newName=document.getElementById("studName").value;
  updateStudentState({id: newId, name: newName})
  
}




return(
  <div>
    <h1>Student ID: {student1.id}</h1>
    <h1>Student Name: {student1.name}</h1>

    <br/>
    <input type="number" id="studId" placeholder="Input new ID"/>
    <input type="text" id="studName" placeholder="Input new name"/>
    <button onClick={updateDetails}>Update Student Details</button>

    
  </div>
)
}