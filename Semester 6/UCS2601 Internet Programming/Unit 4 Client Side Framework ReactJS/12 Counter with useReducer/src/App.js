// to increment decrement and reset a counter with useReducer


import React from 'react';
import { useReducer } from 'react';


var initialCount=0;



//the name of the function is the first var on the RHS
function reducer(count, action){

  switch(action.type){
    case 'increment': return count+1;
    case 'decrement': return count-1;
    case 'reset': return 0;
  }
}


//print the original value by using the og var on the LHS
export default function App(){
  const [counter, dispatch]=useReducer(reducer, initialCount);
  return(
    <div>

        
        <h1>Counter: {counter}</h1>
        <button onClick={()=> dispatch({type:'increment'})}>Increment</button>
        <button onClick={()=> dispatch({type: 'decrement'})}>Decrement</button>
        <button onClick={()=> dispatch({type:'reset'})}>Reset</button>
    </div>
  )
}