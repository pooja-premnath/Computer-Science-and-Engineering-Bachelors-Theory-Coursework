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


//create useStates for items, search items, and for cart


const [items,setItems]=useState(groceryItems);
const [searchTerm, setSearchTerm]= useState('');
const [cartItems, setCartItems]=useState([])


const handleSearch = () =>{

  //filter all the grocery store items
  const filteredItems= groceryItems.filter(mapVar => 
    mapVar.name.toLowerCase().indexOf(searchTerm.toLowerCase()) !== -1
  )

  setItems(filteredItems);
}

const handleCart = (newItems) =>{
  //check if the grocery list has the item in stock
  if (newItems.qty <=0){return}

  //if the item is present, then decrease the quantity in the grocerylist
  const updatedGroceryList= items.map(mapVar => mapVar.id === newItems.id? {...mapVar, qty: mapVar.qty - 1}: mapVar)
  //update the grocery list
  setItems(updatedGroceryList)
  
  //check if the item is already in the cart
  const existingItemIndex= cartItems.findIndex( mapVar => mapVar.id === newItems.id)

  if (existingItemIndex !== -1){

    //update the qty in the cart
    const updatedCartItems= [...cartItems];
    updatedCartItems[existingItemIndex].qty+=1;
    setCartItems(updatedCartItems)

  }

  else{
    setCartItems([...cartItems, {...newItems, qty:1}])
  }

    


}


return (
  <div>
  <input placeholder='Enter item name' onChange={(e)=> setSearchTerm(e.target.value)}/>
  <button onClick= {handleSearch}>Search</button>
  <ul>
    {items.map(mapVar => (
      <li>Name: {mapVar.name}   Quantity: {mapVar.qty} Cost: {mapVar.cost}
      <button onClick= {() => handleCart(mapVar)}>Save</button></li>
    ))}
  </ul>


  <h2>Saved Items</h2>
  <ul>
    {cartItems.map(mapVar => (
      <li>Name: {mapVar.name}   Quantity: {mapVar.qty} Cost: {mapVar.cost} </li>
    ))}
  </ul>
  </div>
)

}