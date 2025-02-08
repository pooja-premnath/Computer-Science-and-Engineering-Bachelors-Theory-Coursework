import React from "react"


const date= new Date();




const personDetails={
  name: "Pooja Premnath",
  theme: {
    color: "pink",
    backgroundColor: "black"
  }
}


function findDay(date){
  const day=date.getDay();
  switch(day){
    case 0: return "Sunday";
    case 1: return "Monday";
    case 2: return "Tuesday";
    case 3: return "Wednesday";
    case 4: return "Thursday";
    case 5: return "Friday";
    case 6: return "Saturday"
  }
}

export default function App(){

return(
<div style={personDetails.theme}>
  <h1>{personDetails.name}'s To Do List on {findDay(date)}</h1>
  <ul>
    <li>Eat food</li>
    <li>Study Internet Programming </li>
    <li>Work out ToC Practice Sums</li>
  </ul>

</div>
)

}