import React from 'react';
import {useState} from 'react';


export default function App(){

  const [counter, setCount]=useState(0);

  function increment(){
    setCount(counter+1);
  }

  function decrement(){
    setCount(counter-1);
  }



    return(
  <div>
    <h1>Counter Value: {counter}</h1>
    <button onClick={increment}>Increment</button>
    <button onClick={decrement}>Decrement</button>
  </div>)
}