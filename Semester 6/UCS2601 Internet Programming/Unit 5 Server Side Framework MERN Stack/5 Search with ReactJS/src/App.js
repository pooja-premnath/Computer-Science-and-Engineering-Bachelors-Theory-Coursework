import { useState } from "react";

export default function App(){

const groceryItems=[
  {id:1, name:"apple A", cost:5, qty: 100},
  {id:2, name:"apple B", cost:50, qty: 200},
  {id:3, name:"apple C", cost:500, qty: 300},
  {id:4, name:"orange A", cost:5, qty: 400},
  {id:5, name:"orange B", cost:50, qty: 600},
  {id:6, name:"orange C", cost:500, qty: 600},
  {id:7, name:"apple", cost:2, qty: 100},
]


const [items, setItems]= useState(groceryItems);
const [searchTerm, setSearchTerm]= useState('');

const handleSearch = () =>{
  const filteredItems= groceryItems.filter( mapVar => 
    mapVar.name.toLowerCase().indexOf(searchTerm.toLowerCase()) !== -1
  )

  setItems(filteredItems)
}

return(
  <div>
    <input type= "text" placeholder="Enter item " onChange={(e) => setSearchTerm(e.target.value)}/>
    <button onClick={handleSearch}>Search</button>
    <br></br>

    <h1>Search Results</h1>
    <ul>
      {items.map (mapVar =>(
       <li> Name: {mapVar.name} Quantity: {mapVar.qty} Cost: {mapVar.cost}</li>
      ))}
    </ul>
  </div>
)

}