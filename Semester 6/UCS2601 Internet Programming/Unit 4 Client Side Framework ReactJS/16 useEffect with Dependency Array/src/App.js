import React from 'react';
import { useState, useEffect } from "react";

function Timer() {
  const [count, setCount] = useState(0);
  const [msg, setMsg] = useState('');
  function increaseCount(){
   window.alert("Hi");
    setCount((prev) => prev + 1);
  }
  function changeMsg(event){
     setMsg(event.target.value);
  }

  useEffect(() => {
      console.log(count);
      console.log(msg);
  },[count, msg]);
  return (
    <div>
        <h1>I've rendered {count} times!</h1>
        <input type="text" placeholder="Enter the Message" onChange={changeMsg}/>
        <button onClick={()=>{increaseCount()}}>increaseCount</button>
    </div>  
  );
}
export default Timer;
