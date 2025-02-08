import React from "react";


//write function that will choose a random word
function chooseWord(){
  const wordList=["apples", "bananas", "grapes"];
  const i= Math.floor(Math.random()*3)
  return wordList[i];
}

export default function App(){
  return(
    <div>
      <h1>I like to eat {chooseWord()}</h1>
    </div>
  )
}