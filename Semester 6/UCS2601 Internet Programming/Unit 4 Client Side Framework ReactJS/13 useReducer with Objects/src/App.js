//modifying a object using useReducer

import React from 'react';
import { useReducer} from 'react';


var studentObject={name:"pooja",age:20};


function changeObject(state, action){
  switch(action.type){
    case "changeName": return {...state, name: action.name}
    case "increment age": return {...state, age: state.age+1}
    case "decrement age": return {...state, age: state.age-1}
  }

}
export default function App(){
  let [ogStudent, dispatch]=useReducer(changeObject, studentObject)

  return(
    
    <div>
        <h1> Student Name: {ogStudent.name} </h1>
        <h1> Student Age: {ogStudent.age} </h1>

       <input value={ogStudent.name} onChange={(e)=> dispatch({type:"changeName", name: e.target.value})}/>
        <button onClick={()=> {dispatch({type: 'increment age'})}}> Increase Age </button>
        <button onClick={()=> {dispatch({type: 'decrement age'})}}> Decrement Age</button>
    </div>
  )
}