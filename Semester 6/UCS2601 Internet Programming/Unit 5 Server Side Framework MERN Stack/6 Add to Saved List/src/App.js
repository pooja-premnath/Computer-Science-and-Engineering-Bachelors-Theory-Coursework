import {useState} from 'react';


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

  

  //create use states for grocery items, searchitem and for savedlist

  const [items, setItems]= useState(groceryItems)
  const [searchTerm, setSearchTerm]= useState('')
  const [savedItems, setSavedItems]= useState([])


  const handleItemSearch = () =>{
    const filterItem= groceryItems.filter(mapVar => 
      mapVar.name.toLowerCase().indexOf(searchTerm.toLowerCase()) !== -1
    )

    setItems(filterItem)
  }


  const addToSavedList = (items) =>{
    setSavedItems([...savedItems,items])
  }


  return(
    <div>
      <input type="text" onChange={(e) =>{setSearchTerm(e.target.value)}} placeholder='Enter item'/>
      <button onClick={handleItemSearch}>Search</button>

      <ul>
        {items.map(mapVar =>(
          <li>Item Name: {mapVar.name}    Quantity:{mapVar.qty}   Price:{mapVar.cost}
          <button onClick={() => {addToSavedList(mapVar)}}>Save</button></li>
        ))}
      </ul>



      <h2>Saved Items</h2>
      <ul>
        {savedItems.map(mapVar =>(
          <li>Item Name: {mapVar.name}    Quantity:{mapVar.qty}   Price:{mapVar.cost}</li>
        ))}
      </ul>
    </div>
  )



}